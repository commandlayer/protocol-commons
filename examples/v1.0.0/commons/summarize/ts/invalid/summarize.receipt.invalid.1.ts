// INVALID summarize.receipt #1 — wrong status + empty summary

export const summarizeReceiptInvalid1: any = {
  x402: {
    verb: "summarize",
    version: "1.0.0",
    request_id: "req-summarize-2025-11-19-0002"
  },
  trace: {
    trace_id: "trace-summarize-0002",
    started_at: "2025-11-19T19:50:00Z",
    completed_at: "2025-11-19T19:50:01Z",
    duration_ms: 940,
    provider: "commandlayer-demo",
    region: "us-east-1",
    model: "summarize-large-001"
  },
  // ❌ status is not one of "success" | "error" | "delegated"
  status: "ok",
  result: {
    // ❌ summary should not be empty (minLength: 1)
    summary: "",
    format: "markdown",
    compression_ratio: 3.2
  }
};
