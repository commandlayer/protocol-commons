#!/usr/bin/env node
/**
 * generate-checksums.mjs
 *
 * Usage:
 *   node scripts/generate-checksums.mjs schemas/v1.0.0 checksums.txt
 *
 * Produces a checksums file with lines:
 *   <sha256>  <relative/path/to/schema.json>
 */

import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';

const ROOT_DIR = process.cwd();

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

async function main() {
  const [,, inputDirArg, outputFileArg] = process.argv;

  if (!inputDirArg || !outputFileArg) {
    console.error('Usage: node scripts/generate-checksums.mjs <inputDir> <outputFile>');
    process.exit(1);
  }

  const inputDir = path.resolve(ROOT_DIR, inputDirArg);
  const outputFile = path.resolve(ROOT_DIR, outputFileArg);

  console.log('📦 Generating checksums for schemas under:', inputDir);

  let files;
  try {
    files = await collectSchemaFiles(inputDir);
  } catch (err) {
    console.error('❌ Failed to read input directory:', inputDir);
    console.error(err);
    process.exit(1);
  }

  if (files.length === 0) {
    console.warn('⚠️ No *.schema.json files found. No checksums written.');
    await fs.writeFile(outputFile, '', 'utf8');
    process.exit(0);
  }

  const lines = [];

  for (const file of files) {
    const data = await fs.readFile(file);
    const hash = crypto.createHash('sha256').update(data).digest('hex');
    const relPath = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
    lines.push(`${hash}  ${relPath}`);
  }

  // Deterministic ordering
  lines.sort();

  await fs.writeFile(outputFile, lines.join('\n') + '\n', 'utf8');

  console.log(`✅ Wrote ${lines.length} checksums to ${outputFile}`);
}

main().catch((err) => {
  console.error('❌ Unexpected error in generate-checksums.mjs:');
  console.error(err);
  process.exit(1);
});
