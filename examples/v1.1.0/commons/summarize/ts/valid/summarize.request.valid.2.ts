// VALID summarize.request #2 — alternate minimal, schema-accurate example

import type { SummarizeRequest, SummarizeMode } from "./summarize.request.valid.1";

const mode: SummarizeMode = "bullets";

export const summarizeRequestValid2: SummarizeRequest = {
  "verb": "summarize",
  "version": "1.1.0",
  "input": "The release package includes ten canonical verbs, strict schemas, immutable checksums, and example payloads meant for validator demos and judge review.",
  "mode": "bullets"
};
