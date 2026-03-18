// VALID convert.receipt #1 — success receipt with signer identity and hashes

export interface ConvertReceipt {
  verb: "convert";
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

export const convertReceiptValid1: ConvertReceipt = {
  "verb": "convert",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T12:00:00Z",
  "agent": "convertagent.eth",
  "request_hash": "sha256:1111111111111111111111111111111111111111111111111111111111111111",
  "result_hash": "sha256:2222222222222222222222222222222222222222222222222222222222222222",
  "result_cid": "bafybeiconvertreceiptokexample0001",
  "summary": "Converted plain release notes into markdown sections suitable for documentation.",
  "signature": "sigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
};
