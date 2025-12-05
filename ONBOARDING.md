# Onboarding — Protocol Commons

Welcome to **Protocol-Commons** — the canonical verb + schema layer for autonomous agents.

This repo defines the **semantic contract**:

- What actions exist (**canonical verbs**)
- How requests and receipts are structured (**typed schemas**)
- How they bind into **x402 envelopes** and **trace primitives**

Stable semantics here protect the entire agent ecosystem.

---

## 1. Who This Repo Is For

You’re in the right place if you are:

- Protocol / infra engineer defining canonical verbs
- Agent runtime / router implementer mapping verbs → handlers
- Validator enforcing strict JSON Schema behavior
- Contributor extending neutral A2A semantics

> Quick start: implement a Commons verb (e.g., `summarize`) and validate strict request/receipt compatibility.  
> It gets you typing — not just reading.

For identity metadata + ENS discovery → see **agent-cards**.

---

## 2. Mental Model

Protocol-Commons is the **bottom** layer:

```text
[ Execution ]   x402 runtimes (invocation + receipts)
[ Identity  ]   Agent-Cards (discovery + ownership)
[ Semantics ]   Protocol-Commons (verbs + schemas)

```
It answers:

“What is this agent trying to do — and what must this message look like?”

3. Repo Layout
   

| Folder/File                       | Meaning                                 |
| --------------------------------- | --------------------------------------- |
| `schemas/v1.0.0/commons/`         | Canonical verb schemas (immutable)      |
| `schemas/v1.0.0/_shared/`         | Shared primitives (trace/x402/receipts) |
| `examples/v1.0.0/commons/`        | Valid + invalid test vectors            |
| `manifest.json` + `checksums.txt` | Integrity + provenance                  |
| `SPEC.md`                         | Canonical rules                         |
| `POLICY.md`                       | Schema enforcement rules                |
| `GOVERNANCE.md`                   | Change authority + approvals            |
| `SECURITY*.md`                    | Disclosure + provenance                 |
| `RESOLUTION.md`                   | Change log (signed provenance)          |



Authoritative docs:

SPEC.md — NORMATIVE rules

- `POLICY.md` — versioning and extension governance
- `GOVERNANCE.md` — approval of normative changes
- `SECURITY*.md` — provenance + integrity guarantees
- `RESOLUTION.md` — canonical lifecycle log

If a change is not reflected here → **not canonical.**

**ENS TXT Summary**
Protocol-Commons governs TXT keys that resolve schema semantics.
Canonical definitions → `SPEC.md.`

## 4. Contribution Flow
1. Open an Issue describing context + verb(s)
2. Design change per POLICY.md
3. Update schemas + examples
4. Validate:

```
npm install
npm run validate
npm run validate:examples
```
5. Update `RESOLUTION.md`, provenance
6. Submit PR with version class (MAJOR/MINOR/PATCH)

Once approved → tagged + pinned.

## 5. What “Good” Looks Like

- Clear, single-purpose PR
- Schema + example alignment
- No edits to existing version folders
- Fully traceable governance + checksums
- Deterministic $id + HTTP resolution

Default assumption: **new version** for any semantic change.

## 6. Support

Governance contact: dev@commandlayer.org
PGP fingerprint: 5016 D496 9F38 22B2 C5A2 FA40 99A2 6950 197D AB0A

Protocol-Commons is a **neutral shared layer.**
Precision here preserves interoperability everywhere else.
