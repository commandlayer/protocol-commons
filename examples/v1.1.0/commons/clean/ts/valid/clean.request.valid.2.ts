// VALID clean.request #2 — alternate minimal, schema-accurate example

import type { CleanRequest, CleanMode } from "./clean.request.valid.1";

const mode: CleanMode = "sanitize";

export const cleanRequestValid2: CleanRequest = {
  "verb": "clean",
  "version": "1.1.0",
  "input": "<script>alert(1)</script><p>Signed receipt ready.</p>",
  "mode": "sanitize"
};
