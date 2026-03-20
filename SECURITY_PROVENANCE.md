# Security Provenance — Protocol Commons
**Scope:** Protocol-Commons  
**Status:** v1.1.0 — Current Canonical In-Repo Line; v1.0.0 remains the historical pinned release  
**This document is NORMATIVE and ENFORCEABLE.**

Defines cryptographic provenance, integrity guarantees, and audit mechanisms 
for published and current in-repo Protocol-Commons schemas.

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
- **v1.1.0 HTTPS canonical root:** `https://commandlayer.org/schemas/v1.1.0/` (live)
- **v1.1.0 CID:** `PENDING` (IPFS pinning not yet published)
- `checksums.txt` — file-level hashes
- CI strict validation (Ajv)
- `RESOLUTION.md` — immutable lifecycle history
- `manifest.json` — current package metadata and pin target state

Until a v1.1.0 CID is published and recorded, resolvers and auditors MUST treat v1.1.0 as the current canonical HTTPS-hosted schema family rather than the historical pinned release.

Any semantic update requires:
- New `schemas/vX.Y.Z/` directory
- New CID and updated checksums for any canonical release
- Governance approval + provenance record

**No silent edits. No exceptions.**

Auditors MUST verify:
- HTTPS and IPFS mirrors match exactly for pinned canonical releases
- Checksums remain unchanged
- Version directories are immutable
- The current canonical HTTPS-hosted line is not misdescribed as the historical pinned release before CID publication is complete

---

## ENS TXT Summary
Protocol-Commons governs TXT keys that resolve **schema semantics**.

Canonical rules under:
- `SPEC.md`

Resolvers MUST reject any:
- TXT ↔ CID mismatch  
- Unauthorized or missing TXT keys  
- Out-of-sync version binding

For v1.1.0 specifically, TXT/CID binding MUST NOT be represented as a published pinned release until CID publication is complete.

---

## Security Posture
- No PII  
- No execution or proprietary logic  
- Minimal surface area  
- Predictable and stable  

Breakage here causes **ecosystem-wide** failures.  
Recovery requires **transparent governance** — never mutation in place.

---

**Status:** v1.1.0 is the current canonical HTTPS-hosted schema family with pending IPFS CID publication; v1.0.0 remains the historical fully verifiable pinned release.
