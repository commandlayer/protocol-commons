
# Security Provenance

**Version:** v1.0.0  
**Scope:** `schemas/v1.0.0` (commons verbs + `_shared`)  
**Owner:** `commandlayer.eth`  

## IPFS

- **Schemas CID (v1.0.0):** ``
- **Directory Layout:**
  - `commons/` — canonical verb request/receipt schemas  
  - `_shared/` — x402, trace, and receipt base primitives  

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

Each verb **MUST** expose ENS TXT records including:

- cl.verb — the canonical machine verb this agent implements  
- cl.version — the semantic version of the verb specification this agent follows  

- cl.entry — the x402-style execution entrypoint for this capability  

- cl.schema.request — the HTTPS location of the official request schema  
- cl.schema.receipt — the HTTPS location of the official receipt schema  

- cl.cid.schemas — the IPFS CID for the full schema bundle this capability belongs to  

- cl.checksum.request — the integrity hash for the request schema  
- cl.checksum.receipt — the integrity hash for the receipt schema  

- cl.agentcard — the public AgentCard describing metadata, identity, and capabilities  
- cl.manifest — the manifest file that indexes and describes the entire release  

- cl.owner — the ENS or organizational owner responsible for this verb definition  


**Any modification to `ENS TXT` layout, `CID binding`, or `verb metadata` MUST be logged in `RESOLUTION.md` and approved under governance**.


