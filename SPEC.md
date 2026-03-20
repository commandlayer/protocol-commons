# Specification — Protocol Commons
CommandLayer Core Standards · Semantic Layer

> This document is **NORMATIVE**.

## RFC 2119 Keywords
MUST / MUST NOT / SHOULD / SHOULD NOT / MAY retain their RFC-defined meanings.

---

## 1. Purpose

Protocol-Commons defines the canonical semantic contract for autonomous agents:

- verbs
- request schemas
- receipt schemas
- versioning and immutability rules

Execution, payment, identity, routing, and storage belong to other layers.

---

## 2. Release Scope

This repository contains two Commons schema families:

- **v1.1.0** — current release and active schema line
- **v1.0.0** — legacy historical schema line

The v1.1.0 schema family is the normative target for current implementations. The repository tracks its IPFS publication state separately in `manifest.json`. That publication state does not change the schema requirements defined in this specification.

---

## 3. Canonical Verb Set

The only canonical verbs are:

`analyze`, `classify`, `clean`, `convert`, `describe`, `explain`, `fetch`, `format`, `parse`, `summarize`

Each verb MUST map to exactly:

- `<verb>.request.schema.json`
- `<verb>.receipt.schema.json`

No aliases or synonyms are canonical.

---

## 4. v1.1.0 Directory Contract

Every v1.1.0 schema file MUST reside under:

```text
schemas/v1.1.0/commons/<verb>/
```

with exactly these file names:

- `<verb>.request.schema.json`
- `<verb>.receipt.schema.json`

Moving published files is a breaking change.

---

## 5. v1.1.0 Request Contract

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

v1.1.0 requests do not include nested request wrappers, `x402`, `trace`, or `actor` fields.

---

## 6. v1.1.0 Receipt Contract

Every v1.1.0 receipt MUST be a flat JSON object with these shared fields:

| Field          | Required | Constraints |
|----------------|----------|-------------|
| `verb`         | Yes      | String constant equal to the canonical verb |
| `version`      | Yes      | String constant equal to `1.1.0` |
| `status`       | Yes      | `"ok"` or `"error"` |
| `timestamp`    | Yes      | RFC 3339 / JSON Schema `date-time` |
| `request_hash` | Yes      | `sha256:` followed by 64 lowercase hex chars |
| `signature`    | Yes      | Base64url-style string, min length 32 |
| `agent`        | No       | Non-empty string |
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

The receipt schemas bind receipt content to versioned payload fields. They do not guarantee execution success, transport delivery, or any verification beyond schema-conformant data structures.

---

## 7. Legacy v1.0.0 Status

`v1.0.0` remains in the repository only as a historical legacy schema family for compatibility review and auditing.

Its legacy path pattern is:

```text
schemas/v1.0.0/commons/<verb>/requests/<verb>.request.schema.json
schemas/v1.0.0/commons/<verb>/receipts/<verb>.receipt.schema.json
```

Implementers MUST NOT project legacy v1.0.0 layout or field expectations onto v1.1.0.

---

## 8. Schema `$id` Rules

Every v1.1.0 schema MUST use the canonical HTTPS `$id` namespace under these patterns.

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

## 9. Validation Requirements

Implementations claiming v1.1.0 schema compatibility MUST:

1. Validate requests and receipts against the exact shipped v1.1.0 schemas
2. Use JSON Schema draft 2020-12 support
3. Compile schemas in strict Ajv mode or equivalent
4. Reject undeclared properties
5. Enforce the conditional `summary` and `error` receipt rules

Repository validation commands are:

```bash
npm run validate:schemas
npm run validate:examples
npm run validate
```

---

## 10. Versioning and Publication Records

Once published under a version directory such as `schemas/v1.1.0/`, the schema contents, paths, and `$id` values for that version MUST NOT change in place.

Release records are documented through repository metadata such as:

- `manifest.json`
- `checksums.txt`
- `CHANGELOG.md`
- `RESOLUTION.md`

Those records support checksum verification and version tracking. They do not constitute signed release provenance.

---

## 11. Conformance Summary

An implementation supporting Commons v1.1.0 MUST:

1. Use the canonical verb names exactly
2. Enforce the flat request contract
3. Enforce the flat receipt contract
4. Use the exact v1.1.0 `$id` namespace
5. Treat v1.0.0 as historical legacy material only

**v1.1.0** is the current release and active schema line.  
**v1.0.0** is historical legacy material only.
