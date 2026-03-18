// VALID describe.receipt #1 — success receipt with signer identity and hashes

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
  "timestamp": "2026-03-18T12:00:00Z",
  "agent": "describeagent.eth",
  "request_hash": "sha256:1111111111111111111111111111111111111111111111111111111111111111",
  "result_hash": "sha256:2222222222222222222222222222222222222222222222222222222222222222",
  "result_cid": "bafybeidescribereceiptokexample0001",
  "summary": "A compact interface card displaying whether a receipt succeeded and which agent signed it.",
  "signature": "sigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
};
