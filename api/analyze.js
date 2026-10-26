// Vercel serverless function: POST /api/analyze
// Body: { transcript: string, framework?: "MEDDICC" | "BANT" | "SPICED", source?: "call" | "chat" | "audio" }
// Sends the conversation to Claude with the chosen framework's rubric and returns a validated scorecard.
// Needs the environment variable ANTHROPIC_API_KEY. Optional: CLAUDE_MODEL.

const { FRAMEWORKS, CRM_FIELDS, VERDICTS } = require("../public/frameworks.js");

const MIN_CHARS = 80;
const MAX_CHARS = 60000;
const DEFAULT_MODEL = "claude-sonnet-5-5";

const SOURCES = {
  call: "a discovery call transcript",
  audio: "a discovery call transcript produced by automatic speech recognition",
  chat: "a written sales conversation (for example a WhatsApp, LinkedIn or email thread)"
};

function pickFramework(name) {
  const key = String(name || "").toUpperCase();
  return FRAMEWORKS[key] ? key : "MEDDICC";
}

function pickSource(s) {
  return SOURCES[s] ? s : "call";
}

function buildPrompt(transcript, frameworkKey, source) {
  const fw = FRAMEWORKS[frameworkKey];
  const defs = fw.elements.map((e, i) => `${i + 1}. ${e.name}: ${e.rubric}`).join("\n");
  const notes = {
    call: "",
    audio: `
This transcript came from speech recognition. It may have no speaker labels, misheard words, and no punctuation in places. Work out which lines are the sales rep and which are the buyer from context. Quote evidence as it appears in the transcript, and don't penalise the rep for transcription errors.`,
    chat: `
This is a written chat, not a call. Messages may be short and informal, with abbreviations, emojis, timestamps or forwarded text, and may span several days. Treat it as one sales conversation. A next meeting agreed in writing counts as a booked next step.`
  }[source];

  return `You are an experienced B2B sales coach reviewing ${SOURCES[source]} using the ${fw.name} qualification framework.${notes}

${fw.name} elements, in this exact order:
${defs}

Score each element on how well the rep established it: 0 = not covered, 1 = partly covered (mentioned but vague, assumed or unconfirmed), 2 = clearly established with specifics. Only credit what is actually in the text. A deal that turns out to be a poor fit can still score well if the rep qualified it thoroughly: the score measures the rep's qualification, not the deal.

Verdict on the deal: "Advance" if it is well qualified and a concrete next meeting is booked; "Nurture" if there is real pain but important gaps or no firm next step; "Disqualify" if there is no clear pain, budget or fit, or the conversation gives no basis to pursue it.

Also draft a short follow-up email from the rep to the buyer, written in the rep's voice: thank them, recap the key facts the buyer shared, and confirm the agreed next step, or propose one if none was booked. Under 160 words, no invented facts, signed with the rep's first name and company if they appear in the conversation.

Write in plain English. Keep the currency and units the speakers used. CRM fields are short factual notes; write "Not discussed" when something is unknown.
If the text is not a sales conversation, give every element 0 and say so in the summary.

Record the result with the record_analysis tool.

CONVERSATION:
"""
${transcript}
"""`;
}

function buildTool(frameworkKey) {
  const fw = FRAMEWORKS[frameworkKey];
  const str = (description) => ({ type: "string", description });
  const list = (description, min, max) => ({ type: "array", description, minItems: min, maxItems: max, items: { type: "string" } });
  return {
    name: "record_analysis",
    description: `Record the ${fw.name} analysis of the sales conversation.`,
    input_schema: {
      type: "object",
      required: ["summary", "verdict", "verdict_reason", "scores", "missed_questions", "next_steps", "strengths", "improve", "follow_up_email", "crm"],
      properties: {
        summary: str("Two sentences: who the prospect is and the situation."),
        verdict: { type: "string", enum: VERDICTS },
        verdict_reason: str("One sentence explaining the verdict."),
        scores: {
          type: "array",
          description: `Exactly ${fw.elements.length} items, one per element, in this order: ${fw.elements.map(e => e.name).join(", ")}.`,
          minItems: fw.elements.length,
          maxItems: fw.elements.length,
          items: {
            type: "object",
            required: ["element", "score", "evidence", "gap"],
            properties: {
              element: { type: "string", enum: fw.elements.map(e => e.name) },
              score: { type: "integer", enum: [0, 1, 2] },
              evidence: str("Short exact quote from the conversation, under 25 words, or an empty string if nothing applies."),
              gap: str("One sentence on what is missing or what to do next.")
            }
          }
        },
        missed_questions: list("4 to 6 specific questions the rep should ask next, worded as the rep would say them.", 2, 6),
        next_steps: list("3 or 4 concrete next actions for the rep.", 1, 4),
        strengths: list("2 or 3 things the rep did well.", 1, 3),
        improve: list("2 or 3 coaching points.", 1, 3),
        follow_up_email: {
          type: "object",
          required: ["subject", "body"],
          properties: { subject: str("Email subject line."), body: str("Email body with line breaks, under 160 words.") }
        },
        crm: {
          type: "object",
          required: CRM_FIELDS.map(([k]) => k),
          properties: Object.fromEntries(CRM_FIELDS.map(([k, label]) => [k, str(label)]))
        }
      }
    }
  };
}

