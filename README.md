<div align="center">

# **CommandLayer Protocol — Commons**

A canonical verb + schema layer that standardizes how agents express intent and exchange structured actions — designed for x402 execution flows and fully compatible with ERC-8004 discovery.
<br>

[![npm](https://img.shields.io/npm/v/@commandlayer/protocol-commons?color=brightgreen)](https://www.npmjs.com/package/@commandlayer/protocol-commons)
[![CI](https://github.com/commandlayer/protocol-commons/actions/workflows/validate.yml/badge.svg?branch=main)](https://github.com/commandlayer/protocol-commons/actions/workflows/validate.yml)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
[![Twitter Follow](https://img.shields.io/twitter/follow/command_layer?style=social)](https://twitter.com/command_layer)

</div>


---

The **Commons** repository provides the canonical, immutable **verb schemas** for the CommandLayer Protocol.

These schemas define **what an agent can do — not how it runs**.  
They form the universal foundation for:

- agent-to-agent (A2A) communication  
- multi-agent workflows  
- LLM orchestration  
- automated systems  
- x402-aligned execution flows  

The Commons is the **linguistic core** of CommandLayer:  
a neutral, MIT-licensed, schema-first action vocabulary.

---

## Status — v1.0.0

- Canonical verb set defined  
- Fully validated under JSON Schema 2020-12 (strict)  
- Deterministic `$id` structure  
- Pinned to IPFS (content-addressed)  
- Request + receipt schemas for all verbs  
- GitHub Actions validation is green  
- checksums.txt ensures immutability  

This version is the **baseline for SDKs, registries, and identity layers**.

---

## Canonical Verbs (v1.0.0)

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

Each verb provides:

`<verb>.request.schema.json`

`<verb>.receipt.schema.json`

**Schemas define:**

- input structure  
- output guarantees  
- required fields  
- optional context  
- x402 envelope shape  
- trace metadata  
- version locking  

No aliases.  
No ambiguity.  
Each verb is an immutable, canonical action definition.

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

All v1.0.0 schemas are pinned to IPFS:
```
bafybeigvf6nkzws7dblos74dqqjkguwkrwn4a2c27ieygoxmgofyzdkz6m
```


`checksums.txt` contains SHA-256 hashes for every file inside `schemas/v1.0.0`, enabling:

- offline verification  
- reproducible validation  
- auditability  
- version locking  

Any schema modification requires:

- new version (1.0.1, 1.1.0, etc.)  
- new CID  
- updated checksums  
- updated manifest  
- updated ENS TXT references  

Once published, **Commons v1.0.0 is immutable**.

---

## Validation

All schemas are validated using:

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

Commons defines verbs and schemas only.

Other layers of CommandLayer live in dedicated repositories:

- **agent-cards** → identity & discovery  
- **protocol-commercial** → commercial verbs & endpoints  
- **sdk-js / sdk-python** → runtime implementations & helpers  











