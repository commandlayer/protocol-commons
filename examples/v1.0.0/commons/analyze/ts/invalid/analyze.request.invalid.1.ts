// INVALID analyze.request #1 — wrong verb + wrong input type

export const analyzeRequestInvalid1: any = {
  x402: {
    verb: "analyze",
    version: "1.0.0"
  },
  // ❌ input should be a string
  input: {
    content: "This should be a string, not an object."
  }
};
