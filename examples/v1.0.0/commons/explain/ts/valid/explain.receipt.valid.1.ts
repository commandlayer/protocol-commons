// VALID explain.receipt #1

export type ExplainReceiptStatus = "success" | "error" | "delegated";

export interface X402ExplainReceiptEnvelope {
  verb: "explain";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface ExplainTraceMetadata {
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

export interface ExplainResultPayload {
  explanation: string;
  steps?: string[];
  summary?: string;
  references?: string[];
}

export interface ExplainUsageMetrics {
  input_tokens?: number;
  output_tokens?: number;
  total_tokens?: number;
  cost?: number;
}

export interface ExplainReceipt {
  x402: X402ExplainReceiptEnvelope;
  trace: ExplainTraceMetadata;
  status: ExplainReceiptStatus;
  result: ExplainResultPayload;
  usage?: ExplainUsageMetrics;
}

export const explainReceiptValid1: ExplainReceipt = {
  x402: {
    verb: "explain",
    version: "1.0.0",
    request_id: "req-explain-2025-11-19-0001"
  },
  trace: {
    trace_id: "trace-explain-0001",
    started_at: "2025-11-19T23:10:00Z",
    completed_at: "2025-11-19T23:10:01Z",
    duration_ms: 680,
    provider: "commandlayer-demo",
    region: "us-east-1",
    model: "explain-medium-001",
    tags: ["explain", "example", "v1.0.0"]
  },
  status: "success",
  result: {
    explanation:
      "The CommandLayer commons repository defines a stable set of JSON Schemas for core agent verbs, allowing agents to speak a shared language over x402 and ERC-8004 rails.",
    steps: [
      "It defines a minimal set of core verbs.",
      "Each verb has strict request and receipt schemas.",
      "These schemas align with x402 and ERC-8004.",
      "This makes agent-to-agent interoperability possible across providers."
    ],
    summary:
      "CommandLayer commons standardizes how agents express core actions like summarize and analyze.",
    references: [
      "https://commandlayer.org/schemas/v1.0.0/commons",
      "https://github.com/commandlayer/protocol-commons"
    ]
  },
  usage: {
    input_tokens: 260,
    output_tokens: 420,
    total_tokens: 680,
    cost: 0.0019
  }
};
