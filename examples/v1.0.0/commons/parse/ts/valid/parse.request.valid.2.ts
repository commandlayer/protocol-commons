// VALID parse.request #2

import type { ParseRequest } from "./parse.request.valid.1";

export const parseRequestValid2: ParseRequest = {
  x402: {
    verb: "parse",
    version: "1.0.0",
    request_id: "req-parse-2025-11-19-0002",
    network: "base"
  },
  actor: "did:example:caller-002",
  limits: {
    max_output_tokens: 4096
  },
  channel: {
    protocol: "wss",
    input_modalities: ["text"],
    output_modalities: ["json"]
  },
  input: {
    content: "{ \"order_id\": 9876, \"user\": \"bob.eth\", \"total\": \"42.00 USD\" }",
    content_type: "json",
    target_schema: "https://example.com/schemas/order.v2.json",
    mode: "strict"
  }
};
