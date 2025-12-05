# GOVERNANCE — Protocol-Commons (CommandLayer)

**Scope:** Protocol-Commons (primary), Agent-Cards (identity bindings)  
**Status:** v1.0.0 — Stable-Lock  

> This governance is **NORMATIVE, ENFORCEABLE, AND PERMANENT**.  
> Control is custodial today and **designed to decentralize** as adoption grows.

---

## 1. Mandate of Commons Governance

Protocol-Commons governs **semantic truth**:

- Canonical verbs  
- Request/receipt schemas  
- TXT semantics for schema binding  
- Normative version changes  
- Immutable historical provenance  

It MUST protect:

- **Machine-readable meaning**
- **Interoperability continuity**
- **Permanent public access**

> **Commons is the constitution of agent intent.**  
> Everything else derives authority from it — not the other way around.

---

## 2. Strict Scope Limits — NORMATIVE

### Commons MAY govern:
- Semantic contracts (schema language, grammar, behavior)
- Required validation mode (strict, draft 2020-12)
- TXT keys that bind semantic truth (`cl.schema.*`)

### Commons MUST NOT govern:
- Pricing or economics  
- Runtime topology  
- Execution performance or SLAs  
- Vendor-specific commercial logic  

Commercial and Runtime layers MUST remain **subordinate**:

> **Execution is business.  
> Semantics are public goods.**

Commercial schemas may reference Commons semantics — they **may not alter them**.

---

## 3. Stewardship — Bootstrap to Neutrality

**Founding Steward:** `commandlayer.eth`  

Responsible for:

- Canonical schema publishing  
- Signed manifest + checksum updates  
- Security revocations + provenance logs  
- Transparency for all normative decisions  

### Decentralization Phases

| Phase | Governance Form | Trigger |
|-------|----------------|---------|
| 1 — Bootstrap | Single-operator Safe | Initial production adoption |
| 2 — Multi-Maintainer | ≥3 independent vendors in Safe | Cross-vendor reliance |
| 3 — Standards Committee | Public RFC review + voting | Global ecosystem dependence |
| 4 — Neutral Standards Body | Community-elected | Entrenched industry standard |

Vendor diversity REQUIRED — **no single affiliation may dominate**.

A non-profit legal wrapper SHALL be established before Phase 3.

---

## 4. Immutable Semantic Guarantees (Anti-Rug)

Once published:

- `$id`, CID, and version MUST NEVER change  
- Historical schemas MUST remain resolvable  
- Governance history MUST NOT be rewritten  

Commercial schemas inherit similar guarantees:

> **Commercial schemas are permanently free** —  
> **economics only occur at runtime, never in the semantic layer.**

Attempts to mutate semantics in place MUST be treated as **UNTRUSTED**.

---

## 5. TXT Key Governance — NORMATIVE

TXT semantics are partitioned:

| Prefix | Authority | Meaning | Mutation Allowed? |
|--------|-----------|---------|------------------|
| `cl.schema.*` | Commons | Semantic bindings | ❌ NEVER |
| `cl.agentcard` | Agent-Cards | Identity binding | ❌ NEVER (per version) |
| `cl.runtime.*` | Runtime | Operational endpoints | ✔ Yes, logged |

Resolvers MUST:

- Reject TXT ↔ CID mismatches  
- Treat unauthorized TXT keys as **UNTRUSTED**  
- Enforce immutability of all versioned schema keys  

> **Schema TXT is sacred.  
> Runtime TXT is operational.**

---

## 6. ENS Custody — NORMATIVE

Canonical ENS:

- `commandlayer.eth`  
- `{verb}agent.eth` identities  

Custody SHALL transition to a **3-of-5 Safe** before Phase 2:

- Hardware-backed keys  
- Signer identities publicly logged  
- Rotation MUST be recorded in `SECURITY_PROVENANCE.md`  

No single key may modify canonical semantics.

---

## 7. Change Classification

| Change Class | Version Rule | Required Log |
|--------------|--------------|--------------|
| **Normative** (behavior change) | `1 → 2` | `RESOLUTION.md` |
| **Compat-affecting** | `1.0 → 1.1` | `RESOLUTION.md` |
| **Non-behavioral** | `1.0.0 → 1.0.1` | Commit history |

Every semantic release MUST publish new CIDs + checksums.

---

## 8. Security Governance

- Responsible disclosure contact MUST be active  
- No silent patches or overwritten history  
- Emergency revocation allowed to protect downstream users  

Transparency ALWAYS wins.

---

## 9. Enforcement of Compatibility Claims

Products MAY claim:

- **Commons-Compatible**
- **Agent-Cards-Compatible**

ONLY if:

- `$id` + CID validation passes  
- Ajv strict mode enforced  
- Traceable receipt conformance  
- Adherence to this Governance  

False claims REQUIRE public enforcement action.

---

_Last updated: v1.0.0 — Stable-Lock_  
Signed: **`commandlayer.eth`**  
*Founding Steward — CommandLayer Semantic Standards*
