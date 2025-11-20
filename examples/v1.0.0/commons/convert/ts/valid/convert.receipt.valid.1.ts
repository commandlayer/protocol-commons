// VALID convert.receipt #1

export type ConvertReceiptStatus = "success" | "error" | "delegated";

export interface X402ConvertReceiptEnvelope {
  verb: "convert";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface ConvertTraceMetadata {
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

export interface ConvertResultPayload {
  converted_content: string;
  source_format?: string;
  target_format: string;
  lossy?: boolean;
  warnings?: string[];
}

export interface ConvertUsageMetrics {
  input_tokens?: number;
  output_tokens?: number;
  total_tokens?: number;
  cost?: number;
}

export interface ConvertReceipt {
  x402: X402ConvertReceiptEnvelope;
  trace: ConvertTraceMetadata;
  status: ConvertReceiptStatus;
  result: ConvertResultPayload;
  usage?: ConvertUsageMetrics;
}

export const convertReceiptValid1: ConvertReceipt = {
  x402: {
    verb: "convert",
    version: "1.0.0",
    request_id: "req-convert-2025-11-19-0001"
  },
  trace: {
    trace_id: "trace-convert-0001",
    started_at: "2025-11-19T22:30:00Z",
    completed_at: "2025-11-19T22:30:01Z",
    duration_ms: 710,
    provider: "commandlayer-demo",
    region: "us-east-1",
    model: "convert-adapter-001",
    tags: ["convert", "example", "v1.0.0"]
  },
  status: "success",
  result: {
    converted_content: "# CommandLayer\n\nCanonical verbs for agents.\n",
    source_format: "html",
    target_format: "markdown",
    lossy: false,
    warnings: []
  },
  usage: {
    input_tokens: 150,
    output_tokens: 60,
    total_tokens: 210,
    cost: 0.0006
  }
};
