import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import ajvErrors from "ajv-errors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, "..");

const VERBS = [
  "classify",
  "clean",
  "convert",
  "describe",
  "explain",
  "format",
  "parse",
  "summarize",
  "analyze",
  "fetch"
];

const EXAMPLE_CONFIGS = [
  {
    version: "v1.0.0",
    schemasRoot: path.join(ROOT, "schemas", "v1.0.0"),
    requestSchemaId: (verb) => `https://commandlayer.org/schemas/v1.0.0/commons/${verb}/requests/${verb}.request.schema.json`,
    receiptSchemaId: (verb) => `https://commandlayer.org/schemas/v1.0.0/commons/${verb}/receipts/${verb}.receipt.schema.json`,
    validDir: (verb) => path.join(ROOT, "examples", "v1.0.0", "commons", verb, "valid"),
    invalidDir: (verb) => path.join(ROOT, "examples", "v1.0.0", "commons", verb, "invalid")
  },
  {
    version: "v1.1.0",
    schemasRoot: path.join(ROOT, "schemas", "v1.1.0"),
    requestSchemaId: (verb) => `https://commandlayer.org/schemas/v1.1.0/commons/${verb}/${verb}.request.schema.json`,
    receiptSchemaId: (verb) => `https://commandlayer.org/schemas/v1.1.0/commons/${verb}/${verb}.receipt.schema.json`,
    validDir: (verb) => path.join(ROOT, "examples", "v1.1.0", "commons", verb, "json", "valid"),
    invalidDir: (verb) => path.join(ROOT, "examples", "v1.1.0", "commons", verb, "json", "invalid")
  }
];

function createAjv() {
  const ajv = new Ajv2020({
    strict: true,
    strictSchema: true,
    allErrors: true,
    strictRequired: false,
    allowUnionTypes: false
  });

  addFormats(ajv);
  ajvErrors(ajv);

  return ajv;
}

async function loadJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, "utf8"));
}

async function existsDir(dirPath) {
  try {
    return (await fs.stat(dirPath)).isDirectory();
  } catch {
    return false;
  }
}

async function preloadAllSchemas(ajv, rootDir) {
  async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
        continue;
      }

      if (!entry.isFile() || !entry.name.endsWith(".schema.json")) {
        continue;
      }

      const schema = await loadJson(fullPath);
      const key = schema.$id || fullPath;

      try {
        ajv.addSchema(schema, key);
      } catch (err) {
        if (!String(err.message || "").includes("already exists")) {
          throw err;
        }
      }
    }
  }

  await walk(rootDir);
}

function formatAjvErrors(validateFn) {
  return validateFn.errors?.map((error) => {
    const location = error.instancePath || "/";
    return `${location} ${error.message}`;
  }).join("; ") ?? "unknown validation error";
}

async function validateDir(dirPath, expectedValid, validateRequest, validateReceipt) {
  if (!(await existsDir(dirPath))) {
    return { checked: 0, requests: 0, receipts: 0 };
  }

  const files = (await fs.readdir(dirPath))
    .filter((file) => file.endsWith(".json"))
    .sort((left, right) => left.localeCompare(right));

  const totals = { checked: 0, requests: 0, receipts: 0 };

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const data = await loadJson(fullPath);
    const isRequest = file.includes(".request.");
    const validateFn = isRequest ? validateRequest : validateReceipt;
    const ok = validateFn(data);

    totals.checked += 1;
    if (isRequest) {
      totals.requests += 1;
    } else {
      totals.receipts += 1;
    }

    if (expectedValid && !ok) {
      throw new Error(`Expected VALID but got ${formatAjvErrors(validateFn)} for ${fullPath}`);
    }

    if (!expectedValid && ok) {
      throw new Error(`Expected INVALID but schema accepted ${fullPath}`);
    }
  }

  return totals;
}

async function validateExamplesForVerb(config, verb, ajv) {
  const validDir = config.validDir(verb);
  const invalidDir = config.invalidDir(verb);
  const hasValidDir = await existsDir(validDir);
  const hasInvalidDir = await existsDir(invalidDir);

  if (!hasValidDir && !hasInvalidDir) {
    console.log(`ℹ️  No ${config.version} examples found for verb: ${verb}, skipping.`);
    return { valid: { checked: 0, requests: 0, receipts: 0 }, invalid: { checked: 0, requests: 0, receipts: 0 } };
  }

  const validateRequest = ajv.getSchema(config.requestSchemaId(verb));
  const validateReceipt = ajv.getSchema(config.receiptSchemaId(verb));

  if (!validateRequest) {
    throw new Error(`No compiled schema found in Ajv for request id: ${config.requestSchemaId(verb)}`);
  }

  if (!validateReceipt) {
    throw new Error(`No compiled schema found in Ajv for receipt id: ${config.receiptSchemaId(verb)}`);
  }

  const valid = await validateDir(validDir, true, validateRequest, validateReceipt);
  const invalid = await validateDir(invalidDir, false, validateRequest, validateReceipt);

  console.log(
    `✅ ${config.version} ${verb}: ${valid.checked} valid (${valid.requests} requests, ${valid.receipts} receipts), ` +
      `${invalid.checked} invalid (${invalid.requests} requests, ${invalid.receipts} receipts)`
  );

  return { valid, invalid };
}

async function main() {
  try {
    const ajv = createAjv();

    for (const config of EXAMPLE_CONFIGS) {
      await preloadAllSchemas(ajv, config.schemasRoot);
    }

    const summary = new Map();

    for (const config of EXAMPLE_CONFIGS) {
      summary.set(config.version, {
        valid: { checked: 0, requests: 0, receipts: 0 },
        invalid: { checked: 0, requests: 0, receipts: 0 }
      });

      for (const verb of VERBS) {
        const result = await validateExamplesForVerb(config, verb, ajv);
        const totals = summary.get(config.version);

        for (const bucket of ["valid", "invalid"]) {
          totals[bucket].checked += result[bucket].checked;
          totals[bucket].requests += result[bucket].requests;
          totals[bucket].receipts += result[bucket].receipts;
        }
      }
    }

    console.log("\n📊 Example validation summary");
    for (const [version, totals] of summary.entries()) {
      console.log(
        `   ${version}: ${totals.valid.checked} valid (${totals.valid.requests} requests, ${totals.valid.receipts} receipts), ` +
          `${totals.invalid.checked} invalid (${totals.invalid.requests} requests, ${totals.invalid.receipts} receipts)`
      );
    }

    console.log("\n✅ All example validations completed.");
  } catch (err) {
    console.error("❌ validate-examples.mjs failed:");
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
  }
}

main();
