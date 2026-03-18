// examples/v1.1.0/commons/summarize/ts/summarize.receipt.examples.ts

export interface SummarizeReceipt {
  verb: "summarize";
  version: "1.1.0";
  status: "ok" | "error";
  timestamp: string;
  request_hash: `sha256:${string}`;
  signature: string;
  agent?: string;
  result_hash?: `sha256:${string}`;
  result_cid?: string;
  summary?: string;
  error?: string;
}

export const validSummarizeReceiptExample: SummarizeReceipt = {
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

export const invalidSummarizeReceiptExample: any = {
  "verb": "summarize",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "not-a-date",
  "request_hash": "sha256:xyz",
  "signature": "short",
  "error": "ok receipts should not rely on error only"
};
