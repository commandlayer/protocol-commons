// VALID describe.receipt #1

export type DescribeReceiptStatus = "success" | "error" | "delegated";

export interface X402DescribeReceiptEnvelope {
  verb: "describe";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface DescribeTraceMetadata {
  trace_id: string;
  parent_trace_id?: string;
  started_at?: string;
  completed_at?: string;
  duration_ms?: number;
  provider?: string;
  region?: string;
  model?: string;
  tags?: string[];
}

export interface DescribeResultPayload {
  description: string;
  bullets?: string[];
  properties?: Record<string, string>;
}

export interface DescribeUsageMetrics {
  input_tokens?: number;
  output_tokens?: number;
  total_tokens?: number;
  cost?: number;
}

export interface DescribeReceipt {
  x402: X402DescribeReceiptEnvelope;
  trace: DescribeTraceMetadata;
  status: DescribeReceiptStatus;
  result: DescribeResultPayload;
  usage?: DescribeUsageMetrics;
}

export const describeReceiptValid1: DescribeReceipt = {
  x402: {
    verb: "describe",
    version: "1.0.0",
    request_id: "req-describe-2025-11-19-0001"
  },
  trace: {
    trace_id: "trace-describe-0001",
    started_at: "2025-11-19T22:50:00Z",
    completed_at: "2025-11-19T22:50:01Z",
    duration_ms: 720,
    provider: "commandlayer-demo",
    region: "us-east-1",
    model: "describe-medium-001",
    tags: ["describe", "example", "v1.0.0"]
  },
  status: "success",
  result: {
    description:
      "The CommandLayer protocol-commons repository defines a stable, MIT-licensed set of JSON Schemas for universal agent verbs.",
    bullets: [
      "Implements 10 canonical agent verbs.",
      "Uses strict JSON Schema 2020-12.",
      "Aligns with x402 and ERC-8004."
    ],
    properties: {
      repo: "commandlayer/protocol-commons",
      license: "MIT",
      version: "1.0.0"
    }
  },
  usage: {
    input_tokens: 220,
    output_tokens: 260,
    total_tokens: 480,
    cost: 0.0014
  }
};
