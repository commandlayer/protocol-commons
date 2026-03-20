// INVALID describe.receipt #2 — additionalProperties are not allowed

export const describeReceiptInvalid2: any = {
  "verb": "describe",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "describeagent.eth",
  "request_hash": "sha256:4444444444444444444444444444444444444444444444444444444444444444",
  "signature": "sigBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
  "error": "The referenced image asset was unavailable at description time.",
  "notes": [
    "debug"
  ]
};
