# CommandLayer Protocol — Commons

**The canonical semantic contract for autonomous agents.**  
*Verbs, schemas, and validation — or nothing interoperates.*

[![Schemas](https://img.shields.io/badge/Schemas-Stable%20v1.1.0-brightgreen)](https://github.com/commandlayer/protocol-commons)
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
> Canonical schemas are pinned and immutable:
> `schemas/v1.1.0/commons` — CID: `TBD (pre-release)`
>
> Historical v1.0.0 artifacts remain in-repo for compatibility and verification.
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
  "request_hash": "sha256:1111111111111111111111111111111111111111111111111111111111111111",
  "result_hash": "sha256:2222222222222222222222222222222222222222222222222222222222222222",
  "result_cid": "bafybeisummarizereceiptokexample0001",
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

**Validate all schemas and examples with the repo's working commands**

```bash
npm install
npm run validate
```

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

Commons v1.1.0 introduces a simplified, flat schema surface for general-purpose agent actions.

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

**Stable — v1.1.0 current**

- `v1.1.0` is the current flat Commons layout
- `v1.0.0` remains in-repo as a legacy schema family

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
    ├── ajv-run.mjs
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
- release CID status (`TBD (pre-release)` until a real CID is published)

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
npm run validate:schemas
npm run validate:examples
npm run validate
```

These commands compile schemas in strict Ajv mode and validate the shipped examples for both `v1.0.0` and `v1.1.0`.

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
