// VALID clean.receipt #1 — success receipt with realistic digest/CID-shaped evidence

export interface CleanReceipt {
  verb: "clean";
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

export const cleanReceiptValid1: CleanReceipt = {
  "verb": "clean",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T12:20:00Z",
  "agent": "cleanagent.eth",
  "request_hash": "sha256:37f8c2f8ef1d3819a3d8f4a662637df84256d4d2d95f0f00fd770af409f4233f",
  "result_hash": "sha256:e6a6c7329341d6c870c7a46f7509dcf4f1df03de238f5f3c6b0aa43d0b2def7d",
  "result_cid": "bafybeif3jzu2wq4m6n8p0r2t4v6x8z0b2d4f6h8j0l2n4p6r8t0v2x4z6a",
  "summary": "Removed script tags, normalized non-breaking spaces, and collapsed repeated whitespace.",
  "signature": "MEUCIB2dD4fF6hH8jJ0lL2nP4rT6vX8zA1cC3eE5gH7iJ9kLAiEAqS6uV8wY0zB2dD4fF6hH8jJ0lL2nP4rT6vX8zA1cC3"
};
