export const summarizeRequestValid = {
  x402: {
    verb: "summarize",
    version: "1.0.0",
    request_id: "req-ts-001",
    idempotency_key: "idem-req-ts-001"
  },
  trace: {
    trace_id: "trace-ts-001",
    span_id: "span-ts-001",
    timestamp: "2025-11-19T22:55:00Z"
  },
  actor: {
    id: "user-ts-001",
    display_name: "TS Example User",
    role: "user"
  },
  channel: {
    type: "http",
    endpoint: "https://api.example.com/a2a/summarize"
  },
  modalities: ["text"],
  limits: {
    max_chars: 400
  },
  input: {
    content: "This is some example content we want to summarize programmatically from TypeScript.",
    format: "text",
    locale: "en-US"
  },
  instructions: "Summarize this content for a technical stakeholder.",
  metadata: {
    tenant: "ts-tenant-001",
    source: "ts-example"
  }
} as const;

export const summarizeRequestInvalid = {
  x402: {
    verb: "summarize",
    version: "1.0.0"
  },
  trace: {
    trace_id: "trace-ts-001",
    span_id: "span-ts-001",
    timestamp: "2025-11-19T22:55:00Z"
  },
  actor: {
    id: "user-ts-001"
  },
  channel: {
    type: "invalid_channel"
  },
  modalities: [],
  input: {
    format: "text"
  }
  // missing required input.content, bad channel type, empty modalities
} as const;
