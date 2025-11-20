// INVALID fetch.receipt #2 — missing result

export const fetchReceiptInvalid2: any = {
  x402: {
    verb: "fetch",
    version: "1.0.0",
    request_id: "req-fetch-2025-11-19-0005"
  },
  trace: {
    trace_id: "trace-fetch-0005"
  },
  // ❌ status 'success' but no result
  status: "success"
};
