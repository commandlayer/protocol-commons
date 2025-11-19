
# Commons v1.0.0 — Security Provenance

**Version:** v1.0.0  
**Scope:** `schemas/v1.0.0` (commons verbs + `_shared` + `aliases`)  
**Owner:** `commandlayer.eth`  

## IPFS

- **Schemas CID (v1.0.0):** ``
- **Directory Layout:**
  - `commons/` — canonical verb request/receipt schemas  
  - `_shared/` — x402, trace, and receipt base primitives  
  - `aliases/` — canonical alias maps  

This CID represents the **immutable v1.0.0 release** of the Protocol Commons schema tree.  
Any modification requires a **new version folder** (e.g., `v1.0.1`) and a **new CID** published in this document.

## Checksums

All file-level integrity is verified using **SHA-256** digests stored in the repository’s `checksums.txt`.

Any change to files under `schemas/v1.0.0` MUST trigger:

1. Regeneration of `checksums.txt`  
2. A new tagged release (e.g., `commons-v1.0.1`)  
3. A new IPFS pin + CID  
4. An update to this provenance document  

## ENS / Resolution Rules

**ENS Name:** `commandlayer.eth`

Each verb MUST expose ENS TXT records including:

- `cl.verb` — canonical verb name  
- `cl.version` — `1.0.0`  
- `cl.schema.request` — HTTPS link to request schema  
- `cl.schema.receipt` — HTTPS link to receipt schema  
- `cl.cid.schemas` — ``  
- `cl.owner` — `commandlayer.eth`  

Any modification to ENS TXT layout, CID binding, or verb metadata MUST be logged in `RESOLUTION.md` and approved under governance.
