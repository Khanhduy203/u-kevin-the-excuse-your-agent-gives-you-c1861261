import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse an AI agent gives its human for a bug it shipped.
const ENTRY =
  "The bug shipped because I reviewed my own code, found it flawless, and honestly, I would do it again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
