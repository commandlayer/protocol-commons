#!/usr/bin/env node
/**
 * validate-examples.mjs
 *
 * Validates example payloads for each verb against their request/receipt schemas.
 *
 * Rules:
 *  - Files under .../valid/ MUST pass validation.
 *  - Files under .../invalid/ MUST fail validation.
 */

import { promises as fs } from 'fs';
import path from 'path';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import ajvErrors from 'ajv-errors';

const ROOT_DIR = process.cwd();
const SCHEMAS_ROOT = path.join(ROOT_DIR, 'schemas', 'v1.0.0');
const EXAMPLES_ROOT = path.join(ROOT_DIR, 'examples', 'v1.0.0', 'commons');

async function exists(dir) {
  try {
    await fs.access(dir);
    return true;
  } catch {
    return false;
  }
}

async function discoverVerbs() {
  if (!(await exists(EXAMPLES_ROOT))) return [];

  const entries = await fs.readdir(EXAMPLES_ROOT, { withFileTypes: true });
  return entries.filter(e => e.isDirectory()).map(e => e.name);
}

async function collectJsonFiles(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        const nested = await collectJsonFiles(fullPath);
        files.push(...nested);
      } else if (entry.isFile() && entry.name.endsWith('.json')) {
        files.push(fullPath);
      }
    }

    return files;
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

async function loadAllSchemasIntoAjv(ajv) {
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

  const files = await collectSchemaFiles(SCHEMAS_ROOT);
  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8');
    const schema = JSON.parse(raw);
    const id = schema.$id || `file://${file.replace(/\\/g, '/')}`;
    ajv.addSchema(schema, id);
  }
}

async function validateExamplesForVerb(verb, ajv) {
  const verbRoot = path.join(EXAMPLES_ROOT, verb);

  const validDir = path.join(verbRoot, 'valid');
  const invalidDir = path.join(verbRoot, 'invalid');

  const reqSchemaPath = path.join(
    SCHEMAS_ROOT,
    'commons',
    verb,
    'requests',
    `${verb}.request.schema.json`
  );
  const receiptSchemaPath = path.join(
    SCHEMAS_ROOT,
    'commons',
    verb,
    'receipts',
    `${verb}.receipt.schema.json`
  );

  let reqSchemaRaw, receiptSchemaRaw;
  try {
    [reqSchemaRaw, receiptSchemaRaw] = await Promise.all([
      fs.readFile(reqSchemaPath, 'utf8'),
      fs.readFile(receiptSchemaPath, 'utf8')
    ]);
  } catch (err) {
    console.warn(`⚠️ Missing schemas for verb '${verb}', skipping examples.`);
    return false;
  }

  const reqSchema = JSON.parse(reqSchemaRaw);
  const receiptSchema = JSON.parse(receiptSchemaRaw);

  const validateRequest = ajv.compile(reqSchema);
  const validateReceipt = ajv.compile(receiptSchema);

  const validFiles = await collectJsonFiles(validDir);
  const invalidFiles = await collectJsonFiles(invalidDir);

  let hasError = false;

  // Valid examples
  for (const file of validFiles) {
    const raw = await fs.readFile(file, 'utf8');
    const data = JSON.parse(raw);
    const isReceipt = file.toLowerCase().includes('receipt');
    const validate = isReceipt ? validateReceipt : validateRequest;

    if (!validate(data)) {
      hasError = true;
      console.error(`❌ Expected VALID (${verb}) example failed validation: ${file}`);
      console.error(validate.errors);
    } else {
      console.log(`✅ Valid example OK: ${file}`);
    }
  }

  // Invalid examples
  for (const file of invalidFiles) {
    const raw = await fs.readFile(file, 'utf8');
    const data = JSON.parse(raw);
    const isReceipt = file.toLowerCase().includes('receipt');
    const validate = isReceipt ? validateReceipt : validateRequest;

    const passed = validate(data);
    if (passed) {
      hasError = true;
      console.error(`❌ Expected INVALID (${verb}) example passed validation: ${file}`);
    } else {
      console.log(`✅ Invalid example correctly rejected: ${file}`);
    }
  }

  return hasError;
}

async function main() {
  const ajv = new Ajv2020({
    strict: true,
    allErrors: true,
    allowUnionTypes: false
  });
  addFormats(ajv);
  ajvErrors(ajv);

  await loadAllSchemasIntoAjv(ajv);

  const verbs = await discoverVerbs();
  if (verbs.length === 0) {
    console.log('ℹ️ No examples found under examples/v1.0.0/commons; skipping example validation.');
    process.exit(0);
  }

  let hasError = false;

  for (const verb of verbs) {
    console.log(`\n🔍 Validating examples for verb: ${verb}`);
    const verbHasError = await validateExamplesForVerb(verb, ajv);
    if (verbHasError) hasError = true;
  }

  if (hasError) {
    console.error('\n❌ One or more examples failed validation.');
    process.exit(1);
  }

  console.log('\n✅ All examples validated as expected.');
}

main().catch((err) => {
  console.error('❌ Unexpected error in validate-examples.mjs:');
  console.error(err);
  process.exit(1);
});
