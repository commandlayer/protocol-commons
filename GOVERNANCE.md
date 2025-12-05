# GOVERNANCE — CommandLayer Protocol

**Applies To:** Protocol-Commons, Protocol-Commercial, Agent-Cards  
**Status:** v1.0.0 — Stable-Lock  

> This document is **NORMATIVE, ENFORCEABLE, AND PERMANENT**.  
> Governance is custodial today and **designed to decentralize** over time.

---

## 1. Stewardship Model

**Founding Steward:** `commandlayer.eth`

Responsible for:

- Maintaining canonical Commons + Commercial semantics  
- Publishing signed manifests + checksums  
- Approving normative version changes  
- Security revocations + provenance logging  
- Transparency and public accountability  

> The Steward protects **semantic stability** until multi-party governance takes over.

### 1.1 Decentralization Roadmap

| Phase | Governance | Trigger |
|------|------------|---------|
| 1 — Bootstrap | Single-operator Safe | Initial ecosystem adoption |
| 2 — Multi-Maintainer | ≥3 independent vendors in Safe | Cross-vendor production usage |
| 3 — Standards Committee | Public proposal + review | Widespread interoperability reliance |
| 4 — Neutral Standards Body | Community-elected seats | Global normative standard |

New governance participants SHALL be recruited from:

- ENS DAO  
- Ethereum Foundation contributors  
- Neutral infra & runtime operators  
- Academic and open-standards bodies  

Vendor diversity is REQUIRED — no single affiliation may dominate control.

---

## 2. Scope of Authority — NORMATIVE

Governance **MAY** define:

- Semantic contracts (Commons + Commercial schemas)
- TXT semantics for identity + invocation
- Transparency + versioning requirements

Governance **MUST NOT** dictate:

- Execution pricing  
- Runtime topology  
- Settlement mechanisms  
- Vendor-specific commercial logic

> **Commons + Commercial define language.  
> Agent-Cards bind identity.  
> Runtime governs execution and economics.**

---

## 3. Immutable Semantic Guarantees (Anti-Rug)

Once published:

- **Schemas:** `$id`, CID, and versioned TXT keys MAY NOT change  
- **Agent-Cards:** historical versions MUST remain resolvable  
- **Governance artifacts:** MUST preserve full historical context  

Attempts to mutate semantics in place MUST be treated as **untrusted**.

Schemas are **permanently free** under MIT/Apache-2.0 — irrevocable rights.

> **Semantics are public infrastructure — forever.**

---

## 4. Change Classes

| Change | Version Rule | Required Log |
|-------|--------------|--------------|
| **Normative** (behavior change) | `1 → 2` | `RESOLUTION.md` |
| **Compat-affecting** | `1.0 → 1.1` | `RESOLUTION.md` |
| **Non-behavioral** | `1.0.0 → 1.0.1` | Commit history |

CIDs + checksums MUST be published for every semantic release.

---

## 5. Release Requirements

Valid releases MUST include:

- Strict validation CI passing  
- Signed IPFS CIDs + checksums  
- Updated transparency artifacts:
  - `SPEC.md`, `VERSIONING.md`, `SECURITY_PROVENANCE.md`, `RESOLUTION.md`

> **Atomic. Verified. Immutable. Or not valid.**

---

## 6. TXT Governance (NORMATIVE)

TXT semantics are partitioned:

| Prefix | Authority | Meaning | Mutation Allowed? |
|--------|-----------|---------|------------------|
| `cl.schema.*` | Commons + Commercial | Semantic schemas | ❌ NEVER |
| `cl.agentcard` | Agent-Cards | Identity binding | ❌ NEVER (per version) |
| `cl.runtime.*` | Runtime | Execution endpoints | ✔ Yes, logged |

Resolvers MUST:

- Reject TXT → CID mismatches  
- Treat unauthorized TXT keys as **UNTRUSTED**  
- Honor immutability of versioned schema keys  

> **Schema TXT keys are sacred. Runtime keys are operational.**

---

## 7. ENS Custody Model — NORMATIVE

Canonical ENS:

- `commandlayer.eth`  
- `{verb}agent.eth` identities  

Custody MUST be a **3-of-5 Safe** once Phase 2 triggers:

- Signers hardware-backed  
- All signer identities disclosed in `SECURITY_PROVENANCE.md`  
- Rotation MUST be logged as governance action  

**No single key** can change canonical TXT state.

---

## 8. Runtime Governance Boundary

- Runtime **MAY** set and rotate `cl.runtime.*`
- Runtime **MAY** define pricing and SLAs
- Runtime **MAY** provide commercial execution

Runtime MUST NOT:

- Alter semantic contracts  
- Shadow governed schema keys  
- Introduce proprietary lock-in of verbs

> **Execution is business.  
> Semantics are public goods.**

---

## 9. Dispute Resolution

1. Public Issue opened  
2. Evidence + impact review  
3. Governance decision + rationale  
4. Permanent entry in `RESOLUTION.md`  

Emergency revocation MAY bypass full review to protect users.

---

## 10. Compatibility Claims

Software MAY claim:

- **Commons-Compatible**
- **Commercial-Compatible**
- **Agent-Cards-Compatible**

ONLY if:

- CID + `$id` validation  
- Ajv strict mode  
- Timestamp-protected trace + receipts  
- Conformance with this Governance  

False claims REQUIRE enforcement.

---

_Last updated: v1.0.0 — Stable-Lock_  
Signed: **`commandlayer.eth`**  
*Founding Steward — CommandLayer Standards*
