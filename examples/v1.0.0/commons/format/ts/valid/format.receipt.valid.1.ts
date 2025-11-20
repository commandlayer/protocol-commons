// VALID format.receipt #1

export type FormatReceiptStatus = "success" | "error" | "delegated";

export interface X402FormatReceiptEnvelope {
  verb: "format";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface FormatTraceMetadata {
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

export interface FormatResultPayload {
  formatted_content: string;
  style?: string;
  original_length?: number;
  formatted_length?: number;
  notes?: string;
}

export interface FormatUsageMetrics {
  input_tokens?: number;
  output_tokens?: number;
  total_tokens?: number;
  cost?: number;
}

export interface FormatReceipt {
  x402: X402FormatReceiptEnvelope;
  trace: FormatTraceMetadata;
  status: FormatReceiptStatus;
  result: FormatResultPayload;
  usage?: FormatUsageMetrics;
}

export const formatReceiptValid1: FormatReceipt = {
  x402: {
    verb: "format",
    version: "1.0.0",
    request_id: "req-format-2025-11-19-0001"
  },
  trace: {
    trace_id: "trace-format-0001",
    started_at: "2025-11-19T23:25:00Z",
    completed_at: "2025-11-19T23:25:01Z",
    duration_ms: 540,
    provider: "commandlayer-demo",
    region: "us-east-1",
    model: "format-adapter-001",
    tags: ["format", "example", "v1.0.0"]
  },
  status: "success",
  result: {
    formatted_content:
      "- CommandLayer defines canonical verbs for agents.\n- These verbs are expressed as JSON Schemas.\n- The schemas are aligned with x402 and ERC-8004.",
    style: "markdown-bullets",
    original_length: 146,
    formatted_length: 170,
    notes: "Converted plain text lines into a markdown bullet list."
  },
  usage: {
    input_tokens: 160,
    output_tokens: 110,
    total_tokens: 270,
    cost: 0.0008
  }
};
