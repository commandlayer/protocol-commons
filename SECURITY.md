# Security Policy — Protocol-Commons

The CommandLayer Protocol-Commons defines canonical verbs and schemas for A2A
interoperability. Because agents operate autonomously, malformed or malicious
schemas can cause system-wide failures. Security is treated as critical
infrastructure.

---

## Contact

Report vulnerabilities privately to:

📨 dev@commandlayer.org  
🔐 PGP Fingerprint: `5016 D496 9F38 22B2 C5A2 FA40 99A2 6950 197D AB0A`

**DO NOT** disclose publicly until a fix is confirmed deployed.

---

## Reporting Requirements

Include when possible:

- Description + expected behavior
- Steps to reproduce
- Impact assessment (scope of failure)
- Affected `$id` or schema paths

Valid reports receive:

- Acknowledgment within **72 hours**
- Mitigation plan within **10 business days**

---

## Integrity Guarantees

- All schemas validated using **strict AJV**
- Versioned directories (`v1.0.0/`) are **immutable**
- All files covered by `checksums.txt` (SHA-256)
- Every release pinned to IPFS with verified CID
- Provenance tracked in `SECURITY_PROVENANCE.md`

Any mutation requires a **new version** + governance review.

---

## Out-of-Scope

Transport, runtime behavior, authentication, authorization,
and execution-layer vulnerabilities are handled in their respective repos.

---

## Status

**Security-Critical** · Stable · Strict Governance
