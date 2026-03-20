# Onboarding — Protocol Commons

Welcome to Protocol-Commons, the semantic layer for CommandLayer agents.

This repository defines the **current v1.1.0 release** and preserves **v1.0.0** only as historical legacy material.

---

## 1. What This Repo Does

Protocol-Commons defines:

- canonical verbs
- JSON Schemas for requests and receipts
- versioned schema publication rules
- release metadata and checksum records

It does **not** define payment, routing, identity ownership, or runtime execution policy.

---

## 2. Version Orientation

Keep these distinctions clear:

- **v1.1.0** is the current release and active schema line
- **v1.0.0** is historical legacy material only
- HTTPS hosting and IPFS pinning are separate publication layers
- repository integrity is based on checksums plus documented release metadata

---

## 3. Repository Layout

| Path | Meaning |
|------|---------|
| `schemas/v1.1.0/commons/` | Current v1.1.0 Commons schemas |
| `examples/v1.1.0/commons/` | Current repository examples for v1.1.0 |
| `schemas/v1.0.0/commons/` | Historical legacy schemas |
| `schemas/v1.0.0/_shared/` | Historical shared primitives for v1.0.0 |
| `examples/v1.0.0/commons/` | Historical legacy examples |
| `manifest.json` | Release metadata and publication record |
| `checksums.txt` | Schema checksum record |
| `SPEC.md` | Normative schema contract |
| `SCHEMAS.md` | Layout and versioning policy |
| `GOVERNANCE.md` | Repository process and authority model |
| `SECURITY_PROVENANCE.md` | Integrity and publication tracking |
| `RESOLUTION.md` | Release log |

---

## 4. First Commands

Run these from the repository root:

```bash
npm install
npm run validate
```

Useful narrower loops:

```bash
npm run validate:schemas
npm run validate:examples
npm run checksums:verify
```

---

## 5. Practical Working Norms

1. Treat v1.1.0 as the default target for new documentation and validation work.
2. Treat v1.0.0 as reference material only.
3. Do not edit published schema semantics in place.
4. Update release-facing docs when version status language changes.
5. Keep `manifest.json`, `checksums.txt`, and `RESOLUTION.md` aligned with release history.

---

## 6. Examples Guidance

When editing `examples/`:

- keep valid examples realistic
- keep invalid examples focused on a clear failure mode
- keep fixtures aligned to the version they target
- remember that examples are repository assets, not npm package contents

TypeScript examples are illustrative and are not currently validated by CI.

---

## 7. Support

- Governance contact: `dev@commandlayer.org`
- Steward record: `commandlayer.eth`

Precision in these docs protects downstream interoperability.
