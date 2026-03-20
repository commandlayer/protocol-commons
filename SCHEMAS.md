# Schemas Policy — Protocol Commons

This document specifies stability rules, versioning constraints, and change governance for all Protocol Commons schemas.

> This document is **NORMATIVE and ENFORCEABLE**.

---

## 1. Purpose

Protocol-Commons defines the canonical verb and schema layer for autonomous agents:

- standardized verbs
- strict JSON Schema 2020-12 validation
- deterministic `$id` URLs
- immutable versioning rules
- flat v1.1.0 request and receipt contracts

Once published, a version directory is immutable.

---

## 2. Version Status

This repository currently ships:

- **v1.1.0** as the active in-repo schema family
- **v1.0.0** as the historical and last fully pinned canonical release

Because `manifest.json` still reports the v1.1.0 schema CID as pending, documentation MUST describe v1.1.0 accurately as the current canonical HTTPS-hosted schema line and MUST distinguish it from the historical pinned release until a real CID is published.

---

## 3. Directory Layout

### Current in-repo layout: v1.1.0

```text
schemas/v1.1.0/
└── commons/
    └── <verb>/
        ├── <verb>.request.schema.json
        └── <verb>.receipt.schema.json
```

### Historical pinned layout: v1.0.0

```text
schemas/v1.0.0/
├── _shared/
│   ├── identity.schema.json
│   ├── receipt.base.schema.json
│   ├── trace.schema.json
│   ├── verb.aliases.schema.json
│   └── x402.schema.json
└── commons/
    └── <verb>/
        ├── requests/<verb>.request.schema.json
        └── receipts/<verb>.receipt.schema.json
```

### Normative Rules

- Paths MUST NOT change once published
- Folder names MUST match the canonical verb exactly
- v1.1.0 Commons schemas MUST use the flat per-verb file layout
- Nested `requests/` and `receipts/` directories are legacy-only and MUST NOT be described as the v1.1.0 layout

---

## 4. Canonical Verb Set

| Verb | Purpose |
|------|---------|
| analyze   | Extract meaning from input |
| classify  | Assign categories deterministically |
| clean     | Normalize input |
| convert   | Transform between formats |
| describe  | State defining properties |
| explain   | Provide rationale or clarification |
| fetch     | Retrieve external data |
| format    | Produce structured or presentable output |
| parse     | Extract structured meaning |
| summarize | Condense content while preserving meaning |

Each verb MUST define exactly:

- one request schema
- one receipt schema

---

## 5. Deterministic `$id` Contract

### v1.1.0 request schemas

```text
https://commandlayer.org/schemas/v1.1.0/commons/<verb>/<verb>.request.schema.json
```

Example:

```text
https://commandlayer.org/schemas/v1.1.0/commons/summarize/summarize.request.schema.json
```

### v1.1.0 receipt schemas

```text
https://commandlayer.org/schemas/v1.1.0/commons/<verb>/<verb>.receipt.schema.json
```

Example:

```text
https://commandlayer.org/schemas/v1.1.0/commons/summarize/summarize.receipt.schema.json
```

### Legacy v1.0.0 note

Legacy v1.0.0 schemas retain their older nested `$id` patterns and `_shared` references. Those patterns are legacy-only and are not the v1.1.0 contract.

All `$id` values MUST be fully qualified HTTPS URLs.

---

## 6. v1.1.0 Request Contract

Every v1.1.0 request MUST include:

| Field     | Required | Notes |
|-----------|----------|-------|
| `verb`    | Yes      | Canonical verb constant |
| `version` | Yes      | Must equal `1.1.0` |
| `input`   | Yes      | Non-empty string |
| `mode`    | No       | Optional verb-specific enum |

Requests MUST reject additional properties.

v1.1.0 requests do not use nested request objects, `x402`, `trace`, or `actor` fields.

---

## 7. v1.1.0 Receipt Contract

Every v1.1.0 receipt MUST include:

| Field          | Required |
|----------------|----------|
| `verb`         | Yes |
| `version`      | Yes |
| `status`       | Yes |
| `timestamp`    | Yes |
| `request_hash` | Yes |
| `signature`    | Yes |

Additional shared fields are schema-supported but optional unless conditionally required:

| Field         | Requirement |
|---------------|-------------|
| `agent`       | Optional |
| `result_hash` | Optional |
| `result_cid`  | Optional |
| `summary`     | Required when `status = "ok"` |
| `error`       | Required when `status = "error"` |

Receipts MUST reject additional properties.

The trust model is limited to signer attestation plus request/result hash references. Implementations MUST NOT imply unsupported receipt substructures or execution-trace guarantees.

---

## 8. Legacy v1.0.0 Scope

v1.0.0 remains in-repo for compatibility, historical verification, and canonical pin auditing.

Its schemas use:

- `_shared` helper schemas
- nested `requests/` and `receipts/` folders
- older envelope conventions including `x402` and `trace`

Documentation and tooling MUST distinguish that legacy structure from v1.1.0 and MUST NOT present those legacy fields as universally normative.

---

## 9. Versioning Rules

Once published under a version directory such as `schemas/v1.1.0/`, the following actions are prohibited:

- editing schema content in place
- changing behavior or required fields for that version
- updating `$id` values for that version
- changing the directory layout for that version

Any change requires a new version directory.

---

## 10. Validation Requirements

CI and local validation SHOULD enforce strict schema compilation behavior equivalent to:

```text
strict: true
strictSchema: true
allErrors: true
strictRequired: false
allowUnionTypes: false
```

Repository validation commands:

```bash
npm run validate:schemas
npm run validate:examples
npm run validate
```

All shipped valid and invalid examples MUST match the version-specific schema layout they target.

---

## 11. Examples

Examples are maintained per version.

### v1.1.0 examples

```text
examples/v1.1.0/commons/<verb>/json/
  valid/*.json
  invalid/*.json
```

### v1.0.0 examples

```text
examples/v1.0.0/commons/<verb>/
  valid/*.json
  invalid/*.json
```

---

## 12. Provenance & Integrity

Integrity is tracked by:

- `checksums.txt`
- `manifest.json`

Current v1.1.0 canonical HTTPS schema root:

```text
https://commandlayer.org/schemas/v1.1.0/
```

Current v1.1.0 schema CID status:

```text
PENDING
```

Last pinned canonical release content identifier:

```text
v1.0.0 → bafybeigvf6nkzws7dblos74dqqjkguwkrwn4a2c27ieygoxmgofyzdkz6m
```

Resolvers and auditors MUST reject mismatched artifacts and MUST distinguish between the current canonical HTTPS-hosted schema family and the historical pinned release.

---

## 13. Contact

- dev@commandlayer.org
- PGP 5016 D496 9F38 22B2 C5A2 FA40 99A2 6950 197D AB0A

**Status:** v1.1.0 current canonical HTTPS-hosted schema family with pending CID publication metadata; v1.0.0 retained as the historical pinned release.
