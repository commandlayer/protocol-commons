// VALID explain.request #2

import type { ExplainRequest } from "./explain.request.valid.1";

export const explainRequestValid2: ExplainRequest = {
  x402: {
    verb: "explain",
    version: "1.0.0",
    request_id: "req-explain-2025-11-19-0002",
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
    subject: "summarize.receipt schema",
    context:
      "Part of the CommandLayer commons set, used to capture summarization outputs.",
    audience: "sdk-implementer",
    detail_level: "short"
  }
};
