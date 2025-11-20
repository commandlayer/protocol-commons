// examples/v1.0.0/commons/summarize/ts/summarize.request.examples.ts

export interface X402SummarizeEnvelope {
  verb: "summarize";
  version: "1.0.0";
  request_id?: string;
  entry?: string;
  tenant?: string;
  network?: string;
  reply_to?: string;
}

export type SummarizeStyle = "short" | "detailed" | "bullet_points";

export type SummarizeFormat = "text" | "markdown" | "html" | "json" | "other";

export interface SummarizeRequest {
  x402: X402SummarizeEnvelope;
  /**
   * Raw content to be summarized (text, markdown, etc.).
   */
  input: string;

  /**
   * Optional high-level goal for the summary (e.g., "exec brief", "legal risk overview").
   */
  goal?: string;

  /**
   * Style hint for the summarization.
   */
  style?: SummarizeStyle;

  /**
   * Desired output format.
   */
  format?: SummarizeFormat;

  /**
   * Optional max tokens or length hint for providers.
   */
  max_tokens?: number;

  /**
   * Opaque caller-defined metadata that does not affect semantics.
   */
  metadata?: Record<string, unknown>;
}

// ✅ Valid summarize request example (protocol-aligned)
export const validSummarizeRequestExample: SummarizeRequest = {
  x402: {
    verb: "summarize",
    version: "1.0.0",
    request_id: "req-summarize-2025-11-19-0001",
    network: "mainnet",
    tenant: "demo-tenant-001"
  },
  input:
    "CommandLayer defines a canonical verb and schema layer for agent-to-agent communication, aligned with x402 and ERC-8004. The commons repo contains 10 stable verbs with strict JSON Schema definitions and examples used for interoperability.",
  goal: "Provide an executive summary focusing on purpose and readiness for launch.",
  style: "short",
  format: "markdown",
  max_tokens: 256,
  metadata: {
    project: "commandlayer",
    verb_set: "commons",
    version: "1.0.0"
  }
};

// ❌ Invalid summarize request example (should fail schema validation)
// Reasons (depending on the schema):
// - x402.verb is wrong ("translate")
// - input is not a string (number instead)
// - missing required x402 field if schema demands specific props
export const invalidSummarizeRequestExample: any = {
  x402: {
    verb: "translate",
    version: "1.0.0"
  },
  input: 42,
  style: "bullet_points",
  format: "markdown"
};
