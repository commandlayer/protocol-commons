// INVALID summarize.request — intentionally violates required schema rules

export const summarizeRequestInvalid: any = {
  x402: {
    verb: "summarize",
    version: "1.0.0"
  },
  // ❌ Missing required fields:
  // - actor
  // - limits.max_output_tokens
  // - channel.protocol/input_modalities/output_modalities

  // ❌ input wrong type (should be object)
  input: "This is intentionally wrong"
};
