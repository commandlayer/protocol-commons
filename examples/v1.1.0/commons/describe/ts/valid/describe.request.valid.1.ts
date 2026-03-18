// VALID describe.request #1 — aligned with schemas/v1.1.0/commons/describe/describe.request.schema.json

export type DescribeMode = "brief" | "detailed" | "technical" | "plain";

export interface DescribeRequest {
  verb: "describe";
  version: "1.1.0";
  input: string;
  mode?: DescribeMode;
}

export const describeRequestValid1: DescribeRequest = {
  "verb": "describe",
  "version": "1.1.0",
  "input": "A dashboard card showing receipt status, signer ENS, request hash, and result hash.",
  "mode": "plain"
};
