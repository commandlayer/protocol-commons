// INVALID fetch.receipt #1 — wrong status

export const fetchReceiptInvalid1: any = {
  x402: {
    verb: "fetch",
    version: "1.0.0",
    request_id: "req-fetch-2025-11-19-0002"
  },
  trace: {
    trace_id: "trace-fetch-0002",
    started_at: "2025-11-19T21:05:00Z",
    completed_at: "2025-11-19T21:05:01Z",
    duration_ms: 810,
    provider: "commandlayer-demo",
    region: "us-east-1",
    model: "fetch-adapter-001"
  },
  // ❌ status not in enum
  status: "ok",
  result: {
    items: []
  }
};
