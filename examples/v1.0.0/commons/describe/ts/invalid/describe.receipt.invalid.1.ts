// INVALID describe.receipt #1 — wrong status, empty description

export const describeReceiptInvalid1: any = {
  x402: {
    verb: "describe",
    version: "1.0.0",
    request_id: "req-describe-2025-11-19-0002"
  },
  trace: {
    trace_id: "trace-describe-0002"
  },
  // ❌ not in enum
  status: "ok",
  result: {
    // ❌ violates minLength
    description: ""
  }
};
