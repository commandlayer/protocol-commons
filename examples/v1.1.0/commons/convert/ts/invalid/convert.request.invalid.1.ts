// INVALID convert.request #1 — input must be a string

export const convertRequestInvalid1: any = {
  "verb": "convert",
  "version": "1.1.0",
  "input": {
    "text": "This should be a string."
  },
  "mode": "markdown"
};
