// VALID fetch.request #1 — aligned with schemas/v1.1.0/commons/fetch/fetch.request.schema.json

export type FetchMode = "text" | "json" | "html" | "raw";

export interface FetchRequest {
  verb: "fetch";
  version: "1.1.0";
  input: string;
  mode?: FetchMode;
}

export const fetchRequestValid1: FetchRequest = {
  "verb": "fetch",
  "version": "1.1.0",
  "input": "https://api.commandlayer.org/v1/status",
  "mode": "json"
};
