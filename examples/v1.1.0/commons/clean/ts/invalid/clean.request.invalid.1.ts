// INVALID clean.request #1 — input must be a string

export const cleanRequestInvalid1: any = {
  "verb": "clean",
  "version": "1.1.0",
  "input": {
    "text": "This should be a string."
  },
  "mode": "normalize"
};
