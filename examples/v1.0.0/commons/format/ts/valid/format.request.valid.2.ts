// VALID format.request #2

import type { FormatRequest } from "./format.request.valid.1";

export const formatRequestValid2: FormatRequest = {
  x402: {
    verb: "format",
    version: "1.0.0",
    request_id: "req-format-2025-11-19-0002",
    network: "base"
  },
  actor: "did:example:caller-002",
  limits: {
    max_output_tokens: 256
  },
  channel: {
    protocol: "wss",
    input_modalities: ["text"],
    output_modalities: ["text"]
  },
  input: {
    content:
      "Title: CommandLayer\nDescription: Canonical verbs and schemas for agents.",
    source_style: "plain",
    target_style: "markdown-heading",
    guidelines: {
      include_description_paragraph: true
    }
  }
};
