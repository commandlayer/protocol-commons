// examples/v1.0.0/commons/summarize/ts/summarize.receipt.examples.ts

export type ReceiptStatus = "success" | "error" | "delegated";

export interface X402SummarizeReceiptEnvelope {
  verb: "summarize";
  version: "1.0.0";
  request_id?: string;
  entry?: string;
  tenant?: string;
  network?: string;
  reply_to?: string;
}

export interface TraceMetadata {
  trace_id: string;
  parent_trace_id?: string;
  started_at?: string; // ISO 8601
  completed_at?: string; // ISO 8601
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

// ✅ Valid summarize receipt example (should pass current schemas)
export const validSummarizeReceiptExample: SummarizeReceipt = {
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
      "This document describes the current state of the CommandLayer protocol, including the canonical verbs, shared primitives, and launch checklist. The key outcome is that protocol-commons v1.0.0 is ready for examples, checksums, IPFS pinning, ENS TXT anchoring, and public release.",
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

// ❌ Invalid summarize receipt example (should fail schema validation)
// Reasons:
// - status is not one of "success" | "error" | "delegated"
// - result.summary is empty string
export const invalidSummarizeReceiptExample: any = {
  x402: {
    verb: "summarize",
    version: "1.0.0",
    request_id: "req-summarize-2025-11-19-0002"
  },
  trace: {
    trace_id: "trace-summarize-0002",
    started_at: "2025-11-19T19:50:00Z",
    completed_at: "2025-11-19T19:50:01Z",
    duration_ms: 940,
    provider: "commandlayer-demo",
    region: "us-east-1",
    model: "summarize-large-001"
  },
  status: "ok",
  result: {
    summary: "",
    format: "markdown",
    compression_ratio: 3.2
  }
};
