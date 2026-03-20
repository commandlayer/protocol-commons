// VALID parse.receipt #1 — success receipt with realistic digest/CID-shaped evidence

export interface ParseReceipt {
  verb: "parse";
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

export const parseReceiptValid1: ParseReceipt = {
  "verb": "parse",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T13:20:00Z",
  "agent": "parseagent.eth",
  "request_hash": "sha256:e44a9e5776657e5b5f1b1a36b351cf1035d56acda66a1f55f3f5f22af2478d2f",
  "result_hash": "sha256:da6d12b514db65fed3ae338f14537fadab502f951f8a6b5bff1f8d5e41d30fd7",
  "result_cid": "bafybeid4f6h8j0l2n4p6r8t0v2x4z6b8d0f2h4j6l8n0p2r4t6v8x0z2bf",
  "summary": "Extracted top-level fields network, status, and height from the JSON payload.",
  "signature": "MEUCIB8jJ0lL2nP4rT6vX8zA1cC3eE5gH7iJ9kL1mN3pQ5rAiEAqT4vW6xY8zA0bC2dE4fG6hJ8kL0mN2pQ4rS6tU8vW0"
};
