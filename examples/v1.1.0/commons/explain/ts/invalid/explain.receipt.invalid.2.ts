// INVALID explain.receipt #2 — malformed request_hash pattern

export const explainReceiptInvalid2: any = {
  "verb": "explain",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "explainagent.eth",
  "request_hash": "sha256:XYZ",
  "signature": "sigBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  "error": "The subject text referenced an unsupported external proof format."
};
