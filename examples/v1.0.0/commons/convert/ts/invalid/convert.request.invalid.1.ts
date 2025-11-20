// INVALID convert.request #1 — wrong verb, missing required fields

export const convertRequestInvalid1: any = {
  x402: {
    verb: "summarize",
    version: "1.0.0"
  },
  input: {
    content: "<p>Missing actor, limits, and channel; wrong verb.</p>",
    source_format: "html",
    target_format: "markdown"
  }
};
