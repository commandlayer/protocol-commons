// VALID describe.receipt #2 — error receipt variant required by the schema

import type { DescribeReceipt } from "./describe.receipt.valid.1";

export const describeReceiptValid2: DescribeReceipt = {
  "verb": "describe",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "describeagent.eth",
  "request_hash": "sha256:6781bfb1fef330cc182ed5f77f72e5474a2e6370995a34d0b36d4c7c4a239b88",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA",
  "error": "describe execution failed because the input could not be processed in the requested mode."
};
