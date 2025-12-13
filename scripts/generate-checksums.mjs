#!/usr/bin/env node
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

function die(msg) {
  console.error(`ERROR: ${msg}`);
  process.exit(1);
}

// --- Args: [rootDir] [outFile]
const rootDirArg = process.argv[2] || "schemas/v1.0.0";
const outFileArg = process.argv[3] || "checksums.txt";

// Resolve repo root (scripts/..)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const rootAbs = path.resolve(repoRoot, rootDirArg);
const outAbs = path.resolve(repoRoot, outFileArg);

const IGNORE_PREFIXES = [".git", "node_modules", ".github"];

function toPosix(p) {
  return p.replace(/\\/g, "/");
}

function shouldIgnore(relPosixPath) {
  return IGNORE_PREFIXES.some(
    (prefix) => relPosixPath === prefix || relPosixPath.startsWith(prefix + "/")
  );
}

function sha256File(absPath) {
  const buf = fs.readFileSync(absPath);
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function walkDir(absDir, relBasePosix, acc) {
  const entries = fs.readdirSync(absDir, { withFileTypes: true })
    .map((e) => e.name)
    .sort();

  for (const name of entries) {
    const absChild = path.join(absDir, name);
    const relChildPosix = toPosix(path.posix.join(relBasePosix, name));

    if (shouldIgnore(relChildPosix)) continue;

    const stat = fs.statSync(absChild);
    if (stat.isDirectory()) {
      walkDir(absChild, relChildPosix, acc);
    } else if (stat.isFile()) {
      // Canonical scope: JSON schemas only
      if (relChildPosix.endsWith(".json")) acc.push(relChildPosix);
    }
  }
}

function main() {
  if (!fs.existsSync(rootAbs)) die(`Missing root directory: ${rootDirArg}`);
  const st = fs.statSync(rootAbs);
  if (!st.isDirectory()) die(`Root is not a directory: ${rootDirArg}`);

  const relRootPosix = toPosix(rootDirArg);
  const files = [];
  walkDir(rootAbs, relRootPosix, files);

  files.sort();

  const lines = files.map((relPosix) => {
    const absPath = path.join(repoRoot, relPosix);
    const hash = sha256File(absPath);
    // Match common sha256sum style (binary marker *)
    return `${hash} *${relPosix}`;
  });

  fs.writeFileSync(outAbs, lines.join("\n") + "\n", "utf8");
  console.log(`Wrote ${lines.length} checksums to ${toPosix(path.relative(repoRoot, outAbs))}`);
}

main();
