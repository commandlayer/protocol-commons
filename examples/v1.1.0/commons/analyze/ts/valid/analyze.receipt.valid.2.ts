// VALID analyze.receipt #2 — error receipt variant required by the schema

import type { AnalyzeReceipt } from "./analyze.receipt.valid.1";

export const analyzeReceiptValid2: AnalyzeReceipt = {
  "verb": "analyze",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "analyzeagent.eth",
  "request_hash": "sha256:879eadc48bc5c55fb07d915cfd59e9d714a918d84ef469f0b461cfd98aeb7167",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA",
  "error": "analyze execution failed because the input could not be processed in the requested mode."
};
