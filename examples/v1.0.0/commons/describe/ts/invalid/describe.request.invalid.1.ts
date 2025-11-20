// INVALID describe.request #1 — wrong verb, missing required fields

export const describeRequestInvalid1: any = {
  x402: {
    verb: "summarize",
    version: "1.0.0"
  },
  // ❌ missing actor, limits, channel
  input: "This should be an object, not a string."
};
