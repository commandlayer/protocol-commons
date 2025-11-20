// INVALID clean.request #1 — wrong verb, missing required fields

export const cleanRequestInvalid1: any = {
  x402: {
    verb: "summarize",
    version: "1.0.0"
  },
  // ❌ Missing actor, limits, channel
  input: {
    content: "This looks okay but required envelope fields are missing."
  }
};
