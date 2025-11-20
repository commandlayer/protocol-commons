// INVALID parse.receipt #1 — wrong status, empty parsed object

export const parseReceiptInvalid1: any = {
  x402: {
    verb: "parse",
    version: "1.0.0",
    request_id: "req-parse-2025-11-19-0002"
  },
  trace: {
    trace_id: "trace-parse-0002"
  },
  // ❌ not in enum
  status: "ok",
  result: {
    parsed: {}
  }
};
