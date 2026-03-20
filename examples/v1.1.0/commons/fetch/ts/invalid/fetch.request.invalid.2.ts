// INVALID fetch.request #2 — version must be a string literal

export const fetchRequestInvalid2: any = {
  "verb": "fetch",
  "version": 110,
  "input": "https://status.commandlayer.org/health.json",
  "mode": "json"
};
