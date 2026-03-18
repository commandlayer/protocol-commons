// VALID fetch.request #2 — alternate minimal, schema-accurate example

import type { FetchRequest, FetchMode } from "./fetch.request.valid.1";

const mode: FetchMode = "text";

export const fetchRequestValid2: FetchRequest = {
  "verb": "fetch",
  "version": "1.1.0",
  "input": "ipfs://bafybeigdyrzt6examplefetchartifact/readme.txt",
  "mode": "text"
};
