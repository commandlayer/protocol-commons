## 2️⃣ `protocol-commons/COMPLIANCE.md`

```markdown
# COMPLIANCE — Protocol-Commons

This document defines what it means to be **Protocol-Commons compliant** and how to keep that status over time.

If you claim compatibility but break these rules, you’re lying to your own users.

---

## 1. Scope

These rules apply to:

- All schemas under `schemas/v*/commons/`
- All shared primitives under `schemas/v*/_shared/`
- All examples under `examples/v*/commons/`
- The ENS TXT fields governed by Protocol-Commons:

  ```txt
  cl.verb
  cl.version
  cl.schema.request
  cl.schema.receipt
  cl.cid.schemas
  cl.schemas.mirror.ipfs
Everything here is normative for semantics and schema integrity.

2. Versioning & Immutability
For any directory schemas/vX.Y.Z/:

No in-place edits to:

Request/receipt schemas

_shared primitives

$id strings

No silent behavior changes.

Any change to schema shape, $id, or semantics requires:

A new version directory (vX.Y+1.Z or vX+1.0.0)

New CID

Updated checksums.txt + manifest.json

A logged entry in RESOLUTION.md

Governance approval as defined in GOVERNANCE.md

If you mutate a published version directory, you are no longer compliant.

3. JSON Schema Requirements
All Protocol-Commons schemas MUST:

Use JSON Schema Draft 2020-12

Validate under Ajv strict mode (see SPEC.md)

Disallow unexpected fields unless explicitly allowed via additionalProperties: true

Use deterministic, HTTPS-resolvable $id values:

text
Copy code
https://commandlayer.org/schemas/v1.0.0/commons/<verb>/requests/<verb>.request.schema.json
https://commandlayer.org/schemas/v1.0.0/commons/<verb>/receipts/<verb>.receipt.schema.json
Shared primitives follow:

text
Copy code
https://commandlayer.org/schemas/v1.0.0/_shared/x402.schema.json
https://commandlayer.org/schemas/v1.0.0/_shared/trace.schema.json
https://commandlayer.org/schemas/v1.0.0/_shared/receipt.base.schema.json
If your implementation uses different $id values or looser validation, you are not fully compliant.

4. ENS TXT Responsibilities
Protocol-Commons is responsible only for the following TXT records on ENS:

txt
Copy code
cl.verb
cl.version
cl.schema.request
cl.schema.receipt
cl.cid.schemas
cl.schemas.mirror.ipfs
Compliance requires that:

These fields map exactly to the canonical schemas and the published CID.

They reflect the correct version directory.

They are updated only when a new version is published and recorded in SECURITY_PROVENANCE.md and RESOLUTION.md.

Identity-specific TXT fields (cl.agentcard, cl.entry, etc.) are governed by Agent-Cards, not Protocol-Commons.

5. CIDs & Checksums
For each release:

The entire schemas/vX.Y.Z/ tree MUST be:

Pinned to IPFS (see SECURITY_PROVENANCE.md)

Indexed in checksums.txt using SHA-256

Described in manifest.json

Compliance requires:

The CID used in cl.cid.schemas matches the pinned content.

The HTTP mirror at cl.schemas.mirror.ipfs serves the same content.

Any mismatch between CID, checksum, and actual content is treated as an integrity failure.

6. Security & Privacy
Protocol-Commons is semantic infra, not application data:

No PII in schemas or examples.

No runtime secrets, keys, or hostnames.

No transport-specific tokens.

If your downstream usage adds sensitive data, that is outside this repo and must be governed by your own security model.

Security incidents in Commons itself (e.g., malicious modification of schemas, hijacked $id hosts, or CID poisoning) must follow the procedure in SECURITY.md.

7. Governance Traceability
Compliance requires a paper trail:

Every semantic change has a corresponding entry in RESOLUTION.md.

Every published version and CID appears in SECURITY_PROVENANCE.md.

Every ENS TXT mutation for Commons-controlled keys is:

Justified (new version, bugfix, etc.)

Logged and reviewable

If a schema or version exists without a trail in these files, it is not canonical, regardless of where it is hosted.

8. Ecosystem Alignment
To be a good citizen, a Commons-compliant implementation should:

Respect ERC-8004 discovery flows where applicable.

Respect x402 envelope semantics:

x402.verb = canonical verb name

x402.version = Commons version

x402.status ∈ {"ok", "error"} for receipts

Embed trace and status primitives exactly as defined in _shared/ schemas.

If you diverge from x402 or related standards, you are still free to run locally — just don’t claim compliance.

9. Deviation Handling
If you discover a deviation (your own or the repo’s):

File an Issue in this repository.

Describe:

What is wrong (schema mismatch, CID mismatch, TXT mismatch, etc.)

Which versions, verbs, and endpoints are affected

Potential impact on runtimes

If it’s a security issue, follow SECURITY.md instead of posting full details publicly.

Work with maintainers to:

Decide if a new version is required

Update provenance and ENS records

Document the incident in RESOLUTION.md

10. Compliance Checklist
You can reasonably say you are Protocol-Commons compliant if:

 You validate requests and receipts using the canonical schemas with strict Ajv.

 You treat version directories as immutable once published.

 You resolve $id URLs to the canonical HTTP mirrors.

 You verify CIDs and checksums before trusting schemas.

 You respect the ENS TXT division of responsibilities.

 You log any verb/schema lifecycle changes in RESOLUTION.md.

If any of the above is false, treat your implementation as experimental and avoid claiming full compliance.
