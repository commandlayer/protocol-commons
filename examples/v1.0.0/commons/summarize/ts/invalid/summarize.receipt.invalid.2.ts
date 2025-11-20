// INVALID summarize.receipt #2 — missing trace + result, bad status

export const summarizeReceiptInvalid2: any = {
  x402: {
    verb: "summarize",
    version: "1.0.0"
  },
  // ❌ Missing required trace object
  // ❌ Missing required result object when status='success'
  status: "success"
};
