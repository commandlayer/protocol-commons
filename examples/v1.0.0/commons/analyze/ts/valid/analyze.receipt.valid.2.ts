// VALID analyze.receipt #2 — same schema, different data

import type { AnalyzeReceipt } from "./analyze.receipt.valid.1";

export const analyzeReceiptValid2: AnalyzeReceipt = {
  x402: {
    verb: "analyze",
    version: "1.0.0",
    request_id: "req-analyze-2025-11-19-0003"
  },
  trace: {
    trace_id: "trace-analyze-0003",
    started_at: "2025-11-19T20:40:00Z",
    completed_at: "2025-11-19T20:40:01Z",
    duration_ms: 880,
    provider: "commandlayer-demo",
    region: "eu-west-1",
    model: "analyze-medium-001",
    tags: ["analyze", "example", "alt"]
  },
  status: "success",
  result: {
    summary:
      "Analysis highlights minor documentation gaps and recommends clarifying schema ownership and versioning guarantees.",
    insights: ["Clarify schema stewardship in README.", "Document versioning policy."],
    labels: ["docs:improvable"]
  }
};
