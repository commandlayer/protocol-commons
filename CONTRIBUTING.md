# Contributing — Protocol Commons

Protocol-Commons contributions must be small, traceable, and validation-complete.

## Pull Request Spine

Every PR should:

1. Open from a focused branch for one change set
2. Explain the semantic, schema, or documentation impact
3. Include schema/example updates together when contracts change
4. Pass the required validation commands before review
5. Update release notes when the visible contract changes

## Commit Convention

Use a clear imperative subject line. Prefer conventional-style prefixes when they fit, for example:

- `docs: tighten README contract language`
- `feat: add new commons verb schema family`
- `fix: correct receipt validation example`

## Required Checks

Run the canonical validation command before opening a PR:

```bash
npm install
npm run validate
```

Run additional checks when packaging behavior changes:

```bash
npm run test:smoke:import
npm run test:smoke:pack
```

## When Schemas Change

If you change a schema or semantic contract, you must also:

- Add or update matching examples/tests
- Preserve immutability of published version directories unless the change is explicitly historical documentation only
- Review `SCHEMAS.md` and `SPEC.md` for versioning implications
- Update `CHANGELOG.md` when the externally visible contract changes
- Update `RESOLUTION.md`, provenance, or checksum artifacts if the release process requires it

## Versioning Expectations

- Treat published release lines as append-only history
- Use a new version directory for semantic changes
- Keep `v1.1.0` documented as the current in-repo line until a newer line is intentionally introduced

## Review Standard

A contribution is ready for review when a maintainer can understand the intent quickly, reproduce validation locally, and see exact schema/example/doc alignment without extra interpretation.
