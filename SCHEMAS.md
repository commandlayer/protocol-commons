
# **SCHEMAS — CommandLayer Protocol Commons**

This document defines the full schema layout for the CommandLayer Protocol Commons, including canonical verbs, directory conventions, field-level rules, `$id` structures, versioning, and interoperability requirements for x402 + ERC‑8004 aligned agents.

---

# **1. Purpose**

The Protocol Commons provides the **canonical verb namespace** and the **universal schema layer** for all agents in the CommandLayer ecosystem.  
It establishes:

- A stable verb dictionary  
- Strict JSON Schema Draft 2020‑12 request + receipt contracts  
- Deterministic `$id` URLs  
- Standardized x402 envelope embedding  
- Trace + status primitives (`_shared`)  
- Example-driven validation for CI + reproducibility  

Once published under a versioned directory, the Commons is **immutable forever**.

---

# **2. Directory Layout**

```
schemas/v1.0.0/
  _shared/         # trace, x402, receipt base primitives
  commons/         # 10 canonical verbs (requests + receipts)

analyze
classify
clean
convert
describe
explain
fetch
format
parse
summarize
```

Each verb directory contains:

```
requests/<verb>.request.schema.json
receipts/<verb>.receipt.schema.json
```

---

# **3. Canonical Verb Set (v1.0.0)**

| Verb       | Purpose                                |
|------------|----------------------------------------|
| analyze    | Inspect content                        |
| classify   | Assign categories                      |
| clean      | Sanitize and normalize                 |
| convert    | Change formats                         |
| describe   | Describe content                       |
| explain    | Explain reasoning                      |
| fetch      | Retrieve external data                 |
| format     | Apply formatting                       |
| parse      | Extract structure                      |
| summarize  | Condense meaning                       |


Each verb defines:

- 1 **request schema**  
- 1 **receipt schema**  

---

# **4. Schema `$id` Structure**

**`All schema IDs` follow this deterministic pattern:**

### **Request**
```
https://commandlayer.org/schemas/v1.0.0/commons/<verb>/requests/<verb>.request.schema.json
```

### **Receipt**
```
https://commandlayer.org/schemas/v1.0.0/commons/<verb>/receipts/<verb>.receipt.schema.json
```




### **Shared Primitives**
```
https://commandlayer.org/schemas/v1.0.0/_shared/x402.schema.json
https://commandlayer.org/schemas/v1.0.0/_shared/trace.schema.json
https://commandlayer.org/schemas/v1.0.0/_shared/receipt.base.schema.json
```

---

# **5. x402 Embedding Rules**

Every **request** must include:

```
"x402": {
  "verb": "<verb>",
  "version": "1.0.0"
}
```

Every **receipt** must include:

```
"x402": {
  "verb": "<verb>",
  "version": "1.0.0",
  "status": "ok" | "error"
}
```

**x402 object rules:**

- No `additionalProperties`
- Fully validated against `_shared/x402.schema.json`
- Version string must match the verb directory version

---

# **6. Request & Receipt Contracts**

## **6.1 Request Contract**

All requests share this required structure:

| Field       | Description                             |
|-------------|-----------------------------------------|
| `x402`      | verb + version metadata                 |
| `actor`     | freeform string, ENS, or DID            |
| `trace`     | deterministic trace primitive           |
| `input`     | verb‑specific input object              |
| `limits`    | optional time/size constraints          |

**Generic Example**

```
{
  "x402": { "verb": "fetch", "version": "1.0.0" },
  "actor": "example.eth",
  "trace": { "ts": 1234567890, "requestId": "..." },
  "input": { "url": "https://..." }
}
```

---

## **6.2 Receipt Contract**

**All receipts enforce the CommandLayer status model:**

### **Status Rules**

| status | required fields     |
|--------|----------------------|
| `ok`   | `result`, `error=null` |
| `error` | `error`, `result=null` |

**Receipt must include:**

- `x402`  
- `trace`  
- `status`  
- conditional `result` or `error`
- 

**Strict if/then/else validation is defined in:**

```
_shared/receipt.base.schema.json
```

---

# **7. Trace Primitive**

Used by *every* request and receipt.

**Fields:**

- `ts`  
- `requestId`  
- `idempotencyKey`  
- `nonce`  
- `requestHash`  
- Optional: `parentId`, `callbackUri`, `schemaId`, `signature`, `metrics`

**Located in:**

```
_shared/trace.schema.json
```

---

# **8. Versioning Rules**

The Commons follows strict immutability:

- `v1.0.0/` **will never change** once published  
- Any modification requires:
  - New versioned directory (e.g., `v1.0.1/`)  
  - New IPFS CID  
  - New checksums  
  - Updated ENS TXT  
  - Updated provenance  

NPM package: `@commandlayer/protocol-commons`  
ENS: `commandlayer.eth`

---

# **9. Validation Rules**

The Commons enforces **strict Ajv mode**:

```
strict: true
strictTypes: true
allowUnionTypes: false
strictTuples: true
```

**Other rules:**

- No `additionalProperties` unless explicitly included  
- All examples must validate with CI  
- Receipt conditionals must pass if/then/else logic  

**Validation commands:**

```
npm run validate
npm run validate:all
npm run validate:examples
```

---

# **10. Examples**

**Examples live at:**

```
examples/v1.0.0/commons/<verb>/
  valid/*.json
  invalid/*.json
```

**Requirements:**

- Minimum **3 valid** examples per verb  
- Minimum **3 invalid** examples per verb  
- All examples must pass strict CI validation  

---

# **11. Provenance**

**The entire schema tree is pinned to IPFS:**


`bafybeieoynknzalaojwpzjzjy77kpnfe4kla5io7jbfnmyu7w7vyvuljpq`


**Integrity is tracked via:**


`checksums.txt`
`manifest.json`


---

# **12. Contact**

- Governance and Security: **dev@commandlayer.org**
- PGP Fingerprint: `5016 D496 9F38 22B2 C5A2 FA40 99A2 6950 197D AB0A`

