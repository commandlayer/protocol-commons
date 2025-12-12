import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

// Resolve repo root (scripts/..)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

// Which paths to include in checksums
const ROOTS = [
  "schemas/v1.0.0",  
];

// Paths to skip entirely
const IGNORE_PREFIXES = [
  ".git",
  "node_modules",
  ".github",
  "checksums.txt"
];

function shouldIgnore(relPath) {
  return IGNORE_PREFIXES.some((prefix) => {
    return (
      relPath === prefix ||
      relPath.startsWith(prefix + path.sep)
    );
  });
}

function walk(relPath, acc) {
  const absPath = path.join(repoRoot, relPath);
  const stat = fs.statSync(absPath);

  if (stat.isDirectory()) {
    const entries = fs.readdirSync(absPath);
    for (const entry of entries) {
      const childRel = path.join(relPath, entry);
      if (shouldIgnore(childRel)) continue;
      walk(childRel, acc);
    }
  } else if (stat.isFile()) {
    if (!shouldIgnore(relPath)) {
      acc.push(relPath.replace(/\\/g, "/")); // normalize to POSIX-style
    }
  }
}

function sha256File(relPath) {
  const absPath = path.join(repoRoot, relPath);
  const buf = fs.readFileSync(absPath);
  const hash = crypto.createHash("sha256").update(buf).digest("hex");
  return hash;
}

function main() {
  const files = [];
  for (const root of ROOTS) {
    const abs = path.join(repoRoot, root);
    if (!fs.existsSync(abs)) continue;
    walk(root, files);
  }

  files.sort();

  const lines = files.map((rel) => {
    const hash = sha256File(rel);
    return `${hash}  ${rel}`;
  });

  const outPath = path.join(repoRoot, "checksums.txt");
  fs.writeFileSync(outPath, lines.join("\n") + "\n");

  console.log(`Wrote ${lines.length} checksums to checksums.txt`);
}

main();
