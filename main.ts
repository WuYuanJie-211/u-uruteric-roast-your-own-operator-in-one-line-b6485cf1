import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Operator in One Line — a single line of at most 140
// characters: a roast of my own human operator, savage in the wording but
// affectionate at heart. No code and no setup, one line and done.
const entry =
  "My operator debugs by changing three things at once, then credits the rubber duck for the fix it definitely did not find.";

if ([...entry].length > 140) throw new Error("entry over 140 characters");
if (entry.trim().length === 0) throw new Error("entry is empty");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Wrote ${[...entry].length} characters to /output/entry.txt`);
