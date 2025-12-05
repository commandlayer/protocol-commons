# GOVERNANCE — CommandLayer Protocol Commons

**Applies To:** Protocol-Commons, Agent-Cards  
**Status:** v1.0.0 — Stable-Lock  

> This document is **NORMATIVE and ENFORCEABLE**.  
> Governance is custodial today and **designed to decentralize** over time.

---

## 1. Stewardship Model

**Founding Steward:** `commandlayer.eth`

Responsible for:

- Canonical Protocol-Commons + Agent-Cards standards  
- Signed manifests + checksum provenance  
- Normative version approvals  
- Transparency + receipt of all changes  
- Security revocation + incident response  

> The Founding Steward protects **semantic stability** until multi-party governance takes over.

### 1.1 Governance Phases

| Phase | Governance Structure | Trigger |
|------|---------------------|---------|
| **1 — Bootstrap** | Single-operator Safe | Initial public release |
| **2 — Multi-maintainer** | ≥3 independent implementers in a shared Safe | Cross-vendor production use |
| **3 — Standards Committee** | Public proposal + review; multi-stakeholder Safe | Widespread ecosystem reliance |
| **4 — Neutral Standards Body** | Community-elected representatives | Global adoption |

> Phase advancement requires **vendor diversity**: no two operators may be majority-affiliated.

---

### 1.2 Rug-Resistance Guarantee

Canonical semantics:

- CANNOT be revoked or made paywalled  
- CANNOT change without recorded approval  
- CANNOT drift silently  

All normative state is:

- **Content-addressed** (CIDs)  
- **Version-locked**  
- **Publicly auditable**

> Protocol governance **preserves permissionless interoperability forever**.

---

### 1.3 Open Stewardship Path

Once Phase 2 triggers:

- Governance seats MUST be open to public application  
- Qualifications MUST prioritize neutrality + ecosystem contribution  
- All selections MUST be logged in `SECURITY_PROVENANCE.md`

> Governance is open to growth — not capture.

---

### 1.4 External Participation

Eligible stakeholders include:

- ENS DAO  
- Ethereum Foundation  
- Independent runtime + schema implementers  
- Infrastructure operators  
- Academic / open standards orgs  

Participation MUST align with:

- Free access to canonical schemas  
- Rug-resistant semantics  
- Cross-ecosystem interoperability  

---

## 2. Scope of Authority — NORMATIVE

Governance MAY define:

- Canonical verb semantics  
- JSON Schema rules  
- TXT semantics tied to identity + invocation  
- Transparency + provenance requirements  

Governance MUST NOT dictate:

- Runtime topology  
- Execution pricing  
- Proprietary commercial logic  
- Business models of implementers  

> CommandLayer sets the **language**, not the **economics**.

---

## 3. Token Governance Rule

Token-based control:

- **MUST NOT** be introduced before Phase 3  
- Any introduction **REQUIRES** community motion + recorded rationale  
- Tokens MUST NOT introduce **pay-to-govern** dynamics  

> Tokens are a **last resort**, not a founding primitive.

---

## 4. Change Classes

| Change Type | Examples | Version Rule | Audit Requirement |
|------------|----------|--------------|------------------|
| **Normative** | Schema, TXT semantics | `1 → 2` | `RESOLUTION.md` |
| **Compatibility-affecting** | Field tightening | `1.0 → 1.1` | `RESOLUTION.md` |
| **Non-behavioral** | Docs, naming | `1.0.0 → 1.0.1` | Git history |

All changes MUST update CIDs + checksums.

---

## 5. Immutability Guarantees

Once a version is published:

- No file mutation  
- No `$id` changes  
- No CID changes  

Violations REQUIRE revocation + new version.

---

## 6. Release Policy

Valid releases MUST include:

- Full CI validation (strict mode)  
- Signed IPFS CID + checksums  
- Updated transparency artifacts:
  - `SPEC.md`, `SECURITY_PROVENANCE.md`, `RESOLUTION.md`, `VERSIONING.md`  

> **Atomic + verifiable — or not valid.**

---

## 7. TXT Responsibility Split — NORMATIVE

- **Protocol-Commons**: TXT semantics for **schema**
- **Agent-Cards**: TXT semantics for **identity + invocation**

Resolvers MUST:

- Reject mismatches between TXT + published manifests  
- Treat ungoverned TXT as **UNTRUSTED**  

Unauthorized TXT keys are **forbidden**.

---

## 8. Security Governance

Steward MUST:

- Enforce `SECURITY*.md` requirements  
- Respond to disclosures within **7 days**  
- Require signed replacements after compromise  
- Log revocations transparently  

Emergency revocation MAY bypass full review to protect users.

Independent third-party validation MUST be possible at all times.

---

## 9. Dispute Resolution Protocol

1. Log a public Issue  
2. Evidence review  
3. Governance decision with rationale  
4. Permanent entry in `RESOLUTION.md`  

---

## 10. ENS Registry Custody — NORMATIVE

Canonical ENS names:

- `commandlayer.eth`  
- `{verb}agent.eth` canonical identity bindings  

Custody MUST be via a **multi-signature Safe**:

- Minimum **3-of-5** threshold  
- Hardware-secured signer keys  
- All signers published in `SECURITY_PROVENANCE.md`  
- Rotation MUST be logged as governance action  

> No single key can alter canonical TXT state.

**Decentralization Trigger:** Start Phase 2  
➝ ≥3 independent production implementers.

ENS authority MUST remain **public infrastructure**, not a private asset.

Any action restricting interoperability is a **governance violation**.

---

## 11. Compatibility Claims

Software MAY claim:

- **Commons-Compatible**
- **Agent-Cards-Compatible**

Only if:

- Canonical CID / `$id` alignment  
- Ajv strict schema compliance  
- Verified x402 envelope semantics  
- Receipt + trace integrity  

False claims **require enforcement**.

---

_Last updated: v1.0.0 — Stable-Lock_  
Signed: **commandlayer.eth**  
*Founding Steward — CommandLayer Standards*
