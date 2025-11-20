// INVALID fetch.request #2 — bad max_items type

export const fetchRequestInvalid2: any = {
  x402: {
    verb: "fetch",
    version: "1.0.0",
    request_id: "req-fetch-2025-11-19-0003"
  },
  source: "https://api.commandlayer.org/logs",
  // ❌ should be integer
  max_items: "100"
};
