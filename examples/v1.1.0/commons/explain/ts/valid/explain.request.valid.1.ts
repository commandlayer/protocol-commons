// VALID explain.request #1 — aligned with schemas/v1.1.0/commons/explain/explain.request.schema.json

export type ExplainMode = "step-by-step" | "conceptual" | "technical" | "simple";

export interface ExplainRequest {
  verb: "explain";
  version: "1.1.0";
  input: string;
  mode?: ExplainMode;
}

export const explainRequestValid1: ExplainRequest = {
  "verb": "explain",
  "version": "1.1.0",
  "input": "Explain how a verifier should confirm that a receipt belongs to a request using request_hash and signature.",
  "mode": "step-by-step"
};
