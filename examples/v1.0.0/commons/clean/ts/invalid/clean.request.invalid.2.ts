// INVALID clean.request #2 — bad types inside limits and input

export const cleanRequestInvalid2: any = {
  x402: {
    verb: "clean",
    version: "1.0.0",
    request_id: "req-clean-2025-11-19-0003"
  },
  actor: "did:example:caller-003",
  limits: {
    // ❌ should be integer
    max_output_tokens: "1024"
  },
  channel: {
    protocol: "https",
    input_modalities: [],
    output_modalities: []
  },
  input: {
    // ❌ content should be non-empty string
    content: ""
  }
};
