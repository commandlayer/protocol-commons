# CommandLayer Protocol — Commons

**The canonical semantic contract for autonomous agents.**  
*Verbs, schemas, and validation — or nothing interoperates.*

[![Schemas](https://img.shields.io/badge/Schemas-v1.1.0%20current-blue)](https://github.com/commandlayer/protocol-commons)
[![NPM Version](https://img.shields.io/npm/v/@commandlayer/commons)](https://www.npmjs.com/package/@commandlayer/commons)
[![CI Status](https://img.shields.io/github/actions/workflow/status/commandlayer/protocol-commons/validate.yml?branch=main&label=CI)](https://github.com/commandlayer/protocol-commons/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/commandlayer/protocol-commons/blob/main/LICENSE)

## Table of Contents
- [Why Now](#why-now)
- [Integrity Notice](#integrity-notice)
- [Real verbs. Real receipts.](#real-verbs-real-receipts)
- [Quickstart](#quickstart)
- [Commons v1.1.0](#commons-v110)
- [Why this exists](#why-this-exists)
- [What Commons enables](#what-commons-enables)
- [Canonical Verbs](#canonical-verbs)
- [Overview](#overview)
- [Key Principles](#key-principles)
- [This is not…](#this-is-not)
- [CommandLayer Protocol Stack](#commandlayer-protocol-stack)
- [Status](#status)
- [Repository Structure](#repository-structure)
- [Manifest](#manifest)
- [Immutability & Checksums](#immutability--checksums)
- [Validation](#validation)
- [TypeScript declarations](#typescript-declarations)
- [License](#license)
- [Next Layers](#next-layers)
- [References](#references)

---

## Why Now

Autonomous agents are leaving the lab, but without shared meaning they collapse into vendor-specific dialects.

CommandLayer separates responsibilities cleanly:

- **Protocol-Commons** defines shared semantics.
- **Identity and discovery layers** resolve who an agent is and where it can be reached.
- **Execution and payment layers** transport, meter, or settle work around those semantics.

Protocol-Commons is the stable verb-and-schema layer that lets machine intent travel across runtimes.

---

## Integrity Notice

- `schemas/v1.1.0/commons` is the current authoritative machine-artifact line in this repository.
- Running `bash scripts/generate-checksums.sh` with no arguments now targets `schemas/v1.1.0` by default.
- v1.1.0 schema `$id` values resolve directly to the repository-backed public artifact surface under `https://raw.githubusercontent.com/commandlayer/protocol-commons/main/schemas/v1.1.0/...`.
- `v1.0.0` remains the historical pinned release line with CID `bafybeigvf6nkzws7dblos74dqqjkguwkrwn4a2c27ieygoxmgofyzdkz6m`.
- `manifest.json` does **not** claim a v1.1.0 CID or release tag that does not yet exist. It records the CID as `null` with status `not-generated-in-repo`, and records the planned release tag as pending creation.

Verify integrity locally:

```bash
npm run checksums:verify
```

---

## Real verbs. Real receipts.

```jsonc
// summarize.request
{
  "verb": "summarize",
  "version": "1.1.0",
  "input": "CommandLayer Commons v1.1.0 simplifies every request into a flat verb/version/input shape and narrows receipts to signed execution evidence.",
  "mode": "brief"
}

// summarize.receipt
{
  "verb": "summarize",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "2026-03-18T12:00:00Z",
  "agent": "summarizeagent.eth",
  "request_hash": "sha256:dc746bfc1fa1fcb5f7a4ed421c8a693076855f5f4e8d37e49f6dd35f64e5f5fd",
  "result_hash": "sha256:c3c72cbbe9dc4612ab9fd5f8c0d49fe9cc7ed6f6f4ff85c5d7a6b7b653b2a36b",
  "result_cid": "bafybeig2c5v7b9n1m3k5j7h9g2f4d6s8a1p3o5i7u9y2t4r6e8w1q3z5x7",
  "summary": "Commons v1.1.0 makes requests smaller and receipts easier to verify while preserving stable verb semantics.",
  "signature": "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDpleGFtcGxlOmNvbW1vbnMjdjEuMS4wIn1fZXlKaGMzTWlPaUpqYjIxdFlXNWtiR0Y1WlhJdVpYUm9JbjBfcTgzUXhKOGRabDFzUjVuVjdtSzJwVDR5SDZ1VzljQjNhRTVnSjdkTDluUA"
}
```

Every v1.1.0 Commons receipt uses the same evidence-oriented spine:

- `status`
- `timestamp`
- `agent` *(optional signer identity)*
- `request_hash`
- `result_hash` *(optional)*
- `result_cid` *(optional)*
- `summary` *(required on success)*
- `signature`
- `error` *(required on error)*

---

## Quickstart

Install Commons and AJV:

```bash
npm install @commandlayer/commons ajv ajv-formats ajv-errors
```

Validate the repository artifacts:

```bash
npm install
npm run validate
```

Validate a specific example with AJV:

```bash
node --input-type=module <<'EOF_NODE'
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import fs from 'node:fs';
import summarizeRequestSchema from './schemas/v1.1.0/commons/summarize/summarize.request.schema.json' with { type: 'json' };

const ajv = new Ajv2020({ strict: true, allErrors: true, strictRequired: false, allowUnionTypes: false });
addFormats(ajv);

const validate = ajv.compile(summarizeRequestSchema);
const data = JSON.parse(fs.readFileSync('./examples/v1.1.0/commons/summarize/json/valid/001-summarize.request.valid.json', 'utf8'));

console.log(validate(data));
console.log(validate.errors ?? []);
EOF_NODE
```

Programmatic usage (Node.js / ESM):

```js
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import summarizeRequestSchema from '@commandlayer/commons/schemas/v1.1.0/commons/summarize/summarize.request.schema.json' with { type: 'json' };

const ajv = new Ajv2020({ strict: true, allErrors: true, strictRequired: false, allowUnionTypes: false });
addFormats(ajv);

const validate = ajv.compile(summarizeRequestSchema);

console.log(validate({
  verb: 'summarize',
  version: '1.1.0',
  input: 'CommandLayer Commons v1.1.0 simplifies every request into a flat shape.',
  mode: 'brief'
}));
```

---

## Commons v1.1.0

Commons v1.1.0 is the current canonical schema family in this repository.

It is the primary documentation and validation target for Commons. The repository now treats `schemas/v1.1.0` as the default authoritative artifact root, while `v1.0.0` remains the historical pinned release line. v1.1.0 `$id` values resolve against the repository-backed raw GitHub artifact surface, and `manifest.json` records CID and release-tag state without placeholders.

- Each request schema is standalone.
- Each receipt schema is standalone.
- No shared `$ref` dependency tree is required for v1.1.0 Commons.
- Commercial, transport, and payment envelopes are out of scope for Commons itself.

The request contract is intentionally small:

```json
{
  "verb": "<canonical verb>",
  "version": "1.1.0",
  "input": "<caller-supplied string>",
  "mode": "<verb-specific optional mode>"
}
```

The receipt contract is proof-oriented rather than transport-oriented:

```json
{
  "verb": "<canonical verb>",
  "version": "1.1.0",
  "status": "ok | error",
  "timestamp": "<RFC 3339 date-time>",
  "agent": "<optional stable signer identity>",
  "request_hash": "sha256:<64 lowercase hex chars>",
  "result_hash": "sha256:<64 lowercase hex chars>",
  "result_cid": "<optional content identifier>",
  "summary": "<required when status = ok>",
  "signature": "<base64url detached signature>",
  "error": "<required when status = error>"
}
```

---

## Why this exists

Fragmented agents create isolated ecosystems and brittle automation.

Protocol-Commons delivers:

- **Shared semantics**
- **Typed request and receipt envelopes**
- **Signed receipts bound to request hashes**
- **Portable behavior across runtimes**
- **A stable foundation other layers can build around**

---

## What Commons enables

- **Deterministic action contracts**
- **Runtime-level validation**
- **Receipt verification through hashes and signatures**
- **Cross-vendor interoperability**
- **Versioned, immutable semantics**

Protocol-Commons is the semantic foundation of the CommandLayer stack.

---

## Canonical Verbs

The Commons defines 10 universal actions used across common multi-agent workflows:

| Verb      | Purpose                                               | Guarantees                                             |
|-----------|-------------------------------------------------------|--------------------------------------------------------|
| analyze   | Extract insights from structured or unstructured data | Identifies meaning, relationships, or signals          |
| classify  | Categorize input according to a known schema          | Deterministic label assignment                         |
| clean     | Normalize or remove noise from data                   | Output retains meaning with improved quality           |
| convert   | Transform between formats or representations          | Equivalent content in a different representation       |
| describe  | State what something *is*                             | Attributes, context, or defining properties            |
| explain   | State *why* or *how* something is true                | Causal or relational justification                     |
| fetch     | Retrieve data from a remote or indirect source        | Receipt can attest to the requested content retrieval  |
| format    | Produce content in a structured or presentable shape  | Output conforms to the declared representation intent  |
| parse     | Extract structured meaning from raw input             | Typed structure extracted from unstructured content    |
| summarize | Compress content while preserving key meaning         | Core information retained with reduced verbosity       |

Each verb provides a canonical request schema and a canonical receipt schema.

---

## Overview

Protocol-Commons is the schema package for canonical agent verbs.

For v1.1.0, the Commons layer is intentionally flat:

- requests contain the action intent and caller input
- receipts contain execution status plus signer-bound evidence
- versioned directories preserve immutability over time

---

## Key Principles

1. **Semantic stability** — verb meanings do not drift within a published version.
2. **Strict validation** — schemas compile under Ajv 2020-12 strict mode.
3. **Immutable releases** — published version directories are append-only historical artifacts.
4. **Minimal envelopes** — Commons defines semantics, not every higher-layer concern.
5. **Verifiable receipts** — trust comes from request hashes, optional result hashes/CIDs, and signatures.

---

## This is not…

Protocol-Commons is **not**:

- a payment protocol
- an identity registry
- a transport envelope standard
- a runtime execution engine
- a guarantee of result correctness beyond the attested hashes and signer identity

Those concerns can be layered on top, but they are not defined by the v1.1.0 Commons schemas.

---

## CommandLayer Protocol Stack

```text
Execution / settlement layers
        ↑
Identity / routing layers
        ↑
Protocol-Commons (semantic verbs + schemas)
```

Commons gives upper layers a stable meaning layer to build around.

---

## Status

**v1.1.0 — current canonical schema family**

- `v1.1.0` is the current flat Commons layout in this repo.
- `v1.0.0` remains the historical pinned release line.
- `v1.1.0` schema URLs are resolvable today, but CID generation and release tagging remain explicit release steps.

---

## Repository Structure

```text
.
├── CONTRIBUTING.md
├── README.md
├── SCHEMAS.md
├── SPEC.md
├── checksums.txt
├── examples/
│   ├── v1.0.0/
│   │   └── commons/<verb>/{valid,invalid}/*.json
│   └── v1.1.0/
│       └── commons/<verb>/json/{valid,invalid}/*.json
├── manifest.json
├── package.json
├── schemas/
│   ├── v1.0.0/
│   │   ├── _shared/
│   │   └── commons/<verb>/{requests,receipts}/*.schema.json
│   └── v1.1.0/
│       └── commons/<verb>/
│           ├── <verb>.request.schema.json
│           └── <verb>.receipt.schema.json
└── scripts/
    ├── generate-checksums.sh
    ├── validate-all.mjs
    └── validate-examples.mjs
```

---

## Manifest

`manifest.json` records release metadata for the package, including:

- package version
- schema and example roots
- the current schema pin target
- per-verb request and receipt schema paths
- the public schema base URL for v1.1.0
- honest release-state fields for CID generation and release tagging

---

## Immutability & Checksums

Use the checksum and validation scripts shipped in the repo:

```bash
npm run checksums:gen
npm run checksums:verify
npm run validate
```

Published version directories must not be edited in place.

---

## Validation

Available commands:

```bash
npm run validate:schemas
npm run validate:examples
npm run validate
```

These commands compile schemas in strict Ajv mode and validate the shipped examples for both `v1.0.0` and `v1.1.0`.

---

## TypeScript declarations

This package intentionally ships canonical JSON Schemas rather than generated `.d.ts` artifacts. The distribution target is cross-runtime schema consumption, and the repository does not yet include a low-maintenance declaration-generation pipeline that would be authoritative across Node, browser, and non-TypeScript consumers.

If a future release adds schema-derived declarations, the process must be reproducible, committed to the release workflow, and documented as a generated artifact surface rather than a second source of truth.

---

## License

MIT.

---

## Next Layers

Commons is designed to be composed with other layers for identity, routing, transport, payment, or settlement. Those layers can wrap Commons requests and receipts, but they should not be confused with the Commons schema contract itself.

---

## References

- `SPEC.md`
- `SCHEMAS.md`
- `manifest.json`
- `schemas/v1.1.0/commons/`
