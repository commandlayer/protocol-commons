// VALID analyze.request #1 — aligned with analyze.request.schema.json (assumed)

export interface X402AnalyzeRequestEnvelope {
  verb: "analyze";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface AnalyzeLimits {
  max_tokens?: number;
  timeout_ms?: number;
}

export interface AnalyzeRequest {
  x402: X402AnalyzeRequestEnvelope;
  input: string;
  goal?: string;
  hints?: string[];
  limits?: AnalyzeLimits;
  metadata?: Record<string, unknown>;
}

export const analyzeRequestValid1: AnalyzeRequest = {
  x402: {
    verb: "analyze",
    version: "1.0.0",
    request_id: "req-analyze-2025-11-19-0001"
  },
  input:
    "Review this plan and identify protocol, ecosystem, and execution risks for CommandLayer launch.",
  goal: "Surface top 5 risks and unknowns.",
  hints: [
    "Focus on external ecosystem dependencies.",
    "Call out assumptions about VC interest."
  ],
  limits: {
    max_tokens: 512,
    timeout_ms: 4000
  },
  metadata: {
    project: "commandlayer",
    verb_set: "commons"
  }
};
