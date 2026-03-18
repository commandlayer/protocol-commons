// VALID describe.receipt #2 — error receipt variant required by the schema

import type { DescribeReceipt } from "./describe.receipt.valid.1";

export const describeReceiptValid2: DescribeReceipt = {
  "verb": "describe",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "describeagent.eth",
  "request_hash": "sha256:3333333333333333333333333333333333333333333333333333333333333333",
  "signature": "sigBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  "error": "describe execution failed because the input could not be processed in the requested mode."
};
