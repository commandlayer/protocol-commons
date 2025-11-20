// INVALID classify.request #1

export const classifyRequestInvalid1: any = {
  x402: {
    verb: "summarize",
    version: "1.0.0"
  },
  // ❌ input should be a string
  input: {
    text: "This should be a string, not an object."
  }
};
