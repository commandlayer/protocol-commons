// VALID fetch.receipt #2 — same schema, different data

import type { FetchReceipt } from "./fetch.receipt.valid.1";

export const fetchReceiptValid2: FetchReceipt = {
  x402: {
    verb: "fetch",
    version: "1.0.0",
    request_id: "req-fetch-2025-11-19-0004",
    network: "base"
  },
  trace: {
    trace_id: "trace-fetch-0004",
    started_at: "2025-11-19T21:10:00Z",
    completed_at: "2025-11-19T21:10:01Z",
    duration_ms: 650,
    provider: "commandlayer-demo",
    region: "eu-west-1",
    model: "fetch-adapter-002"
  },
  status: "success",
  result: {
    items: []
  }
};
