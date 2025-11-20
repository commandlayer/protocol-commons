// INVALID parse.request #2 — bad types and missing content

export const parseRequestInvalid2: any = {
  x402: {
    verb: "parse",
    version: "1.0.0",
    request_id: "req-parse-2025-11-19-0003"
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
    // ❌ content missing
    mode: "strict"
  }
};
