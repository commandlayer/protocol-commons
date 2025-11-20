// VALID parse.receipt #2

import type { ParseReceipt } from "./parse.receipt.valid.1";

export const parseReceiptValid2: ParseReceipt = {
  x402: {
    verb: "parse",
    version: "1.0.0",
    request_id: "req-parse-2025-11-19-0004",
    network: "base"
  },
  trace: {
    trace_id: "trace-parse-0004",
    started_at: "2025-11-19T23:45:00Z",
    completed_at: "2025-11-19T23:45:01Z",
    duration_ms: 540,
    provider: "commandlayer-demo",
    region: "eu-west-1",
    model: "parse-adapter-002"
  },
  status: "success",
  result: {
    parsed: {
      order_id: 9876,
      user: "bob.eth",
      total_amount: 42,
      currency: "USD",
      status: "paid"
    },
    target_schema: "https://example.com/schemas/order.v2.json",
    confidence: 0.9
  }
};
