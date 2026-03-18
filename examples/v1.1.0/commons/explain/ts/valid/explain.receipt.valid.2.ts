// VALID explain.receipt #2 — error receipt variant required by the schema

import type { ExplainReceipt } from "./explain.receipt.valid.1";

export const explainReceiptValid2: ExplainReceipt = {
  "verb": "explain",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "explainagent.eth",
  "request_hash": "sha256:3333333333333333333333333333333333333333333333333333333333333333",
  "signature": "sigBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  "error": "explain execution failed because the input could not be processed in the requested mode."
};
