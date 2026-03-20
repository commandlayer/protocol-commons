// INVALID describe.request #1 — input must be a string

export const describeRequestInvalid1: any = {
  "verb": "describe",
  "version": "1.1.0",
  "input": {
    "text": "This should be a string."
  },
  "mode": "plain"
};
