# Security Provenance — Protocol Commons
**Scope:** Protocol-Commons  
**Status:** v1.1.0 — Pre-Release Candidate; v1.0.0 remains the last pinned canonical release  
**This document is NORMATIVE and ENFORCEABLE.**

Defines cryptographic provenance, integrity guarantees, and audit mechanisms 
for published and release-candidate Protocol-Commons schemas.

---

## Contact
If something seems incorrect, report immediately:

Email: dev@commandlayer.org  
PGP fingerprint: 5016 D496 9F38 22B2 C5A2 FA40 99A2 6950 197D AB0A  

Private disclosure is preferred for security-sensitive findings.

---

## Provenance & Version Integrity
Releases are **reproducible and content-addressed**.

Current repository schema family: **v1.1.0**  
Current canonical pinned release: **v1.0.0**

Integrity sources:
- **v1.0.0 CID:** `bafybeigvf6nkzws7dblos74dqqjkguwkrwn4a2c27ieygoxmgofyzdkz6m`
- **v1.1.0 CID:** `TBD (pre-release; pinning not yet published)`
- `checksums.txt` — file-level hashes
- CI strict validation (Ajv)
- `RESOLUTION.md` — immutable lifecycle history
- `manifest.json` — current package metadata and pin target state

Until a v1.1.0 CID is published and recorded, resolvers and auditors MUST treat v1.1.0 as a pre-release schema family rather than the last fully pinned canonical release.

Any semantic update requires:
- New `schemas/vX.Y.Z/` directory
- New CID and updated checksums for any canonical release
- Governance approval + provenance record

**No silent edits. No exceptions.**

Auditors MUST verify:
- HTTP and IPFS mirrors match exactly for pinned canonical releases
- Checksums remain unchanged
- Version directories are immutable
- A release is not described as fully canonical unless its CID publication is complete

---

## ENS TXT Summary
Protocol-Commons governs TXT keys that resolve **schema semantics**.

Canonical rules under:
- `SPEC.md`

Resolvers MUST reject any:
- TXT ↔ CID mismatch  
- Unauthorized or missing TXT keys  
- Out-of-sync version binding

For v1.1.0 specifically, TXT/CID binding MUST NOT be represented as canonical until the release CID is published.

---

## Security Posture
- No PII  
- No execution or proprietary logic  
- Minimal surface area  
- Predictable and stable  

Breakage here causes **ecosystem-wide** failures.  
Recovery requires **transparent governance** — never mutation in place.

---

**Status:** v1.1.0 is the current in-repo schema family and release candidate; v1.0.0 remains the last fully verifiable pinned canonical release.
