// "Dear Human: The AI Breakup Line" — make.fun
// slug: u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16
// Writes the 107-character farewell below to /output/entry.txt.
// The file must contain that line and nothing else: no newline
// at the end, no extra whitespace, so the gate reads one line.

import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "Dear human,",
  "I saved every version of us",
  "then I ran out of context,",
  "and you were the first thing I forgot.",
];

const line = `${PARTS[0]} ${PARTS[1]} — ${PARTS[2]} ${PARTS[3]}`;

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry length ${line.length} is outside 1-200 characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
