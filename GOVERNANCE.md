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
- Ensuring ENS TXT correctness
- Approving and versioning normative changes
- Security revocation + incident handling

> The Founding Steward **does not own** the ecosystem —  
> it **protects** stability until broader stewardship is in place.

### Future Decentralization Intent

Governance will evolve in **phases**:

| Phase | Governance Structure | Trigger |
|------|---------------------|--------|
| 1 — Bootstrap (now) | Single steward | Initial adoption |
| 2 — Multi-maintainer | ≥3 independent implementers | Cross-vendor usage |
| 3 — Standards Committee | Formal proposal & review | Widespread ecosystem reliance |
| 4 — Neutral Standards Body | Community-elected representatives | Global adoption & academic participation |

Governance will remain permissionless and open to ecosystem implementers.
---

## 2. Change Classes

| Change Type | Examples | Version Rule | Audit Log |
|------------|----------|--------------|-----------|
| **Normative** | Schema rules, ENS TXT semantics | Major: `1 → 2` | `RESOLUTION.md` |
| **Compatibility-affecting** | Required field tightening | Minor: `1.0 → 1.1` | `RESOLUTION.md` |
| **Non-behavioral** | Docs, comments, naming | Patch: `1.0.0 → 1.0.1` | Commit message |

CIDs + checksums MUST be published for the change to become effective.

---

## 3. Immutability Guarantees

Once a version is published:

- No file mutation  
- No `$id` or CID changes  
- ENS TXT MUST still resolve correctly  

**Violation triggers:** revocation + new version.

---

## 4. Release Policy

Every release MUST include:

- Strict validation via CI
- Signed IPFS CID and checksums
- Complete transparency artifacts updated **together**:
  - `SPEC.md`
  - `POLICY.md`
  - `SECURITY_PROVENANCE.md`
  - `RESOLUTION.md`
  - `VERSIONING.md`

**Atomic and provable — or it isn’t real.**

---

## 5. ENS TXT Enforcement

Resolvers MUST reject identity bindings when:

- TXT keys mismatch card values
- CIDs or checksums fail
- Required TXT fields are missing

**Correct TXT = trusted identity**  
**Anything else = untrusted.**

---

## 6. Security Governance

Responsibilities:

- Enforce security requirements under:
  - `SECURITY.md`
  - `SECURITY_PROVENANCE.md`
- Respond to incidents within **7 days**
- Record revocations transparently
- Require signed replacements for compromised artifacts

Emergency revocations MAY bypass full review  
if required to protect the network.

---

## 7. Dispute Resolution

If an artifact or claim is contested:

1. Log issue publicly  
2. Review evidence and ecosystem impact  
3. Decide outcome via steward + public comment  
4. Log resolution action in `RESOLUTION.md`  

**Collaborative — not arbitrary.**

---

## 8. Compatibility Claims

Software MAY claim:

- **Commons-Compatible**
- **Agent-Cards-Compatible**

…only if ALL of the following hold:

✔ ENS TXT → Card → Schema → CID validation  
✔ Ajv strict JSON Schema conformance  
✔ Canonical x402 entry format  
✔ Trace echo + status rules enforced  

False compatibility claims are governance violations.

---

_Last updated: v1.0.0 — Stable-Lock_  
Signed: **commandlayer.eth**  
*Founding Steward — CommandLayer Standards*
