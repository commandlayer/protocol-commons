// VALID format.receipt #2 — error receipt variant required by the schema

import type { FormatReceipt } from "./format.receipt.valid.1";

export const formatReceiptValid2: FormatReceipt = {
  "verb": "format",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "formatagent.eth",
  "request_hash": "sha256:4f5060c2cbf9d2b996a0d39a852fd4a27b03eaa45d6946aee758c84a149442cc",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA",
  "error": "format execution failed because the input could not be processed in the requested mode."
};
