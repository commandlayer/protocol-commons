# Governance — Protocol-Commons

The CommandLayer Protocol Commons defines the canonical verb and schema layer for agents.

During the v1.0.0 cycle, it operates under a single-maintainer model to ensure stability and correctness of the core language. As adoption grows, stewardship will expand to a small group of trusted maintainers under a transparent proposal and review process.

---

## Stewardship

- **Owner:** commandlayer.eth  
- **Maintainer:** CommandLayer Governance Council  
- **Contact:** dev@commandlayer.org  

The Commons MUST remain:

- Neutral — no vendor-specific semantics  
- Minimal — only what is required for interoperability  
- Strictly versioned  
- Immutable once tagged and published  

---

## Change Process

1. Open an Issue describing the change request  
2. Provide justification  
   - Interoperability need  
   - Bug fix  
   - Security correction  
3. Update/verifying artifacts:
   - Request + receipt schemas validated under strict Ajv
   - Checksums regenerated
   - Manifest updated
4. Maintainer review + decision
5. Versioned release:
   - New tag (e.g., `commons-v1.0.1`)
   - New IPFS CID recorded in `SECURITY_PROVENANCE.md`

⚠️ Any change to request/receipt shape or `$id` structure requires a **minor/major** version bump.

---

## ENS Binding

Protocol-Commons is responsible ONLY for:
```
cl.verb
cl.version
cl.schema.request
cl.schema.receipt
cl.cid.schemas
cl.schemas.mirror.ipfs
```

These are **immutable protocol commitments** once published.

Updates MUST be approved via governance and logged in `RESOLUTION.md`.

---

## Deprecation

1. Log change in `RESOLUTION.md`
2. Mark deprecated in documentation
3. Preserve for backward compatibility unless removal is a security event

Deprecation window: **≥90 days** before removal.

---

## Transparency Artifacts

- `POLICY.md` — rules for verbs & schemas  
- `SPEC.md` — normative protocol requirements  
- `RESOLUTION.md` — lifecycle history  
- `SECURITY_PROVENANCE.md` — CIDs & hashes for each release  

---









