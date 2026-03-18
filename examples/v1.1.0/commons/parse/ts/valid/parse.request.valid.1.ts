// VALID parse.request #1 — aligned with schemas/v1.1.0/commons/parse/parse.request.schema.json

export type ParseMode = "json" | "csv" | "key-value" | "list";

export interface ParseRequest {
  verb: "parse";
  version: "1.1.0";
  input: string;
  mode?: ParseMode;
}

export const parseRequestValid1: ParseRequest = {
  "verb": "parse",
  "version": "1.1.0",
  "input": "{\"network\":\"base\",\"status\":\"green\",\"height\":22790111}",
  "mode": "json"
};
