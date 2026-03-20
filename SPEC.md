# Specification — Protocol Commons
CommandLayer Core Standards · Semantic Layer

> This document is **NORMATIVE and ENFORCEABLE**.

## RFC 2119 Keywords
MUST / MUST NOT / SHOULD / SHOULD NOT / MAY retain their RFC-defined meanings.

---

## 1. Purpose

Protocol-Commons defines the canonical action grammar for autonomous agents:

- **Verbs** — what actions exist
- **Request schemas** — typed invocation contracts
- **Receipt schemas** — typed execution evidence contracts
- **Versioning + immutability** — trust guarantees for published artifacts

Execution, payment, identity, and routing are the domain of other layers.

---

## 2. Release Status and Scope

This repository contains two materially different Commons schema families:

- **v1.1.0** — current canonical schema family, active documentation target, and live HTTPS-hosted identifier set
- **v1.0.0** — legacy schema family and historical pinned release

Repository metadata still records v1.1.0 IPFS CID publication as pending. Implementers MUST therefore distinguish between:

1. **Schema semantics and canonical HTTPS identifiers** — what the v1.1.0 files require and where their `$id` values resolve
2. **Release provenance status** — whether a version has completed IPFS CID publication and canonical pinning

This specification documents the v1.1.0 contract as the current canonical schema family while preserving v1.0.0 as the historical pinned release until v1.1.0 IPFS pinning is complete.

---

## 3. Architecture Position

The Commons is the semantic base layer of the CommandLayer stack:

```text
┌────────────────────────────┐
│ Execution / settlement     │
└──────────────▲─────────────┘
               │
┌──────────────┴─────────────┐
│ Identity / routing         │
└──────────────▲─────────────┘
               │
┌──────────────┴─────────────┐
│ Semantics — Commons        │
└────────────────────────────┘
```

**Commons answers: “What is this agent trying to do?”**

---

## 4. Canonical Verb Set

The only canonical verbs are:

`analyze`, `classify`, `clean`, `convert`, `describe`, `explain`, `fetch`, `format`, `parse`, `summarize`

Each verb MUST map to:

- `<verb>.request.schema.json`
- `<verb>.receipt.schema.json`

No aliases or synonyms are canonical.

---

## 5. Commons v1.1.0 Schema Contract

Commons v1.1.0 is the current schema family documented in this repository.

### 5.1 Directory contract

Every v1.1.0 schema file MUST reside under:

```text
schemas/v1.1.0/commons/<verb>/
```

with exactly these file names:

- `<verb>.request.schema.json`
- `<verb>.receipt.schema.json`

Moving published files is a breaking change.

### 5.2 Request shape (flat)

Every v1.1.0 request MUST be a flat JSON object with:

| Field     | Required | Constraints |
|-----------|----------|-------------|
| `verb`    | Yes      | String constant equal to the canonical verb |
| `version` | Yes      | String constant equal to `1.1.0` |
| `input`   | Yes      | Non-empty string |
| `mode`    | No       | Verb-specific enum when present |

Requests MUST NOT include undeclared properties.

A conforming request shape is:

```json
{
  "verb": "<canonical verb>",
  "version": "1.1.0",
  "input": "<non-empty string>",
  "mode": "<optional verb-specific mode>"
}
```

Commons v1.1.0 does not require `x402`, `trace`, `actor`, or nested request wrappers.

### 5.3 Receipt shape

Every v1.1.0 receipt MUST be a flat JSON object with these shared fields:

| Field          | Required | Constraints |
|----------------|----------|-------------|
| `verb`         | Yes      | String constant equal to the canonical verb |
| `version`      | Yes      | String constant equal to `1.1.0` |
| `status`       | Yes      | `"ok"` or `"error"` |
| `timestamp`    | Yes      | RFC 3339 / JSON Schema `date-time` |
| `request_hash` | Yes      | `sha256:` followed by 64 lowercase hex chars |
| `signature`    | Yes      | Base64url-style string, min length 32 |
| `agent`        | No       | Non-empty string signer identity |
| `result_hash`  | No       | `sha256:` followed by 64 lowercase hex chars |
| `result_cid`   | No       | Non-empty string content identifier |
| `summary`      | Cond.    | REQUIRED when `status = "ok"` |
| `error`        | Cond.    | REQUIRED when `status = "error"` |

Receipts MUST NOT include undeclared properties.

A conforming success receipt shape is:

```json
{
  "verb": "<canonical verb>",
  "version": "1.1.0",
  "status": "ok",
  "timestamp": "<RFC 3339 date-time>",
  "request_hash": "sha256:<64 lowercase hex chars>",
  "result_hash": "sha256:<64 lowercase hex chars>",
  "result_cid": "<optional content identifier>",
  "summary": "<human-readable outcome summary>",
  "signature": "<base64url detached signature>"
}
```

`agent` MAY be added to either success or error receipts when the signer identity is being surfaced at the application layer.

A conforming error receipt shape is:

```json
{
  "verb": "<canonical verb>",
  "version": "1.1.0",
  "status": "error",
  "timestamp": "<RFC 3339 date-time>",
  "request_hash": "sha256:<64 lowercase hex chars>",
  "signature": "<base64url detached signature>",
  "error": "<human-readable failure detail>"
}
```

