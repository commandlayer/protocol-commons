// VALID describe.request #2 — alternate minimal, schema-accurate example

import type { DescribeRequest, DescribeMode } from "./describe.request.valid.1";

const mode: DescribeMode = "technical";

export const describeRequestValid2: DescribeRequest = {
  "verb": "describe",
  "version": "1.1.0",
  "input": "A CLI validator command that compiles the v1.1.0 summarize request schema and checks one payload.",
  "mode": "technical"
};
