// VALID format.request #2 — alternate minimal, schema-accurate example

import type { FormatRequest, FormatMode } from "./format.request.valid.1";

const mode: FormatMode = "json";

export const formatRequestValid2: FormatRequest = {
  "verb": "format",
  "version": "1.1.0",
  "input": "validator=true signer=ready examples=generated",
  "mode": "json"
};
