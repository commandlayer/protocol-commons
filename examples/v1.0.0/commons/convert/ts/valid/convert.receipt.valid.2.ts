// VALID convert.receipt #2

import type { ConvertReceipt } from "./convert.receipt.valid.1";

export const convertReceiptValid2: ConvertReceipt = {
  x402: {
    verb: "convert",
    version: "1.0.0",
    request_id: "req-convert-2025-11-19-0004",
    network: "base"
  },
  trace: {
    trace_id: "trace-convert-0004",
    started_at: "2025-11-19T22:35:00Z",
    completed_at: "2025-11-19T22:35:01Z",
    duration_ms: 640,
    provider: "commandlayer-demo",
    region: "eu-west-1",
    model: "convert-adapter-002"
  },
  status: "success",
  result: {
    converted_content: "title: CommandLayer\ndescription: Canonical verbs for agents.\n",
    source_format: "json",
    target_format: "yaml",
    lossy: false
  }
};
