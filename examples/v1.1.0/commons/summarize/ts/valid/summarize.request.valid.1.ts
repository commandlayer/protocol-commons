// VALID summarize.request #1 — aligned with schemas/v1.1.0/commons/summarize/summarize.request.schema.json

export type SummarizeMode = "brief" | "detailed" | "bullets" | "headline";

export interface SummarizeRequest {
  verb: "summarize";
  version: "1.1.0";
  input: string;
  mode?: SummarizeMode;
}

export const summarizeRequestValid1: SummarizeRequest = {
  "verb": "summarize",
  "version": "1.1.0",
  "input": "CommandLayer Commons v1.1.0 simplifies every request into a flat verb/version/input shape and narrows receipts to signed execution evidence.",
  "mode": "brief"
};
