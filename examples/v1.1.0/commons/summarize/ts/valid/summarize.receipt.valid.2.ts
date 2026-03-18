// VALID summarize.receipt #2 — error receipt variant required by the schema

import type { SummarizeReceipt } from "./summarize.receipt.valid.1";

export const summarizeReceiptValid2: SummarizeReceipt = {
  "verb": "summarize",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "summarizeagent.eth",
  "request_hash": "sha256:3333333333333333333333333333333333333333333333333333333333333333",
  "signature": "sigBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  "error": "summarize execution failed because the input could not be processed in the requested mode."
};
