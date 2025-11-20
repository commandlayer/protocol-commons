// VALID summarize.receipt #2 — same schema, different data

import type {
  SummarizeReceipt
} from "./summarize.receipt.valid.1";

export const summarizeReceiptValid2: SummarizeReceipt = {
  x402: {
    verb: "summarize",
    version: "1.0.0",
    request_id: "req-summarize-2025-11-19-0003",
    network: "base",
    tenant: "demo-tenant-002"
  },
  trace: {
    trace_id: "trace-summarize-0003",
    started_at: "2025-11-19T20:15:00Z",
    completed_at: "2025-11-19T20:15:01Z",
    duration_ms: 912,
    provider: "commandlayer-demo",
    region: "eu-west-1",
    model: "summarize-medium-001",
    tags: ["summarize", "example", "v1.0.0", "alt"]
  },
  status: "success",
  result: {
    summary:
      "Brief summary of the document describing CommandLayer's commons verb set and readiness for launch.",
    format: "text",
    compression_ratio: 3.1
  },
  usage: {
    input_tokens: 800,
    output_tokens: 120,
    total_tokens: 920
  }
};
