# CommandLayer Protocol — Commons

**The canonical semantic contract for autonomous agents.**  
*Verbs, schemas, and validation for the current v1.1.0 release.*

[![Schemas](https://img.shields.io/badge/Schemas-v1.1.0%20current-blue)](https://github.com/commandlayer/protocol-commons)
[![NPM Version](https://img.shields.io/npm/v/@commandlayer/commons)](https://www.npmjs.com/package/@commandlayer/commons)
[![CI Status](https://img.shields.io/github/actions/workflow/status/commandlayer/protocol-commons/validate.yml?branch=main&label=CI)](https://github.com/commandlayer/protocol-commons/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/commandlayer/protocol-commons/blob/main/LICENSE)

---

Protocol-Commons defines the shared semantic layer for CommandLayer agents:

- canonical verbs
- strict JSON Schema validation
- versioned schema publication
- checksum-based integrity records
- documented release metadata

The current release is **v1.1.0**. The active schema line is **`schemas/v1.1.0/commons`**. Version **v1.0.0** is preserved only as a historical legacy line.

## Release Status

- **Current release:** `v1.1.0`
- **Active schema line:** `schemas/v1.1.0/commons`
- **Pinned canonical release:** `v1.1.0` once its CID is recorded in `manifest.json`
- **Historical release:** `v1.0.0` with published CID `bafybeigvf6nkzws7dblos74dqqjkguwkrwn4a2c27ieygoxmgofyzdkz6m`
- **IPFS publication tracking:** recorded in `manifest.json` separately from HTTPS schema hosting

HTTPS hosting and IPFS pinning are separate distribution layers:

- HTTPS hosting provides the live canonical schema URLs used by the `$id` fields
- IPFS pinning records a separate content-addressed publication state for the same version when a CID is published

You do not need IPFS context to understand or validate the schemas. For in-repo integrity checks, use:

```bash
npm run checksums:verify
```

## Table of Contents
- [Why Now](#why-now)
- [Quickstart](#quickstart)
- [Package Notes](#package-notes)
- [Commons v1.1.0](#commons-v110)
- [Canonical Verbs](#canonical-verbs)
- [Repository Structure](#repository-structure)
- [Manifest and Integrity Records](#manifest-and-integrity-records)
- [Validation](#validation)
- [Examples](#examples)
- [License](#license)

## Why Now

Autonomous agents need shared meaning to interoperate across runtimes, vendors, and transport layers.

Protocol-Commons provides that shared meaning through:

- a stable verb set
- versioned JSON Schemas
- strict request and receipt validation
- release metadata and checksum verification

Execution, identity, payment, routing, and storage can evolve independently around those semantics.

## Quickstart

Install Commons and AJV:

```bash
npm install @commandlayer/commons ajv ajv-formats ajv-errors
```

Validate the full repository surface locally:

```bash
npm install
npm run validate
```

`npm run validate` is the primary repository check. It compiles the schemas and validates the shipped example fixtures against their intended outcomes.

### Programmatic usage (Node.js / ESM)

```js
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import summarizeRequestSchema from '@commandlayer/commons/schemas/v1.1.0/commons/summarize/summarize.request.schema.json' with { type: 'json' };

const ajv = new Ajv2020({ strict: true, allErrors: true, strictRequired: false, allowUnionTypes: false });
addFormats(ajv);

const validate = ajv.compile(summarizeRequestSchema);

const input = {
  verb: 'summarize',
  version: '1.1.0',
  input: 'Protocol-Commons v1.1.0 uses a flat request shape.',
  mode: 'brief'
};

console.log(validate(input));
console.log(validate.errors ?? []);
```

## Package Notes

- Examples are available in the GitHub repository and are **not included** in the npm package.
- Do not assume `examples/` exists locally after `npm install @commandlayer/commons`.
- TypeScript examples in this repository are illustrative and are **not currently validated by CI**.

If you want to validate repository fixtures directly, clone the repository and use the local paths from the repo root.

## Commons v1.1.0

Commons v1.1.0 is the **current release** and the **active schema line** for this repository.

It is the primary documentation and validation target for Commons. Its schema files live under `schemas/v1.1.0/commons/`, and its canonical HTTPS `$id` values resolve under `https://commandlayer.org/schemas/v1.1.0/...`.

Version `v1.0.0` remains available only for historical reference, compatibility review, and legacy auditing. It is not the active schema line.

The v1.1.0 contract is intentionally small:

```json
{
  "verb": "<canonical verb>",
  "version": "1.1.0",
  "input": "<non-empty string>",
  "mode": "<optional verb-specific mode>"
}
```

Receipts use a flat structure with checksum-oriented evidence fields and optional content-address references:

```json
{
  "verb": "<canonical verb>",
  "version": "1.1.0",
  "status": "ok | error",
  "timestamp": "<RFC 3339 date-time>",
  "request_hash": "sha256:<64 lowercase hex chars>",
  "result_hash": "sha256:<64 lowercase hex chars>",
  "result_cid": "<optional content identifier>",
  "summary": "<required when status = ok>",
  "signature": "<schema-defined detached signature field>",
  "error": "<required when status = error>"
}
```

Protocol-Commons documents schema structure and validation rules. It does not define transport guarantees, settlement logic, or signed release provenance.

## Canonical Verbs

The Commons verb set for v1.1.0 is:

- `analyze`
- `classify`
- `clean`
- `convert`
- `describe`
- `explain`
- `fetch`
- `format`
- `parse`
- `summarize`

Each verb has exactly two schema files in v1.1.0:

- `<verb>.request.schema.json`
- `<verb>.receipt.schema.json`

Example paths:

- `schemas/v1.1.0/commons/analyze/analyze.request.schema.json`
- `schemas/v1.1.0/commons/analyze/analyze.receipt.schema.json`

## Repository Structure

```text
.
├── examples/
│   ├── v1.0.0/
│   └── v1.1.0/
├── schemas/
│   ├── v1.0.0/
│   └── v1.1.0/
├── CHANGELOG.md
├── COMPLIANCE.md
├── GOVERNANCE.md
├── manifest.json
├── ONBOARDING.md
├── RESOLUTION.md
├── SCHEMAS.md
├── SECURITY_PROVENANCE.md
└── SPEC.md
```

## Manifest and Integrity Records

`manifest.json` records the release metadata for the current package version, including:

- active release version
- schema roots
- example roots
- IPFS publication record
- historical release metadata

`checksums.txt` records SHA-256 checksums for shipped schema artifacts.

Together they provide:

- checksum-based integrity
- a versioned publication record
- documented release history
- IPFS publication tracked separately from HTTPS hosting

This repository does **not** currently publish signed release artifacts.

## Validation

Use the following checks from the repository root:

```bash
npm run validate
npm run validate:schemas
npm run validate:examples
npm run checksums:verify
```

## Examples

Repository fixtures under `examples/` are intended to be practical references for implementers.

Guidelines:

- valid examples should model plausible protocol payloads
- invalid examples should usually demonstrate one clear failure mode
- fixtures should stay version-aligned with the schema family they target

Again: examples live in the GitHub repository, not the npm package.

## License

MIT.
