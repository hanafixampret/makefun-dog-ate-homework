import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I didn't eat your homework. I graded it first. It failed, so I ate the evidence.";

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-whitespace chars, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
