// INVALID explain.request #1 — input must be a string

export const explainRequestInvalid1: any = {
  "verb": "explain",
  "version": "1.1.0",
  "input": {
    "text": "This should be a string."
  },
  "mode": "step-by-step"
};
