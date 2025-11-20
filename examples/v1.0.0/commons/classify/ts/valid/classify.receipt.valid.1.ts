// VALID classify.receipt #1

export type ClassifyReceiptStatus = "success" | "error" | "delegated";

export interface X402ClassifyReceiptEnvelope {
  verb: "classify";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface ClassifyTraceMetadata {
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

export interface ClassifyResultPayload {
  labels: string[];
}

export interface ClassifyReceipt {
  x402: X402ClassifyReceiptEnvelope;
  trace: ClassifyTraceMetadata;
  status: ClassifyReceiptStatus;
  result: ClassifyResultPayload;
}

export const classifyReceiptValid1: ClassifyReceipt = {
  x402: {
    verb: "classify",
    version: "1.0.0",
    request_id: "req-classify-2025-11-19-0001"
  },
  trace: {
    trace_id: "trace-classify-0001",
    started_at: "2025-11-19T21:30:00Z",
    completed_at: "2025-11-19T21:30:00Z",
    duration_ms: 320,
    provider: "commandlayer-demo",
    region: "us-east-1",
    model: "classify-medium-001",
    tags: ["classify", "example", "v1.0.0"]
  },
  status: "success",
  result: {
    labels: ["protocol-spec", "high-priority"]
  }
};
