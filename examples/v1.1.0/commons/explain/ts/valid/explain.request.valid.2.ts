// VALID explain.request #2 — alternate minimal, schema-accurate example

import type { ExplainRequest, ExplainMode } from "./explain.request.valid.1";

const mode: ExplainMode = "simple";

export const explainRequestValid2: ExplainRequest = {
  "verb": "explain",
  "version": "1.1.0",
  "input": "Explain why flat request schemas make hackathon judging easier.",
  "mode": "simple"
};
