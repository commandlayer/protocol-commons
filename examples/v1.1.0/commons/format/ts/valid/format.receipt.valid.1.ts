// VALID format.receipt #1 — success receipt with signer identity and hashes

export interface FormatReceipt {
  verb: "format";
  version: "1.1.0";
  status: "ok" | "error";
  timestamp: string;
  agent?: string;
  request_hash: `sha256:${string}`;
  result_hash?: `sha256:${string}`;
  result_cid?: string;
  summary?: string;
  signature: string;
  error?: string;
}

export const formatReceiptValid1: FormatReceipt = {
  "verb": "format",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T12:00:00Z",
  "agent": "formatagent.eth",
  "request_hash": "sha256:4f5060c2cbf9d2b996a0d39a852fd4a27b03eaa45d6946aee758c84a149442cc",
  "result_hash": "sha256:2222222222222222222222222222222222222222222222222222222222222222",
  "result_cid": "bafybeie5w8x2c4v6b9n3m5k7j1h3g5f7d9s2a4p6o8i1u3y5t7r9e2w4q6",
  "summary": "Formatted the checklist into readable markdown with stable bullet structure.",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA"
};
