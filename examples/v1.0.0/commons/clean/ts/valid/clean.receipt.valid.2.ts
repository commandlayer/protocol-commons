// VALID clean.receipt #2

import type { CleanReceipt } from "./clean.receipt.valid.1";

export const cleanReceiptValid2: CleanReceipt = {
  x402: {
    verb: "clean",
    version: "1.0.0",
    request_id: "req-clean-2025-11-19-0004",
    network: "base"
  },
  trace: {
    trace_id: "trace-clean-0004",
    started_at: "2025-11-19T22:05:00Z",
    completed_at: "2025-11-19T22:05:01Z",
    duration_ms: 520,
    provider: "commandlayer-demo",
    region: "eu-west-1",
    model: "clean-adapter-002"
  },
  status: "success",
  result: {
    cleaned_content: "Normalized text with trailing whitespace stripped.",
    operations_applied: ["normalize_whitespace"]
  }
};
