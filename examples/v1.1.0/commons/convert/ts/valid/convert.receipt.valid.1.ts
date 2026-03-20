// VALID convert.receipt #1 — success receipt with signer identity and hashes

export interface ConvertReceipt {
  verb: "convert";
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

export const convertReceiptValid1: ConvertReceipt = {
  "verb": "convert",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T12:00:00Z",
  "agent": "convertagent.eth",
  "request_hash": "sha256:026d6dd0f707d6587f1bf5ae903279544efac2861da2db340aabdb125d1e1c53",
  "result_hash": "sha256:2222222222222222222222222222222222222222222222222222222222222222",
  "result_cid": "bafybeig7m4n2q5w8x3c6v9b2n5m8k4j7h2g5f8d3s6a9p2o5i8u1y4t7r2",
  "summary": "Converted plain release notes into markdown sections suitable for documentation.",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA"
};
