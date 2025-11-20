// VALID classify.request #1

export interface X402ClassifyRequestEnvelope {
  verb: "classify";
  version: "1.0.0";
  request_id?: string;
  network?: string;
  tenant?: string;
}

export interface ClassifyRequest {
  x402: X402ClassifyRequestEnvelope;
  input: string;
}

export const classifyRequestValid1: ClassifyRequest = {
  x402: {
    verb: "classify",
    version: "1.0.0",
    request_id: "req-classify-2025-11-19-0001"
  },
  input:
    "Classify this document into one or more categories: protocol-spec, marketing, legal, or ops."
};
