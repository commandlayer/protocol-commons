// VALID convert.request #2

import type { ConvertRequest } from "./convert.request.valid.1";

export const convertRequestValid2: ConvertRequest = {
  x402: {
    verb: "convert",
    version: "1.0.0",
    request_id: "req-convert-2025-11-19-0002",
    network: "base"
  },
  actor: "did:example:caller-002",
  limits: {
    max_output_tokens: 4096
  },
  channel: {
    protocol: "wss",
    input_modalities: ["text"],
    output_modalities: ["text"]
  },
  input: {
    content: "{ \"title\": \"CommandLayer\", \"description\": \"Canonical verbs for agents.\" }",
    source_format: "json",
    target_format: "yaml"
  }
};
