// VALID format.receipt #1 — success receipt with realistic digest/CID-shaped evidence

export interface FormatReceipt {
  verb: "format";
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

export const formatReceiptValid1: FormatReceipt = {
  "verb": "format",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T13:10:00Z",
  "agent": "formatagent.eth",
  "request_hash": "sha256:9d1a96f18f53ac6105cf88c607bd0f8bfc33b11c0bb66f6f35a47ce0f80f358b",
  "result_hash": "sha256:5c9d53f6fc14ae2d0e30af82ef1a5c0910f76b246b2c0125055bf50d756b55ff",
  "result_cid": "bafybeia2c4e6g8i0k2m4o6q8s0u2w4y6a8c0e2g4i6k8m0o2q4s6u8w0yb",
  "summary": "Reformatted the launch checklist into stable markdown bullets without changing the underlying meaning.",
  "signature": "MEYCIQD5gH7iJ9kL1mN3pQ5rS7tU9vW1xY3zA5bC7dE9fG1hJAIhAN4jK6lM8nO0pQ2rS4tU6vW8xY0zB2dD4fF6hH8jJ0"
};
