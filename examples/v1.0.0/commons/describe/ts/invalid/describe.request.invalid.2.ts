// INVALID describe.request #2 — bad input type and missing subject

export const describeRequestInvalid2: any = {
  x402: {
    verb: "describe",
    version: "1.0.0",
    request_id: "req-describe-2025-11-19-0003"
  },
  actor: "did:example:caller-003",
  limits: {
    max_output_tokens: "512" // ❌ should be integer
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
