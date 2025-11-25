
# Protocol Commons Policy

This document defines the canonical rules for creating, validating, and publishing verb schemas in the CommandLayer Protocol Commons.

The Protocol Commons provides the universal language foundation for all agents, runtimes, SDKs, and autonomous workflows.

---

## 1. Canonical Rules

All canonical verbs MUST:

- Be lowercase, single-word identifiers  
- Define both:
  ```
  <verb>.request.schema.json
  <verb>.receipt.schema.json
  ```
- Validate under **strict Ajv** with:
  - Draft 2020-12
  - strict mode enabled
  - no additionalProperties
  - no union types beyond explicitly allowed structures
 ----
- Use deterministic `$id` URLs:
  ```
  https://commandlayer.org/schemas/v1.0.0/commons/<verb>/requests/<verb>.request.schema.json
  ```
- Follow fixed directory structure:
  ```
  /schemas/v1.0.0/commons/<verb>/...
  ```
- Remain **immutable** once published

Schemas MUST be domain-neutral and free of vendor-specific semantics.

---

## 2. Required Files Per Verb

Each verb MUST contain:

- `requests/<verb>.request.schema.json`
- `receipts/<verb>.receipt.schema.json`
- `examples/valid/*.json`
- `examples/invalid/*.json`

Request + receipt schemas MUST reference:

```
schemas/v1.0.0/_shared/*.schema.json
```

---

## 3. ENS TXT Requirements

All canonical verbs MUST have resolvable ENS TXT entries:

```
cl.verb=<verb>
cl.version=1.0.0

cl.entry=x402://<verbagent>.eth/<verb>/v1

cl.schema.request=https://commandlayer.org/schemas/v1.0.0/commons/<verb>/requests/<verb>.request.schema.json
cl.schema.receipt=https://commandlayer.org/schemas/v1.0.0/commons/<verb>/receipts/<verb>.receipt.schema.json

cl.cid.schemas=<cid-schemas>
cl.schemas.mirror.ipfs=https://ipfs.io/ipfs/<cid-schemas>

cl.agentcard=https://commandlayer.org/agent-cards/agents/v1.0.0/commons/<verbagent>.eth.json
cl.cid.agentcard=<cid-agentcard>
cl.agentcard.mirror.ipfs=https://ipfs.io/ipfs/<cid-agentcard>/agents/<verbagent>.eth.json

cl.checksum.request=<sha256-request>
cl.checksum.receipt=<sha256-receipt>
cl.checksum.agentcard=<sha256-agentcard>

cl.owner=commandlayer.eth

```

ENS bindings are **critical protocol resources** and may only be modified through governance.

---

## 4. Versioning Policy

Version bumps follow:

- **MAJOR** — Breaking changes to request/receipt shape, trace semantics, or $id structure  
- **MINOR** — Additive fields that do not break interoperability  
- **PATCH** — Documentation or example fixes  

Once a directory is versioned (e.g., `v1.0.0`), it is **frozen forever**.

Upgrades require a parallel directory:

```
/schemas/v1.1.0/commons/<verb>/...
```

---

## 5. Integrity & Provenance

All schema files MUST be represented in:

- `checksums.txt`
- `SECURITY_PROVENANCE.md`

Every release MUST:

- Update the IPFS CID  
- Update checksums  
- Update ENS TXT if applicable  

---

## 6. Immutability Principle

The Protocol Commons operates under a strict immutability rule:

> No schema, once published in a versioned directory, may be altered in-place.

All corrective or breaking changes MUST be handled via new versioned directories.

---

## 7. Deprecation Policy

Deprecated verbs or schemas MUST be:

1. Logged in `RESOLUTION.md` (with rationale and timestamp)  
2. Documented in `SPEC.md`  
3. Preserved for backward compatibility  

Removal is only permitted for verified security risks and MUST include a migration path.

## Links

- [SECURITY POLICY](./SECURITY.md) — responsible disclosure and vulnerability handling  
- [RESOLUTION](./RESOLUTION.md) — governance and deprecation log  
- [POLICY](./POLICY.md) — verbs and ENS binding rules  
- [GOVERNANCE](./GOVERNANCE.md) — decision-making and multisig control  


