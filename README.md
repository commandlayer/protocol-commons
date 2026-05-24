# Deprecated: CommandLayer Protocol Commons

This repository is deprecated and should be treated as an archived historical source.

The Commons package remains available on npm:

```bash
npm install @commandlayer/commons
```

Package:

https://www.npmjs.com/package/@commandlayer/commons

## Current direction

CommandLayer is consolidating around CLAS and verifiable action receipts.

Going forward:

- canonical CLAS/spec work lives in `commandlayer/clas`
- active SDK work lives in `commandlayer/agent-sdk`
- public verification/docs live in `commandlayer/commandlayer-org`
- historical Commons schemas remain available through the published npm package `@commandlayer/commons`

Do not use this repository as the active source of truth for new CommandLayer integrations.

## Why this repo is being archived

Protocol-Commons originally defined shared semantic action schemas and verb families. That work is now superseded by the CLAS direction and the current receipt-verification architecture.

This repository is retained only so older references, package consumers, and historical schema work remain understandable.

## Historical package scope

The npm package previously provided:

- canonical verb schemas
- JSON Schema validation assets
- checksum records
- v1.0.0 and v1.1.0 Commons schema lines
- examples for older Commons-style action payloads

New integrations should not build against this repo directly.

## Recommended path

Use the current CommandLayer repos instead:

- CLAS/spec: https://github.com/commandlayer/clas
- Agent SDK: https://github.com/commandlayer/agent-sdk
- Public verifier/docs: https://github.com/commandlayer/commandlayer-org
- VerifyAgent reference: https://github.com/commandlayer/verifyagent

## Status

- Repository status: deprecated / archive candidate
- npm package status: retained for compatibility
- New development: no
- New integrations: use CLAS + Agent SDK

## License

MIT.
