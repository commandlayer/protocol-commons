// VALID summarize.receipt #1 — mirrors canonical JSON example

export type ReceiptStatus = "success" | "error" | "delegated";

export interface X402SummarizeReceiptEnvelope {
  verb: "summarize";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface TraceMetadata {
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

export interface SummarizeResultPayload {
  summary: string;
  format?: "text" | "markdown" | "html" | "json" | "other";
  compression_ratio?: number;
  source_hash?: string;
}

export interface UsageMetrics {
  input_tokens?: number;
  output_tokens?: number;
  total_tokens?: number;
  cost?: number;
}

export interface SummarizeReceipt {
  x402: X402SummarizeReceiptEnvelope;
  trace: TraceMetadata;
  status: ReceiptStatus;
  result: SummarizeResultPayload;
  usage?: UsageMetrics;
  error?: {
    code?: string;
    message?: string;
    retryable?: boolean;
    details?: Record<string, unknown>;
  };
  delegation_result?: {
    performed?: boolean;
    target_agent?: string;
    reason?: string;
    handoff_trace_id?: string;
  };
  metadata?: Record<string, unknown>;
}

export const summarizeReceiptValid1: SummarizeReceipt = {
  x402: {
    verb: "summarize",
    version: "1.0.0",
    request_id: "req-summarize-2025-11-19-0001",
    network: "mainnet",
    tenant: "demo-tenant-001"
  },
  trace: {
    trace_id: "trace-summarize-0001",
    started_at: "2025-11-19T19:45:00Z",
    completed_at: "2025-11-19T19:45:01Z",
    duration_ms: 842,
    provider: "commandlayer-demo",
    region: "us-east-1",
    model: "summarize-large-001",
    tags: ["summarize", "example", "v1.0.0"]
  },
  status: "success",
  result: {
    summary:
      "This document describes the current state of the CommandLayer protocol, including the canonical verbs, shared primitives, and launch checklist.",
    format: "markdown",
    compression_ratio: 4.5,
    source_hash:
      "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
  },
  usage: {
    input_tokens: 1234,
    output_tokens: 180,
    total_tokens: 1414,
    cost: 0.0023
  },
  metadata: {
    project: "commandlayer",
    verb_set: "commons",
    version: "1.0.0"
  }
};
