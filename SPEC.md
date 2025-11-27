# SPEC — Protocol-Commons v1.0.0

This is the authoritative normative definition of the Commons layer.

## 0. Keywords
RFC 2119 interpretation.

## 1. Architecture

The Commons defines:
- Canonical verbs
- Request + receipt schema contracts
- Trace + x402 envelope structure
- Validation and versioning rules

## 2. Conformance Requirements

Implementations MUST:

1️⃣ Support **all** canonical verbs  
2️⃣ Validate against official schemas in strict mode  
3️⃣ Echo `trace.requestId` request → receipt  
4️⃣ Treat versioned directories as **immutable**  

A system is **Commons-Compatible** if it supports at least one canonical verb.

## 3. Canonical Verbs (v1.0.0)
analyze, classify, clean, convert, describe, explain, fetch, format, parse, summarize

## 4. Message Requirements

### Request MUST contain:
- `x402`
- `actor`
- `trace`
- `input`

### Receipt MUST contain:
- `x402`
- `trace.requestId`
- `status`
- `result` OR `error`

## 5. x402 Binding

`x402.verb` MUST equal the canonical folder name.  
`x402.version` MUST equal `"1.0.0"`.

## 6. Versioning

Immutable once published.  
New semantic version for ANY change.  

## 7. Discovery + ENS

Schemas MUST expose resolvable `$id` URLs + content-addressed CID mirrors.

---

Status: **Stable**
