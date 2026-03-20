// INVALID analyze.request #1 — input must be a string

export const analyzeRequestInvalid1: any = {
  "verb": "analyze",
  "version": "1.1.0",
  "input": {
    "text": "This should be a string."
  },
  "mode": "extract"
};
