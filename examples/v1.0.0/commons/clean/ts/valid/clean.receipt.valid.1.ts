// VALID clean.receipt #1

export type CleanReceiptStatus = "success" | "error" | "delegated";

export interface X402CleanReceiptEnvelope {
  verb: "clean";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface CleanTraceMetadata {
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

export interface CleanResultPayload {
  cleaned_content: string;
  operations_applied?: string[];
  issues_detected?: string[];
  original_length?: number;
  cleaned_length?: number;
}

export interface CleanUsageMetrics {
  input_tokens?: number;
  output_tokens?: number;
  total_tokens?: number;
  cost?: number;
}

export interface CleanReceipt {
  x402: X402CleanReceiptEnvelope;
  trace: CleanTraceMetadata;
  status: CleanReceiptStatus;
  result: CleanResultPayload;
  usage?: CleanUsageMetrics;
}

export const cleanReceiptValid1: CleanReceipt = {
  x402: {
    verb: "clean",
    version: "1.0.0",
    request_id: "req-clean-2025-11-19-0001"
  },
  trace: {
    trace_id: "trace-clean-0001",
    started_at: "2025-11-19T22:00:00Z",
    completed_at: "2025-11-19T22:00:01Z",
    duration_ms: 640,
    provider: "commandlayer-demo",
    region: "us-east-1",
    model: "clean-adapter-001",
    tags: ["clean", "example", "v1.0.0"]
  },
  status: "success",
  result: {
    cleaned_content:
      "This is noisy text with extra spaces, HTML tags removed, and normalized spacing.",
    operations_applied: ["trim", "normalize_whitespace", "strip_html"],
    issues_detected: ["html_tags:present"],
    original_length: 120,
    cleaned_length: 96
  },
  usage: {
    input_tokens: 180,
    output_tokens: 90,
    total_tokens: 270,
    cost: 0.0007
  }
};
