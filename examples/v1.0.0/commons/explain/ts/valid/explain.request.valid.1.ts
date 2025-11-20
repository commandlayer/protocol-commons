// VALID explain.request #1

export interface X402ExplainRequestEnvelope {
  verb: "explain";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface ExplainLimits {
  max_output_tokens?: number;
  timeout_ms?: number;
}

export interface ExplainChannel {
  protocol: string;
  input_modalities: string[];
  output_modalities: string[];
}

export interface ExplainInput {
  subject: string;
  context?: string;
  audience?: string;
  style?: string;
  detail_level?: "short" | "medium" | "long";
}

export interface ExplainRequest {
  x402: X402ExplainRequestEnvelope;
  actor: string;
  limits: ExplainLimits;
  channel: ExplainChannel;
  input: ExplainInput;
}

export const explainRequestValid1: ExplainRequest = {
  x402: {
    verb: "explain",
    version: "1.0.0",
    request_id: "req-explain-2025-11-19-0001"
  },
  actor: "did:example:caller-001",
  limits: {
    max_output_tokens: 512,
    timeout_ms: 5000
  },
  channel: {
    protocol: "https",
    input_modalities: ["text"],
    output_modalities: ["text"]
  },
  input: {
    subject: "What the CommandLayer commons repo does",
    context:
      "It defines JSON Schemas for core agent verbs like summarize, analyze, classify, and fetch.",
    audience: "novice",
    style: "step-by-step",
    detail_level: "medium"
  }
};
