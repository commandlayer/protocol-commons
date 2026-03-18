// VALID format.receipt #2 — error receipt variant required by the schema

import type { FormatReceipt } from "./format.receipt.valid.1";

export const formatReceiptValid2: FormatReceipt = {
  "verb": "format",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "formatagent.eth",
  "request_hash": "sha256:3333333333333333333333333333333333333333333333333333333333333333",
  "signature": "sigBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  "error": "format execution failed because the input could not be processed in the requested mode."
};
