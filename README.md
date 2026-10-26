# Discovery Call Analyser v2

An AI coach for B2B sales discovery calls. Add a conversation, and it:

- **Scores how well the lead was qualified** with **MEDDICC**, **BANT** or **SPICED**, quoting the conversation as evidence for every score
- **Flags what wasn't asked** and gives the exact questions to ask on the next call
- **Recommends a verdict** (Advance, Nurture or Disqualify) and next steps
- **Highlights the transcript**, tagging each quote with the element it supports
- **Drafts the follow-up email** to the buyer, ready to copy or open in your email app
- **Writes CRM notes**, ready to copy or export with your history as CSV
- **Saves a PDF report** of the scorecard, transcript, email and CRM notes
- **Tracks progress**: average score over time and the elements you miss most often

Conversations can be **pasted**, uploaded as a **.txt** file, uploaded as an **audio recording**, or **recorded in the browser**. Audio is transcribed on the user's own device, so recordings are never uploaded.

Version 1, built for my Business Analyst with Applied AI course, is at [discovery-call-analyser](https://github.com/Juliet6364/Discovery-call-analyser). This is a clean rebuild with audio input, three frameworks and a new design.

## What changed from v1

| Area | v1 | v2 |
|---|---|---|
| Input | Paste or .txt | Paste, .txt, audio file, or record in the browser |
| Frameworks | MEDDICC | MEDDICC, BANT, SPICED |
| AI output | JSON parsed from free text | Forced tool call with a JSON schema, then validated |
| Demo mode | Saved MEDDICC results for 5 calls | Saved results for 6 conversations in all 3 frameworks |
| Outputs | Scorecard, CRM notes | Adds highlighted transcript, follow-up email draft and PDF report |
| Progress | History table | History plus a dashboard: score trend and most-missed elements |
| Tests | None | Automated tests for validation, scoring bands and the API |

## How it works

```mermaid
flowchart LR
  A[Paste, .txt, audio file<br/>or browser recording] -->|audio only| W[Whisper speech-to-text<br/>runs in the browser]
  W --> B[Editable transcript]
  A --> B
  B -->|POST /api/analyze| C[Serverless function<br/>Vercel]
  C -->|framework rubric + JSON schema| D[Claude<br/>Anthropic API]
  D -->|record_analysis tool call| C
  C -->|validated scorecard| E[Web page: verdict, scores,<br/>questions, CRM notes, CSV]
```

1. **Audio** is decoded in the browser, split at quiet moments into one-minute parts, and transcribed by Whisper (`whisper-base.en`) running on the device with Transformers.js. The first run downloads about 80 MB of model files, which the browser then keeps. Whisper doesn't identify speakers, so the prompt tells Claude to work out who is the rep and who is the buyer, and the user can add names before analysing.
2. **The server** adds the chosen framework's rubric and forces Claude to answer through a `record_analysis` tool whose schema fixes the number of elements, the 0–2 score range and the three verdicts.
3. **Validation** (`validate()` in `api/analyze.js`) checks every field again before anything reaches the page, so a malformed response can't break it.

## Scoring

Each element is scored **0** (not covered), **1** (partly covered) or **2** (clearly established).

| Framework | Elements | Max | Best for |
|---|---|---|---|
| MEDDICC | Metrics, Economic buyer, Decision criteria, Decision process, Paper process, Identify pain, Champion, Competition | 16 | Enterprise deals with several approvers |
| BANT | Budget, Authority, Need, Timeline | 8 | Quick first-call checks |
| SPICED | Situation, Pain, Impact, Critical event, Decision | 10 | Value-led SaaS discovery |

Score bands use the share of the maximum so all three read the same way: under 40% weakly qualified, 40–74% needs work, 75% and above well qualified. For MEDDICC that is 0–6, 7–11 and 12–16, the same as v1.

**The score and the verdict measure different things.** The score shows how well the rep qualified the lead. The verdict shows whether the deal is worth pursuing. A well-run call can score high and still end in Disqualify.

## Practice conversations

Six role-plays for a fictional automation vendor, Nexora Automation. All companies and people are fictional.

| Buyer | Designed as | MEDDICC | BANT | SPICED | Verdict |
|---|---|---|---|---|---|
| CIO, auto components | Strong call | 15/16 | 8/8 | 9/10 | Advance |
| COO, logistics | Average call | 7/16 | 4/8 | 8/10 | Nurture |
| IT head, hospital chain | Mixed call | 9/16 | 6/8 | 8/10 | Nurture |
| IT director, NBFC | Weak call | 1/16 | 1/8 | 3/10 | Disqualify |
| CEO, D2C startup | Good call, poor fit | 10/16 | 7/8 | 8/10 | Disqualify |
| Finance controller, retail | WhatsApp chat | 9/16 | 4/8 | 8/10 | Nurture |

SPICED scores the average calls higher than MEDDICC because it doesn't ask about paperwork, champions or competitors. That difference is useful: it shows which framework a team's reps are actually following.

## Responsible use

- Use role-played calls, or calls where everyone has agreed to be recorded and reviewed. The page says so next to the Analyse button.
- Audio never leaves the device. Transcripts are sent to the AI only when the user clicks Analyse.
- No database: history is kept in the browser's local storage.
- The API key lives only in Vercel's environment settings.
- Every score has a quote, so a person can check it. The tool advises; a manager decides.

## Limitations

- Speech-to-text doesn't label speakers and can mishear names and numbers. Check the transcript before analysing.
- The first transcription needs a download of about 80 MB and works best in a recent desktop Chrome or Edge. Long recordings are slow on older phones. Recordings over 45 minutes are refused.
- AI scores can vary slightly between runs.
- History is per browser and doesn't sync between devices.

## Set up

1. Deploy this repository to Vercel (no build step; static files are in `public/`, the function in `api/`).
2. In the Vercel project, add the environment variable `ANTHROPIC_API_KEY`. Optionally set `CLAUDE_MODEL` (default `claude-sonnet-5-5`).
3. Without a key the site still works: practice conversations show saved results, and transcription works, but live analysis shows a message.

Run the tests with `npm test` (Node 18 or later, no dependencies).

## Files

```
api/analyze.js            Prompt, Claude API call, schema and validation
public/index.html         The web app
public/frameworks.js      MEDDICC, BANT and SPICED definitions, shared by page and API
public/samples.js         Practice conversations and saved results
public/transcribe-worker.js  In-browser speech-to-text
sample-transcripts/       The practice conversations as .txt files
test/analyze.test.js      Automated tests
```

Built by [Juliet Arambam](https://www.linkedin.com/in/juliet-arambam1).
