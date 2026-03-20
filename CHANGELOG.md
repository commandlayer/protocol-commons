# Changelog

## 1.1.0

Released as the current Protocol-Commons version and active schema line.

- Added the flat Commons schema family under `schemas/v1.1.0/commons`
- Published self-contained request and receipt schemas for the 10 canonical Commons verbs
- Removed shared `$ref` dependencies from the v1.1.0 Commons schema family
- Standardized v1.1.0 receipts around a compact attestation-oriented structure
- Documented v1.1.0 as the current release and active schema line
- Retained v1.0.0 only as a historical legacy release for compatibility review and auditing
- Clarified that HTTPS schema hosting and IPFS pinning are separate publication layers

## 1.0.0

Historical legacy release.

- Initial Protocol-Commons release with versioned Commons schemas, shared primitives, and example vectors under `schemas/v1.0.0` and `examples/v1.0.0`
- Introduced the canonical Commons verb set and request/receipt validation model for cross-runtime interoperability
- Established the legacy schema layout that predates the flat v1.1.0 structure
