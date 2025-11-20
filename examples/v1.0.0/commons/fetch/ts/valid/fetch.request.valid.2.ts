// VALID fetch.request #2 — same schema, different data

import type { FetchRequest } from "./fetch.request.valid.1";

export const fetchRequestValid2: FetchRequest = {
  x402: {
    verb: "fetch",
    version: "1.0.0",
    request_id: "req-fetch-2025-11-19-0002",
    network: "base"
  },
  source: "events:commandlayer:launch",
  query: "type=error AND verb=summarize",
  max_items: 50
};
