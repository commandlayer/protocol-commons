// VALID summarize.request #1 — protocol aligned with JSON schema

export interface X402SummarizeRequestEnvelope {
  verb: "summarize";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface SummarizeInput {
  content: string;
}

export interface SummarizeLimits {
  max_output_tokens: number;
}

export interface SummarizeChannel {
  protocol: string;
  input_modalities: string[];
  output_modalities: string[];
}

export interface SummarizeRequest {
  x402: X402SummarizeRequestEnvelope;
  actor: string;
  limits: SummarizeLimits;
  channel: SummarizeChannel;
  input: SummarizeInput;
}

export const summarizeRequestValid1: SummarizeRequest = {
  x402: {
    verb: "summarize",
    version: "1.0.0",
    request_id: "req-summarize-2025-11-19-0001"
  },
  actor: "did:example:caller-001",
  limits: {
    max_output_tokens: 512
  },
  channel: {
    protocol: "https",
    input_modalities: ["text"],
    output_modalities: ["text"]
  },
  input: {
    content:
      "CommandLayer defines a canonical verb and schema layer for agent-to-agent communication, aligned with x402 and ERC-8004."
  }
};
