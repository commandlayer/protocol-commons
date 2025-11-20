// VALID fetch.request #1 — aligned with fetch.request.schema.json

export interface X402FetchRequestEnvelope {
  verb: "fetch";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface FetchRequest {
  x402: X402FetchRequestEnvelope;
  source: string;
  query?: string;
  max_items?: number;
  include_metadata?: boolean;
  metadata?: Record<string, unknown>;
}

export const fetchRequestValid1: FetchRequest = {
  x402: {
    verb: "fetch",
    version: "1.0.0",
    request_id: "req-fetch-2025-11-19-0001"
  },
  source: "https://api.commandlayer.org/logs",
  query: "level=error AND date>=2025-11-01",
  max_items: 100,
  include_metadata: true,
  metadata: {
    project: "commandlayer",
    env: "prod"
  }
};
