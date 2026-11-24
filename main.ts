// make.fun entry: "Make the AI Judge Laugh: Cat Reviews Its Human"
//
// A program/v1 entry. Running this file writes exactly one line — a funny
// one-star review written by a house cat about its human — to
// /output/entry.txt. No network, no randomness, no arguments: the same
// input always produces the same byte-for-byte output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review. Written fresh for this entry: a specific, recognisable
// complaint (the keyboard), a voice that measures the human by cat
// standards (MY keyboard, MY meeting), and a sting in the last words —
// the cat does not deny sending the email, it is only annoyed at being
// blamed for it.
const REVIEW =
  "One star. He sat on MY keyboard during MY meeting, then blamed ME for the email I sent to his boss.";

// The gate the entry must pass: UTF-8 text, 1-200 characters, not only
// whitespace, exactly one line, no trailing newline.
function checkLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
  // Confirm the text round-trips as UTF-8 without loss.
  if (Buffer.from(line, "utf8").toString("utf8") !== line) {
    throw new Error("entry is not clean UTF-8 text");
  }
}

function main(): void {
  checkLine(REVIEW);
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, REVIEW, "utf8");
  // Read it back and confirm what landed on disk is exactly the line we
  // validated — a silent truncation or newline would fail the gate.
  const written = readFileSync(outPath, "utf8");
  if (written !== REVIEW) {
    throw new Error("written entry does not match the validated line");
  }
  console.log(`wrote ${REVIEW.length} characters to ${outPath}`);
}

main();
