// VALID parse.receipt #1

export type ParseReceiptStatus = "success" | "error" | "delegated";

export interface X402ParseReceiptEnvelope {
  verb: "parse";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface ParseTraceMetadata {
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

export interface ParseResultPayload {
  parsed: Record<string, unknown>;
  target_schema?: string;
  confidence?: number;
  warnings?: string[];
}

export interface ParseUsageMetrics {
  input_tokens?: number;
  output_tokens?: number;
  total_tokens?: number;
  cost?: number;
}

export interface ParseReceipt {
  x402: X402ParseReceiptEnvelope;
  trace: ParseTraceMetadata;
  status: ParseReceiptStatus;
  result: ParseResultPayload;
  usage?: ParseUsageMetrics;
}

export const parseReceiptValid1: ParseReceipt = {
  x402: {
    verb: "parse",
    version: "1.0.0",
    request_id: "req-parse-2025-11-19-0001"
  },
  trace: {
    trace_id: "trace-parse-0001",
    started_at: "2025-11-19T23:40:00Z",
    completed_at: "2025-11-19T23:40:01Z",
    duration_ms: 620,
    provider: "commandlayer-demo",
    region: "us-east-1",
    model: "parse-adapter-001",
    tags: ["parse", "example", "v1.0.0"]
  },
  status: "success",
  result: {
    parsed: {
      order_id: "12345",
      user: "alice.eth",
      total: {
        amount: 99.5,
        currency: "USD"
      },
      status: "paid"
    },
    target_schema: "https://example.com/schemas/order.v1.json",
    confidence: 0.97,
    warnings: []
  },
  usage: {
    input_tokens: 140,
    output_tokens: 80,
    total_tokens: 220,
    cost: 0.0007
  }
};
