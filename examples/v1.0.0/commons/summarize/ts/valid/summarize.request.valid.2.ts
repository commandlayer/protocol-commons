// VALID summarize.request #2 — same schema, different data

import type {
  SummarizeRequest
} from "./summarize.request.valid.1";

export const summarizeRequestValid2: SummarizeRequest = {
  x402: {
    verb: "summarize",
    version: "1.0.0",
    request_id: "req-summarize-2025-11-19-0002",
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
      "Summarize the current state of the CommandLayer commons, focusing on verb coverage and launch readiness."
  }
};
