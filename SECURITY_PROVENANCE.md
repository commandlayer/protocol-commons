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
Pinned releases are content-addressed. The current v1.1.0 line is schema-resolvable and checksum-tracked, but not yet represented as a pinned CID-backed release in repository metadata.

Current repository schema family: **v1.1.0**  
Current canonical pinned release: **v1.0.0**

Integrity sources:
- **v1.0.0 CID:** `bafybeigvf6nkzws7dblos74dqqjkguwkrwn4a2c27ieygoxmgofyzdkz6m`
- **v1.1.0 CID:** not asserted in-repo; `manifest.json` records `null` with status `not-generated-in-repo` until a reproducible release hasher is wired in
- `checksums.txt` — file-level hashes
- CI strict validation (Ajv)
- `RESOLUTION.md` — immutable lifecycle history
- `manifest.json` — current package metadata and pin target state

Until a v1.1.0 CID is published and recorded, resolvers and auditors MUST treat v1.1.0 as the current canonical in-repo schema family rather than the historical pinned release.

Any semantic update requires:
- New `schemas/vX.Y.Z/` directory
- New CID and updated checksums for any canonical release
- Governance approval + provenance record

**No silent edits. No exceptions.**

Auditors MUST verify:
- HTTP and IPFS mirrors match exactly for pinned canonical releases
- Checksums remain unchanged
- Version directories are immutable
- The current canonical in-repo line is not misdescribed as the historical pinned release before CID publication is complete

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

**Status:** v1.1.0 is the current canonical in-repo schema family; v1.0.0 remains the historical fully verifiable pinned release.
