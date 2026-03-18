// examples/v1.1.0/commons/summarize/ts/summarize.request.examples.ts

export type SummarizeMode = "brief" | "detailed" | "bullets" | "headline";

export interface SummarizeRequest {
  verb: "summarize";
  version: "1.1.0";
  input: string;
  mode?: SummarizeMode;
}

export const validSummarizeRequestExample: SummarizeRequest = {
  "verb": "summarize",
  "version": "1.1.0",
  "input": "CommandLayer Commons v1.1.0 simplifies every request into a flat verb/version/input shape and narrows receipts to signed execution evidence.",
  "mode": "brief"
};

export const invalidSummarizeRequestExample: any = {
  "verb": "analyze",
  "version": "1.1.0",
  "input": {
    "text": "This should be a string."
  },
  "mode": "tweet"
};
