// VALID format.request #1 — aligned with schemas/v1.1.0/commons/format/format.request.schema.json

export type FormatMode = "markdown" | "html" | "plain" | "json";

export interface FormatRequest {
  verb: "format";
  version: "1.1.0";
  input: string;
  mode?: FormatMode;
}

export const formatRequestValid1: FormatRequest = {
  "verb": "format",
  "version": "1.1.0",
  "input": "Launch checklist: finalize schemas; pin CID; publish manifest; announce examples.",
  "mode": "markdown"
};
