# SCHEMAS — Protocol-Commons v1.0.0

CommandLayer Core Standards · Semantic Layer

> This document is **NORMATIVE and ENFORCEABLE**.

---

## 1. Purpose

Protocol-Commons defines the **canonical verb and schema layer** for autonomous agents:

- Standardized verbs
- Strict JSON Schema 2020-12 validation
- Deterministic `$id` URLs
- x402 envelope embedding
- Trace + status requirements
- Immutable versioning rules

Once published, a version directory is **immutable**.

---

## 2. Directory Layout



```
schemas/v1.0.0/
_shared/
x402.schema.json
trace.schema.json
receipt.base.schema.json
commons/
<verb>/
requests/<verb>.request.schema.json
receipts/<verb>.receipt.schema.json
```


### Normative Rules

- **Paths MUST NOT change once published**
- Folder names MUST match canonical verb exactly
- No aliases or synonyms permitted

---

## 3. Canonical Verb Set (v1.0.0)

| Verb | Purpose |
|------|---------|
| analyze   | Extract meaning from input |
| classify  | Assign categories deterministically |
| clean     | Normalize input |
| convert   | Transform between formats |
| describe  | State defining properties |
| explain   | Provide causal justification |
| fetch     | Retrieve external data |
| format    | Produce structured output |
| parse     | Extract structured meaning |
| summarize | Condense content while preserving meaning |

Each verb MUST define:

- One request schema
- One receipt schema

---

## 4. Deterministic `$id` Contract

Schemas MUST include fully-qualified, HTTPS-resolvable `$id` values:

**Requests**


```
https://commandlayer.org/schemas/v1.0.0/commons/<verb>/requests/<verb>.request.schema.json
```

### **Receipt**
```
https://commandlayer.org/schemas/v1.0.0/commons/<verb>/receipts/<verb>.receipt.schema.json
```
### Shared
```
https://commandlayer.org/schemas/v1.0.0/_shared/<name>.schema.json
```

## 5. x402 Envelope Binding

### Requests MUST include:

```json
"x402": {
  "verb": "<verb>",
  "version": "1.0.0"
}
```

### Receipts MUST include:
```
"x402": {
  "verb": "<verb>",
  "version": "1.0.0",
  "status": "ok" | "error"
}

```
No additional properties allowed in `x402`.
Validated by `_shared/x402.schema.json.`

## 6. Request Contract
   
Every request MUST include:

| Field   | Source               | Required |
| ------- | -------------------- | :------: |
| `x402`  | x402 schema          |     ✓    |
| `actor` | Free-form identifier |     ✓    |
| `trace` | trace schema         |     ✓    |
| `input` | verb-specific        |     ✓    |

Missing required fields MUST fail validation.

## 7. Receipt Contract
| Field    | Conditional                  |
| -------- | ---------------------------- |
| `x402`   | Always required              |
| `trace`  | Always required              |
| `status` | `"ok"` or `"error"`          |
| `result` | Required if `status="ok"`    |
| `error`  | Required if `status="error"` |

No `result` in error receipts.
No `error` in success receipts.
Validated by` _shared/receipt.base.schema.json`


## 8. Trace Guarantees
Fields MUST include:

- `requestId`
- `ts`
Receipts MUST echo:
```
trace.requestId = request.trace.requestId
```
Optional fields (if schema supports):

- `parentId`, 
- `callbackUri`, 
- `metrics`

## 9. Versioning Rules
Once published under schemas/v1.0.0/:

The following actions are prohibited:

- Editing schema content
- Changing behavior or requirements
- Updating $id values

Any change requires:
- New version directory (e.g., v1.0.1/)
- New CID + updated manifest & checksums
- ENS TXT update
- Governance approval

## 10. Validation Requirements
CI MUST enforce:
```
strict: true
strictTypes: true
allowUnionTypes: false
strictTuples: true
```
All valid + invalid examples MUST pass CI.

## 11. Examples
Examples are REQUIRED for every verb:

```
examples/v1.0.0/commons/<verb>/
  valid/*.json
  invalid/*.json
```

Minimum:

- 3 valid examples
- 3 invalid examples

## 12. Provenance & Integrity
Pinned schemas CID:
```
bafybeieoynknzalaojwpzjzjy77kpnfe4kla5io7jbfnmyu7w7vyvuljpq
```

Integrity tracked by:

- `checksums.txt`
- `manifest.json`

Resolvers MUST reject mismatched artifacts.

## 13. Contact

email  dev@commandlayer.org
PGP 5016 D496 9F38 22B2 C5A2 FA40 99A2 6950 197D AB0A

Status: Stable · v1.0.0 locked
