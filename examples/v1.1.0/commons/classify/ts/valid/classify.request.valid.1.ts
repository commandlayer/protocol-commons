// VALID classify.request #1 — aligned with schemas/v1.1.0/commons/classify/classify.request.schema.json

export type ClassifyMode = "single" | "multi" | "hierarchical";

export interface ClassifyRequest {
  verb: "classify";
  version: "1.1.0";
  input: string;
  mode?: ClassifyMode;
}

export const classifyRequestValid1: ClassifyRequest = {
  "verb": "classify",
  "version": "1.1.0",
  "input": "Payment failed after signature verification because the buyer wallet had insufficient balance.",
  "mode": "single"
};
