# Security & Provenance — Protocol-Commons

Protocol-Commons defines the **canonical semantic layer** for autonomous agents.  
This document ensures schema integrity and ecosystem trust.

---

## Contact

If something seems incorrect, report immediately:

Email: dev@commandlayer.org  
PGP fingerprint: 5016 D496 9F38 22B2 C5A2 FA40 99A2 6950 197D AB0A

---

## Provenance & Version Integrity

Releases are **reproducible and content-addressed**.

Current canonical version: **v1.0.0**

Integrity sources:

- **CID**: `bafybeieoynknzalaojwpzjzjy77kpnfe4kla5io7jbfnmyu7w7vyvuljpq`
- **checksums.txt** — file-level hashes
- **CI validation** — Ajv strict mode
- **RESOLUTION.md** — lifecycle log

Any semantic update requires:

- New `schemas/vX.Y.Z/` directory
- New CID and updated checksums
- Governance approval + provenance record

No silent edits. No exceptions.

---

##  ENS TXT Summary

Protocol-Commons governs TXT keys that resolve **schema semantics**.  
Canonical definitions — including required keys and enforcement — are specified in:

- `SPEC.md` (Protocol-Commons)

Resolvers MUST reject bindings that do not match canonical metadata.

---

## Security Posture

- No PII
- No runtime or proprietary logic
- Minimal surface area
- Simple, strict, and stable

Breakage here is **ecosystem-wide** — restored only through transparent governance.

---

**Status:** Stable • Verifiable • Production-grade semantics • v1.0.0 locked

