// INVALID convert.receipt #1 — signature is shorter than the enforced minimum

export const convertReceiptInvalid1: any = {
  "verb": "convert",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T12:30:00Z",
  "agent": "convertagent.eth",
  "request_hash": "sha256:fbab825a8f87dfdc5ff7e8770baad69c3ab381654677a1f2df45f1ad0dfbd2af",
  "summary": "Converted the HTML fragment into markdown headings and body copy.",
  "signature": "shortsig"
};
