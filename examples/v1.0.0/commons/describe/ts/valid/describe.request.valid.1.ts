// VALID describe.request #1

export interface X402DescribeRequestEnvelope {
  verb: "describe";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface DescribeLimits {
  max_output_tokens?: number;
  timeout_ms?: number;
}

export interface DescribeChannel {
  protocol: string;
  input_modalities: string[];
  output_modalities: string[];
}

export interface DescribeInput {
  subject: string;
  context?: string;
  detail_level?: "short" | "medium" | "long";
  audience?: string;
}

export interface DescribeRequest {
  x402: X402DescribeRequestEnvelope;
  actor: string;
  limits: DescribeLimits;
  channel: DescribeChannel;
  input: DescribeInput;
}

export const describeRequestValid1: DescribeRequest = {
  x402: {
    verb: "describe",
    version: "1.0.0",
    request_id: "req-describe-2025-11-19-0001"
  },
  actor: "did:example:caller-001",
  limits: {
    max_output_tokens: 512,
    timeout_ms: 4000
  },
  channel: {
    protocol: "https",
    input_modalities: ["text"],
    output_modalities: ["text"]
  },
  input: {
    subject: "CommandLayer protocol-commons repository",
    context:
      "Public GitHub repo containing canonical verb schemas for agents.",
    detail_level: "medium",
    audience: "protocol-engineer"
  }
};
