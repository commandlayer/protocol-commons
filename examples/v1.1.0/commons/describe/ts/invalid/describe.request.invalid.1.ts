// INVALID describe.request #1 — wrong verb + wrong input type + unsupported mode

export const describeRequestInvalid1: any = {
  "verb": "summarize",
  "version": "1.1.0",
  "input": {
    "text": "This should be a string."
  },
  "mode": "poetic"
};
