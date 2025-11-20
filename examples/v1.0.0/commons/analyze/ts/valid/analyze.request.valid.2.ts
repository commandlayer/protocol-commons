// VALID analyze.request #2 — same schema, different data

import type { AnalyzeRequest } from "./analyze.request.valid.1";

export const analyzeRequestValid2: AnalyzeRequest = {
  x402: {
    verb: "analyze",
    version: "1.0.0",
    request_id: "req-analyze-2025-11-19-0002",
    network: "base"
  },
  input:
    "Analyze this technical spec and highlight schema risks, ambiguous fields, and potential validation pitfalls.",
  goal: "Find schema-level risks and incompatibilities.",
  hints: ["Pay attention to allOf and additionalProperties usage."],
  limits: {
    max_tokens: 256
  }
};
