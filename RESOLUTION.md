# Resolution Log

This file tracks all lifecycle changes to CommandLayer verbs, aliases, and schemas.  
It is the **single source of truth** for why something was added, deprecated, or removed.  
Every entry must be documented here to maintain transparency and trust.  

---

## Format

Each entry should include:

- **Date** — When the decision was made.  
- **Verb(s)** — Affected canonical verb(s) or aliases.  
- **Action** — Added, Deprecated, Replaced, or Removed.  
- **Reason** — Short explanation (ecosystem need, duplication, ambiguity, etc.).  
- **Resolution** — The final decision (what replaces it, if anything).  
- **Maintainers** — Who approved the change.  

---

## Example Entries

### 2025-09-15 — Verb Addition
- **Verb(s):** `stream`  
- **Action:** Added  
- **Reason:** Needed for continuous broadcast use cases (audio/video agents).  
- **Resolution:** Accepted as a **commercial** verb with 2 aliases (`broadcast`, `cast`).  
- **Maintainers:** @greg, @ayden 

---

### 2025-09-12 — Deprecation
- **Verb(s):** `register`  
- **Action:** Deprecated  
- **Reason:** Overlaps semantically with `subscribe`; caused confusion.  
- **Resolution:** Marked as deprecated. Remains valid until **2025-07-10**.  
  - Developers should migrate to `subscribe`.  
- **Maintainers:** @nicole 

---

### 2025-09-22 — Removal
- **Verb(s):** `log`  
- **Action:** Removed  
- **Reason:** Completed the 90-day deprecation window.  
- **Resolution:** Permanently removed from canonical verbs.  
- **Maintainers:** @roman, @kai

---

### 2025-09-01 — Alias Update
- **Verb(s):** `checkout`  
- **Alias(es):** `buy`  
- **Action:** Rejected alias proposal  
- **Reason:** Ambiguous with `purchase` and `order`.  
- **Resolution:** Alias `buy` will not be added.  
- **Maintainers:** @ethan @julia

---

## Rules of Thumb

1. **No silent changes** — everything must be logged here.  
2. **Stability first** — once a verb is stable, only replace if absolutely necessary.  
3. **Deprecation window** — always give at least **90 days** before removal.  
4. **Aliases are soft** — easier to add/remove, but still require reasoning.  
5. **Governance matters** — if there’s disagreement, it must be resolved before merging.  

---

Maintainers: Please update this file with every schema, verb, or alias decision.  
If it’s not in `RESOLUTION.md`, it didn’t officially happen.  

## Links

- [Security Policy](./SECURITY.md) — responsible disclosure and vulnerability handling  
- [RESOLUTION.md](./RESOLUTION.md) — governance and deprecation log  
- [Policy](./POLICY.md) — verbs, aliases, and ENS binding rules  
- [GOVERNANCE.md](./GOVERNANCE.md) — decision-making and multisig control  
