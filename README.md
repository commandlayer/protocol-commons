CommandLayer Protocol — Commons

A canonical verb + schema layer for autonomous agents, aligned with x402 and compatible with ERC-8004.

<p align="center"> <a href="https://www.npmjs.com/package/@commandlayer/protocol-commons"> <img src="https://img.shields.io/npm/v/@commandlayer/protocol-commons?color=brightgreen" /> </a> <a href="https://github.com/commandlayer/protocol-commons/actions/workflows/validate.yml"> <img src="https://github.com/commandlayer/protocol-commons/actions/workflows/validate.yml/badge.svg?branch=main" /> </a> <a href="./LICENSE"> <img src="https://img.shields.io/badge/License-MIT-blue.svg" /> </a> <a href="https://twitter.com/command_layer"> <img src="https://img.shields.io/twitter/follow/command_layer?style=social" /> </a> </p>

The Commons repository defines the canonical, immutable verb schemas for the CommandLayer Protocol.
These schemas describe what an agent can do — not how it runs — and form the universal foundation for A2A communication, multi-agent workflows, LLM orchestration, and automated systems.

The Commons represents the linguistic core of CommandLayer:
a neutral, MIT-licensed, schema-first action vocabulary.

Status — v1.0.0

Canonical verb set defined

Fully validated under JSON Schema 2020-12 (strict)

Deterministic $id structure

Pinned to IPFS (content-addressed)

Includes request + receipt schemas for all verbs

CI validation (GitHub Actions) is green

Checksums recorded for immutability

This is the baseline for ecosystem alignment, SDKs, registries, and agent-card identity layers.

Canonical Verbs (v1.0.0)

The Commons includes 10 universal actions used across nearly all agentic workflows:

analyze

classify

clean

convert

describe

explain

format

parse

summarize

fetch

Each verb ships with:

<verb>.request.schema.json
<verb>.receipt.schema.json


These define:

input structure

output guarantees

required fields

optional context

x402 envelope shape

trace metadata

version locking

No aliases. No ambiguity.
Each verb is a canonical action definition.

Repository Structure
protocol-commons/
│
├── schemas/
│   └── v1.0.0/
│       ├── commons/
│       │   └── <verb>/
│       │       ├── requests/
│       │       └── receipts/
│       └── _shared/
│           ├── x402.schema.json
│           ├── trace.schema.json
│           └── receipt.base.schema.json
│
├── examples/
│   └── v1.0.0/
│       └── <verb>/
│           ├── valid/
│           └── invalid/
│
├── checksums.txt
├── manifest.json
├── package.json
└── README.md

Manifest

manifest.json provides:

high-level metadata

schema root directories

the IPFS CID containing the schema directory

a complete verb index with request/receipt paths

It is not an identity registry; that lives in the agent-cards repo.

Immutability & Checksums

The entire schemas/v1.0.0 directory is pinned to IPFS:

CID:
bafybeigvf6nkzws7dblos74dqqjkguwkrwn4a2c27ieygoxmgofyzdkz6m

This CID acts as the canonical, content-addressed reference to all v1.0.0 schemas.

checksums.txt contains SHA-256 hashes for every schema file inside the versioned folder, enabling:

offline verification

reproducible validation

auditability

version locking

Any change to any schema requires:

a new version (1.0.1, 1.1.0, etc.)

a new pinned CID

updated checksums

updated manifest

updated ENS TXT

Commons is immutable once published.

Validation

Every schema is validated in CI with:

AJV 2020-12 in strict mode

Static $id resolution

No implicit type coercion

No additionalProperties leaks

Full example coverage (valid + invalid)

This ensures consistent, deterministic behavior across SDKs and runtimes.

License

MIT — fully open, compatible, fork-friendly.
The Commons layer is designed to be neutral and universal.

Next Layers

Commons defines verbs and schemas only.
Other layers live in separate repositories:

agent-cards → identity & discovery

protocol-commercial → commercial endpoints & private verbs

sdk-js / sdk-python → runtime implementations & helpers
