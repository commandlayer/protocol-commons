// VALID describe.receipt #1 — success receipt with signer identity and hashes

export interface DescribeReceipt {
  verb: "describe";
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

export const describeReceiptValid1: DescribeReceipt = {
  "verb": "describe",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T12:00:00Z",
  "agent": "describeagent.eth",
  "request_hash": "sha256:6781bfb1fef330cc182ed5f77f72e5474a2e6370995a34d0b36d4c7c4a239b88",
  "result_hash": "sha256:2222222222222222222222222222222222222222222222222222222222222222",
  "result_cid": "bafybeib3m6n9q2w5x8c1v4b7n2m5k8j1h4g7f2d5s8a1p4o7i2u5y8t1r4",
  "summary": "A compact interface card displaying whether a receipt succeeded and which agent signed it.",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA"
};