// Checks the model's output against the fixed structure. Anything malformed is repaired or rejected,
// so a bad response can never break the page.
function validate(raw, frameworkKey) {
  if (!raw || typeof raw !== "object") return null;
  const fw = FRAMEWORKS[frameworkKey];
  const s = (x, n = 600) => (x == null ? "" : String(x)).trim().slice(0, n);
  const list = (x, max) => (Array.isArray(x) ? x.map(v => s(v, 300)).filter(Boolean).slice(0, max) : []);
  const rows = Array.isArray(raw.scores) ? raw.scores : [];
  if (rows.length < fw.elements.length) return null;

  const scores = fw.elements.map((el, i) => {
    const r = rows.find(x => x && x.element === el.name) || rows[i] || {};
    const n = Math.round(Number(r.score));
    return { key: el.key, score: n >= 2 ? 2 : n >= 1 ? 1 : 0, evidence: s(r.evidence, 300), gap: s(r.gap, 300) };
  });
  const mail = raw.follow_up_email && typeof raw.follow_up_email === "object" ? raw.follow_up_email : {};
  const crmIn = raw.crm && typeof raw.crm === "object" ? raw.crm : {};
  return {
    framework: frameworkKey,
    summary: s(raw.summary),
    verdict: VERDICTS.includes(raw.verdict) ? raw.verdict : "Nurture",
    verdict_reason: s(raw.verdict_reason),
    scores,
    total: scores.reduce((t, r) => t + r.score, 0),
    max: fw.elements.length * 2,
    missed_questions: list(raw.missed_questions, 6),
    next_steps: list(raw.next_steps, 4),
    strengths: list(raw.strengths, 3),
    improve: list(raw.improve, 3),
    follow_up_email: { subject: s(mail.subject, 200), body: s(mail.body, 2000) },
    crm: Object.fromEntries(CRM_FIELDS.map(([k]) => [k, s(crmIn[k], 400) || "Not discussed"]))
  };
}

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "no-store");
  res.end(JSON.stringify(body));
}

async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("allow", "POST");
    return send(res, 405, { code: "method_not_allowed", message: "Use POST." });
  }
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return send(res, 503, { code: "not_configured", message: "Live analysis isn't switched on for this site yet. Try a practice call to see a saved analysis." });
  }

  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch { body = {}; } }
  body = body || {};
  const transcript = String(body.transcript || "").trim();
  const framework = pickFramework(body.framework);
  const source = pickSource(body.source);

  if (transcript.length < MIN_CHARS) {
    return send(res, 400, { code: "too_short", message: "This conversation is too short to score. Add at least a few back-and-forth exchanges." });
  }
  if (transcript.length > MAX_CHARS) {
    return send(res, 413, { code: "too_long", message: `This conversation is over ${MAX_CHARS.toLocaleString("en-IN")} characters. Analyse a shorter section.` });
  }

  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({
        model: process.env.CLAUDE_MODEL || DEFAULT_MODEL,
        max_tokens: 4000,
        tools: [buildTool(framework)],
        tool_choice: { type: "tool", name: "record_analysis" },
        messages: [{ role: "user", content: buildPrompt(transcript, framework, source) }]
      })
    });
    if (r.status === 429) {
      return send(res, 429, { code: "rate_limited", message: "Too many analyses at once. Wait a minute and try again." });
    }
    if (!r.ok) {
      console.error("Anthropic API error", r.status, (await r.text()).slice(0, 500));
      return send(res, 502, { code: "upstream_error", message: "The AI service returned an error. Try again in a minute." });
    }
    const data = await r.json();
    const call = (data.content || []).find(c => c.type === "tool_use" && c.name === "record_analysis");
    const result = validate(call && call.input, framework);
    if (!result) {
      return send(res, 502, { code: "invalid_output", message: "The analysis came back incomplete. Run it again." });
    }
    return send(res, 200, { ...result, source });
  } catch (e) {
    console.error(e);
    return send(res, 502, { code: "upstream_error", message: "Couldn't reach the AI service. Check your connection and try again." });
  }
}

module.exports = handler;
module.exports.buildPrompt = buildPrompt;
module.exports.buildTool = buildTool;
module.exports.validate = validate;
