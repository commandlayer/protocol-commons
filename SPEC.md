# Specification — Protocol Commons
CommandLayer Core Standards · Semantic Layer

> This document is **NORMATIVE and ENFORCEABLE**.

## RFC 2119 Keywords
MUST / MUST NOT / SHOULD / SHOULD NOT / MAY retain their RFC-defined meanings.

---

## 1. Purpose

Protocol-Commons defines the **canonical action grammar for autonomous agents**:

- **Verbs** — What actions exist  
- **Request/Receipt Schemas** — Typed message contracts  
- **Trace + Status rules** — Deterministic provenance  
- **Versioning + Immutability** — Trust guarantees  

Execution, payment, identity, and routing are the domain of other layers.

---

## 2. Architecture Position

The Commons is the **lowest** layer of the CommandLayer Standard Stack:
```
┌────────────────────────────┐
│ Execution — Runtime layer  │ (value + invocation)
└──────────────▲─────────────┘
│
┌──────────────┴─────────────┐
│ Identity — Agent-Cards     │ (ENS discovery)
└──────────────▲─────────────┘
│
┌──────────────┴─────────────┐
│ Semantics — Commons        │ (canonical verbs)
└────────────────────────────┘
```

**Commons answers: “What is this agent trying to do?”**

---

## 3. Canonical Verb Set (v1.0.0)

The only canonical verbs are:

analyze, classify, clean, convert, describe,
explain, fetch, format, parse, summarize


Each verb MUST map to:

- `<verb>.request.schema.json`
- `<verb>.receipt.schema.json`

No aliases. No synonyms.

---

## 4. Schema Directory Contract

Every schema file MUST reside under:

schemas/v1.0.0/commons/<verb>/

- `requests/<verb>.request.schema.json`
- `receipts/<verb>.receipt.schema.json`

**Shared primitives located at:**

schemas/v1.0.0/_shared/

- `x402.schema.json`
- `trace.schema.json`
- `receipt.base.schema.json`

**Directory is version-locked.**  
Moving files is a breaking change.

---

## 5. Schema `$id` Rules (Deterministic)

Every schema **MUST** use this `$id` pattern:

### Request
https://commandlayer.org/schemas/v1.0.0/commons/<verb>/requests/<verb>.request.schema.json



### Receipt
https://commandlayer.org/schemas/v1.0.0/commons/<verb>/receipts/<verb>.receipt.schema.json


### Shared
https://commandlayer.org/schemas/v1.0.0/_shared/<schema>.json


All `$id` values MUST be resolvable over HTTPS.

---

## 6. x402 Envelope Binding

All requests MUST embed:

```jsonc
"x402": {
  "verb": "<verb>",
  "version": "1.0.0"
}
```
All receipts MUST embed:

```
"x402": {
  "verb": "<verb>",
  "version": "1.0.0",
  "status": "ok" | "error"
}
```

No additional properties permitted inside x402.

---

## 7. Trace Guarantees
Every receipt MUST echo:

```
trace.requestId = request.trace.requestId
```

This is REQUIRED for chaining & auditability.

Additional trace fields MAY exist (per `_shared/trace.schema.json`)
but MAY NOT weaken determinism or referential integrity.

---

## 8. Request Contract
Requests MUST contain:

| Field   | Required | Source                      |
| ------- | -------- | --------------------------- |
| `x402`  | Yes      | `_shared/x402.schema.json`  |
| `trace` | Yes      | `_shared/trace.schema.json` |
| `input` | Yes      | Verb-specific               |


Requests MUST validate in **strict Ajv mode.**

---

## 9. Receipt Contract
Receipts MUST contain:

| Field    | Required | Conditional         |
| -------- | -------- | ------------------- |
| `x402`   | Yes      | Always              |
| `trace`  | Yes      | Always              |
| `status` | Yes      | `"ok"` or `"error"` |
| `result` | Yes      | IF `status = ok`    |
| `error`  | Yes      | IF `status = error` |


Strict conditional logic is canonical and MUST pass CI validation.

Error receipts MUST NOT include `result.`

---

## 10. Versioning + Immutability

Once published under:
```
schemas/v1.0.0/
```

There MUST NEVER be:

- File content changes
- Field requirement changes
- `$id` changes
- Behavior changes

Any mutation requires:

- New version directory (e.g. v1.0.1/)
- New CID
- Updated checksums + manifest
- ENS TXT update
- Governance approval

---
## 11. Provenance & Integrity (NORMATIVE)

The canonical Protocol-Commons v1.0.0 release is uniquely identified by:

- Version directory: `schemas/v1.0.0/`
- Git tag: `commons-v1.0.0`
- IPFS directory CID:
  `bafybeigvf6nkzws7dblos74dqqjkguwkrwn4a2c27ieygoxmgofyzdkz6m`
- File-level hashes: `checksums.txt` (SHA-256)

Auditors and resolvers MUST:

1. Fetch `schemas/v1.0.0/` via HTTP(S) or IPFS using the canonical CID
2. Verify integrity:

   ```bash
   sha256sum -c checksums.txt
   ```
   
3. Treat any mismatch as an integrity failure and reject trust 
`schemas/v1.0.0/` is immutable.

Any semantic change requires a new version directory.

---

## 12. Discovery + ENS TXT Responsibilities

Protocol-Commons governs **schema-related** TXT keys only:
```
cl.verb
cl.version
cl.schema.request
cl.schema.receipt
cl.cid.schemas
cl.schemas.mirror.ipfs
```

These keys MUST:
- **match the canonical schema metadata exactly**
- **resolve to the published CID-linked artifacts**
- be updated **only** when a new version is released and
  recorded in `RESOLUTION.md`

Resolvers MUST treat any mismatch as an **unauthenticated schema binding** and MUST NOT trust the resolution.

Identity + invocation TXT keys (e.g., `cl.entry`, `cl.agentcard`) are governed by **Agent-Cards**, not Protocol-Commons.

---

## 13. Implementations MUST:

 1. Validate requests & receipts in Ajv strict (2020-12)
 2. Support schema resolution from $id URLs
 3. Mirror schema CIDs correctly
 4. Treat version directories as immutable
 5. Respect full trace echo

A system supporting ANY canonical verb MAY claim:

**Commons-Compatible**

---

## 14. Failure Modes

If ANY of the following occur:

- `$id` mismatch
- CID mismatch between schema and ENS TXT
- TXT keys missing or malformed
- Request or receipt fails strict validation
- Trace does not echo `requestId`
- Version directory contents differ from published checksums
- Published artifact mutated in-place

Resolvers MUST treat the result as **untrusted** and SHOULD:

- Reject the request/receipt
- Emit a diagnostic error
- Fallback to a known-good version if available

Silent degradation MUST NOT occur.

---
## 15. Security
Protocol-Commons is **Security-Critical Infrastructure:**

- No PII
- No execution logic
- No proprietary references
- No commercial conditions

Security escalation MUST follow repository policy (SECURITY.md).

### Status
**Stable — v1.0.0 locked**
CommandLayer Core Standards





