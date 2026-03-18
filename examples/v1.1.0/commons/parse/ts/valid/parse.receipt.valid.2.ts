// VALID parse.receipt #2 — error receipt variant required by the schema

import type { ParseReceipt } from "./parse.receipt.valid.1";

export const parseReceiptValid2: ParseReceipt = {
  "verb": "parse",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "parseagent.eth",
  "request_hash": "sha256:3333333333333333333333333333333333333333333333333333333333333333",
  "signature": "sigBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  "error": "parse execution failed because the input could not be processed in the requested mode."
};
