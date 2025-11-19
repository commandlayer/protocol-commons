
# **SPEC.md — CommandLayer Protocol Commons (v1.0.0)**  
*A universal verb language for A2A, aligned with x402 and ERC‑8004.*

**Status:** v1.0.0 (Candidate – to be promoted to Stable after ecosystem validation)  
This specification defines the formal, normative rules for the CommandLayer Commons.

---

# **0. Normative Keywords**

The key words **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **RECOMMENDED**, **MAY**, and **OPTIONAL** are to be interpreted as defined in **RFC 2119**.

---

# **1. Introduction**

1.1 The CommandLayer Protocol Commons defines the canonical verb layer and message shapes for **Agent‑to‑Agent (A2A)** communication.  
1.2 The Commons is **minimal**, **domain‑agnostic**, and provides a universal base layer for all agent frameworks.  
1.3 This specification is aligned with **x402** (agent invocation) and **ERC‑8004** (schema discovery + ENS TXT patterns).

---

# **2. Scope**

The Commons standardizes:

- The **10 canonical verbs** and one alias per verb  
- JSON Schema Draft 2020‑12 message definitions  
- Request & receipt shape requirements  
- Validation rules, status model, and trace propagation  
- Schema `$id` structure + ENS discovery rules  
- Immutability and versioning requirements  

Out of scope (defined in other repos):

- Commercial verbs, premium verbs, verified receipts  
- Authentication, billing, transport, settlement  
- SDK tooling or runtime‑specific behavior

---

# **3. Conformance**

A system **CONFORMS** to the CommandLayer Commons if it:

3.1 **MUST** support all 10 canonical verbs at their canonical names.  
3.2 **MUST** support exactly one alias per verb and normalize aliases to the canonical verb.  
3.3 **MUST** validate all requests/receipts using the official schemas in **strict AJV mode**.  
3.4 **MUST** treat versioned schemas as immutable once published.  
3.5 **MUST** echo `trace.requestId` from request → receipt.  

A “Commons‑Compatible Agent” is any agent capable of consuming a valid request and producing a valid receipt for at least one canonical verb.

---

# **4. Canonical Verbs & Aliases (v1.0.0)**

The following are the **ONLY canonical verbs** in v1.0.0:

| Category | Verb | Alias |
|----------|-------|--------|
| Core Ops + Data | fetch | get |
|  | save | store |
|  | parse | extract |
| AI Cognition | analyze | examine |
|  | summarize | outline |
|  | classify | categorize |
|  | translate | interpret |
|  | generate | create |
| Utility | format | normalize |
| Workflow | query | find |

Rules:

- 4.1 Canonical verbs **MUST** be lowercase, single words.  
- 4.2 Aliases **MUST NOT** conflict with any canonical verb.  
- 4.3 Canonical names **MUST** appear in `x402.verb`.  
- 4.4 Aliases **MAY** be used by UIs, SDKs, and routers.

---

# **5. Message Model**

A message is either a **request** or **receipt**.

## **5.1 Request Requirements**

A request **MUST** include:

- `x402` (canonical verb + version)  
- `actor`  
- `trace`  
- `input` (verb‑specific)  

Minimal normative example:

```json
{
  "x402": { "verb": "summarize", "version": "1.0.0" },
  "actor": "myagent.eth",
  "trace": { "requestId": "abc123", "ts": "2025-11-07T10:00:00Z", "nonce": "xyz987" },
  "input": {}
}
```

## **5.2 Receipt Requirements**

A receipt **MUST** include:

- `x402`  
- `trace.requestId`  
- `status`  
- `result` or `error` (conditional)  

Normative example:

```json
{
  "x402": { "verb": "summarize", "version": "1.0.0" },
  "trace": { "requestId": "abc123" },
  "status": "ok",
  "result": {}
}
```

---

# **6. Normative Field Definitions**

## **6.1 `x402`**
```json
{
  "verb": "<canonical-verb>",
  "version": "1.0.0"
}
```
Rules:

