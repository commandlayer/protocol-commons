# Compliance — Protocol Commons

This document defines what it means to be **Protocol-Commons compliant** and how to maintain that status over time.

---

## 1. Scope

These rules apply to:

- Schemas under `schemas/v*/commons/`
- Shared primitives under `schemas/v*/_shared/`
- Examples under `examples/v*/commons/`

**ENS TXT Summary**  
This document only summarizes TXT responsibilities.  
The canonical definitions and enforcement rules are specified in:  
- `SPEC.md` (Protocol-Commons)

In case of discrepancy, SPEC.md is authoritative.

Compliance covers semantics and schema integrity only—identity bindings are governed by Agent-Cards.

---

## 2. Versioning & Immutability

For any directory `schemas/vX.Y.Z/`:

No in-place edits to:
- Request/receipt schemas
- `_shared` primitives
- `$id` values
- Normative behavior

Any semantic change requires:
- New version directory
- Updated CIDs + checksums
- Logged update in `RESOLUTION.md`
- Governance approval

Mutating a published version is **not compliant**.

---

## 3. JSON Schema Requirements

All Protocol-Commons schemas MUST:

- Use JSON Schema Draft 2020-12
- Validate under **Ajv strict mode**
- Use deterministic HTTPS-resolvable `$id` values matching SPEC.md
- Enforce verb-specific input + receipt contract

Loose validation or altered `$id` resolution is **not compliant**.

---

## 4. CIDs & Checksums

Each release MUST:

- Pin the entire version folder to IPFS
- Provide SHA-256 checksums
- Publish manifest.json

Compliance requires:
- `cl.cid.schemas` resolves to the correct CID
- IPFS mirrors match HTTP mirrors exactly

Mismatch = **integrity failure**

---

## 5. Security & Privacy

Schemas are **semantic infrastructure**, not application output.

Therefore:
- No PII
- No secrets or private routing data
- No execution logic

Security incidents MUST follow `SECURITY.md`.

---

## 6. Governance Traceability

Every canonical change MUST be reflected in:
- `RESOLUTION.md` (what + why + who)
- `SECURITY_PROVENANCE.md` (CIDs + checksums)

An artifact **without a governance trail** is not canonical.

---

## 7. Ecosystem Alignment

Commons-compliant implementations SHOULD:

- Support ERC-8004 discovery where relevant
- Enforce canonical x402 envelope + trace rules

Divergence is allowed — but **compliance claims then MUST NOT be made**.

---

## 8. Deviation Handling

If a deviation is found:

1. File an Issue (or follow `SECURITY.md` if sensitive)
2. Describe affected version and impact
3. Steward determines whether to publish a corrected version
4. Changes documented in `RESOLUTION.md`

---

## 9. Compliance Checklist

You may claim **Protocol-Commons compliant** if:

- Strict Ajv validation enforced  
- Version directories treated as immutable  
- `$id` URLs resolve correctly  
- CIDs and checksums match content  
- Changes logged and signed  
- ENS TXT duties respected per SPEC.md  

If uncertain → treat the implementation as **experimental**.
