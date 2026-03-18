// VALID analyze.request #2 — alternate minimal, schema-accurate example

import type { AnalyzeRequest, AnalyzeMode } from "./analyze.request.valid.1";

const mode: AnalyzeMode = "score";

export const analyzeRequestValid2: AnalyzeRequest = {
  "verb": "analyze",
  "version": "1.1.0",
  "input": "Assess the following roadmap update and score operational risk based on stated blockers and dependencies.",
  "mode": "score"
};
