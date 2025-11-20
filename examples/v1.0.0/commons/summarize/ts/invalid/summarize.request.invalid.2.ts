// INVALID summarize.request #2 — wrong limits + channel shape

export const summarizeRequestInvalid2: any = {
  x402: {
    verb: "summarize",
    version: "1.0.0",
    request_id: "req-summarize-2025-11-19-0003"
  },
  actor: "did:example:caller-003",
  limits: {
    // ❌ Schema expects max_output_tokens (integer); here it's wrong type
    max_output_tokens: "512"
  },
  channel: {
    // ❌ Missing required input_modalities/output_modalities
    protocol: "https",
    mode: "sync"
  },
  input: {
    content: "This may look okay but limits/channel violate the schema."
  }
};
