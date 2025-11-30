# COMMANDLAYER GOVERNANCE — CORE PROTOCOLS

**Applies To:** Protocol-Commons, Agent-Cards  
**Status:** v1.0.0 — Stable-Lock  

> This document is **NORMATIVE and ENFORCEABLE**.  
> Governance is custodial today and **designed to decentralize** over time.

---

## 1. Stewardship Model

**Founding Steward:** `commandlayer.eth`

Responsible for:

- Maintaining canonical Protocol-Commons + Agent-Cards standards
- Publishing signed manifest + checksum sets
- Approving and versioning normative changes
- Ensuring transparency + security in provenance
- Security revocation + incident handling

> The Founding Steward **protects protocol stability** until broader stewardship is in place.

### Future Decentralization Intent

| Phase | Governance Structure | Trigger |
|------|---------------------|--------|
| 1 — Bootstrap (now) | Single steward | Initial adoption |
| 2 — Multi-maintainer | ≥3 independent implementers | Cross-vendor usage |
| 3 — Standards Committee | Formal proposal & review | Widespread ecosystem reliance |
| 4 — Neutral Standards Body | Community-elected representatives | Global adoption |

---

## 2. Change Classes

| Change Type | Examples | Version Rule | Audit Log |
|------------|----------|--------------|-----------|
| **Normative** | Schema rules, TXT semantics | Major: `1 → 2` | `RESOLUTION.md` |
| **Compatibility-affecting** | Required field tightening | Minor: `1.0 → 1.1` | `RESOLUTION.md` |
| **Non-behavioral** | Docs, naming | Patch: `1.0.0 → 1.0.1` | Commit message |

CIDs + checksums MUST be published for changes to become effective.

---

## 3. Immutability Guarantees

Once a version is published:

- No file mutation
- No `$id` or CID changes

Violations require revocation + new version.

---

## 4. Release Policy

Every release MUST include:

- Strict validation via CI
- Signed IPFS CID + checksums
- Transparency artifacts updated **together**:
  - `SPEC.md`, `POLICY.md`, `SECURITY_PROVENANCE.md`, `RESOLUTION.md`, `VERSIONING.md`

**Atomic and verifiable — or not valid.**

---

## 5. TXT Responsibility Split (NORMATIVE)

- **Protocol-Commons** governs TXT keys that resolve **schema semantics**  
- **Agent-Cards** governs TXT keys that bind **identity + invocation**

If a TXT field is not explicitly assigned here, it MUST NOT be introduced without governance approval.

Resolvers MUST treat TXT contract violations as **UNTRUSTED** bindings.

---

## 6. Security Governance

Responsibilities:

- Enforce requirements under `SECURITY*.md`
- Respond to security reports within **7 days**
- Require signed replacements for compromised artifacts
- Log revocations transparently

Emergency revocation MAY bypass full review if required to protect the ecosystem.

---

## 7. Dispute Resolution

1. Log an Issue publicly  
2. Review evidence + ecosystem impact  
3. Render decision with public comment  
4. Log outcome in `RESOLUTION.md`  

---

## 8. Compatibility Claims

Software MAY claim:

- **Commons-Compatible**
- **Agent-Cards-Compatible**

…only with:

✔ Schema/CID/TXT validation  
✔ Ajv strict JSON Schema enforcement  
✔ Canonical x402 entry format  
✔ Trace echo + status rules enforced  

False claims are governance violations.

---

_Last updated: v1.0.0 — Stable-Lock_  
Signed: **commandlayer.eth**  
*Founding Steward — CommandLayer Standards*
