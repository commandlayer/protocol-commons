// INVALID parse.request #2 — version must be a string literal

export const parseRequestInvalid2: any = {
  "verb": "parse",
  "version": 110,
  "input": "{\"network\":\"mainnet\",\"height\":20881234}",
  "mode": "json"
};
