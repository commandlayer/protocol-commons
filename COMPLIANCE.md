# Compliance — Protocol Commons

This document defines what it means to be Protocol-Commons compliant and how to **assert** and **maintain** that status over time.

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
 
Compliance cannot override normative definitions in SPEC.md.

Compliance covers semantics and schema integrity only—identity bindings are governed by Agent-Cards.

---

## 2. Version-Aware Compliance Status

Compliance claims MUST identify the version they apply to.

Current repository status:

- **v1.1.0** — current canonical HTTPS-hosted schema family; repository metadata still records IPFS CID publication as pending
- **v1.0.0** — historical pinned release line

A system MAY claim **v1.1.0 schema compatibility** if it validates and enforces the published v1.1.0 schemas.

A system MUST describe provenance accurately and MUST NOT claim that v1.1.0 is the historical pinned release while IPFS CID publication remains unpublished in repository metadata.

---

## 3. Versioning & Immutability

For any directory `schemas/vX.Y.Z/`:

No in-place edits to:
- Request/receipt schemas
- `_shared` primitives
- `$id` values
- Normative behavior

Any semantic change requires:
- New version directory
- Updated CIDs + checksums for canonical releases
- Logged update in `RESOLUTION.md`
- Governance approval

Mutating a published version is **not compliant**.

---

## 4. JSON Schema Requirements

All Protocol-Commons schemas MUST:

- Use JSON Schema Draft 2020-12
- Validate under **Ajv strict mode**
- Use deterministic HTTPS-resolvable `$id` values matching SPEC.md
- Enforce the version-specific input + receipt contract

Loose validation or altered `$id` resolution is **not compliant**.

---

## 5. CIDs & Checksums

Each canonical release MUST:

- Pin the entire version folder to IPFS
- Provide SHA-256 checksums
- Publish `manifest.json`

Compliance requires:

- Canonical TXT/CID bindings only for fully published releases
- IPFS mirrors match HTTP mirrors exactly for pinned releases

Consumers SHOULD verify `checksums.txt` against the published schema
artifacts prior to use.

Automated resolvers and runtimes MUST verify checksums as part of
canonical compliance, and MUST reject mismatches.

Mismatch = **integrity failure**

For v1.1.0 specifically, the schemas and checksums can be validated locally, and compliance statements MUST distinguish the current canonical HTTPS-hosted line from the historical pinned release until IPFS CID publication is complete.

---

## 6. Security & Privacy

Schemas are **semantic infrastructure**, not application output.

Therefore:
- No PII
- No secrets or private routing data
- No execution logic

Security incidents MUST follow `SECURITY.md`.

---

## 7. Governance Traceability

Every canonical change MUST be reflected in:
- `RESOLUTION.md` (what + why + who)
- `SECURITY_PROVENANCE.md` (CIDs + checksums)

An artifact **without a governance trail** is not canonical.

---

## 8. Ecosystem Alignment

Commons-compliant implementations SHOULD:

- Support ERC-8004 discovery where relevant
- Apply only the requirements that are normative for the version they implement

For v1.0.0 legacy implementations, that can include older `x402` envelope and `trace` requirements.

For v1.1.0 implementations, those older `x402` and `trace` requirements are **not automatically normative** unless another layer explicitly adopts them outside the Commons schemas.

Divergence from the version-specific Commons contract means **compliance claims then MUST NOT be made**.

---

## 9. Deviation Handling

If a deviation is found:

1. File an Issue (or follow `SECURITY.md` if sensitive)
2. Describe affected version and impact
3. Steward determines whether to publish a corrected version
4. Changes documented in `RESOLUTION.md`

---

## 10. Compliance Checklist

You may claim **Protocol-Commons compliant** for a specific version if:

- Strict Ajv validation enforced  
- Version directories treated as immutable  
- `$id` URLs resolve correctly  
- CIDs and checksums match content when the version is claimed as canonical and pinned  
- Changes logged and signed  
- ENS TXT duties respected per SPEC.md  
- Version status is described accurately as current canonical HTTPS-hosted or historical pinned release  

If uncertain → treat the implementation as **experimental**.
