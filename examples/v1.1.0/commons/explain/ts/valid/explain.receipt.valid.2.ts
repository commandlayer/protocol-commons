// VALID explain.receipt #2 — error receipt variant showing that `agent` is optional

import type { ExplainReceipt } from "./explain.receipt.valid.1";

export const explainReceiptValid2: ExplainReceipt = {
  "verb": "explain",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "2026-03-18T12:50:23Z",
  "request_hash": "sha256:3c8db89b5a2c8ee3f3d44d030087d9f993b652ec688b36b6cb4ef2932f8e2303",
  "signature": "MEQCIC0lL2nP4rT6vX8zA1cC3eE5gH7iJ9kL1mN3pQ5rS7tUAiBQ6vW8xY0zB2dD4fF6hH8jJ0lL2nP4rT6vX8zA1cC3e",
  "error": "The subject text referenced an unsupported external proof format, so no grounded explanation was produced."
};
