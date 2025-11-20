// VALID format.receipt #2

import type { FormatReceipt } from "./format.receipt.valid.1";

export const formatReceiptValid2: FormatReceipt = {
  x402: {
    verb: "format",
    version: "1.0.0",
    request_id: "req-format-2025-11-19-0004",
    network: "base"
  },
  trace: {
    trace_id: "trace-format-0004",
    started_at: "2025-11-19T23:30:00Z",
    completed_at: "2025-11-19T23:30:01Z",
    duration_ms: 480,
    provider: "commandlayer-demo",
    region: "eu-west-1",
    model: "format-adapter-002"
  },
  status: "success",
  result: {
    formatted_content:
      "# CommandLayer\n\nCanonical verbs and schemas for agents.\n",
    style: "markdown-heading",
    original_length: 96,
    formatted_length: 82
  }
};
