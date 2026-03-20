// VALID parse.receipt #2 — error receipt variant required by the schema

import type { ParseReceipt } from "./parse.receipt.valid.1";

export const parseReceiptValid2: ParseReceipt = {
  "verb": "parse",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "parseagent.eth",
  "request_hash": "sha256:557d62ba27057aac32822476353d461f8b81b6c91f782b292ff382c8df143bfb",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA",
  "error": "parse execution failed because the input could not be processed in the requested mode."
};
