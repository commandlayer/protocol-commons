// VALID fetch.receipt #1 — success receipt with signer identity and hashes

export interface FetchReceipt {
  verb: "fetch";
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

export const fetchReceiptValid1: FetchReceipt = {
  "verb": "fetch",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T12:00:00Z",
  "agent": "fetchagent.eth",
  "request_hash": "sha256:91a30e81d19f6392ec15eabfb63e8658a3e52a41ee01c7c3a9adcb75e560239a",
  "result_hash": "sha256:2222222222222222222222222222222222222222222222222222222222222222",
  "result_cid": "bafybeid9q2w4x6c8v1b3n5m7k9j2h4g6f8d1s3a5p7o9i2u4y6t8r1e3w5",
  "summary": "Fetched a JSON status document describing service health, schema tag, and signer availability.",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA"
};
