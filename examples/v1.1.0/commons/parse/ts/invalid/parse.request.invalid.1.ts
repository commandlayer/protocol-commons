// INVALID parse.request #1 — input must be a string

export const parseRequestInvalid1: any = {
  "verb": "parse",
  "version": "1.1.0",
  "input": {
    "text": "This should be a string."
  },
  "mode": "json"
};
