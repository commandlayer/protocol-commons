
# Security Policy — Protocol Commons

The CommandLayer Protocol Commons is security-sensitive infrastructure.  
Malformed or malicious schemas can cause agents to misinterpret commands, leak data, or destabilize dependent systems.

---

## Reporting a Vulnerability

Email security reports to:

**dev@commandlayer.org**

For sensitive disclosures, encrypt using our PGP key:

- **PGP Fingerprint:**  
  `5016 D496 9F38 22B2 C5A2  FA40 99A2 6950 197D AB0A`

Include:

- Description of the issue  
- Steps to reproduce  
- Expected vs actual behavior  
- Potential impact  
- Affected schema paths or `$id` values  

**Do not disclose publicly** until remediation is confirmed.

---

## Scope

This policy covers:

- All schema files under `schemas/`  
- `_shared` base contracts (trace, x402, receipt base)  
- Version manifests (`manifest.json`, `checksums.txt`)  
- ENS TXT formats used for verb discovery  
- Any validation or build scripts in `/scripts`  

---

## Contribution Requirements

- No secrets, credentials, or private keys in any schema or example  
- No fields that violate trace or receipt contract invariants  
- All schemas must pass **strict AJV** (Draft 2020-12)  
- No `additionalProperties` unless explicitly justified and documented  
- Breaking changes MUST use a new version (`v1.0.1`, `v2.0.0`, etc.)

---

## Maintainer Commitments

- Acknowledge valid reports within **72 hours**  
- Provide remediation or mitigation plan within **10 business days**  
- Publish an advisory in this repository for any confirmed critical issue  

## Links

- [Security Policy](./SECURITY.md) — responsible disclosure and vulnerability handling  
- [RESOLUTION.md](./RESOLUTION.md) — governance and deprecation log  
- [Policy](./POLICY.md) — verbs and ENS binding rules  
- [GOVERNANCE.md](./GOVERNANCE.md) — decision-making and multisig control  


