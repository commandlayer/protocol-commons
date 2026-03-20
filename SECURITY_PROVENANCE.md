# Security Provenance — Protocol Commons

**Scope:** Protocol-Commons  
**Status:** v1.1.0 current release and active schema line; v1.0.0 historical legacy release  
**This document is NORMATIVE.**

This document describes repository integrity records, release metadata, and publication tracking.

## Contact

If something appears incorrect, report it promptly.

- Email: `dev@commandlayer.org`
- PGP fingerprint for contact verification: `5016 D496 9F38 22B2 C5A2 FA40 99A2 6950 197D AB0A`

Private disclosure is preferred for security-sensitive findings.

## Integrity Model

Integrity in this repository is provided through:

- `checksums.txt` for checksum verification of shipped schema artifacts
- `manifest.json` for documented release metadata and publication state
- versioned schema paths such as `schemas/v1.1.0/` and `schemas/v1.0.0/`

These records provide checksum-based integrity, a versioned publication record, and documented release history.

**This repository does not currently publish signed release artifacts.**

## Release Tracking

Release tracking in this repository includes:

- version
- schema roots
- package metadata
- CID values when published
- documented history in `CHANGELOG.md` and `RESOLUTION.md`

Current release state:

- **Current release:** `v1.1.0`
- **Active schema line:** `schemas/v1.1.0/commons`
- **CID recording for v1.1.0:** entered in `manifest.json` when the release is published to IPFS
- **Historical legacy release:** `v1.0.0`
- **Historical v1.0.0 CID:** `bafybeigvf6nkzws7dblos74dqqjkguwkrwn4a2c27ieygoxmgofyzdkz6m`

IPFS publication is tracked separately from HTTPS hosting. The v1.1.0 HTTPS schema URLs can be live before or after the repository records a CID for that release in `manifest.json`.

## Publication Layers

Protocol-Commons uses two separate distribution layers:

1. **HTTPS hosting** for canonical schema URLs and `$id` resolution
2. **IPFS pinning** for content-addressed publication records when a CID is published

These layers should not be conflated. HTTPS availability does not by itself mean that IPFS publication has been recorded, and IPFS publication metadata is not required to understand the schema contracts.

## Auditor Expectations

Auditors and integrators SHOULD verify:

- checksums in `checksums.txt` against the shipped schema files
- schema paths and release metadata in `manifest.json`
- version-specific history in `CHANGELOG.md` and `RESOLUTION.md`
- immutability of published version directories

For a release with a published CID, auditors SHOULD also verify that the recorded IPFS publication matches the documented version metadata.

## ENS TXT Summary

Protocol-Commons governs TXT keys that resolve schema semantics.

Resolvers SHOULD reject:

- TXT ↔ CID mismatches
- unauthorized or missing schema TXT keys
- out-of-sync version bindings

TXT records are part of publication metadata. They are not, by themselves, signed release artifacts.

## Security Posture

- No PII in schema artifacts
- No embedded execution logic
- Minimal semantic surface area
- Immutable versioned publication records

If a mistake is discovered, the remedy is a documented follow-up release or metadata update, not a silent rewrite of published schema content.
