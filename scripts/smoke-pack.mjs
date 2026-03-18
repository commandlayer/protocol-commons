import assert from 'node:assert/strict';
import { mkdtemp, rm, stat } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const tempDir = await mkdtemp(path.join(os.tmpdir(), 'protocol-commons-pack-'));

try {
  const { stdout, stderr } = await execFileAsync(
    'npm',
    ['pack', '--json', '--pack-destination', tempDir],
    { cwd: ROOT }
  );

  if (stderr.trim()) {
    process.stderr.write(stderr);
  }

  const jsonStart = stdout.indexOf('[');
  const jsonEnd = stdout.lastIndexOf(']');

  assert.ok(jsonStart >= 0 && jsonEnd >= jsonStart, 'Expected npm pack --json to emit a JSON payload.');

  const packs = JSON.parse(stdout.slice(jsonStart, jsonEnd + 1));

  assert.equal(packs.length, 1, 'Expected npm pack to emit exactly one tarball.');

  const tarballPath = path.join(tempDir, packs[0].filename);
  const tarballStat = await stat(tarballPath);
  assert.ok(tarballStat.isFile(), `Expected tarball at ${tarballPath}.`);
  assert.ok(tarballStat.size > 0, 'Expected packed tarball to be non-empty.');

  console.log(`✅ npm pack succeeded: ${packs[0].filename}`);
} finally {
  await rm(tempDir, { recursive: true, force: true });
}
