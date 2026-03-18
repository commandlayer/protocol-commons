// INVALID classify.request #1 — wrong verb + wrong input type + unsupported mode

export const classifyRequestInvalid1: any = {
  "verb": "summarize",
  "version": "1.1.0",
  "input": {
    "text": "This should be a string."
  },
  "mode": "ordinal"
};
