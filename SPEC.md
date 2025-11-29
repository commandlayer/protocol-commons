# SPEC — Protocol-Commons v1.0.0  
CommandLayer Core Standards · Semantic Layer

 This document is NORMATIVE and ENFORCEABLE.

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
│ Execution — x402 runtime   │ (value + invocation)
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
requests/<verb>.request.schema.json
receipts/<verb>.receipt.schema.json

Shared primitives located at:
schemas/v1.0.0/_shared/
x402.schema.json
trace.schema.json
receipt.base.schema.json

**Directory is version-locked.**  
Moving files is a breaking change.

---

## 5. Schema `$id` Rules (Deterministic)

Every schema MUST use this `$id` pattern:

### Request
https://commandlayer.org/schemas/v1.0.0/commons/<verb>/requests/<verb>.request.schema.json

shell
Copy code

### Receipt
https://commandlayer.org/schemas/v1.0.0/commons/<verb>/receipts/<verb>.receipt.schema.json

shell
Copy code

### Shared
https://commandlayer.org/schemas/v1.0.0/_shared/<schema>.json

yaml
Copy code

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
jsonc
Copy code
"x402": {
  "verb": "<verb>",
  "version": "1.0.0",
  "status": "ok" | "error"
}
```

No additional properties permitted inside x402.

## 7. Trace Guarantees
Every receipt MUST echo:

```
ini
Copy code
trace.requestId = request.trace.requestId
```

This is REQUIRED for chaining & auditability.

Additional trace fields MAY exist (per `_shared/trace.schema.json`)
but MAY NOT weaken determinism or referential integrity.

## 8. Request Contract
Requests MUST contain:

| Field   | Required | Source                      |
| ------- | -------- | --------------------------- |
| `x402`  | Yes      | `_shared/x402.schema.json`  |
| `actor` | Yes      | Freeform identifier         |
| `trace` | Yes      | `_shared/trace.schema.json` |
| `input` | Yes      | Verb-specific               |
c

Requests MUST validate in **strict Ajv mode.**

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

## 11. Discovery + ENS TXT Responsibilities

Protocol-Commons governs ONLY:

cl.verb
cl.version
cl.schema.request
cl.schema.receipt
cl.cid.schemas
cl.schemas.mirror.ipfs

These MUST be correct or the schema is unauthenticated.

Identity pointers (cl.agentcard, etc.) are NOT in scope here.

## 12. Conformance Requirements
Implementations MUST:

 1. Validate requests & receipts in Ajv strict (2020-12)
 2. Support schema resolution from $id URLs
 3. Mirror schema CIDs correctly
 4. Treat version directories as immutable
 5. Respect full trace echo

A system supporting ANY canonical verb MAY claim:

**Commons-Compatible**

## 13. Failure Modes

If ANY of the following occur:

- `$id` mismatch
- Incorrect CID root
- trace.requestId mismatch
- status mismatch
- Request/receipt schema drift

→ Schema is INVALID
→ Execution MUST be rejected
→ Incident MUST be logged

## 14. Security
Protocol-Commons is **Security-Critical Infrastructure:**

- No PII
- No execution logic
- No proprietary references
- No commercial conditions

Security escalation MUST follow repository policy (SECURITY.md).

### Status
**Stable — v1.0.0 locked**
CommandLayer Core Standards





