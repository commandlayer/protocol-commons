// INVALID fetch.receipt #1 — malformed result_hash pattern

export const fetchReceiptInvalid1: any = {
  "verb": "fetch",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T13:00:00Z",
  "agent": "fetchagent.eth",
  "request_hash": "sha256:549ae105b20f8ba134fe5f4f3f5f849cfb154ea0ff742f32c611f2fab24f9f66",
  "result_hash": "sha256:1234",
  "summary": "Fetched a JSON health document with signer and availability metadata.",
  "signature": "MEUCID9jK1lM3nO5pQ7rS9tU1vW3xY5zB7cD9eF1gH3iJ5kLAiEAoQ2rS4tU6vW8xY0zB2dD4fF6hH8jJ0lL2nP4rT6vX8"
};
