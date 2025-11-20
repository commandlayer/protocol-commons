// VALID explain.receipt #2

import type { ExplainReceipt } from "./explain.receipt.valid.1";

export const explainReceiptValid2: ExplainReceipt = {
  x402: {
    verb: "explain",
    version: "1.0.0",
    request_id: "req-explain-2025-11-19-0004",
    network: "base"
  },
  trace: {
    trace_id: "trace-explain-0004",
    started_at: "2025-11-19T23:15:00Z",
    completed_at: "2025-11-19T23:15:01Z",
    duration_ms: 590,
    provider: "commandlayer-demo",
    region: "eu-west-1",
    model: "explain-medium-002"
  },
  status: "success",
  result: {
    explanation:
      "summarize.receipt is the schema used to capture the output of a summarization operation, including x402 metadata, trace information, status, and the summary payload.",
    summary: "summarize.receipt records how a summarize call completed and what summary it produced."
  }
};
