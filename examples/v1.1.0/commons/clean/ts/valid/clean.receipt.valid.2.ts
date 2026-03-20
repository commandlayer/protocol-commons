// VALID clean.receipt #2 — error receipt variant showing that `agent` is optional

import type { CleanReceipt } from "./clean.receipt.valid.1";

export const cleanReceiptValid2: CleanReceipt = {
  "verb": "clean",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:20:17Z",
  "request_hash": "sha256:517a0fa7d6d7eaa77c6f627e0a090c4b113fb9f2f6e6bd878f7b4eef87f24451",
  "signature": "MEYCIQCH9iJ1kL3mN5pQ7rS9tU1vW3xY5zB7cD9eF1gH3iJ5kLIhAOmN8pQ0rS2tU4vW6xY8zA0bC2dE4fG6hJ8kL0mN2",
  "error": "The cleaner refused to sanitize binary control characters embedded in the payload."
};
