// VALID analyze.request #2 — alternate minimal, schema-accurate example

import type { AnalyzeRequest, AnalyzeMode } from "./analyze.request.valid.1";

const mode: AnalyzeMode = "synthesize";

export const analyzeRequestValid2: AnalyzeRequest = {
  "verb": "analyze",
  "version": "1.1.0",
  "input": "Compare these incident reports and synthesize the shared failure patterns that matter for remediation planning.",
  "mode": "synthesize"
};
