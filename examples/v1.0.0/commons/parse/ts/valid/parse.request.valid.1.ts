// VALID parse.request #1

export interface X402ParseRequestEnvelope {
  verb: "parse";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface ParseLimits {
  max_output_tokens?: number;
  timeout_ms?: number;
}

export interface ParseChannel {
  protocol: string;
  input_modalities: string[];
  output_modalities: string[];
}

export interface ParseInput {
  content: string;
  content_type?: string;
  target_schema?: string;
  mode?: "strict" | "best_effort";
}

export interface ParseRequest {
  x402: X402ParseRequestEnvelope;
  actor: string;
  limits: ParseLimits;
  channel: ParseChannel;
  input: ParseInput;
}

export const parseRequestValid1: ParseRequest = {
  x402: {
    verb: "parse",
    version: "1.0.0",
    request_id: "req-parse-2025-11-19-0001"
  },
  actor: "did:example:caller-001",
  limits: {
    max_output_tokens: 2048,
    timeout_ms: 8000
  },
  channel: {
    protocol: "https",
    input_modalities: ["text"],
    output_modalities: ["json"]
  },
  input: {
    content:
      "order_id: 12345\nuser: alice.eth\ntotal: 99.50 USD\nstatus: paid",
    content_type: "plain",
    target_schema: "https://example.com/schemas/order.v1.json",
    mode: "best_effort"
  }
};
