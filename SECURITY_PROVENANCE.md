# Security Provenance — Protocol Commons
**Scope:** Protocol-Commons  
**Status:** v1.0.0 — Stable-Lock  
**This document is NORMATIVE and ENFORCEABLE.**

Defines cryptographic provenance, integrity guarantees, and audit mechanisms 
for canonical Protocol-Commons schemas.

---

## Contact
If something seems incorrect, report immediately:

Email: dev@commandlayer.org  
PGP fingerprint: 5016 D496 9F38 22B2 C5A2 FA40 99A2 6950 197D AB0A  

Private disclosure is preferred for security-sensitive findings.

---

## Provenance & Version Integrity
Releases are **reproducible and content-addressed**.

Current canonical version: **v1.0.0**

Integrity sources:
- **CID:** `bafybeigvf6nkzws7dblos74dqqjkguwkrwn4a2c27ieygoxmgofyzdkz6m`
- `checksums.txt` — file-level hashes
- CI strict validation (Ajv)
- `RESOLUTION.md` — immutable lifecycle history

Any semantic update requires:
- New `schemas/vX.Y.Z/` directory
- New CID and updated checksums
- Governance approval + provenance record

**No silent edits. No exceptions.**

Auditors MUST verify:
- HTTP and IPFS mirrors match exactly
- Checksums remain unchanged
- Version directories are immutable

---

## ENS TXT Summary
Protocol-Commons governs TXT keys that resolve **schema semantics**.

Canonical rules under:
- `SPEC.md`

Resolvers MUST reject any:
- TXT ↔ CID mismatch  
- Unauthorized or missing TXT keys  
- Out-of-sync version binding

---

## Security Posture
- No PII  
- No execution or proprietary logic  
- Minimal surface area  
- Predictable and stable  

Breakage here causes **ecosystem-wide** failures.  
Recovery requires **transparent governance** — never mutation in place.

---

**Status:** Stable • Verifiable • Production-grade semantics • v1.0.0 locked

