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

## 2. Directory Layout

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
- v1.1.0 Commons schemas MUST use the flat per-verb file layout
- Nested `requests/` and `receipts/` directories are legacy-only and MUST NOT be described as the v1.1.0 layout

---

## 3. Canonical Verb Set

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

## 4. Deterministic `$id` Contract

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

Legacy v1.0.0 schemas retain their older nested `$id` patterns and `_shared` references. Those patterns are not the v1.1.0 contract.

All `$id` values MUST be fully qualified HTTPS URLs.

---

## 5. v1.1.0 Request Contract

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

## 6. v1.1.0 Receipt Contract

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

## 7. Legacy v1.0.0 Scope

v1.0.0 remains in-repo for compatibility and historical verification.

Its schemas use:

- `_shared` helper schemas
- nested `requests/` and `receipts/` folders
- older envelope conventions

Documentation and tooling MUST distinguish that legacy structure from v1.1.0.

---

## 8. Versioning Rules

Once published under a version directory such as `schemas/v1.1.0/`, the following actions are prohibited:

- editing schema content in place
- changing behavior or required fields for that version
- updating `$id` values for that version
- changing the directory layout for that version

Any change requires a new version directory.

---

## 9. Validation Requirements

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

## 10. Examples

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

## 11. Provenance & Integrity

Integrity is tracked by:

- `checksums.txt`
- `manifest.json`

Current v1.1.0 schema CID status:

```text
TBD (pre-release)
```

Resolvers and auditors MUST reject mismatched artifacts.

---

## 12. Contact

- dev@commandlayer.org
- PGP 5016 D496 9F38 22B2 C5A2 FA40 99A2 6950 197D AB0A

**Status:** Stable `v1.1.0` current; `v1.0.0` legacy
