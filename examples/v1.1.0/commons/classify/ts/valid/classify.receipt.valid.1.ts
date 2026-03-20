// VALID classify.receipt #1 — success receipt with signer identity and hashes

export interface ClassifyReceipt {
  verb: "classify";
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

export const classifyReceiptValid1: ClassifyReceipt = {
  "verb": "classify",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T12:00:00Z",
  "agent": "classifyagent.eth",
  "request_hash": "sha256:2891386be77f313a4306376d7cb9aeb180c71d3e67bda4801a08957163659cca",
  "result_hash": "sha256:2222222222222222222222222222222222222222222222222222222222222222",
  "result_cid": "bafybeid4n6z3k4c5s7qk2j5v3u4w6y7p8r9s2t4v6x8z2b4n6c8d2e4f5a",
  "summary": "billing_issue",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA"
};
