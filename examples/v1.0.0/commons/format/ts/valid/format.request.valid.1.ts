// VALID format.request #1

export interface X402FormatRequestEnvelope {
  verb: "format";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface FormatLimits {
  max_output_tokens?: number;
  timeout_ms?: number;
}

export interface FormatChannel {
  protocol: string;
  input_modalities: string[];
  output_modalities: string[];
}

export interface FormatInput {
  content: string;
  source_style?: string;
  target_style: string;
  guidelines?: Record<string, unknown>;
}

export interface FormatRequest {
  x402: X402FormatRequestEnvelope;
  actor: string;
  limits: FormatLimits;
  channel: FormatChannel;
  input: FormatInput;
}

export const formatRequestValid1: FormatRequest = {
  x402: {
    verb: "format",
    version: "1.0.0",
    request_id: "req-format-2025-11-19-0001"
  },
  actor: "did:example:caller-001",
  limits: {
    max_output_tokens: 512,
    timeout_ms: 4000
  },
  channel: {
    protocol: "https",
    input_modalities: ["text"],
    output_modalities: ["text"]
  },
  input: {
    content:
      "CommandLayer defines canonical verbs for agents.\nThese verbs are expressed as JSON Schemas and aligned with x402 and ERC-8004.",
    source_style: "plain",
    target_style: "markdown-bullets",
    guidelines: {
      max_line_width: 80,
      include_intro_bullet: true
    }
  }
};
