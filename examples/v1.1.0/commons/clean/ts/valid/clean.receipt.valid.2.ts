// VALID clean.receipt #2 — error receipt variant required by the schema

import type { CleanReceipt } from "./clean.receipt.valid.1";

export const cleanReceiptValid2: CleanReceipt = {
  "verb": "clean",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "cleanagent.eth",
  "request_hash": "sha256:3333333333333333333333333333333333333333333333333333333333333333",
  "signature": "sigBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  "error": "clean execution failed because the input could not be processed in the requested mode."
};
