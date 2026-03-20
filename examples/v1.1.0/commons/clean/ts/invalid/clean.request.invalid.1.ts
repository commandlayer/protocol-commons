// INVALID clean.request #1 — unsupported mode enum value

export const cleanRequestInvalid1: any = {
  "verb": "clean",
  "version": "1.1.0",
  "input": "<p>Hello&nbsp;&nbsp;<script>alert(1)</script>world</p>",
  "mode": "compress"
};
