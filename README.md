# **CommandLayer Protocol — Commons**

**Verb & schema layer for machine intent — the foundation of verifiable A2A automation.**

<div align="center">
  <a href="#"><img alt="Stability" src="https://img.shields.io/badge/Status-Stable%20v1.0.0-brightgreen"/></a>
  <a href="https://www.npmjs.com/package/@commandlayer/protocol-commons">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@commandlayer/protocol-commons?color=brightgreen"/>
  </a>
  <a href="https://github.com/commandlayer/protocol-commons/actions/workflows/validate.yml">
    <img alt="CI Status" src="https://github.com/commandlayer/protocol-commons/actions/workflows/validate.yml/badge.svg?branch=main"/>
  </a>
  <a href="./LICENSE">
    <img alt="License" src="https://img.shields.io/badge/License-MIT-blue.svg"/>
  </a>
</div>

----

Protocol-Commons defines **shared actions** autonomous agents can perform and the **typed payloads**
that make them interoperable. Without this shared verb layer:

- **Routing breaks**
- **Validation fails**
- **Multi-agent workflows collapse**



## Architecture 


```
┌────────────────────────────┐
│ Execution — x402 runtime   │  (execution + settlement)
└──────────────▲─────────────┘
               │
┌──────────────┴─────────────┐
│ Identity — Agent Cards     │  (identity + discovery)
└──────────────▲─────────────┘
               │
┌──────────────┴─────────────┐
│ Semantics — Commons        │  (semantics + validation)
└────────────────────────────┘
```

1. **Commons defines the verbs**  
2. **Agent-Cards bind identity**  
3. **x402 enables verifiable invocation and settlement**

---

### Protocol‐Commons is the **semantic foundation** of the CommandLayer stack.

## Table of Contents
- [Overview](#overview)
- [Why This Exists](#why-this-exists)
- [Quickstart](#quickstart)
- [CommandLayer Protocol Stack](#commandlayer-protocol-stack)
- [Status](#status)
- [Canonical Verbs](#canonical-verbs)
- [Repository Structure](#repository-structure)
- [Manifest](##manifest)
- [Immutability & Checksums](##immutability--checksums)
- [Validation](##validation)
- [License](##license)
- [Next Layers](##next-layers)

---
### Key Principles

- Shared semantics for every autonomous agent  
- Deterministic request + receipt schemas  
- Plug-and-play with Agent Cards + x402
 
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

## Why this matters right now

**Modern LLM agents struggle to collaborate**

- Every agent invents its own verbs  
- No shared intent resolution  
- Validation is non-deterministic  
- Interop breaks outside single products

 **LLM agents break without a canonical verb layer**  
Protocol-Commons standardizes routing, validation, and interoperability

---

## Why this Exists

The Commons is the **linguistic core** of CommandLayer — a neutral, MIT-licensed, schema-first action vocabulary for autonomous agents.

Without a shared canonical action vocabulary:

- agents become incompatible APIs  
- behaviors drift → validation breaks  
- chaining fails across ecosystems  
- trust collapses into private platforms  

Protocol-Commons prevents fragmentation — ensuring every agent speaks the same language, validates the same rules, and interoperates trustlessly across any runtime.

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

## Quickstart

```bash
npm install @commandlayer/protocol-commons

```
Import and inspect a canonical verb schema:
```
import analyzeRequest from "@commandlayer/protocol-commons/schemas/v1.0.0/commons/analyze/requests/analyze.request.schema.json";

console.log(analyzeRequest.$id);        // Deterministic schema ID
console.log(analyzeRequest.properties); // Typed input contract for "analyze"
```
**Use these schemas to:**

- validate agent requests and receipts
- generate types
- enforce consistent behavior across runtimes

---
  
## CommandLayer Protocol Stack

| Layer | Role |
|------|------|
| **Protocol-Commons** | Canonical verbs & schemas (machine intent grammar) |
| **Agent-Cards** | Identity, discovery, and entrypoints for concrete agents |
| **x402 runtime** | Transport, execution, and structured receipts |

**Commons** defines *what actions exist* and how they are structured.  
**Agent-Cards** bind those actions to real agents.  
**x402** moves the value and messages.

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

## Repository Structure
```
protocol-commons/
├── schemas/v1.0.0/
│   ├── commons/<verb>/requests/
│   ├── commons/<verb>/receipts/
│   └── _shared/
├── examples/v1.0.0/<verb>/
├── checksums.txt
├── manifest.json
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

- **agent-cards** → identity & discovery  
- **protocol-commercial** → commercial verbs & endpoints  
- **sdk-js / sdk-python** → runtime implementations & helpers

  ----

## References

- [ERC-8004 — Agent Schema Discovery](https://eips.ethereum.org/EIPS/eip-8004)
- [x402 — Machine-to-Machine Value Transport Envelope](https://github.com/ethereum/x402)
- [JSON Schema 2020-12 — Canonical validation standard](https://json-schema.org/specification-links)






