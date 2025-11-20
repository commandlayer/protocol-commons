import { createHash } from "crypto";
import { readdirSync, readFileSync, statSync } from "fs";
import { join } from "path";

const ROOT = "schemas/v1.0.0";

function walk(dir) {
  const out = [];
  for (const item of readdirSync(dir)) {
    const full = join(dir, item);
    if (statSync(full).isDirectory()) {
      out.push(...walk(full));
    } else if (item.endsWith(".json")) {
      out.push(full);
    }
  }
  return out;
}

const files = walk(ROOT).sort();

let output = "";

for (const file of files) {
  const data = readFileSync(file);
  const hash = createHash("sha256").update(data).digest("hex");
  output += `${hash}  ${file}\n`;
}

console.log(output);
