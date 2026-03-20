# Security Policy — Protocol-Commons

Protocol-Commons defines **the language** agents use.  
If schemas break, automation breaks — so security and simplicity matter.

We maintain this layer like infrastructure: steady and reliable.

---

## What to Report

- Schema bugs or constraint gaps  
- `$id` mismatch or non-resolvable URLs  
- CID or checksum inconsistencies  
- Anything creating ambiguity in verb meaning

---

## Contact

Email: **dev@commandlayer.org**  
PGP Fingerprint: **5016 D496 9F38 22B2 C5A2 FA40 99A2 6950 197D AB0A**

Private reporting helps protect dependent systems while a remediation is prepared.
If a vulnerability could impact interoperability or cause ecosystem-wide breakage,
**confidential disclosure is strongly preferred** until a fix is published.


## Response Targets

- **72 hours** — acknowledgment  
- **10 business days** — mitigation plan  

Breaking issues are prioritized.

---

## Integrity Rules

- Versioned directories are **immutable** once published  
- Schema artifacts are covered by checksum-based integrity records  
- Release metadata and publication records are documented in the repository  
- Any semantic change requires **a new version** — never hot patches

These guarantees keep Commons safe to depend on long-term.

---

Status: v1.1.0 is the current release and active schema line • v1.0.0 is the historical legacy release • IPFS publication is tracked separately in documented release metadata
