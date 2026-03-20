// VALID clean.receipt #2 — error receipt variant required by the schema

import type { CleanReceipt } from "./clean.receipt.valid.1";

export const cleanReceiptValid2: CleanReceipt = {
  "verb": "clean",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "cleanagent.eth",
  "request_hash": "sha256:d365fd590bc4a12f80c39a30ca1e6ba9296435ab52f03f7e36dc045b18220683",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA",
  "error": "clean execution failed because the input could not be processed in the requested mode."
};
