// VALID clean.request #1 — aligned with schemas/v1.1.0/commons/clean/clean.request.schema.json

export type CleanMode = "normalize" | "deduplicate" | "strip" | "sanitize";

export interface CleanRequest {
  verb: "clean";
  version: "1.1.0";
  input: string;
  mode?: CleanMode;
}

export const cleanRequestValid1: CleanRequest = {
  "verb": "clean",
  "version": "1.1.0",
  "input": "  CommandLayer\tCommons   v1.1.0\n",
  "mode": "normalize"
};
