// VALID parse.receipt #1 — success receipt with signer identity and hashes

export interface ParseReceipt {
  verb: "parse";
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

export const parseReceiptValid1: ParseReceipt = {
  "verb": "parse",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T12:00:00Z",
  "agent": "parseagent.eth",
  "request_hash": "sha256:557d62ba27057aac32822476353d461f8b81b6c91f782b292ff382c8df143bfb",
  "result_hash": "sha256:2222222222222222222222222222222222222222222222222222222222222222",
  "result_cid": "bafybeif8x1c3v5b7n9m2k4j6h8g1f3d5s7a9p2o4i6u8y1t3r5e7w9q2z4",
  "summary": "Extracted top-level fields network, status, and height from the JSON payload.",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA"
};
