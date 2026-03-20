# Schemas Policy — Protocol Commons

This document specifies stability rules, versioning constraints, and layout rules for Protocol-Commons schemas.

> This document is **NORMATIVE**.

---

## 1. Purpose

Protocol-Commons defines the canonical verb and schema layer for autonomous agents.

This policy covers:

- versioned schema layout
- `$id` requirements
- request and receipt structure
- immutability rules
- validation expectations

---

## 2. Version Status

This repository currently uses:

- **v1.1.0** as the current release and active schema line
- **v1.0.0** as the legacy historical schema line

The manifest tracks IPFS publication for v1.1.0 separately from the HTTPS-hosted schema URLs. That publication record does not alter the schema layout defined here.

---

## 3. Directory Layout

### Current layout: v1.1.0

```text
schemas/v1.1.0/
└── commons/
    └── <verb>/
        ├── <verb>.request.schema.json
        └── <verb>.receipt.schema.json
```

### Legacy layout: v1.0.0

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
- v1.1.0 MUST use the flat per-verb file layout shown above
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

### v1.1.0 receipt schemas

```text
https://commandlayer.org/schemas/v1.1.0/commons/<verb>/<verb>.receipt.schema.json
```

### Legacy v1.0.0 note

Legacy v1.0.0 schemas retain their older nested `$id` patterns and `_shared` references. Those patterns are legacy-only.

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

The receipt contract is limited to the fields defined in the schemas. It MUST NOT be described as providing live execution verification, transport guarantees, or signed release provenance.

---

## 8. Legacy v1.0.0 Scope

v1.0.0 remains in-repo only for compatibility review, historical reference, and legacy auditing.

Its schemas use:

- `_shared` helper schemas
- nested `requests/` and `receipts/` folders
- older envelope conventions including `x402` and `trace`

Documentation and tooling MUST distinguish that legacy structure from v1.1.0.

---

## 9. Versioning Rules

Once published under a version directory such as `schemas/v1.1.0/`, the following actions are prohibited:

- editing schema content in place
- changing behavior or required fields for that version
- updating `$id` values for that version
- changing the directory layout for that version

Any semantic change requires a new version directory.

---

## 10. Validation Requirements

Repository validation commands are:

```bash
npm run validate:schemas
npm run validate:examples
npm run validate
```

All shipped valid and invalid examples MUST match the version-specific schema layout they target.

---

## 11. Examples Layout

### v1.1.0 examples

```text
examples/v1.1.0/commons/<verb>/json/
```

### v1.0.0 examples

```text
examples/v1.0.0/commons/<verb>/
```

---

## 12. Publication Record Summary

Current HTTPS schema root:

```text
https://commandlayer.org/schemas/v1.1.0/
```

Manifest-tracked IPFS publication state for v1.1.0:

```text
PENDING
```

Historical legacy CID record:

```text
v1.0.0 → bafybeigvf6nkzws7dblos74dqqjkguwkrwn4a2c27ieygoxmgofyzdkz6m
```

**Status:** v1.1.0 is the current release and active schema line. v1.0.0 is legacy only.
