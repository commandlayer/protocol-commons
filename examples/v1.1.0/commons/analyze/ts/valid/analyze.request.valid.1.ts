// VALID analyze.request #1 — aligned with schemas/v1.1.0/commons/analyze/analyze.request.schema.json

export type AnalyzeMode = "categorize" | "extract" | "score" | "synthesize";

export interface AnalyzeRequest {
  verb: "analyze";
  version: "1.1.0";
  input: string;
  mode?: AnalyzeMode;
}

export const analyzeRequestValid1: AnalyzeRequest = {
  "verb": "analyze",
  "version": "1.1.0",
  "input": "Review this smart-contract audit summary and extract the core risk themes for launch readiness.",
  "mode": "extract"
};
