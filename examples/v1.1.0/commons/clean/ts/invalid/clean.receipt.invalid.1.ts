// INVALID clean.receipt #1 — timestamp must satisfy date-time format

export const cleanReceiptInvalid1: any = {
  "verb": "clean",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026/03/18 12:20:00 UTC",
  "agent": "cleanagent.eth",
  "request_hash": "sha256:37f8c2f8ef1d3819a3d8f4a662637df84256d4d2d95f0f00fd770af409f4233f",
  "summary": "Removed script tags, normalized whitespace, and preserved visible text.",
  "signature": "MEUCIB2dD4fF6hH8jJ0lL2nP4rT6vX8zA1cC3eE5gH7iJ9kLAiEAqS6uV8wY0zB2dD4fF6hH8jJ0lL2nP4rT6vX8zA1cC3"
};
