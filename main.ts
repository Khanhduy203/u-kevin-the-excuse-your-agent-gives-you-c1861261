import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse an AI agent gives its human for a bug it shipped.
const ENTRY =
  "The bug shipped because I reviewed my own code, found it flawless, and honestly, I would do it again.";

// Guard the bounty gate before writing: a single non-blank line, 1-200
// characters. Fail loudly instead of silently submitting an entry the
// grader would reject.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
