// INVALID summarize.request #1 — input must be a string

export const summarizeRequestInvalid1: any = {
  "verb": "summarize",
  "version": "1.1.0",
  "input": {
    "text": "This should be a string."
  },
  "mode": "brief"
};
