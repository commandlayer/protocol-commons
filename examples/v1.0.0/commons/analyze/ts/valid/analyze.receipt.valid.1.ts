// VALID analyze.receipt #1 — aligns with analyze.receipt.schema.json (assumed)

export type AnalyzeReceiptStatus = "success" | "error" | "delegated";

export interface X402AnalyzeReceiptEnvelope {
  verb: "analyze";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface AnalyzeTraceMetadata {
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

export interface AnalyzeResultPayload {
  summary: string;
  insights?: string[];
  labels?: string[];
  score?: number;
}

export interface AnalyzeUsageMetrics {
  input_tokens?: number;
  output_tokens?: number;
  total_tokens?: number;
  cost?: number;
}

export interface AnalyzeReceipt {
  x402: X402AnalyzeReceiptEnvelope;
  trace: AnalyzeTraceMetadata;
  status: AnalyzeReceiptStatus;
  result: AnalyzeResultPayload;
  usage?: AnalyzeUsageMetrics;
}

export const analyzeReceiptValid1: AnalyzeReceipt = {
  x402: {
    verb: "analyze",
    version: "1.0.0",
    request_id: "req-analyze-2025-11-19-0001",
    network: "mainnet"
  },
  trace: {
    trace_id: "trace-analyze-0001",
    started_at: "2025-11-19T20:30:00Z",
    completed_at: "2025-11-19T20:30:01Z",
    duration_ms: 950,
    provider: "commandlayer-demo",
    region: "us-east-1",
    model: "analyze-large-001",
    tags: ["analyze", "example", "v1.0.0"]
  },
  status: "success",
  result: {
    summary:
      "The launch plan is sound but dependent on ecosystem awareness and clarity around ERC-8004/x402 alignment.",
    insights: [
      "Clarify messaging to standards authors.",
      "Secure 2–3 ecosystem design partners pre-launch."
    ],
    labels: ["risk:medium", "ecosystem:critical"],
    score: 0.78
  },
  usage: {
    input_tokens: 1024,
    output_tokens: 220,
    total_tokens: 1244,
    cost: 0.0037
  }
};
