import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const seedSource = readFileSync(resolve(process.cwd(), 'scripts/seed.ts'), 'utf8');

assert.doesNotMatch(
  seedSource,
  /DELETE\s+FROM\s+newsletter_subscribers/i,
  'The general content seed must preserve newsletter subscribers'
);

console.log('seed safety tests passed');
