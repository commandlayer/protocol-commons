// VALID convert.request #2 — alternate minimal, schema-accurate example

import type { ConvertRequest, ConvertMode } from "./convert.request.valid.1";

const mode: ConvertMode = "json";

export const convertRequestValid2: ConvertRequest = {
  "verb": "convert",
  "version": "1.1.0",
  "input": "name=CommandLayer,version=1.1.0,verbs=10",
  "mode": "json"
};
