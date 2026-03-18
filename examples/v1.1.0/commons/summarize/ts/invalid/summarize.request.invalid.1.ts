// INVALID summarize.request #1 — wrong verb + wrong input type + unsupported mode

export const summarizeRequestInvalid1: any = {
  "verb": "analyze",
  "version": "1.1.0",
  "input": {
    "text": "This should be a string."
  },
  "mode": "tweet"
};
