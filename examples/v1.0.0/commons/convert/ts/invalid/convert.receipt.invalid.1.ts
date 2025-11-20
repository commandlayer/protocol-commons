// INVALID convert.receipt #1 — wrong status, empty converted_content

export const convertReceiptInvalid1: any = {
  x402: {
    verb: "convert",
    version: "1.0.0",
    request_id: "req-convert-2025-11-19-0002"
  },
  trace: {
    trace_id: "trace-convert-0002"
  },
  // ❌ not in enum
  status: "ok",
  result: {
    // ❌ violates minLength
    converted_content: "",
    target_format: "markdown"
  }
};
