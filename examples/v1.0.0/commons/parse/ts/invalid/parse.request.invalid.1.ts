// INVALID parse.request #1 — wrong verb, missing required fields

export const parseRequestInvalid1: any = {
  x402: {
    verb: "summarize",
    version: "1.0.0"
  },
  // ❌ missing actor, limits, channel
  input: {
    content: "Looks plausible but envelope and required fields are wrong."
  }
};
