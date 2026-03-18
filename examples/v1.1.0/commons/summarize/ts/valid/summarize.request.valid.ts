// VALID summarize.request aggregate example

import type { SummarizeRequest } from "./summarize.request.examples";

export const summarizeRequestValid: SummarizeRequest = {
  "verb": "summarize",
  "version": "1.1.0",
  "input": "The release package includes ten canonical verbs, strict schemas, immutable checksums, and example payloads meant for validator demos and judge review.",
  "mode": "bullets"
};
