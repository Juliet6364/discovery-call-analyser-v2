// Run with: npm test
const test = require("node:test");
const assert = require("node:assert");
const handler = require("../api/analyze.js");
const { validate, buildTool, buildPrompt } = handler;
const { FRAMEWORKS, band } = require("../public/frameworks.js");

const good = (fw) => ({
  summary: "s", verdict: "Advance", verdict_reason: "r",
  scores: FRAMEWORKS[fw].elements.map(e => ({ element: e.name, score: 2, evidence: "q", gap: "g" })),
  missed_questions: ["a", "b"], next_steps: ["x"], strengths: ["y"], improve: ["z"],
  crm: { company: "Acme" }
});

function fakeRes() {
  return { statusCode: 0, headers: {}, body: null,
    setHeader(k, v) { this.headers[k] = v; }, end(b) { this.body = JSON.parse(b); } };
}

test("every framework has a tool schema with the right element count", () => {
  for (const k of Object.keys(FRAMEWORKS)) {
    const t = buildTool(k);
    assert.equal(t.input_schema.properties.scores.minItems, FRAMEWORKS[k].elements.length);
    assert.match(buildPrompt("hello", k, "audio"), /speech recognition/);
  }
});

test("validate keeps good output and totals it", () => {
  const r = validate(good("BANT"), "BANT");
  assert.equal(r.total, 8); assert.equal(r.max, 8);
  assert.equal(r.crm.company, "Acme"); assert.equal(r.crm.budget, "Not discussed");
});

test("validate clamps bad scores and verdicts", () => {
  const raw = good("SPICED");
  raw.scores[0].score = 7; raw.scores[1].score = -3; raw.scores[2].score = "1"; raw.verdict = "Maybe";
  const r = validate(raw, "SPICED");
  assert.deepEqual(r.scores.slice(0, 3).map(s => s.score), [2, 0, 1]);
  assert.equal(r.verdict, "Nurture");
});

test("validate rejects missing elements", () => {
  const raw = good("MEDDICC"); raw.scores.pop();
  assert.equal(validate(raw, "MEDDICC"), null);
  assert.equal(validate(null, "MEDDICC"), null);
});

test("bands match the original MEDDICC cut-offs", () => {
  assert.equal(band(6, 16).id, "weak"); assert.equal(band(7, 16).id, "mid");
  assert.equal(band(11, 16).id, "mid"); assert.equal(band(12, 16).id, "strong");
});

test("handler: demo mode, short input, and a full round trip", async () => {
  delete process.env.ANTHROPIC_API_KEY;
  let res = fakeRes();
  await handler({ method: "POST", body: { transcript: "x".repeat(100) } }, res);
  assert.equal(res.statusCode, 503);

  process.env.ANTHROPIC_API_KEY = "test";
  res = fakeRes();
  await handler({ method: "POST", body: { transcript: "hi" } }, res);
  assert.equal(res.body.code, "too_short");

  let sent;
  global.fetch = async (url, opts) => {
    sent = JSON.parse(opts.body);
    return { ok: true, status: 200, json: async () => ({ content: [{ type: "tool_use", name: "record_analysis", input: good("BANT") }] }) };
  };
  res = fakeRes();
  await handler({ method: "POST", body: JSON.stringify({ transcript: "Rep: hello ".repeat(20), framework: "bant", source: "audio" }) }, res);
  assert.equal(res.statusCode, 200);
  assert.equal(res.body.framework, "BANT"); assert.equal(res.body.source, "audio");
  assert.equal(sent.tool_choice.name, "record_analysis");
});
