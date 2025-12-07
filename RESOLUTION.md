# Resolution Log — Protocol Commons

*Lifecycle log for canonical verbs & schemas.*

This file tracks **every** lifecycle decision for Protocol-Commons:
verb additions, corrections, deprecations, and removals.

If a change is **not** documented here, it is **not** considered valid.

---

## Entry Requirements

- **Date** — final decision date  
- **Verb(s)** — affected canonical verbs  
- **Action** — Added · Deprecated · Replaced · Removed  
- **Reason** — interoperability, security, redundancy, etc.  
- **Resolution** — final state (including replacements, if any)  
- **Approver(s)** — Governance sign-off  

---

## Decision Log

| Date       | Verb(s)                                                                                                                                                                     | Action | Class   | Reason                     | Resolution                                                                                                              | Approver(s)      |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|---------|----------------------------|-------------------------------------------------------------------------------------------------------------------------|-----------------|
| 2025-12-06 | analyze, classify, clean, convert, describe, explain, fetch, format, parse, summarize                                                                                       | Added  | Commons | Initial canonical verb set | v1.0.0 published — immutable directory `schemas/v1.0.0/` — CID: `bafybeigvf6nkzws7dblos74dqqjkguwkrwn4a2c27ieygoxmgofyzdkz6m` | Founding Steward |

> Any future semantic change requires a **new version directory** and **new CID** prior to approval and publication in this Resolution Log.

---

## Policy

1. No silent changes — **every** protocol semantic update goes here  
2. Minimum **90-day** deprecation before removal  
3. Changes requiring new schema version:  
   - `$id` changes  
   - Field contract changes  
   - Meaning changes  
4. Governance Council **must** approve every entry  
5. Stability > speed  

---

Maintainers must review before any merge:
- `SPEC.md`
- `GOVERNANCE.md`
- `SECURITY_PROVENANCE.md`

**Status:** Stable · v1.0.0 locked
