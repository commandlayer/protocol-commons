// INVALID summarize.receipt #1 — bad timestamp, malformed hash, short signature

export const summarizeReceiptInvalid1: any = {
  "verb": "summarize",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "not-a-date",
  "request_hash": "sha256:xyz",
  "signature": "short",
  "error": "ok receipts should not rely on error only"
};
