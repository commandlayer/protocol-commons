# Changelog

## 1.1.0

- Added simplified self-contained Commons schemas under `schemas/v1.1.0/commons`
- Added 10 Commons verbs as request/receipt schema pairs
- Removed shared `$ref` dependencies from the v1.1.0 Commons schema family
- Standardized Commons receipts around a minimal proof-first structure
- Added conditional receipt requirements for success/error states
- Established Commons v1.1.0 as the active in-repo schema surface for new integrations
- Retained v1.0.0 as the last pinned canonical release until v1.1.0 pinning is completed
- Preserved earlier schema versions for compatibility and historical reference

## 1.0.0

- Initial Protocol-Commons release with versioned Commons schemas, shared primitives, and example vectors under `schemas/v1.0.0` and `examples/v1.0.0`
- Introduced the canonical Commons verb set and request/receipt validation model for cross-runtime interoperability
- Established the historical pinned release line that `v1.1.0` now extends as the current in-repo schema family
