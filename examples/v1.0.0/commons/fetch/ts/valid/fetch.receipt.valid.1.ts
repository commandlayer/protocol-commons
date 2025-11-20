// VALID fetch.receipt #1 — aligned with fetch.receipt.schema.json

export type FetchReceiptStatus = "success" | "error" | "delegated";

export interface X402FetchReceiptEnvelope {
  verb: "fetch";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface FetchTraceMetadata {
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

export interface FetchResultPayload {
  items: Record<string, unknown>[];
  next_cursor?: string;
}

export interface FetchUsageMetrics {
  input_tokens?: number;
  output_tokens?: number;
  total_tokens?: number;
  cost?: number;
}

export interface FetchReceipt {
  x402: X402FetchReceiptEnvelope;
  trace: FetchTraceMetadata;
  status: FetchReceiptStatus;
  result: FetchResultPayload;
  usage?: FetchUsageMetrics;
}

export const fetchReceiptValid1: FetchReceipt = {
  x402: {
    verb: "fetch",
    version: "1.0.0",
    request_id: "req-fetch-2025-11-19-0001"
  },
  trace: {
    trace_id: "trace-fetch-0001",
    started_at: "2025-11-19T21:00:00Z",
    completed_at: "2025-11-19T21:00:01Z",
    duration_ms: 730,
    provider: "commandlayer-demo",
    region: "us-east-1",
    model: "fetch-adapter-001",
    tags: ["fetch", "example", "v1.0.0"]
  },
  status: "success",
  result: {
    items: [
      {
        id: "log-001",
        level: "error",
        message: "Failed to pin schema to IPFS.",
        timestamp: "2025-11-19T20:59:30Z"
      }
    ],
    next_cursor: "cursor-fetch-0002"
  },
  usage: {
    input_tokens: 120,
    output_tokens: 340,
    total_tokens: 460,
    cost: 0.0009
  }
};
