// VALID explain.receipt #1 — success receipt with signer identity and hashes

export interface ExplainReceipt {
  verb: "explain";
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

export const explainReceiptValid1: ExplainReceipt = {
  "verb": "explain",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T12:00:00Z",
  "agent": "explainagent.eth",
  "request_hash": "sha256:edb99eeb8a8eb64e337ba6a49d7ea7dfa167fdd00b3a7fbdd5d45f587cf138be",
  "result_hash": "sha256:2222222222222222222222222222222222222222222222222222222222222222",
  "result_cid": "bafybeic6n3q5w7x9c2v4b6n8m1k3j5h7g9f2d4s6a8p1o3i5u7y9t2r4e6",
  "summary": "Hash the original request, compare it to request_hash, then verify the detached signature under the agent identity before trusting the summary.",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA"
};
