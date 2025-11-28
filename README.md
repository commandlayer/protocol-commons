# **CommandLayer Protocol — Commons**

The canonical verb + schema layer for machine intent — standardized for verifiable A2A automation.<br>
<div align="center">

[![npm](https://img.shields.io/npm/v/@commandlayer/protocol-commons?color=brightgreen)](https://www.npmjs.com/package/@commandlayer/protocol-commons)
[![CI](https://github.com/commandlayer/protocol-commons/actions/workflows/validate.yml/badge.svg?branch=main)](https://github.com/commandlayer/protocol-commons/actions/workflows/validate.yml)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
[![Twitter Follow](https://img.shields.io/twitter/follow/command_layer?style=social)](https://twitter.com/command_layer)

</div>

---

## Table of Contents
- [Overview](#overview)
- [Why This Exists](#why-this-exists)
- [Quickstart](#quickstart)
- [CommandLayer Protocol Stack](#commandlayer-protocol-stack)
- [Status](#status)
- [Canonical Verbs](#canonical-verbs)
- [Repository Structure](#repository-structure)
- [Manifest](#manifest)
- [Immutability & Checksums](#immutability--checksums)
- [Validation](#validation)
- [License](#license)
- [Next Layers](#next-layers)

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

## Why This Exists

The Commons is the **linguistic core** of CommandLayer — a neutral, MIT-licensed, schema-first action vocabulary for autonomous agents.

Without one canonical action standard:

- every agent becomes an incompatible API
- verbs collide and fragment
- routing and intent resolution fail
- schemas drift → verification breaks

The Commons prevents fragmentation — ensuring every agent can **speak the same language**, validate the same rules, and interoperate trustlessly across any runtime.

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

The Commons includes **10 universal actions** used across nearly all agentic workflows:

- analyze  
- classify  
- clean  
- convert  
- describe  
- explain  
- format  
- parse  
- summarize  
- fetch  

```
+---------------------------+
|   Protocol-Commons        |
|  (verbs + schemas)        |
+-------------+-------------+
              |
              v
      Agent Cards (identity)
              |
              v
        x402 Entry (invoke)
              |
              v
     Execution Runtime (A2A)
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
│
├── schemas/
│ └── v1.0.0/
│ ├── commons/
│ │ └── <verb>/
│ │ ├── requests/
│ │ └── receipts/
│ └── _shared/
│ ├── x402.schema.json
│ ├── trace.schema.json
│ └── receipt.base.schema.json
│
├── examples/
│ └── v1.0.0/
│ └── <verb>/
│ ├── valid/
│ └── invalid/
│
├── checksums.txt
├── manifest.json
├── package.json
└── README.md
```


---

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




















