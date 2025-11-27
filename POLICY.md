
# Protocol-Commons Policy

This document defines the canonical rules for creating, validating, versioning, and publishing verb schemas in the CommandLayer Protocol Commons.

The Commons is the universal grammar for autonomous agents.

---

## 1. Verbs Must Remain Canonical

- Single lowercase word  
- One meaning; no semantic overload  
- Domain-neutral  
- Published only after governance review

Common verbs **SHALL NOT** model:
- Payments
- Contracts / transfers
- Authentication
- Business logic

Those belong in the _Commercial_ layer.

---

## 2. Required Artifacts Per Verb

Each canonical verb MUST define:

- `requests/<verb>.request.schema.json`
- `receipts/<verb>.receipt.schema.json`

And MUST ship:
- 
- `examples/valid/*.json`
- `examples/invalid/*.json`


---

## 3. JSON Schema Requirements

- Draft **2020-12**
- Ajv **strict mode**
- `"additionalProperties": false` at top level
- Deterministic `$id` and directory structure:

/schemas/v1.0.0/commons/<verb>/


---

## 4. x402 Alignment

All requests:
`x402.verb = <verb>`
`x402.version = "1.0.0"`


All receipts:
`x402.status = "ok" | "error"`

---

## 5. Immutability

Once published:
- **No changes** in-place
- Any update requires a new version directory  
- New CID + new checksums  
- ENS TXT updates  

---

## 6. Breaking Change Rules

### Requires MAJOR version bump:
- Removing fields
- Changing requiredness
- New semantics for success/error
- Trace model changes

### Requires MINOR:
- Additive `input.*` or `result.*`

### PATCH:
- Example or documentation fixes

---

## 7. Governance Compliance

Every change MUST:
- Have an issue link
- Be recorded in `RESOLUTION.md`










