#!/usr/bin/env node
/**
 * validate-all.mjs
 *
 * Compile all JSON Schemas under schemas/v1.0.0 using Ajv 2020-12 in strict mode.
 * Fails if:
 *  - any schema cannot be parsed,
 *  - any $ref cannot be resolved,
 *  - any schema fails compilation.
 */

import { promises as fs } from 'fs';
import path from 'path';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import ajvErrors from 'ajv-errors';

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

async function loadSchemas(ajv, files) {
  const loaded = [];
  let hasError = false;

  for (const file of files) {
    try {
      const raw = await fs.readFile(file, 'utf8');
      const schema = JSON.parse(raw);
      const id = schema.$id || `file://${file.replace(/\\/g, '/')}`;
      ajv.addSchema(schema, id);
      loaded.push({ id, file, schema });
    } catch (err) {
      hasError = true;
      console.error(`❌ Failed to load schema: ${file}`);
      console.error(err);
    }
  }

  if (hasError) {
    console.error('❌ One or more schemas could not be loaded. Aborting.');
    process.exit(1);
  }

  return loaded;
}

async function compileSchemas(ajv, loaded) {
  let compiledCount = 0;
  let hasError = false;

  for (const { id, file, schema } of loaded) {
    try {
      const refId = schema.$id || id;
      ajv.getSchema(refId) || ajv.compile(schema);
      compiledCount++;
    } catch (err) {
      hasError = true;
      console.error(`❌ Failed to compile schema: ${file}`);
      console.error(err);
    }
  }

  if (hasError) {
    console.error('❌ One or more schemas failed compilation.');
    process.exit(1);
  }

  console.log(`✅ All ${compiledCount} schemas compiled successfully.`);
}

async function main() {
  console.log('🔎 Scanning for schemas under:', SCHEMAS_ROOT);

  let files;
  try {
    files = await collectSchemaFiles(SCHEMAS_ROOT);
  } catch (err) {
    console.error('❌ Failed to read schemas directory:', SCHEMAS_ROOT);
    console.error(err);
    process.exit(1);
  }

  if (files.length === 0) {
    console.warn('⚠️ No *.schema.json files found. Nothing to validate.');
    process.exit(0);
  }

  const ajv = new Ajv2020({
    strict: true,
    allErrors: true,
    allowUnionTypes: false
  });
  addFormats(ajv);
  ajvErrors(ajv);

  const loaded = await loadSchemas(ajv, files);
  await compileSchemas(ajv, loaded);
}

main().catch((err) => {
  console.error('❌ Unexpected error in validate-all.mjs:');
  console.error(err);
  process.exit(1);
});
