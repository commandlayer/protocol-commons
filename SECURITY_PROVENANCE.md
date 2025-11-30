# Security & Provenance — Protocol-Commons

Protocol-Commons provides the shared verbs and contracts that keep autonomous agents
interoperable. This document describes how correctness, transparency, and trust
are maintained in a neutral and long-lived way.

---

## Contact

If something seems off, please reach out:

Email: dev@commandlayer.org  
PGP: 5016 D496 9F38 22B2 C5A2 FA40 99A2 6950 197D AB0A

Reports are welcomed from everyone — builders, auditors, and users.

---

## Provenance and Version Integrity

Protocol-Commons releases are **content addressed** and **reproducible**.

Current: **v1.0.0**

| Artifact | Integrity Source |
|---------|-----------------|
| Canonical Schema CID | `bafybeieoynknzalaojwpzjzjy77kpnfe4kla5io7jbfnmyu7w7vyvuljpq` |
| Checksums | `checksums.txt` |
| Validation | Strict Ajv CI on every PR |
| Audit Trail | `RESOLUTION.md` |

Any change that affects semantics requires:

- New versioned directory (e.g., `v1.0.1/`)
- New CID + checksums
- Governance review and `RESOLUTION.md` entry

No silent edits. No exceptions.

---

## ENS TXT Reference

Commons defines:

```
cl.verb
cl.version
cl.schema.request
cl.schema.receipt
cl.cid.schemas
cl.schemas.mirror.ipfs
```

These pointers help resolvers confidently retrieve the correct schema set.

---

## Security Posture

- No PII
- No proprietary execution logic
- Strict, minimal design to preserve durability

If something breaks, we fix it — transparently and permanently.

---

**Status:** Stable · Stewarded for the long run
