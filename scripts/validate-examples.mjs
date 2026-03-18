import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
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
    examplesRoot: path.join(ROOT, "examples", "v1.0.0"),
    requestSchemaId: (verb) => `https://commandlayer.org/schemas/v1.0.0/commons/${verb}/requests/${verb}.request.schema.json`,
    receiptSchemaId: (verb) => `https://commandlayer.org/schemas/v1.0.0/commons/${verb}/receipts/${verb}.receipt.schema.json`,
    validDir: (verb) => path.join(ROOT, "examples", "v1.0.0", "commons", verb, "valid"),
    invalidDir: (verb) => path.join(ROOT, "examples", "v1.0.0", "commons", verb, "invalid")
  },
  {
    version: "v1.1.0",
    schemasRoot: path.join(ROOT, "schemas", "v1.1.0"),
    examplesRoot: path.join(ROOT, "examples", "v1.1.0"),
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
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function existsDir(dirPath) {
  try {
    const stat = await fs.stat(dirPath);
    return stat.isDirectory();
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
      } else if (entry.isFile() && entry.name.endsWith(".schema.json")) {
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
  }

  await walk(rootDir);
}

async function validateDir(dirPath, expectedValid, validateRequest, validateReceipt) {
  if (!(await existsDir(dirPath))) return;

  const files = await fs.readdir(dirPath);

  for (const file of files) {
    if (!file.endsWith(".json")) continue;

    const fullPath = path.join(dirPath, file);
    const data = await loadJson(fullPath);
    const isRequest = file.includes("request");
    const validateFn = isRequest ? validateRequest : validateReceipt;
    const ok = validateFn(data);

    if (expectedValid && !ok) {
      console.error(`❌ Expected VALID but got errors for ${fullPath}:`, validateFn.errors);
      throw new Error(`Example should be valid but failed: ${fullPath}`);
    }

    if (!expectedValid && ok) {
      console.error(`❌ Expected INVALID but schema accepted ${fullPath}`);
      throw new Error(`Example should be invalid but passed: ${fullPath}`);
    }
  }
}

async function validateExamplesForVerb(config, verb, ajv) {
  const validDir = config.validDir(verb);
  const invalidDir = config.invalidDir(verb);
  const hasValidDir = await existsDir(validDir);
  const hasInvalidDir = await existsDir(invalidDir);

  if (!hasValidDir && !hasInvalidDir) {
    console.log(`ℹ️  No ${config.version} examples found for verb: ${verb}, skipping.`);
    return;
  }

  console.log(`\n🔍 Validating ${config.version} examples for verb: ${verb}`);

  const validateRequest = ajv.getSchema(config.requestSchemaId(verb));
  const validateReceipt = ajv.getSchema(config.receiptSchemaId(verb));

  if (!validateRequest) {
    throw new Error(`No compiled schema found in Ajv for request id: ${config.requestSchemaId(verb)}`);
  }
  if (!validateReceipt) {
    throw new Error(`No compiled schema found in Ajv for receipt id: ${config.receiptSchemaId(verb)}`);
  }

  await validateDir(validDir, true, validateRequest, validateReceipt);
  await validateDir(invalidDir, false, validateRequest, validateReceipt);

  console.log(`✅ ${config.version} examples OK for verb: ${verb}`);
}

async function main() {
  try {
    const ajv = createAjv();

    for (const config of EXAMPLE_CONFIGS) {
      await preloadAllSchemas(ajv, config.schemasRoot);
    }

    for (const config of EXAMPLE_CONFIGS) {
      for (const verb of VERBS) {
        await validateExamplesForVerb(config, verb, ajv);
      }
    }

    console.log("\n✅ All example validations completed.");
  } catch (err) {
    console.error("❌ Unexpected error in validate-examples.mjs:");
    console.error(err);
    process.exit(1);
  }
}

main();