### 5.4 Trust model

Commons v1.1.0 provides attestation-oriented receipts:

- `request_hash` binds the receipt to a specific request payload
- `result_hash` and `result_cid`, when present, bind the receipt to a specific result payload or content address
- `signature` binds the signer to the receipt contents
- `agent`, when present, identifies the signer in a stable application-level form

Commons v1.1.0 does **not** define settlement proofs, transport-level guarantees, execution traces, or result-object substructures.

---

## 6. v1.0.0 Legacy Status

`v1.0.0` remains in the repository as a legacy schema family for compatibility, historical verification, and canonical pin verification.

Its structure differs materially from v1.1.0:

- nested request/receipt directories
- `_shared` referenced schemas
- transport-oriented `x402` and `trace` concepts

Implementers MUST NOT project those legacy requirements onto v1.1.0.

Legacy path pattern:

```text
schemas/v1.0.0/commons/<verb>/requests/<verb>.request.schema.json
schemas/v1.0.0/commons/<verb>/receipts/<verb>.receipt.schema.json
```

---

## 7. Schema `$id` Rules

Every v1.1.0 schema MUST use the canonical HTTPS `$id` namespace under this pattern.

Those `$id` values are stable canonical schema identifiers. For v1.1.0 they MUST match the live HTTPS-hosted schema namespace and MUST resolve at the published HTTPS locations. This HTTPS hosting state is distinct from any separate IPFS CID publication record.

### Request

```text
https://commandlayer.org/schemas/v1.1.0/commons/<verb>/<verb>.request.schema.json
```

### Receipt

```text
https://commandlayer.org/schemas/v1.1.0/commons/<verb>/<verb>.receipt.schema.json
```

Legacy v1.0.0 `$id` layouts remain valid only for the legacy directory tree.

---

## 8. Validation Requirements

Implementations claiming v1.1.0 schema compatibility MUST:

1. Validate requests and receipts against the exact schema files shipped for the version being claimed
2. Use JSON Schema draft 2020-12 support
3. Compile schemas in strict Ajv mode or equivalent
4. Reject undeclared properties
5. Enforce conditional receipt logic for `summary` and `error`

Repository validation commands are:

```bash
npm run validate:schemas
npm run validate:examples
npm run validate
```

---

## 9. Versioning + Immutability

Once published under a version directory such as:

```text
schemas/v1.1.0/
```

there MUST NEVER be in-place mutation of:

- schema file contents
- required field sets
- `$id` values
- documented semantics for that version

Any semantic or structural change requires a new version directory.

---

## 10. Provenance & Integrity

The current v1.1.0 schema family is identified by:

- Version directory: `schemas/v1.1.0/`
- Package version: `1.1.0`
- Manifest entry: `manifest.json`
- File-level hashes: `checksums.txt`
- Canonical HTTPS schema host: `https://commandlayer.org/schemas/v1.1.0/`
- IPFS directory CID: `PENDING` until IPFS CID publication is complete

The last fully pinned canonical release is:

- Version directory: `schemas/v1.0.0/`
- IPFS directory CID: `bafybeigvf6nkzws7dblos74dqqjkguwkrwn4a2c27ieygoxmgofyzdkz6m`

Auditors and resolvers SHOULD:

1. Fetch the versioned schemas
2. Verify integrity locally
3. Treat mismatched artifacts as untrusted
4. Treat v1.1.0 HTTPS identifiers as live canonical schema references, while treating IPFS provenance for v1.1.0 as pending until a CID is published

Integrity check command:

```bash
npm run checksums:verify
```

---

## 11. Implementations MUST

An implementation supporting Commons v1.1.0 MUST:

1. Support the canonical verb names exactly
2. Validate the flat request shape exactly as published
3. Validate the flat receipt shape exactly as published
4. Treat published version directories as immutable
5. Preserve receipt trust semantics as hashes plus signatures, without inventing unsupported guarantees
6. Avoid representing v1.1.0 as the historical pinned release until its IPFS CID publication is complete

A system supporting any canonical verb MAY claim **Commons-Compatible** for that version, but provenance claims MUST accurately reflect whether the relevant version is the current canonical HTTPS-hosted schema family or the historical pinned release.

---

## 12. Failure Modes

If any of the following occur:

- `$id` mismatch
- request or receipt fails strict validation
- required conditional receipt fields are missing
- published artifacts differ from expected checksums
- published artifacts are mutated in place
- a current canonical HTTPS-hosted version is misrepresented as the historical pinned release

consumers MUST treat the artifact as untrusted and SHOULD reject it.

Silent degradation MUST NOT occur.

---

## 13. Security

Protocol-Commons is security-relevant infrastructure.

It does not itself define:

- payment authorization
- invocation transport security
- identity registry semantics
- result correctness proofs beyond signed, hashed attestation

Security escalation MUST follow repository policy.

---

## Status

**v1.1.0:** current canonical schema family documented here; HTTPS hosting is live and IPFS CID publication remains pending in repository metadata  
**v1.0.0:** legacy schema family and historical pinned release
