#!/usr/bin/env node
/**
 * ajv-run.mjs
 *
 * Convenience entrypoint for schema validation.
 * Currently just delegates to validate-all.mjs so that:
 *
 *   npm run validate:schema
 *
 * is equivalent to:
 *
 *   npm run validate:schemas
 */

import './validate-all.mjs';
