#!/usr/bin/env node
/**
 * This script is intentionally a non-functional stub.
 *
 * `manifest.json` currently contains release-state metadata that is curated by maintainers,
 * including active versus historical release status and CID publication state. Because this
 * workflow is not yet fully derived from repository contents alone, this script is not wired
 * into the release process and MUST NOT be relied on to regenerate canonical manifest data.
 *
 * Canonical source today: the checked-in `manifest.json` reviewed through governance.
 */

console.error(
  'build-manifest.mjs is not wired into the release workflow and must not be used as a canonical manifest generator.'
);
process.exit(1);
