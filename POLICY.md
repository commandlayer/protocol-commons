# POLICY — Protocol-Commons
CommandLayer Core Standards · Semantic Layer

This document defines **publication rules** for Common verbs and schemas.
`SPEC.md` remains the primary normative authority.

---

## 1. Canonical Verb Requirements

A canonical verb MUST:

- Be a **single lowercase word**
- Have exactly **one** interpretation
- Be **domain-neutral** and non-commercial
- Be approved through governance review PRIOR to publication

Commons verbs SHALL NOT encode:

- Payments or finance
- Authentication or identity proofing
- Business-specific logic

Those belong to **Commercial** standards.

---

## 2. Required Artifacts Per Verb

Each verb MUST include:

- `requests/<verb>.request.schema.json`
- `receipts/<verb>.receipt.schema.json`
- Valid + invalid example sets:

`examples/valid/.json`
`examples/invalid/.json`

vbnet
Copy code
Schematics MUST reference shared primitives under:

schemas/v1.0.0/_shared/

---

## 3. JSON Schema Requirements

- Draft **2020-12**
- Ajv **strict** validation
- `"additionalProperties": false`
- Deterministic `$id` structure:

https://commandlayer.org/schemas/v1.0.0/commons/<verb>/requests/<verb>.request.schema.json
https://commandlayer.org/schemas/v1.0.0/commons/<verb>/receipts/<verb>.receipt.schema.json


Directory layout MUST NOT vary.

---

## 4. x402 Alignment (Normative)

**All requests MUST define:**

- x402.verb = <verb>
- x402.version = "1.0.0"


**All receipts MUST define:**

`x402.status = "ok" | "error"`

Trace MUST echo `request.trace.requestId`.

---

## 5. Immutability

Once published:

- No modification permitted in-place
- Breaking change → new major version dir
- Additive change → minor version dir
- Example/docs fixes → patch version

New versions MUST include:

- Updated CIDs
- Updated checksums
- ENS TXT update where applicable

---

## 6. Governance Compliance

Every change MUST:

- Have an issue link
- Pass CI validation
- Be recorded in `RESOLUTION.md`
- Be signed by governance maintainer

---

_Last updated: v1.0.0 — Stable-Lock_
