// INVALID summarize.receipt #1 — malformed request_hash pattern

export const summarizeReceiptInvalid1: any = {
  "verb": "summarize",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T13:30:00Z",
  "agent": "summarizeagent.eth",
  "request_hash": "sha256:1111",
  "summary": "Commons v1.1.0 keeps requests compact and receipts straightforward to verify.",
  "signature": "MEUCID4fG6hJ8kL0mN2pQ4rS6tU8vW0xY2zA4bC6dE8fG0hAiEAzB1dD3fF5hH7jJ9lL1nP3rT5vX7zA9cC1eE3gH5iJ7"
};
