// INVALID format.request #2 — bad types and missing target_style

export const formatRequestInvalid2: any = {
  x402: {
    verb: "format",
    version: "1.0.0",
    request_id: "req-format-2025-11-19-0003"
  },
  actor: "did:example:caller-003",
  limits: {
    // ❌ should be integer
    max_output_tokens: "512"
  },
  channel: {
    protocol: "https",
    input_modalities: [],
    output_modalities: []
  },
  input: {
    // ❌ content must be non-empty string, target_style missing
    content: ""
  }
};
