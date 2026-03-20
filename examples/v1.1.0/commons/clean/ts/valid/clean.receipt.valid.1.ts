// VALID clean.receipt #1 — success receipt with signer identity and hashes

export interface CleanReceipt {
  verb: "clean";
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

export const cleanReceiptValid1: CleanReceipt = {
  "verb": "clean",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T12:00:00Z",
  "agent": "cleanagent.eth",
  "request_hash": "sha256:d365fd590bc4a12f80c39a30ca1e6ba9296435ab52f03f7e36dc045b18220683",
  "result_hash": "sha256:2222222222222222222222222222222222222222222222222222222222222222",
  "result_cid": "bafybeif2k6zv5n4r3q2w7x8c9m4p6t2y5u8i3o6p9a2s5d8f1g4h7j2k3l",
  "summary": "Normalized whitespace and casing artifacts to yield a canonical single-line string.",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA"
};
