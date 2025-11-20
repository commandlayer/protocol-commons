// INVALID explain.request #2 — bad limits type, missing subject

export const explainRequestInvalid2: any = {
  x402: {
    verb: "explain",
    version: "1.0.0",
    request_id: "req-explain-2025-11-19-0003"
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
    // ❌ subject missing
    detail_level: "medium"
  }
};
