# ONBOARDING — Protocol-Commons

Welcome to **CommandLayer Protocol-Commons** — the canonical verb + schema layer.

This repo defines the **semantic contract** for autonomous agents:
- What actions exist (verbs)
- How requests and receipts are structured (schemas)
- How they bind into x402 envelopes and trace primitives

If you break this, you break everyone’s agents. Treat it as core infra.

---

## 1. Who This Repo Is For

You’re in the right place if you are:

- A **protocol / infra engineer** defining or consuming canonical verbs
- An **agent runtime / router implementer** mapping verbs → handlers
- A **schema / validation engineer** integrating strict JSON Schema flows
- An **ecosystem contributor** helping extend the canonical verb set

If you want to work with identity metadata or ENS discovery, see **agent-cards** instead.

---

## 2. Mental Model

Protocol-Commons is the **bottom layer**:

```text
[ Execution ]       x402 runtimes, agents, payments
[ Identity  ]       Agent-Cards (ENS discovery, x402 entrypoints)
[ Semantics ]  ←    Protocol-Commons (canonical verbs + schemas)
```
This repo answers exactly one question:

“What is this agent trying to do, and what does that message look like on the wire?”

No business logic. No pricing. No proprietary behavior.

## 3. Repo Layout

```
schemas/
  v1.0.0/
    _shared/
      x402.schema.json
      trace.schema.json
      receipt.base.schema.json
    commons/
      analyze/
        requests/analyze.request.schema.json
        receipts/analyze.receipt.schema.json
      classify/
      clean/
      convert/
      describe/
      explain/
      fetch/
      format/
      parse/
      summarize/

examples/
  v1.0.0/
    commons/
      <verb>/
        valid/*.json
        invalid/*.json

checksums.txt
manifest.json

SPEC.md
POLICY.md
GOVERNANCE.md
SECURITY.md
SECURITY_PROVENANCE.md
RESOLUTION.md
```

Authoritative documents:

SPEC.md — normative protocol rules (NORMATIVE, ENFORCEABLE)

POLICY.md — how verbs + schemas are allowed to evolve

GOVERNANCE.md — who can approve changes and how

SECURITY*.md — disclosure, CIDs, and immutability guarantees

RESOLUTION.md — why any verb/schema changed

If a change is not consistent with these files, it is non-compliant, even if CI passes.


## 4. How To Propose a Change

**Never** just “fix a schema” in a drive-by PR.

For any change (new verb, bugfix, tightening, etc.):

### 1. Open an Issue

- Describe the problem / use case.
- Specify which verb(s) and version(s) are affected.
- Describe expected behavior vs current behavior.

### 2. Design the Change

- Decide if this is breaking (shape or semantics) or additive.
- Map it onto versioning rules in POLICY.md and SPEC.md.
- For new verbs, justify why it belongs in Commons (not Commercial).

### 3. Implement

- Modify or add schemas under schemas/vX.Y.Z/..
- Update examples under examples/vX.Y.Z/...
- Run local validation:
```
npm install
npm run validate
npm run validate:examples
```

### 4. Update Provenance

- Append entries to RESOLUTION.md (what changed and why).
- Prepare new checksums and manifest updates (if version changes).
- Ensure new CIDs are ready to be pinned (IPFS).

### 5. Submit PR

- Link the Issue in the PR description.
- Include validation output (or CI link).
- Call out whether this is MAJOR/MINOR/PATCH in semantic-version terms.

### 6. Governance Review

- Maintainers check:
    - No silent breaking changes
    - Versioning rules respected
    - ENS TXT responsibility unchanged or correctly updated
- Once merged, a new tag and CID are produced and recorded in SECURITY_PROVENANCE.md.

## 5. Local Dev / Validation

Standard workflow:
```
git clone https://github.com/commandlayer/protocol-commons.git
cd protocol-commons

npm install

# Validate schemas + examples
npm run validate
npm run validate:examples
```

If validation fails, **do not** paper over it — fix the schemas or examples so they align with SPEC.md.

## 6. What “Good” Looks Like

A good contribution:

- **Does one thing clearly** (e.g., “add stream as a new verb”, not “rewrite half the repo”).
- Comes with:
    - Updated schemas
    - Valid + invalid examples
    - Updated docs where normative behavior changed
    - A RESOLUTION.md entry explaining the change

-Respects immutability:
    - No edits to existing v1.0.0/ files
    - New version directories for any real change

If you’re not sure whether a change is allowed for a given version, assume it requires a new version directory and ask via an Issue.

## 7. Support

Governance / security contact: dev@commandlayer.org

PGP fingerprint: 5016 D496 9F38 22B2 C5A2 FA40 99A2 6950 197D AB0A

If your use case doesn’t fit the existing verbs or schemas, open an Issue before forking semantics.

Protocol-Commons is meant to be a shared, neutral layer — not anyone’s private fork.
