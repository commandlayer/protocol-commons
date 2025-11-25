
# Governance — Protocol Commons

The CommandLayer Protocol Commons defines the canonical verb and schema layer for agents.  
During the v1.0.0 cycle, it operates under a single-maintainer model to ensure stability and correctness of the command language.

---

## Stewardship

- **Owner:** `commandlayer.eth`  
- **Maintainer:** CommandLayer Governance Council  
- **Contact:** `dev@commandlayer.org`  

The Commons layer must remain:

- Neutral — no vendor-specific semantics  
- Minimal — only what is required for interoperability  
- Strictly versioned  
- Immutable once tagged and published  

---

## Change Process

1. **Open an issue** describing the proposed update  
2. **Provide justification** (interoperability need, bug fix, receipt fix, security hardening)  
3. **Run validation**:
   - All schemas pass strict Ajv  
   - All examples pass  
   - `checksums.txt` regenerated  
4. **Maintainer review** and determination  
5. **Tagged release + provenance update**:
   - New tag (e.g., `commons-v1.0.1`)  
   - New IPFS CID recorded in `SECURITY_PROVENANCE.md`  
   - ENS TXT fields updated if applicable  

Changes that alter the request/receipt contract, trace semantics, alias mapping rules, or x402 requirements require a **minor or major** version bump.

---

## ENS Binding Governance

ENS TXT fields associated with Protocol-Commons — such as those stored under `commandlayer.eth` or verb-specific ENS names — are **critical protocol resources**.

Fields include:

- `cl.verb`  
- `cl.version`  
- `cl.schema.request`  
- `cl.schema.receipt`  
- `cl.cid.schemas`  
- `cl.owner`  

Any modification must undergo:

- Maintainer approval  
- Out-of-band verification (PGP or signed message)  
- Logging in `RESOLUTION.md` with timestamp + rationale  

---

## Deprecation

When a verb or schema is deprecated:

1. **Record** in `RESOLUTION.md` with:
   - Affected `$id`
   - Reason
   - Replacement (if any)
2. **Mark** deprecated status in `SPEC.md` and public documentation  
3. **Preserve** the schema for backward compatibility unless removal is required for security  

Removal is treated as an **exceptional event** and requires a documented migration path for downstream integrators.
