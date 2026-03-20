// VALID explain.receipt #2 — error receipt variant required by the schema

import type { ExplainReceipt } from "./explain.receipt.valid.1";

export const explainReceiptValid2: ExplainReceipt = {
  "verb": "explain",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "explainagent.eth",
  "request_hash": "sha256:edb99eeb8a8eb64e337ba6a49d7ea7dfa167fdd00b3a7fbdd5d45f587cf138be",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA",
  "error": "explain execution failed because the input could not be processed in the requested mode."
};
