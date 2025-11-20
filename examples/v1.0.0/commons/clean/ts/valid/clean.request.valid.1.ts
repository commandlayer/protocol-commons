// VALID clean.request #1

export interface X402CleanRequestEnvelope {
  verb: "clean";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface CleanLimits {
  max_output_tokens?: number;
  timeout_ms?: number;
}

export interface CleanChannel {
  protocol: string;
  input_modalities: string[];
  output_modalities: string[];
}

export interface CleanInput {
  content: string;
  operations?: string[];
}

export interface CleanRequest {
  x402: X402CleanRequestEnvelope;
  actor: string;
  limits: CleanLimits;
  channel: CleanChannel;
  input: CleanInput;
}

export const cleanRequestValid1: CleanRequest = {
  x402: {
    verb: "clean",
    version: "1.0.0",
    request_id: "req-clean-2025-11-19-0001"
  },
  actor: "did:example:caller-001",
  limits: {
    max_output_tokens: 1024,
    timeout_ms: 5000
  },
  channel: {
    protocol: "https",
    input_modalities: ["text"],
    output_modalities: ["text"]
  },
  input: {
    content:
      "  This is   noisy   text with   extra   spaces, HTML <b>tags</b>, and   weird   spacing.  ",
    operations: ["trim", "normalize_whitespace", "strip_html"]
  }
};
