// INVALID format.request #1 — wrong verb, missing required fields

export const formatRequestInvalid1: any = {
  x402: {
    verb: "summarize",
    version: "1.0.0"
  },
  // ❌ Missing actor, limits, channel
  input: {
    content: "Looks okay but envelope and required fields are wrong.",
    target_style: "markdown-bullets"
  }
};
