// INVALID classify.request #1 — input must be a string

export const classifyRequestInvalid1: any = {
  "verb": "classify",
  "version": "1.1.0",
  "input": {
    "text": "This should be a string."
  },
  "mode": "single"
};
