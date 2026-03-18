// VALID explain.receipt #1 — success receipt with signer identity and hashes

export interface ExplainReceipt {
  verb: "explain";
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

export const explainReceiptValid1: ExplainReceipt = {
  "verb": "explain",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T12:00:00Z",
  "agent": "explainagent.eth",
  "request_hash": "sha256:1111111111111111111111111111111111111111111111111111111111111111",
  "result_hash": "sha256:2222222222222222222222222222222222222222222222222222222222222222",
  "result_cid": "bafybeiexplainreceiptokexample0001",
  "summary": "Hash the original request, compare it to request_hash, then verify the detached signature under the agent identity before trusting the summary.",
  "signature": "sigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
};
