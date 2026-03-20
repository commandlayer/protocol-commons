// VALID summarize.receipt #2 — error receipt variant required by the schema

import type { SummarizeReceipt } from "./summarize.receipt.valid.1";

export const summarizeReceiptValid2: SummarizeReceipt = {
  "verb": "summarize",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "summarizeagent.eth",
  "request_hash": "sha256:8c13f11a1c87bc44517553ea36973b2be036f92f8b243d9cc412804d768f22c1",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA",
  "error": "summarize execution failed because the input could not be processed in the requested mode."
};
