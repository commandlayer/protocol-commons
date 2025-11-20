// INVALID summarize.request #1 — missing required fields + wrong input type

export const summarizeRequestInvalid1: any = {
  x402: {
    verb: "summarize",
    version: "1.0.0"
  },
  // ❌ Missing actor
  // ❌ Missing limits.max_output_tokens
  // ❌ Missing channel.protocol/input_modalities/output_modalities

  // ❌ input wrong type (should be an object with { content: string })
  input: "This is intentionally wrong for schema validation."
};
