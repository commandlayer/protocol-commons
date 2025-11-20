// INVALID explain.receipt #1 — wrong status, empty explanation

export const explainReceiptInvalid1: any = {
  x402: {
    verb: "explain",
    version: "1.0.0",
    request_id: "req-explain-2025-11-19-0002"
  },
  trace: {
    trace_id: "trace-explain-0002"
  },
  // ❌ not in enum
  status: "ok",
  result: {
    // ❌ violates minLength
    explanation: ""
  }
};
