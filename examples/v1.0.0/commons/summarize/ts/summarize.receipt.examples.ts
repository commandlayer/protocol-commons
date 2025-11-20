// examples/v1.0.0/commons/summarize/ts/summarize.receipt.examples.ts

export interface X402Envelope {
  verb: "summarize";
  version: "1.0.0";
  idempotency_key: string;
}

export interface TraceMetadata {
  trace_id: string;
  span_id: string;
  parent_span_id?: string | null;
}

export interface ReceiptStatus {
  code: "OK" | "ERROR";
  http_status: number;
  message: string;
}

export interface TokenUsage {
  input: number;
  output: number;
  total: number;
}

export interface SummarizeResult {
  summary: string;
  tokens_used: TokenUsage;
  model: string;
  provider: string;
  format?: "plain_text" | "markdown" | "html";
}

export interface SummarizeReceipt {
  x402: X402Envelope;
  trace: TraceMetadata;
  status: ReceiptStatus;
  result: SummarizeResult;
  created_at: string; // ISO 8601
  duration_ms?: number;
}

// ✅ Valid summarize receipt example (should pass Ajv)
export const validSummarizeReceiptExample: SummarizeReceipt = {
  x402: {
    verb: "summarize",
    version: "1.0.0",
    idempotency_key: "summarize-2025-11-19-0001"
  },
  trace: {
    trace_id: "trace-summarize-0001",
    span_id: "span-root-0001"
  },
  status: {
    code: "OK",
    http_status: 200,
    message: "Summarization completed successfully."
  },
  result: {
    summary:
      "This document explains the CommandLayer commons, including canonical verbs, shared primitives, and the launch sequence for v1.0.0. The primary outcome is that the protocol-commons repo is ready for examples, checksums, IPFS pinning, ENS TXT anchoring, and public release.",
    tokens_used: {
      input: 1234,
      output: 180,
      total: 1414
    },
    model: "gpt-5.1",
    provider: "openai",
    format: "markdown"
  },
  created_at: "2025-11-19T19:45:00Z",
  duration_ms: 842
};

// ❌ Invalid summarize receipt example (should fail Ajv)
// Reasons:
// - x402.verb is wrong ("translate")
// - result is missing
// - extra `debug` property not allowed by additionalProperties:false
export const invalidSummarizeReceiptExample: any = {
  x402: {
    verb: "translate",
    version: "1.0.0",
    idempotency_key: "summarize-2025-11-19-0002"
  },
  trace: {
    trace_id: "trace-summarize-0002",
    span_id: "span-root-0002"
  },
  status: {
    code: "OK",
    http_status: 200,
    message: "Looks superficially OK, but the receipt is invalid."
  },
  debug: {
    note: "This field should not exist if additionalProperties:false is applied."
  }
};
