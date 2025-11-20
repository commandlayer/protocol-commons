// VALID clean.request #2

import type {
  CleanRequest
} from "./clean.request.valid.1";

export const cleanRequestValid2: CleanRequest = {
  x402: {
    verb: "clean",
    version: "1.0.0",
    request_id: "req-clean-2025-11-19-0002",
    network: "base"
  },
  actor: "did:example:caller-002",
  limits: {
    max_output_tokens: 512
  },
  channel: {
    protocol: "wss",
    input_modalities: ["text"],
    output_modalities: ["text"]
  },
  input: {
    content: "Clean this markdown of trailing whitespace and double spaces.",
    operations: ["normalize_whitespace"]
  }
};
