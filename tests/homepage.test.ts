import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const homepage = readFileSync(join(process.cwd(), 'app/page.tsx'), 'utf8');

const introCopyIndex = homepage.indexOf('An independent guide to hotels worth planning around.');
const signupTitleIndex = homepage.indexOf('Get the next check-in');
const featuredIndex = homepage.indexOf('Featured review');

assert.notEqual(introCopyIndex, -1, 'homepage should explain what The Turndown is above the featured review');
assert.notEqual(signupTitleIndex, -1, 'homepage should include a newsletter signup in the top hero');
assert.notEqual(featuredIndex, -1, 'homepage should still include the featured review');
assert.ok(
  introCopyIndex < featuredIndex,
  'site-intro copy should appear before the featured review in the homepage source order'
);
assert.ok(
  signupTitleIndex < featuredIndex,
  'newsletter signup should appear before the featured review in the homepage source order'
);

console.log('homepage marketing tests passed');
