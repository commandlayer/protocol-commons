// INVALID summarize.receipt #2 — ok status requires summary to be a string

export const summarizeReceiptInvalid2: any = {
  "verb": "summarize",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T12:05:00Z",
  "agent": "summarizeagent.eth",
  "request_hash": "sha256:4444444444444444444444444444444444444444444444444444444444444444",
  "summary": {
    "text": "bad"
  },
  "signature": "sigBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
};
