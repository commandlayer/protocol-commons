# Compliance — Protocol Commons

This document defines what it means to be Protocol-Commons compliant and how to assert that status accurately.

---

## 1. Scope

These rules apply to:

- schemas under `schemas/v*/commons/`
- shared primitives under `schemas/v*/_shared/`
- examples under `examples/v*/commons/`

Compliance cannot override normative definitions in `SPEC.md`.

---

## 2. Version-Aware Compliance Status

Compliance claims MUST identify the version they apply to.

Current repository status:

- **v1.1.0** — current release and active schema line
- **v1.0.0** — historical legacy release

A system MAY claim **v1.1.0 schema compatibility** if it validates and enforces the published v1.1.0 schemas.

---

## 3. Versioning and Immutability

For any directory `schemas/vX.Y.Z/`, there are no in-place edits to:

- request or receipt schemas
- `_shared` primitives
- `$id` values
- normative behavior

Any semantic change requires:

- a new version directory
- updated `manifest.json` metadata
- updated `checksums.txt` when schema artifacts change
- a logged update in `RESOLUTION.md`
- governance approval

Mutating a published version is not compliant.

---

## 4. JSON Schema Requirements

All Protocol-Commons schemas MUST:

- use JSON Schema Draft 2020-12
- validate under strict Ajv mode or equivalent
- use deterministic HTTPS-resolvable `$id` values matching `SPEC.md`
- enforce the version-specific request and receipt contract

---

## 5. Release Metadata and Integrity Requirements

Each release MUST include:

- `checksums.txt`
- `manifest.json`
- versioned schema paths

Releases claimed as canonically pinned on IPFS MUST also include:

- a recorded CID for the relevant version
- IPFS publication metadata that matches the release contents

Compliance requires:

- checksum verification against shipped schema artifacts
- manifest metadata that matches the version being claimed
- accurate separation of HTTPS hosting and IPFS publication state

IPFS pinning is required for canonical publication when that publication mode is being claimed.

---

## 6. Security and Privacy

Schemas are semantic infrastructure, not application output.

Therefore:

- no PII
- no secrets
- no embedded execution logic

Security incidents MUST follow `SECURITY.md`.

---

## 7. Governance Traceability

Every canonical change MUST be reflected in:

- `RESOLUTION.md` for what changed and why
- `manifest.json` for release metadata
- `checksums.txt` when schema artifacts change

An artifact without a documented governance trail is not canonical.

---

## 8. Ecosystem Alignment

Commons-compliant implementations SHOULD:

- support only the version-specific requirements they actually implement
- distinguish v1.1.0 flat contracts from v1.0.0 legacy structures

For v1.0.0 legacy implementations, that can include older `x402` envelope and `trace` requirements.

For v1.1.0 implementations, those older requirements are not automatically normative unless another layer adopts them separately.

---

## 9. Future Hardening

Future hardening MAY add optional signed publication mechanisms, but those mechanisms are not part of the current compliance baseline.

Until then, the required baseline is checksum verification plus documented release metadata.

---

## 10. Compliance Checklist

You may claim Protocol-Commons compliance for a specific version if:

- strict Ajv validation is enforced
- version directories are treated as immutable
- `$id` URLs resolve correctly
- releases include checksums
- releases include manifest metadata
- IPFS publication state is described accurately when applicable
- version status is described accurately as current or historical
