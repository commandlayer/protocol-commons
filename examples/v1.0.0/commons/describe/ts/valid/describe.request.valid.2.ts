// VALID describe.request #2

import type { DescribeRequest } from "./describe.request.valid.1";

export const describeRequestValid2: DescribeRequest = {
  x402: {
    verb: "describe",
    version: "1.0.0",
    request_id: "req-describe-2025-11-19-0002",
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
    subject: "summarize.request schema",
    context:
      "Part of the CommandLayer Commons set, used to request summarization.",
    detail_level: "short",
    audience: "sdk-implementer"
  }
};
