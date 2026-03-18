// VALID summarize.receipt #1 — success receipt with signer identity and hashes

export interface SummarizeReceipt {
  verb: "summarize";
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

export const summarizeReceiptValid1: SummarizeReceipt = {
  "verb": "summarize",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T12:00:00Z",
  "agent": "summarizeagent.eth",
  "request_hash": "sha256:1111111111111111111111111111111111111111111111111111111111111111",
  "result_hash": "sha256:2222222222222222222222222222222222222222222222222222222222222222",
  "result_cid": "bafybeisummarizereceiptokexample0001",
  "summary": "Commons v1.1.0 makes requests smaller and receipts easier to verify while preserving stable verb semantics.",
  "signature": "sigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
};
