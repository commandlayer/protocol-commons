// VALID parse.request #2 — alternate minimal, schema-accurate example

import type { ParseRequest, ParseMode } from "./parse.request.valid.1";

const mode: ParseMode = "key-value";

export const parseRequestValid2: ParseRequest = {
  "verb": "parse",
  "version": "1.1.0",
  "input": "chain=base\nstatus=green\nlag_blocks=0",
  "mode": "key-value"
};
