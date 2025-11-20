// VALID describe.receipt #2

import type { DescribeReceipt } from "./describe.receipt.valid.1";

export const describeReceiptValid2: DescribeReceipt = {
  x402: {
    verb: "describe",
    version: "1.0.0",
    request_id: "req-describe-2025-11-19-0004",
    network: "base"
  },
  trace: {
    trace_id: "trace-describe-0004",
    started_at: "2025-11-19T22:55:00Z",
    completed_at: "2025-11-19T22:55:01Z",
    duration_ms: 610,
    provider: "commandlayer-demo",
    region: "eu-west-1",
    model: "describe-medium-002"
  },
  status: "success",
  result: {
    description:
      "summarize.request is a schema that defines how agents ask for summarization of input content, including x402, actor, limits, channel, and input.",
    bullets: [
      "Captures summarization intent.",
      "Defines limits and channel semantics.",
      "Aligns with CommandLayer commons."
    ]
  }
};
