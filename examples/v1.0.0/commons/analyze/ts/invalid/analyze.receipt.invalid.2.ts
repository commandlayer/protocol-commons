// INVALID analyze.receipt #2 — missing trace + result

export const analyzeReceiptInvalid2: any = {
  x402: {
    verb: "analyze",
    version: "1.0.0"
  },
  // ❌ Missing trace
  // ❌ Missing result when status='success'
  status: "success"
};
