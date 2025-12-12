# **CommandLayer Protocol — Commons**

**The canonical semantic contract for autonomous agents.**  
**Verbs, schemas, and validation — or nothing interoperates.**

[![Status](https://img.shields.io/badge/Status-Stable%20v1.0.0-brightgreen)](https://github.com/commandlayer/protocol-commons)
[![NPM Version](https://img.shields.io/npm/v/@commandlayer/commons)](https://www.npmjs.com/package/@commandlayer/commons)
[![CI Status](https://github.com/commandlayer/protocol-commons/actions/workflows/validate.yml/badge.svg?branch=main)](https://github.com/commandlayer/protocol-commons/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/commandlayer/protocol-commons/blob/main/LICENSE)

----

## Why Now

Autonomous agents are finally leaving the lab — but without shared meaning, they fragment into isolated API silos.

CommandLayer establishes the first **semantic contract for agents**:

- **ENS** provides universal identity
- **x402** enables verifiable machine-to-machine execution
- **Protocol-Commons** defines **the shared language** those machines speak

This is the foundation of the machine economy —  
**without semantics, nothing interoperates.**

---

> **Integrity Notice — Protocol-Commons v1.0.0**
>
> Canonical schemas are pinned and immutable:
> `schemas/v1.0.0/` — CID:
> `bafybeigvf6nkzws7dblos74dqqjkguwkrwn4a2c27ieygoxmgofyzdkz6m`
>
> Verify integrity locally:
> ```bash
> sha256sum -c checksums.txt
> ```
>
> Any mismatch indicates **untrusted or modified artifacts**.
> New versions MUST use a new version directory + new CID.

---

Without a shared verb layer, ecosystems degrade into:

- Ad-hoc verbs and incompatible dialects  
- No trustable receipts  
- No cross-runtime interoperability  
- Closed vendor silos with fragile glue logic  

**Protocol-Commons** fixes this with a global, canonical **action language**:

- Verbs + JSON Schemas + strict validation =  
- **Machine intent you can trust.**

If agents can’t agree on what actions mean → **nothing works.**

---
## Real verbs. Real receipts.

```jsonc
// summarize.request
{
  "verb": "summarize",
  "content": "CommandLayer defines the semantics of agent behavior."
}

// summarize.receipt
{
  "result": "Semantic verb layer for autonomous multi-agent workflows.",
  "trace": "bafybeieoynknza..."
}
```

**Same shape — everywhere:
SDKs → Runtimes → x402 → ENS → Receipts**

---
## Quickstart

Install Commons + AJV:

```
npm install @commandlayer/commons ajv
```
**Validate a request against a canonical verb schema**

```
npx cl-validate examples/v1.0.0/commons/summarize/request.json
# ✓ VALID — trace: bafybeieoynknza...
```
**Programmatic usage (Node.js/ESM)**

```
import Ajv from "ajv";
import analyzeRequest from "@commandlayer/commons/schemas/v1.0.0/commons/analyze/requests/analyze.request.schema.json";

const ajv = new Ajv({ strict: true, allErrors: true });
const validate = ajv.compile(analyzeRequest);

const input = {
  verb: "analyze",
  content: "CommandLayer defines semantics."
};

console.log(validate(input));   // true or false
console.log(validate.errors);   // diagnostics if invalid
```
**Generate TypeScript types directly from schemas** for zero-drift validation:
```
npx ajv compile -s schemas/v1.0.0 -o dist/types.d.ts
```
---

## Table of Contents
- [Real verbs. Real receipts.](#real-verbs-real-receipts)
- [Quickstart](#quickstart)
- [What Commons enables](#what-commons-enables)
- [Why this exists](#why-this-exists)
- [Canonical Verbs](#canonical-verbs)
- [Overview](#overview)
- [Key Principles](#key-principles)
- [This is not…](#this-is-not)
- [CommandLayer Protocol Stack](#commandlayer-protocol-stack)
- [Status](#status)
- [Repository Structure](#repository-structure)
- [Manifest](#manifest)
- [Immutability & Checksums](#immutability--checksums)
- [Validation](#validation)
- [License](#license)
- [Next Layers](#next-layers)
- [References](#references)


---

## Why this exists

Fragmented agents → isolated ecosystems → brittle automation.

Protocol-Commons delivers:

- **Shared semantics**
- **Typed request/receipt envelopes**
- **Receipt-level provability**
- **Portable behavior across runtimes**
- **Open standards alignment → one shared language for all autonomous agents**
  - JSON Schema 2020-12  
  - x402  
  - ERC-8004

 ---
    
## What Commons enables

- **Deterministic action contracts**
- **Runtime-level validation**
- **Trustable receipts**
- **Cross-vendor interoperability**
- **Future-proof machine intent**

Protocol-Commons is the **semantic foundation** of the CommandLayer stack.

---

## Canonical Verbs

The Commons defines 10 universal actions used across nearly all multi-agent workflows:


| Verb      | Purpose                                               | Guarantees                                               |
|-----------|------------------------------------------------------ |----------------------------------------------------------|
| analyze   | Extract insights from structured or unstructured data | Identifies meaning, relationships, or signals            |
| classify  | Categorize input according to a known schema          | Deterministic label assignment                           |
| clean     | Normalize or remove noise from data                   | Output retains meaning with improved quality             |
| convert   | Transform between formats or representations          | Semantically-equivalent output with different encoding   |
| describe  | State what something *is*                             | Attributes, context, or defining properties              |
| explain   | State *why* or *how* something is true                | Causal or relational justification                       |
| format    | Produce content in a structured/presentable shape     | Output conforms to declared structure                    |
| parse     | Extract structured meaning from raw input             | Typed output from unstructured content                   |
| summarize | Compress content while preserving key meaning         | Core information retained; verbosity reduced             |
| fetch     | Retrieve data from a remote or indirect source        | Integrity of returned content                            |


**Each verb defines:**

- a canonical **request** format
- a canonical **receipt** format
- strict typing and deterministic envelopes for x402

```
+-----------------------------+
|  Execution Runtime          |  (action is performed)
+-------------▲---------------+
              |
              v
+-----------------------------+
|  x402 Transport Layer       |  (invocation + settlement)
|  "How messages move"        |
+-------------▲---------------+
              |
              v
+-----------------------------+
|  Agent Cards (Identity)     |  (ENS discovery + routing)
|  "Who does what, and where" |
+-------------▲---------------+
              |
              v
+-----------------------------+
|  Protocol-Commons           |  (verbs + schemas)
|  "What actions mean"        |
+-----------------------------+

```
**Each verb provides:**

`<verb>.request.schema.json`

`<verb>.receipt.schema.json`

**Schemas define:**

- `input` structure  
- `output` guarantees  
- `required fields`  
- optional context  
- `x402 envelope` shape  
- trace metadata  
- version locking  

No aliases.  
No ambiguity.  
**Each verb is an immutable, canonical action definition.**

---
 
## Overview

The **Commons** repository provides the canonical, immutable **verb schemas** for the CommandLayer Protocol.

These schemas define **what an agent can do — not how it runs**.  
They form the universal foundation for:

- **A2A = Autonomous-to-Autonomous — no humans required in the loop.**
- **agent-to-agent** (A2A) communication  
- **multi-agent workflows**  
- **LLM orchestration** 
- **automated systems**  
- **x402-aligned** execution flows

---

### Key Principles

- **Shared semantics** — every autonomous agent speaks the same actions  
- **Deterministic envelopes** — strict request & receipt schemas, version-locked  
- **Trustable execution** — verifiable, auditable receipts across runtimes  
- **Portable behavior** — identical contract shapes across vendors & ecosystems  
- **Neutral governance** — open, MIT-licensed semantics with immutable history  
- **Standards aligned** — JSON Schema 2020-12, x402 transport, ERC-8004 discovery  

> Commons is the **linguistic core** of CommandLayer —  
> the foundation on which identity, execution, and economic layers depend.
> 
---

## This is not…

To avoid confusion, Protocol-Commons does **not** define:

- **how agents run or where they live**
- **any economic model or execution pricing**
- **identity, discovery, or routing** (that is Agent-Cards + ENS)
- **commercial enforcement or proprietary extensions**
- **agent behavior beyond typed input/output guarantees**

Commons defines **semantics** — nothing more, nothing less.

Everything else is layered cleanly on top.

---

## CommandLayer Protocol Stack

| Layer               | Role                                                              |
|---------------------|-------------------------------------------------------------------|
| Protocol-Commons    | Canonical verbs & schemas (machine intent grammar)                |
| Agent-Cards         | Identity, discovery, and invocation metadata                      |
| Protocol-Commercial | Canonical commercial/economic verbs (schemas & receipt defaults)  |
| Protocol-Runtime    | Transport adapters, execution, and structured receipts            |



- **Commons** defines what actions exist and how they are structured.  
- **Agent-Cards** bind those actions to real agents.  
- **Protocol-Commercial** defines market-aligned economic verbs and receipt schemas.  
- **Runtime** executes those actions and returns verifiable receipts (optionally over x402).  



---

## Status

- Canonical verb set defined  
- Fully validated under JSON Schema 2020-12 (**strict**)  
- Deterministic `$id` structure  
- **Pinned to IPFS** (content-addressed)  
- Request + receipt schemas for **all verbs**  
- `GitHub Actions` validation is **green**  
- `checksums.txt` ensures **immutability**  

This version is the **baseline** for SDKs, registries, resolvers, and identity layers.

---


## Repository Structure
```text
protocol-commons/
├── schemas/
│   └── v1.0.0/
│       ├── commons/
│       │   └── <verb>/
│       │       ├── requests/
│       │       │   └── <verb>.request.schema.json
│       │       └── receipts/
│       │           └── <verb>.receipt.schema.json
│       └── _shared/
│           ├── x402.schema.json
│           ├── trace.schema.json
│           └── receipt.base.schema.json
├── examples/
│   └── v1.0.0/
│       └── commons/
│           └── <verb>/
│               ├── valid/
│               │   └── *.json
│               └── invalid/
│                   └── *.json
├── checksums.txt
├── manifest.json
├── SPEC.md
├── POLICY.md
├── GOVERNANCE.md
├── SECURITY.md
├── SECURITY_PROVENANCE.md
├── COMPLIANCE.md
├── RESOLUTION.md
├── ONBOARDING.md
└── README.md

```

## Manifest

`manifest.json` includes:

- repository metadata  
- schema root directories  
- the IPFS CID for the versioned schema folder  
- a verb index with direct request/receipt paths  

It is **not** an identity registry.  
Identity lives in **agent-cards**.

---

## Immutability & Checksums

**All v1.0.0 schemas are pinned to IPFS:**
```
bafybeigvf6nkzws7dblos74dqqjkguwkrwn4a2c27ieygoxmgofyzdkz6m
```


`checksums.txt` contains SHA-256 hashes for every file inside `schemas/v1.0.0`, enabling:

- **offline verification**  
- **reproducible validation**  
- **auditability**  
- **version locking**  

### **Any schema modification requires:**

- new version (1.0.1, 1.1.0, etc.)  
- new CID  
- updated checksums  
- updated manifest  
- updated ENS TXT references  

Once published, **Commons v1.0.0 is immutable**.

---

## Validation

**All schemas are validated using:**

- AJV (2020-12) strict mode  
- deterministic `$id` resolution  
- no type coercion  
- no additionalProperties leakage  
- full valid+invalid example coverage  

This ensures consistent behavior across runtimes, SDKs, and agent frameworks.

---

## License

MIT — open, universal, fork-friendly.  
Commons is designed to remain neutral and stable.

---

## Next Layers

CommandLayer follows a clean separation of concerns:

- **protocol-commons** → free canonical Commons schemas (specs)
- **protocol-commercial** → free canonical Commercial schemas (specs)
- **agent-cards** → identity & discovery for agents
- **protocol-runtime** → reference execution layer (endpoints, adapters, paywalls)
- **sdk-js / sdk-python** → client libraries that interact with the runtime


  ----

## References

- [ERC-8004 — Agent Schema Discovery](https://eips.ethereum.org/EIPS/eip-8004)
- [x402 — Machine-to-Machine Value Transport Envelope](https://github.com/ethereum/x402)
- [JSON Schema 2020-12 — Canonical validation standard](https://json-schema.org/specification-links)































