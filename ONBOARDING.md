# Onboarding — Protocol Commons

Welcome to **Protocol-Commons** — the canonical verb + schema layer for autonomous agents.

This repo defines the **semantic contract** for the active **v1.1.0** schema family and preserves **v1.0.0** as historical pinned context:

- What actions exist (**canonical verbs**)
- How requests and receipts are structured (**typed schemas**)
- How versioned schema families are governed, published, and verified

Stable semantics here protect the entire agent ecosystem. Legacy v1.0.0 materials still document the older x402/trace-oriented layout, but those assumptions do **not** automatically apply to v1.1.0.

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

```
[ Execution ]   runtimes and transport envelopes
[ Identity  ]   Agent-Cards (discovery + ownership)
[ Semantics ]   Protocol-Commons (verbs + schemas)
```

It answers:

“What is this agent trying to do — and what must this message look like?”

## 3. Repo Layout

| Folder/File                       | Meaning                                                              |
| --------------------------------- | -------------------------------------------------------------------- |
| `schemas/v1.1.0/commons/`         | Active in-repo Commons schemas (current pre-release candidate)       |
| `examples/v1.1.0/commons/`        | Active v1.1.0 example payloads and vectors                           |
| `schemas/v1.0.0/commons/`         | Historical pinned Commons schemas (immutable canonical release)      |
| `schemas/v1.0.0/_shared/`         | Historical shared primitives used by v1.0.0                          |
| `examples/v1.0.0/commons/`        | Historical v1.0.0 test vectors                                       |
| `manifest.json` + `checksums.txt` | Integrity, provenance, and active-versus-historical release metadata |
| `SPEC.md`                         | Canonical rules                                                      |
| `SCHEMAS.md`                      | Schema family and layout rules                                       |
| `GOVERNANCE.md`                   | Change authority + approvals                                         |
| `SECURITY*.md`                    | Disclosure + provenance                                              |
| `RESOLUTION.md`                   | Change log (signed provenance)                                       |

Authoritative docs:

- `SPEC.md` — normative rules
- `SCHEMAS.md` — versioning, layout, and schema-family guidance
- `GOVERNANCE.md` — approval of normative changes
- `SECURITY*.md` — provenance + integrity guarantees
- `RESOLUTION.md` — canonical lifecycle log

If a change is not reflected here → **not canonical.**

**ENS TXT Summary**  
Protocol-Commons governs TXT keys that resolve schema semantics.  
Canonical definitions → `SPEC.md`.

## 4. Contribution Flow
1. Open an Issue describing context + verb(s)
2. Design change per `SCHEMAS.md`
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
