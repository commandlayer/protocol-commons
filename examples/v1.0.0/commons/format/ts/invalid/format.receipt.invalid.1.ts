// INVALID format.receipt #1 — wrong status, empty formatted_content

export const formatReceiptInvalid1: any = {
  x402: {
    verb: "format",
    version: "1.0.0",
    request_id: "req-format-2025-11-19-0002"
  },
  trace: {
    trace_id: "trace-format-0002"
  },
  // ❌ not in enum
  status: "ok",
  result: {
    // ❌ violates minLength
    formatted_content: ""
  }
};
