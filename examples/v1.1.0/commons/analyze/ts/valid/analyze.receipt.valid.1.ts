// VALID analyze.receipt #1 — success receipt with signer identity and hashes

export interface AnalyzeReceipt {
  verb: "analyze";
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

export const analyzeReceiptValid1: AnalyzeReceipt = {
  "verb": "analyze",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T12:00:00Z",
  "agent": "analyzeagent.eth",
  "request_hash": "sha256:1111111111111111111111111111111111111111111111111111111111111111",
  "result_hash": "sha256:2222222222222222222222222222222222222222222222222222222222222222",
  "result_cid": "bafybeianalyzereceiptokexample0001",
  "summary": "Core risks center on signer key rotation gaps, unresolved indexer scaling assumptions, and an unstated rollback plan.",
  "signature": "sigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
};
