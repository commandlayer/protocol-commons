// INVALID fetch.request #1 — input must be a string

export const fetchRequestInvalid1: any = {
  "verb": "fetch",
  "version": "1.1.0",
  "input": {
    "text": "This should be a string."
  },
  "mode": "json"
};
