# CommandLayer Protocol — Commons

**The canonical semantic contract for autonomous agents.**  
*Verbs, schemas, and validation — or nothing interoperates.*

[![Schemas](https://img.shields.io/badge/Schemas-v1.1.0%20current-blue)](https://github.com/commandlayer/protocol-commons)
[![NPM Version](https://img.shields.io/npm/v/@commandlayer/commons)](https://www.npmjs.com/package/@commandlayer/commons)
[![CI Status](https://img.shields.io/github/actions/workflow/status/commandlayer/protocol-commons/validate.yml?branch=main&label=CI)](https://github.com/commandlayer/protocol-commons/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/commandlayer/protocol-commons/blob/main/LICENSE)

---

## Why Now

Autonomous agents are finally leaving the lab — but without shared meaning, they fragment into isolated API silos.

CommandLayer separates the stack into clear responsibilities:

- **Protocol-Commons** defines the shared semantic layer
- **Identity and discovery layers** can resolve who an agent is and where it can be reached
- **Execution and payment layers** can transport, meter, or settle work around those semantics

Protocol-Commons is the foundation for portable machine intent: a stable set of verbs plus strict JSON Schemas for requests and receipts.

---

> **Integrity Notice — Protocol-Commons v1.1.0**
>
> `schemas/v1.1.0/commons` is the current canonical in-repo Commons line:
> `schemas/v1.1.0/commons` — CID publication status: `PENDING`
>
> `v1.0.0` is retained as the historical pinned release line:
> `schemas/v1.0.0/` — CID: `bafybeigvf6nkzws7dblos74dqqjkguwkrwn4a2c27ieygoxmgofyzdkz6m`
>
> Verify integrity locally:
> ```bash
> npm run checksums:verify
> ```
>
> Any mismatch indicates modified artifacts.
> New versions MUST use a new version directory and, once published, a new CID.

---

Without a shared verb layer, ecosystems degrade into:

- Ad-hoc verbs and incompatible dialects
- Ambiguous receipts with inconsistent evidence
- No cross-runtime interoperability
- Closed vendor silos with fragile glue logic

**Protocol-Commons** fixes this with a canonical action language:

- Verbs + JSON Schemas + strict validation
- Stable request envelopes
- Signed receipts with hash-based verification evidence

If agents cannot agree on what actions mean, interoperability breaks.

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
  "request_hash": "sha256:4b87d90208e62430a5d8f577938fd26d02d646f092d137cee66216c0daac8243",
  "result_hash": "sha256:8b5d2d4dfb4a8bb7d4d1ed436e78c5f4bcf6ca9714ec93a8db8e5ec6ed8b1b8d",
  "result_cid": "bafybeif6h8j0l2n4p6r8t0v2x4z6b8d0f2h4j6l8n0p2r4t6v8x0z2bd",
  "summary": "Commons v1.1.0 makes requests smaller and receipts easier to verify while preserving stable verb semantics.",
  "signature": "sigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
}
```

Every v1.1.0 Commons receipt uses the same evidence-oriented spine:

- `status`
- `timestamp`
- `agent`
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

**Validate the full repo surface**

```bash
npm install
npm run validate
```

`npm run validate` is the primary command: it compiles every schema and then checks that all shipped examples pass or fail exactly as intended.

**Validate a specific example against the published schema using AJV**

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

**Programmatic usage (Node.js/ESM)**

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
  input: 'CommandLayer Commons v1.1.0 simplifies every request into a flat shape.',
  mode: 'brief'
};

console.log(validate(input));
console.log(validate.errors ?? []);
```

---

## Commons v1.1.0

Commons v1.1.0 is the current canonical schema family in this repository.

It is the primary documentation and validation target for Commons. The repository still records CID publication as pending, while `v1.0.0` is retained as the historical pinned release line.

- Each request schema is standalone
- Each receipt schema is standalone
- No shared `$ref` dependency tree is required for v1.1.0 Commons
- Commercial, transport, and payment envelopes are out of scope for Commons itself

Example schema paths:

- `schemas/v1.1.0/commons/analyze/analyze.request.schema.json`
- `schemas/v1.1.0/commons/analyze/analyze.receipt.schema.json`

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
  "agent": "<stable signer identity>",
  "request_hash": "sha256:<64 lowercase hex chars>",
  "result_hash": "sha256:<64 lowercase hex chars>",
  "result_cid": "<optional content identifier>",
  "summary": "<required when status = ok>",
  "signature": "<base64url detached signature>",
  "error": "<required when status = error>"
}
```

These fields let consumers verify that a signer attested to a specific request hash and, when present, a specific result hash or result CID. Commons does not define transport settlement, execution proofs beyond these fields, or any x402-specific wrapping.

## Table of Contents
- [Real verbs. Real receipts.](#real-verbs-real-receipts)
- [Quickstart](#quickstart)
- [Commons v1.1.0](#commons-v110)
- [What Commons enables](#what-commons-enables)
- [Why this exists](#why-this-exists)
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
- [License](#license)
- [Next Layers](#next-layers)
- [References](#references)

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

Each verb defines:

- a canonical request format
- a canonical receipt format

```text
+-----------------------------+
|  Execution Runtime          |  (action is performed)
+-------------▲---------------+
              |
              v
+-----------------------------+
|  Identity / Routing         |  (discovery + addressing)
+-------------▲---------------+
              |
              v
+-----------------------------+
|  Protocol-Commons           |  (verbs + schemas)
|  "What actions mean"        |
+-----------------------------+
```

Each verb provides:

- `<verb>.request.schema.json`
- `<verb>.receipt.schema.json`

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

- `v1.1.0` is the current flat Commons layout in this repo
- `v1.0.0` remains the historical pinned release line
- Do not describe `v1.1.0` provenance as fully canonical until pinning is complete

---

## Repository Structure

```text
.
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
- CID publication status (`PENDING` in `manifest.json` until published)

---

## Immutability & Checksums

Use the checksum and validation scripts shipped in the repo:

```bash
npm run checksums:verify
npm run validate
```

Published version directories must not be edited in place.

---

## Validation

Available commands:

```bash
npm run validate
npm run validate:schemas
npm run validate:examples
```

- `npm run validate` — the main contributor command. Compiles every schema, then validates every shipped example.
- `npm run validate:schemas` — schema compilation only. Useful when changing schema files or Ajv configuration.
- `npm run validate:examples` — fixture pass/fail verification only. Useful when editing examples or improving failure coverage.

For `v1.1.0`, fixture discipline matters as much as schema compilation: valid examples must look operationally plausible, and invalid examples should usually fail for one clear reason that matches the filename.

---

## Fixture discipline

For `examples/v1.1.0/commons/`, contributors should treat fixtures as protocol evidence, not filler:

- valid examples should look realistic enough that an implementer could model against them
- invalid examples should usually exercise one clear failure mode
- filenames should describe the exact failure being tested
- request fixtures must stay aligned with the verb directory they live in; deliberate wrong-verb cases must be explicitly named
- valid receipts should use realistic digest and CID-shaped values instead of toy placeholders


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
