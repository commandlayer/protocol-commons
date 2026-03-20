# Governance — Protocol Commons

**Scope:** Protocol-Commons  
**Status:** v1.1.0 current release and active schema line; v1.0.0 historical legacy release

> This governance document is normative for repository process and change control.

---

## 1. Governance Mandate

Protocol-Commons governance maintains:

- canonical verb definitions
- request and receipt schema policy
- versioning discipline
- release documentation
- publication records

Its purpose is procedural: preserve stable semantics, transparent changes, and consistent release records.

---

## 2. Scope Limits

Governance MAY define:

- semantic contracts
- validation requirements
- schema publication rules
- release documentation requirements

Governance MUST NOT define:

- pricing
- runtime topology
- service levels
- vendor-specific business logic

`SPEC.md` remains the primary normative source for schema behavior.

---

## 3. Stewardship

**Founding Steward:** `commandlayer.eth`

Stewardship responsibilities include:

- publishing schema releases
- maintaining manifest metadata and checksums
- recording governance decisions in repository documents
- handling security disclosures and release corrections

This is a procedural authority model. Repository documentation records who approved a release decision; it does not imply cryptographic enforcement.

---

## 4. Release Controls

Once a schema version is published:

- paths MUST NOT change in place
- schema contents MUST NOT change in place
- `$id` values MUST NOT change in place
- release history MUST remain documented

Current interpretation:

- **v1.1.0** is the current release and active schema line
- **v1.0.0** is historical legacy material only
- IPFS publication for v1.1.0 is tracked separately from HTTPS hosting in repository metadata

---

## 5. ENS TXT Governance

TXT semantics are versioned publication metadata.

Resolvers SHOULD:

- reject TXT ↔ CID mismatches
- reject unauthorized schema TXT keys
- treat versioned schema bindings as immutable once published

TXT governance is operational and procedural. It should not be described as a signed governance mechanism.

---

## 6. Change Classification

All normative proposals SHOULD originate from a public GitHub issue linked to a pull request.

| Change Class | Version Rule | Required Log |
|--------------|--------------|--------------|
| Normative behavior change | new version | `RESOLUTION.md` |
| Compatibility-affecting change | new minor or major version | `RESOLUTION.md` |
| Non-behavioral documentation update | same version docs | commit history |

Every release update MUST maintain accurate release metadata. When schema artifacts change, the release update MUST also refresh checksums.

---

## 7. Security Governance

- responsible disclosure contact MUST remain active
- no silent overwrites of published schema content
- release corrections MUST be documented

Transparency and repeatable process take priority over informal claims.

---

## 8. Compatibility Claims

Products MAY claim Commons compatibility only if they:

- validate against the correct versioned schemas
- enforce the documented contract for that version
- describe release status accurately
- do not represent historical v1.0.0 material as the active v1.1.0 line

_Last updated for v1.1.0 documentation normalization._
