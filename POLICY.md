# Policy

**Scope:** Protocol-Commons  
**Status:** v1.0.0 — Stable-Lock  

This document is **NORMATIVE and ENFORCEABLE**.  
Machine interoperability depends on **predictable**, **verifiable**, and **non-breaking** semantics.

Protocol-Commons defines the **canonical language of agent intent**.  
All schemas under this layer MUST comply with this policy.

---

## 1. Canonical Verb Requirements — NORMATIVE

A **Commons** (canonical) verb MUST:

- Be a **single lowercase word**
- Have exactly **one** interpretation
- Be **domain-neutral** and non-commercial
- Pass governance review **prior to publication**

Canonical **Commons** verbs SHALL NOT encode:

- Payments, invoicing, authorization, or settlement  
- Authentication or identity proofing  
- Business, policy, or market-specific logic  

> Economic and business semantics belong to **Commercial** verbs —  
> their schemas are permanently free, but NOT considered Commons.

---

## 2. Directory Layout — NORMATIVE

Each Commons verb MUST follow this **exact directory structure**:
```
schemas/v1.0.0/commons/<verb>/requests/<verb>.request.schema.json
schemas/v1.0.0/commons/<verb>/receipts/<verb>.receipt.schema.json
schemas/v1.0.0/examples/<verb>/valid/.json
schemas/v1.0.0/examples/<verb>/invalid/.json
```

No aliases, shortcuts, or alternate layouts permitted.

---

## 3. JSON Schema Requirements — NORMATIVE

All Protocol-Commons schemas MUST:

- Use JSON Schema Draft **2020-12**
- Validate under Ajv **strict** mode
- Include `"additionalProperties": false` on every object
- Define `$id` deterministically:
```
https://commandlayer.org/schemas/v1.0.0/commons/
<verb>/requests/<verb>.request.schema.json
```

Schemas MUST reference shared primitives only from:
```
schemas/v1.0.0/_shared/
```

No external schema dependencies permitted.

---

## 4. x402 Alignment — NORMATIVE

All **requests MUST contain**:

- `x402.verb = <verb>`
- `x402.version = "1.0.0"`

All **receipts MUST contain**:

- `x402.status = "ok" | "error"`

Receipts MUST echo:

- `trace.requestId`
- `$id` and CID of request schema

This guarantees **verifiable interaction lineage**.

---

## 5. Immutable Semantics — Anti-Rug

Once published:

- **NO** in-place semantic modification permitted
- Breaking behavior change → **major** version (`v2.0.0`)
- Additive change → **minor** version
- Documentation/example fixes → **patch** version

New versions MUST include:

- Updated **CIDs + SHA-256 checksums**
- Required TXT binding updates where governed

Historical versions MUST remain **resolvable forever**.

---

## 6. Validity Requirements — NORMATIVE

Every Commons verb MUST provide:

- Minimum **3 valid** example instances
- Minimum **3 invalid** example instances including:
  - missing required fields
  - incorrect types
  - unauthorized extra properties

CI MUST enforce:

- No failing examples
- No unreferenced files
- No schema drift across commits

> A verb without test vectors is NOT canonical.

---

## 7. Governance Compliance — NORMATIVE

All semantic changes MUST:

1. Reference an Issue requesting change  
2. Pass validation CI  
3. Be recorded in `RESOLUTION.md`  
4. Be signed by governance maintainer  

Silent changes are **forbidden**.

---

_Last updated: v1.0.0 — Stable-Lock_  
Signed: **`commandlayer.eth`**  
*Founding Steward — CommandLayer Semantic Standards*














