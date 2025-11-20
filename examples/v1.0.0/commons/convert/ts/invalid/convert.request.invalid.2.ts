// INVALID convert.request #2 — bad types inside limits and input

export const convertRequestInvalid2: any = {
  x402: {
    verb: "convert",
    version: "1.0.0",
    request_id: "req-convert-2025-11-19-0003"
  },
  actor: "did:example:caller-003",
  limits: {
    // ❌ should be integer
    max_output_tokens: "2048"
  },
  channel: {
    protocol: "https",
    input_modalities: [],
    output_modalities: []
  },
  input: {
    // ❌ content must be non-empty
    content: "",
    source_format: "html",
    target_format: "markdown"
  }
};
