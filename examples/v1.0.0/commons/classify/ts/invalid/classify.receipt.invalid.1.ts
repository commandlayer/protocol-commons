// INVALID classify.receipt #1

export const classifyReceiptInvalid1: any = {
  x402: {
    verb: "classify",
    version: "1.0.0",
    request_id: "req-classify-2025-11-19-0002"
  },
  trace: {
    trace_id: "trace-classify-0002"
  },
  // ❌ status not in enum
  status: "ok",
  // ❌ result.labels likely breaks constraints in your schema
  result: {
    labels: []
  }
};