- `verb` **MUST** match the canonical verb folder.  
- `version` **MUST** equal `"1.0.0"` for this specification.

## **6.2 `actor`**
The actor **MUST** be one of:

- ENS name (e.g., `agent.eth`)  
- DID (e.g., `did:key:...`)  
- Valid URI  

## **6.3 `trace`**
```json
{
  "requestId": "string",
  "ts": "RFC3339 date-time",
  "nonce": "string"
}
```
- `requestId` **MUST** be present in both request & receipt.  
- `nonce` **MUST** prevent replay.  

## **6.4 `status`**
- `status` **MUST** be `"ok"` or `"error"`.  
- If `"error"`, an error object **MUST** be present.  
- If `"ok"`, result **MUST** be present.

---

# **7. Schema Requirements**

7.1 Schemas **MUST** be JSON Schema Draft 2020‑12.  
7.2 Validation **MUST** use strict mode (e.g., Ajv strict).  
7.3 Top‑level `"additionalProperties": false"` **MUST** be applied for both requests and receipts.  
7.4 `$id` **MUST** be publicly resolvable:

### Request
```
https://commandlayer.org/schemas/v1.0.0/commons/<verb>/requests/<verb>.request.schema.json
```

### Receipt
```
https://commandlayer.org/schemas/v1.0.0/commons/<verb>/receipts/<verb>.receipt.schema.json
```

---

# **8. Versioning & Immutability**

- `v1.0.0/` **MUST NOT** be changed once published.  
- Fixes **MUST** use `v1.0.1` or higher.  
- Breaking changes **MUST** bump the MAJOR version (2.0.0+).  
- ENS TXT + CID provenance **MUST** be updated when new versions are released.

---

# **9. Alias Rules**

Each alias map MUST follow:

```json
{
  "canonical": "<verb>",
  "aliases": ["<alias>"]
}
```

Rules:

- Aliases **MUST NOT** collide with any canonical verb.  
- Aliases **MAY** be mapped automatically by resolvers.  
- Canonical verb **MUST** override aliases in all message fields.

---

# **10. Discovery & ERC‑8004 Alignment**

CommandLayer Commons SHOULD expose schema locations using ERC‑8004 discovery patterns:

- ENS TXT pointers  
- Public `$id` URLs  
- Optional content‑addressed CID mirrors (IPFS/Arweave)  

Resolvers MAY map agent ENS names to verb schemas (defined in the Discovery specification).

---

# **11. A2A Behavior**

- Agents **SHOULD** preserve `trace.requestId` end‑to‑end.  
- Agents **SHOULD NOT** mutate JSON bodies other than framing.  
- Transport is **out of scope** (HTTP/NATS/gRPC/on‑chain).

---

# **12. Security (Recommended)**

- Implementations **SHOULD** authenticate callers.  
- Sensitive data **SHOULD NOT** be placed in unspecified fields.  
- Agents **MAY** apply rate/size limits.

---

# **13. Extension Hooks**

- `input` and `result` fields are defined extension surfaces.  
- Top‑level extensions **MUST NOT** be added due to `additionalProperties: false`.

---

# **14. Normative Schema Fragments**

Request + receipt envelope fragments are included for implementers (see **SCHEMAS.md**).

---

# **15. Examples (Informative)**

Verb examples (fetch, summarize, generate, etc.) are provided in the repository under:

```
examples/v1.0.0/commons/<verb>/
```

---

# **16. Compliance Testing**

- CI **SHOULD** validate all examples in strict mode.  
- Implementations **SHOULD** provide conformance suites.

---

# **17. Change Control**

- Spec updates **SHOULD** go through issue → PR → review → version bump.  
- Movement from Candidate → Stable occurs after ecosystem confirmation.

---

# **18. Licensing**

The Commons are licensed under **MIT**.

---

# **19. References**

- RFC 2119  
- JSON Schema Draft 2020‑12  
- x402  
- ERC‑8004
