# COMMANDLAYER GOVERNANCE — CORE PROTOCOLS
Applies To: Protocol-Commons, Agent-Cards  
Status: v1.0.0 — Stable-Lock

> This document is **NORMATIVE and ENFORCEABLE**.

---

## 1. Authority Model

- **Sole Governance Council:** commandlayer.eth  
- Holds exclusive authority over:
  - Approving and publishing normative changes
  - Signing `manifest.json` and checksum sets
  - Updating ENS TXT canonical fields
  - Issuing and locking version releases
  - Revocation and security incident handling

No external party may alter canonical standards without Council approval.

---

## 2. Change Classes

| Change Type | Examples | Version Requirement | Logging Requirement |
|------------|----------|-------------------|--------------------|
| **Normative** | Schema shapes, `$id` format, ENS TXT rules | Major: `v1 → v2` | `RESOLUTION.md` |
| **Compatibility-affecting** | Request/receipt structure tightening | Minor: `v1.0 → v1.1` | `RESOLUTION.md` |
| **Non-behavioral** | Docs, comments, logo | Patch: `v1.0.0 → v1.0.1` | Commit message OK |

No change is valid until **CIDs + checksums** are published and signed.

---

## 3. Immutability Guarantees

Once published:

- Version directories MUST NOT mutate
- `$id` and CID MUST remain stable forever
- ENS TXT MUST continue to resolve to matching artifacts

Violations trigger:
- Immediate revocation event in `RESOLUTION.md`
- Replacement version required

---

## 4. Release Requirements

Every Protocol-Commons or Agent-Cards release MUST include:

- Validated schemas under **Ajv strict**
- IPFS CID root pinned and verified
- Updated manifest with:
  - checksum mappings
  - `$id` integrity
  - version and status fields
- ENS TXT updates propagated

CI enforcement is mandatory.

---

## 5. ENS TXT Enforcement

Council MUST validate:

- `cl.verb` matches **implements[0]**
- `cl.version` matches card `version`
- All `cl.schema.*` mappings match `$id` values
- All CID + checksum fields resolve and match

Any mismatch → **Resolver MUST reject as untrusted**

---

## 6. Security Oversight

Governance responsibilities include:

- Enforcing policies in:
  - `SECURITY.md`
  - `SECURITY_PROVENANCE.md`
- Revoking compromised artifacts
- Requiring replacement CID publication
- Maintaining audit trail in `RESOLUTION.md`

Security reports MUST receive a response within **7 days**.

---

## 7. Dispute / Revocation Handling

If an artifact becomes compromised:

1. Record revocation in `RESOLUTION.md`
2. Mark deprecated or blocked in metadata
3. Update ENS TXT with appropriate state
4. Issue a new signed replacement version if viable

Council judgment is final.

---

## 8. Compatibility Claims

Software MAY claim:

- **Protocol-Commons-Compatible**  
- **Agent-Cards-Compatible**

…only if it completely:

- Resolves ENS TXT → identity → schemas
- Validates all artifacts in strict mode
- Enforces trace and status guarantees
- Invokes via x402 canonical `entry` URIs

False claims are governance violations.

---

## 9. Transparency Artifacts

| Doc | Purpose |
|-----|---------|
| `SPEC.md` | Normative standard requirements |
| `POLICY.md` | Publication + correctness rules |
| `RESOLUTION.md` | Lifecycle + incident log |
| `SECURITY.md` | Incident intake + expectations |
| `SECURITY_PROVENANCE.md` | CID + checksum signing |
| `VERSIONING.md` | Change class mapping |

All MUST be updated atomically with each release.

---

_Last updated: v1.0.0 Stable-Lock_  
Signed: **commandlayer.eth**
