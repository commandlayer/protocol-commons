// VALID describe.receipt #2 — error receipt variant showing that `agent` is optional

import type { DescribeReceipt } from "./describe.receipt.valid.1";

export const describeReceiptValid2: DescribeReceipt = {
  "verb": "describe",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:40:16Z",
  "request_hash": "sha256:4545ee72a3da3d2cd61bd90d0b79d44f932172bf7012c5f86f3ea30ffdf34026",
  "signature": "MEYCIQD4fF6hH8jJ0lL2nP4rT6vX8zA1cC3eE5gH7iJ9kL1mNAIhAN6pQ8rS0tU2vW4xY6zB8dD0fF2hH4jJ6lL8nP0rT2",
  "error": "The input referenced an image asset that was not retrievable at description time."
};
