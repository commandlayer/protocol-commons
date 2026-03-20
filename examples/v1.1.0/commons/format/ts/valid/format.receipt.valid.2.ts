// VALID format.receipt #2 — error receipt variant showing that `agent` is optional

import type { FormatReceipt } from "./format.receipt.valid.1";

export const formatReceiptValid2: FormatReceipt = {
  "verb": "format",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T13:10:33Z",
  "request_hash": "sha256:226d4c0cd4c9ecf106b85bca1b80a0cbbf7b2d84ac90f31472e3a8f14db76e20",
  "signature": "MEQCIA7kL9mN1pQ3rS5tU7vW9xY1zA3bC5dE7fG9hJ1kL3mNAiAa0cC2eE4gH6iJ8kL0mN2pQ4rS6tU8vW0xY2zA4bC6",
  "error": "The formatter rejected the requested representation because the payload was not plain text."
};
