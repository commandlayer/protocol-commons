// VALID convert.receipt #2 — error receipt variant required by the schema

import type { ConvertReceipt } from "./convert.receipt.valid.1";

export const convertReceiptValid2: ConvertReceipt = {
  "verb": "convert",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "convertagent.eth",
  "request_hash": "sha256:026d6dd0f707d6587f1bf5ae903279544efac2861da2db340aabdb125d1e1c53",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA",
  "error": "convert execution failed because the input could not be processed in the requested mode."
};
