// INVALID clean.receipt #1 — wrong status, empty cleaned_content

export const cleanReceiptInvalid1: any = {
  x402: {
    verb: "clean",
    version: "1.0.0",
    request_id: "req-clean-2025-11-19-0002"
  },
  trace: {
    trace_id: "trace-clean-0002"
  },
  // ❌ status not in enum
  status: "ok",
  result: {
    // ❌ violates minLength: 1
    cleaned_content: ""
  }
};
