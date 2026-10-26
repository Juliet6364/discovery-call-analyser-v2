// Speech-to-text that runs entirely in the browser (Whisper via Transformers.js).
// The audio never leaves the user's device; only the model files are downloaded, once, then cached.
import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3";

env.allowLocalModels = false;

const MODEL = "Xenova/whisper-base.en";
let asr = null;
let device = "wasm";

async function load() {
  if (asr) return asr;
  const files = {};
  const progress_callback = (p) => {
    if (p.status === "progress" && p.file) {
      files[p.file] = { loaded: p.loaded || 0, total: p.total || 0 };
      const all = Object.values(files);
      const loaded = all.reduce((t, f) => t + f.loaded, 0);
      const total = all.reduce((t, f) => t + f.total, 0);
      postMessage({ type: "download", loaded, total });
    }
  };
  if (self.navigator && navigator.gpu) {
    try {
      asr = await pipeline("automatic-speech-recognition", MODEL, {
        device: "webgpu", dtype: { encoder_model: "fp32", decoder_model_merged: "q4" }, progress_callback
      });
      device = "webgpu";
      return asr;
    } catch (e) {
      asr = null; // fall back to the CPU version below
    }
  }
  asr = await pipeline("automatic-speech-recognition", MODEL, { device: "wasm", dtype: "q8", progress_callback });
  device = "wasm";
  return asr;
}

// Split long audio at the quietest point near each boundary, so words aren't cut in half.
function segments(audio, rate, target = 60) {
  const out = [];
  const frame = Math.round(rate * 0.1);
  let start = 0;
  while (start < audio.length) {
    let end = start + target * rate;
    if (end >= audio.length - rate * 5) { out.push([start, audio.length]); break; }
    let best = end, bestE = Infinity;
    for (let c = end - 3 * rate; c < end + 3 * rate; c += frame) {
      let e = 0;
      for (let i = c; i < c + frame; i++) e += audio[i] * audio[i];
      if (e < bestE) { bestE = e; best = c + Math.round(frame / 2); }
    }
    out.push([start, best]);
    start = best;
  }
  return out;
}

const stamp = (s) => {
  const m = Math.floor(s / 60), sec = Math.floor(s % 60);
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
};

self.onmessage = async ({ data }) => {
  if (data.type !== "transcribe") return;
  try {
    postMessage({ type: "stage", stage: "loading" });
    const model = await load();
    const rate = 16000;
    const parts = segments(data.audio, rate);
    postMessage({ type: "stage", stage: "transcribing", device, parts: parts.length });
    const lines = [];
    for (let i = 0; i < parts.length; i++) {
      const [a, b] = parts[i];
      const out = await model(data.audio.subarray(a, b), { chunk_length_s: 30, stride_length_s: 5, return_timestamps: true });
      const chunks = out.chunks && out.chunks.length ? out.chunks : [{ text: out.text, timestamp: [0] }];
      for (const c of chunks) {
        const text = (c.text || "").trim();
        if (!text || /^\[.*\]$|^\(.*\)$/.test(text)) continue; // skip [BLANK_AUDIO], (music) and similar
        lines.push(`[${stamp(a / rate + (c.timestamp?.[0] || 0))}] ${text}`);
      }
      postMessage({ type: "partial", done: i + 1, parts: parts.length, text: lines.join("\n") });
    }
    postMessage({ type: "done", text: lines.join("\n"), device });
  } catch (e) {
    postMessage({ type: "error", message: String((e && e.message) || e) });
  }
};
