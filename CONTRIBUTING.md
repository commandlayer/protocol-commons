# Contributing — Protocol Commons

Protocol Commons is schema-first, release-sensitive infrastructure. Keep changes precise, auditable, and aligned across the repository’s authoritative surfaces.

## Expectations

- Prefer the authority order: `schemas` → `manifest.json` → validation scripts → examples → docs.
- Treat `schemas/v1.1.0/` as the current canonical working line unless a change explicitly targets legacy compatibility.
- Preserve v1.0.0 history unless a fix is clearly required to correct misleading legacy artifacts.
- Avoid placeholder authority. If a CID, tag, URL, or signature claim is not real, say so plainly.

## Validation commands

```bash
npm install
npm run validate
npm run checksums:gen
npm run checksums:verify
```

Use `npm run validate:schemas` or `npm run validate:examples` only when you are intentionally narrowing the scope during development.

## Fixture discipline

- Valid fixtures should look credible and match the schema they target.
- Invalid fixtures should usually demonstrate one obvious failure.
- Keep verbs aligned with their own directories; do not copy `summarize` into sibling fixtures.
- When updating receipt examples, keep hashes, CIDs, and signatures well-formed and documentation-friendly.

## Schema and doc consistency

- `$id` values, local paths, manifest references, and public artifact URLs must agree.
- If a schema field changes, audit the related JSON examples, TypeScript examples, README snippets, and spec text in the same pass.
- `SPEC.md` is the normative source when wording conflicts arise.

## Release-surface caution

- Do not claim a CID, release tag, or published artifact unless it is actually available.
- If a release step cannot be completed in-repo, record the state honestly in `manifest.json` and the relevant documentation.
- Regenerate `checksums.txt` whenever the authoritative artifact set changes.

## TypeScript declarations

This package does not currently ship generated `.d.ts` files from the JSON Schemas. That omission is intentional: the schemas are the canonical cross-runtime artifact surface, and no low-maintenance declaration-generation pipeline is wired into release today. If you propose adding one, it must be reproducible, documented, and clearly subordinate to the JSON Schemas rather than a parallel source of truth.

## PR hygiene

- Keep PRs focused.
- Describe any manual release follow-up still required.
- Call out changes that touch canonical release surfaces such as schema files, manifest data, checksums, or governance text.
