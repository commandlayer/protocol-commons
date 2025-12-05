# Governance — Protocol Commons

**Applies To:** Protocol-Commons, Agent-Cards  
**Status:** v1.0.0 — Stable-Lock  

> This document is **NORMATIVE and ENFORCEABLE**.  
> Governance is custodial today and **designed to decentralize** over time.

---

## 1. Stewardship Model

**Founding Steward:** `commandlayer.eth`

Responsible for:

- Maintaining canonical Protocol-Commons + Agent-Cards standards  
- Publishing signed manifests + checksum sets  
- Approving and versioning normative changes  
- Ensuring transparency + security in provenance  
- Security revocation + incident handling  

> The Founding Steward **protects semantic stability** until multi-party governance takes over.

### Future Decentralization Intent

| Phase | Governance Structure | Trigger |
|------|---------------------|--------|
| 1 — Bootstrap (now) | Steward Safe under single-operator control | Initial adoption |
| 2 — Multi-maintainer | Safe with ≥3 independent implementers | Cross-vendor usage |
| 3 — Standards Committee | Public proposal & review | Widespread ecosystem reliance |
| 4 — Neutral Standards Body | Community-elected representatives | Global adoption |

---

### Rug-Resistance Guarantee

Protocol-Commons and Agent-Cards governance ensures that **no single actor** can revoke, monetize, or restrict canonical semantics without **public visibility and recorded approval**.

All normative state is **content-addressed and version-locked**.  
Silent behavior or pricing changes are **impossible by design**.

> Governance must protect **permissionless interoperability** forever.

---

### 1.4 Ecosystem Participation

Protocol-Commons and Agent-Cards are intended as **neutral public infrastructure** for autonomous agent interoperability.

The Founding Steward actively seeks **diverse governance participants**, including:

- ENS DAO  
- Ethereum Foundation  
- Independent vendor implementers  
- Academic + open standards contributors  
- Infrastructure operators  

Participation MUST align with:

- **Permissionless schema access**
- **Rug-resistant semantics**
- **Cross-ecosystem interoperability**

> Governance is open to growth — not capture.

---

## 2. Change Classes

| Change Type | Examples | Version Rule | Audit Log |
|------------|----------|--------------|-----------|
| **Normative** | Schema rules, TXT semantics | Major `1 → 2` | `RESOLUTION.md` |
| **Compatibility-affecting** | Required field tightening | Minor `1.0 → 1.1` | `RESOLUTION.md` |
| **Non-behavioral** | Docs & naming | Patch `1.0.0 → 1.0.1` | Commit message |

CIDs + checksums MUST be published for any change to take effect.

---

## 3. Immutability Guarantees

Once a version is published:

- No file mutation  
- No `$id` changes  
- No CID changes  

Violations require **revocation** + new version.

---

## 4. Release Policy

Valid releases MUST include:

- Full CI validation (strict mode)  
- Signed IPFS CID + checksums  
- Updated transparency artifacts:
  - `SPEC.md`, `POLICY.md`, `SECURITY_PROVENANCE.md`  
  - `RESOLUTION.md`, `VERSIONING.md`

> **Atomic + verifiable — or not valid.**

---

## 5. TXT Responsibility Split (NORMATIVE)

- **Protocol-Commons** governs TXT semantics for **schema definitions**
- **Agent-Cards** governs TXT semantics for **identity + invocation**

Resolvers MUST:

- Reject mismatches between on-chain TXT and published manifests  
- Treat ungoverned or malformed TXT as **UNTRUSTED**  

Unauthorized TXT keys MUST NOT be introduced without governance approval.

---

## 6. Security Governance

The Steward MUST:

- Enforce requirements defined in `SECURITY*.md`
- Respond to security reports within **7 days**
- Require signed replacements for compromised artifacts
- Log revocations transparently

Emergency revocation MAY bypass full review to protect the ecosystem.

---

## 7. Dispute Resolution

1. Log a public Issue  
2. Review evidence + impact  
3. Decision with public rationale  
4. Record outcome in `RESOLUTION.md`  

---

## 8. ENS Registry Custody

Canonical ENS names:

- `commandlayer.eth` (semantic authority)
- `{verb}agent.eth` canonical identity bindings

### Custody Model — NORMATIVE

Canonical ENS names MUST be held in a **multi-signature Safe**  
(e.g., Safe{Wallet} / Gnosis Safe).

Requirements:

- Minimum **3-of-5** threshold  
- Hardware-backed signer keys  
- All signers published in `SECURITY_PROVENANCE.md`  
- Signer rotation logged via governance motion  

> No single key can alter canonical TXT data.

### Decentralization Trigger

Migration to a **multi-stakeholder Safe** occurs at Phase 2:

> Trigger: ≥3 independent ecosystem implementers in production.

ENS authority MUST remain **public infrastructure**, not a private asset.

Any action restricting interoperability is a **governance violation**.

---

## 9. Compatibility Claims

Software MAY claim:

- **Commons-Compatible**
- **Agent-Cards-Compatible**

…only if:

✔ CID / `$id` / TXT validation  
✔ Ajv strict JSON Schema enforcement  
✔ Canonical x402 envelope shape  
✔ Trace echo + receipt rules  
  
False claims must trigger governance action.

---

_Last updated: v1.0.0 — Stable-Lock_  
Signed: **commandlayer.eth**  
*Founding Steward — CommandLayer Standards*
