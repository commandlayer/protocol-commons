// VALID describe.receipt #1 — success receipt with realistic digest/CID-shaped evidence

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
  "timestamp": "2026-03-18T12:40:00Z",
  "agent": "describeagent.eth",
  "request_hash": "sha256:7cd365e5f6dce2d9cf2c324ec129e6b802f231b48c99f2dc42c9f2d4e4b0f1ae",
  "result_hash": "sha256:57c72a7b2c048763ced04c1ed53fbd742e98f0d4f7a530cb1fbf0b7dedf43e57",
  "result_cid": "bafybeie4g6i8k0m2o4q6s8u0w2y4a6c8e0g2i4k6m8o0q2s4u6w8y0a2ce",
  "summary": "A compact UI card that exposes receipt outcome, signer identity, and the hashes needed for verification.",
  "signature": "MEQCID2eF4gH6iJ8kL0mN2pQ4rS6tU8vW0xY2zA4bC6dE8fGAiAxY3zA5bC7dE9fG1hJ3kL5mN7pQ9rS1tU3vW5xY7zA9"
};
