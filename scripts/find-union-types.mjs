#!/usr/bin/env node
/**
 * find-union-types.mjs
 *
 * Scans all schemas for union-type constructs:
 *  - anyOf
 *  - oneOf
 *  - allOf
 *  - type: [ ... ] (array)
 *
 * Helps maintain Ajv strictness and surfaces places where union semantics
 * might need redesign.
 */

import { promises as fs } from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const SCHEMAS_ROOT = path.join(ROOT_DIR, 'schemas', 'v1.0.0');

async function collectSchemaFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = await collectSchemaFiles(fullPath);
      files.push(...nested);
    } else if (entry.isFile() && entry.name.endsWith('.schema.json')) {
      files.push(fullPath);
    }
  }

  return files;
}

function scanNode(node, pathStack, results, file) {
  if (node && typeof node === 'object') {
    if (Array.isArray(node.type)) {
      results.push({
        file,
        path: pathStack.join('.'),
        kind: 'type-array',
        value: node.type
      });
    }

    for (const keyword of ['anyOf', 'oneOf', 'allOf']) {
      if (Array.isArray(node[keyword])) {
        results.push({
          file,
          path: [...pathStack, keyword].join('.'),
          kind: keyword,
          value: node[keyword].length
        });
      }
    }

    for (const [key, value] of Object.entries(node)) {
      scanNode(value, [...pathStack, key], results, file);
    }
  }
}

async function main() {
  let files;
  try {
    files = await collectSchemaFiles(SCHEMAS_ROOT);
  } catch (err) {
    console.error('❌ Failed to read schemas directory:', SCHEMAS_ROOT);
    console.error(err);
    process.exit(1);
  }

  const results = [];

  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8');
    const schema = JSON.parse(raw);
    const rel = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
    scanNode(schema, [], results, rel);
  }

  if (results.length === 0) {
    console.log('✅ No union types (anyOf/oneOf/allOf/type arrays) found.');
    process.exit(0);
  }

  console.log('⚠️ Found union-type constructs in schemas:\n');
  for (const r of results) {
    console.log(`- ${r.file} :: ${r.path} :: ${r.kind} ::`, r.value);
  }

  process.exit(0);
}

main().catch((err) => {
  console.error('❌ Unexpected error in find-union-types.mjs:');
  console.error(err);
  process.exit(1);
});
