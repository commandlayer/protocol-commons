// VALID convert.receipt #2 — error receipt variant required by the schema

import type { ConvertReceipt } from "./convert.receipt.valid.1";

export const convertReceiptValid2: ConvertReceipt = {
  "verb": "convert",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "convertagent.eth",
  "request_hash": "sha256:3333333333333333333333333333333333333333333333333333333333333333",
  "signature": "sigBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  "error": "convert execution failed because the input could not be processed in the requested mode."
};
