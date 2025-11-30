
# SCHEMAS — Protocol-Commons v1.0.0
CommandLayer Core Standards · Semantic Layer

This document is **NORMATIVE and ENFORCEABLE**.

---

## 1. Purpose

Protocol-Commons defines the **canonical verb and schema layer** for autonomous agents:

- Standardized verbs
- Strict request/receipt contracts (JSON Schema 2020-12)
- Deterministic `$id` URLs
- x402 envelope embedding
- Trace + status primitives
- Immutable versioning

Once published in a version directory, the Commons is **immutable**.

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

- **Paths MUST NOT change** in a published version directory
- Verbs MUST match folder names **exactly**
- No aliases or synonyms allowed

---

## 3. Canonical Verb Set

| Verb | Purpose |
|------|---------|
| analyze | Inspect content |
| classify | Assign categories |
| clean | Sanitize and normalize |
| convert | Transform formats |
| describe | Provide description |
| explain | Provide justification/reasoning |
| fetch | Retrieve external data |
| format | Apply formatting rules |
| parse | Extract structured meaning |
| summarize | Condense content |

Each verb MUST define:

- One request schema
- One receipt schema

---

## 4. Schema `$id` Requirements

Every schema MUST use a fully-qualified `$id` URI:

### Request


https://commandlayer.org/schemas/v1.0.0/commons/<verb>/requests/<verb>.request.schema.json


### **Receipt**

https://commandlayer.org/schemas/v1.0.0/commons/<verb>/receipts/<verb>.receipt.schema.json

### Shared

https://commandlayer.org/schemas/v1.0.0/_shared/<name>.schema.json


Schemas MUST be:

- HTTPS-resolvable
- Deterministic
- Pinned in provenance manifests

## 5. x402 Envelope Binding

### Requests MUST include:

```json
"x402": {
  "verb": "<verb>",
  "version": "1.0.0"
```

### Receipts MUST include:
```
"x402": {
  "verb": "<verb>",
  "version": "1.0.0",
  "status": "ok" | "error"
}

```

Additional properties **MUST NOT** appear inside x402.

Validated by `_shared/x402.schema.json.`

## 6. Request Contract
   
Every request MUST include:

| Field    | Requirement                       |
| -------- | --------------------------------- |
| `x402`   | Required                          |
| `actor`  | Required                          |
| `trace`  | Required                          |
| `input`  | Required                          |
| `limits` | Optional (if supported by schema) |


Invalid Example
Missing any required field → MUST fail validation.

## 7. Receipt Contract
| Field    | Requirement                       |
| -------- | --------------------------------- |
| `x402`   | Required                          |
| `actor`  | Required                          |
| `trace`  | Required                          |
| `input`  | Required                          |
| `limits` | Optional (if supported by schema) |


Conditional structure MUST validate using:


_shared/receipt.base.schema.json

No result in error receipts.
No error in success receipts.

## 8. Trace Primitive
Fields MUST include:

- `requestId`
- `ts`

Optional fields (if schema supports):

`parentId`, `callbackUri`, `metrics`

Trace MUST ensure:

- **requestId is echoed** in receipts
- Integrity is deterministic for chaining

## 9. Versioning Rules
Once released under:


schemas/v1.0.0/

The following actions are prohibited:

- Editing schema content
- Changing requirements
- Updating $id values

Any change requires:
- New version folder
- New CID + manifest entries
- ENS TXT update
- Governance approval

## 10. Validation Rules
CI MUST enforce:
```
strict: true
strictTypes: true
allowUnionTypes: false
strictTuples: true
```

Other guarantees:

-All examples MUST validate
-No `additionalProperties` unless allowed explicitly

Validation commands:

``` 
npm run validate
npm run validate:examples
```

## 11. Examples
Examples are REQUIRED for every verb:

```
examples/v1.0.0/commons/<verb>/
  valid/*.json
  invalid/*.json
```

Minimum:

-3 valid examples
-3 invalid examples

Every file MUST pass CI.

## 12. Provenance
Schemas pinned to IPFS:

```
bafybeieoynknzalaojwpzjzjy77kpnfe4kla5io7jbfnmyu7w7vyvuljpq
```

Integrity tracked by:

- `checksums.txt`
- `manifest.json`

Resolvers MUST NOT trust mismatched artifacts.

## 13. Contact
We welcome collaboration and responsible disclosure:

email  dev@commandlayer.org
PGP 5016 D496 9F38 22B2 C5A2 FA40 99A2 6950 197D AB0A

Status: Stable · v1.0.0 locked
