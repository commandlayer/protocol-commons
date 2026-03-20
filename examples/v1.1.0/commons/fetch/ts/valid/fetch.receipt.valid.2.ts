// VALID fetch.receipt #2 — error receipt variant required by the schema

import type { FetchReceipt } from "./fetch.receipt.valid.1";

export const fetchReceiptValid2: FetchReceipt = {
  "verb": "fetch",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "fetchagent.eth",
  "request_hash": "sha256:91a30e81d19f6392ec15eabfb63e8658a3e52a41ee01c7c3a9adcb75e560239a",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA",
  "error": "fetch execution failed because the input could not be processed in the requested mode."
};
