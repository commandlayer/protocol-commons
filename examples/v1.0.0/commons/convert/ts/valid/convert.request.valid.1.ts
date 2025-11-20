// VALID convert.request #1

export interface X402ConvertRequestEnvelope {
  verb: "convert";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface ConvertLimits {
  max_output_tokens?: number;
  timeout_ms?: number;
}

export interface ConvertChannel {
  protocol: string;
  input_modalities: string[];
  output_modalities: string[];
}

export interface ConvertInput {
  content: string;
  source_format: string;
  target_format: string;
  options?: Record<string, unknown>;
}

export interface ConvertRequest {
  x402: X402ConvertRequestEnvelope;
  actor: string;
  limits: ConvertLimits;
  channel: ConvertChannel;
  input: ConvertInput;
}

export const convertRequestValid1: ConvertRequest = {
  x402: {
    verb: "convert",
    version: "1.0.0",
    request_id: "req-convert-2025-11-19-0001"
  },
  actor: "did:example:caller-001",
  limits: {
    max_output_tokens: 2048,
    timeout_ms: 8000
  },
  channel: {
    protocol: "https",
    input_modalities: ["text"],
    output_modalities: ["text"]
  },
  input: {
    content: "<h1>CommandLayer</h1><p>Canonical verbs for agents.</p>",
    source_format: "html",
    target_format: "markdown",
    options: {
      preserve_headings: true,
      unwrap_single_paragraph: true
    }
  }
};
