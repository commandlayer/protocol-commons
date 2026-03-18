import assert from 'node:assert/strict';
import * as commons from '../index.js';

const exportNames = Object.keys(commons);
assert.ok(exportNames.length > 0, 'Expected package entrypoint to export schema bindings.');

for (const exportName of exportNames) {
  assert.ok(commons[exportName], `Expected export ${exportName} to be defined.`);
}

console.log(`✅ Imported package entrypoint successfully with ${exportNames.length} exports.`);
