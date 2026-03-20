// VALID classify.receipt #1 — success receipt with realistic digest/CID-shaped evidence

export interface ClassifyReceipt {
  verb: "classify";
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

export const classifyReceiptValid1: ClassifyReceipt = {
  "verb": "classify",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T12:10:00Z",
  "agent": "classifyagent.eth",
  "request_hash": "sha256:3d5224e3ebc7f6ab9e9a6a2114a5f7d01c6847c8df0e3fd53c0e5d117f6ab9dd",
  "result_hash": "sha256:8cb8de3bdca7cb09517e3a5a6aa3d34f429fba381a325f1ca2f94fdb7d59e831",
  "result_cid": "bafybeibn6t7v5x3zk4m2w1q9p8r7s6u5t4v3w2x1y9z8a7b6c5d4e3f2ga",
  "summary": "billing_issue",
  "signature": "MEYCIQDf3h7kL9mN2pQ4rS6tU8vW0xY2zA4bC6dE8fG0hJ1kLwIhAO5pQ7rS9tU1vW3xY5zB7cD9eF1gH3iJ5kL7mN9pQ1"
};
