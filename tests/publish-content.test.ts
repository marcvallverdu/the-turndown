import assert from 'node:assert/strict';
import { blocksIndexing, parsePublisherArgs, runPublisher } from '../scripts/publish-content';

const base = ['publish', 'candidate.json', '--base-url', 'https://theturndown.co'];
assert.deepEqual(parsePublisherArgs(base), {
  command: 'publish',
  files: ['candidate.json'],
  baseUrl: 'https://theturndown.co',
  unchangedPath: '/',
  unchangedMarker: 'The Turndown'
});
assert.throws(() => parsePublisherArgs(['publish', 'candidate.json']), /base-url/i);
assert.throws(() => parsePublisherArgs([...base, '--wat', 'x']), /unknown/i);
assert.throws(() => parsePublisherArgs([...base, '--base-url', 'https://theturndown.co']), /duplicate/i);
assert.throws(() => parsePublisherArgs(['publish', 'candidate.json', '--base-url']), /missing value/i);
assert.throws(() => parsePublisherArgs(['publish', 'candidate.json', '--base-url', 'https://mirror.example.com']), /theturndown\.co/i);
assert.throws(() => parsePublisherArgs([...base, '--unchanged-path', '/\\evil.example/x']), /same-origin|backslash/i);

assert.equal(blocksIndexing('noindex, follow'), true);
assert.equal(blocksIndexing('none'), true);
assert.equal(blocksIndexing('googlebot: noindex'), true);
assert.equal(blocksIndexing('index, follow'), false);

async function main() {
  let databaseConstructed = false;
  await assert.rejects(
    () => runPublisher(
      ['publish', 'missing.json', '--base-url', 'https://theturndown.co'],
      {},
      { createDatabase: () => { databaseConstructed = true; throw new Error('must not construct'); } }
    ),
    /missing\.json|ENOENT/
  );
  assert.equal(databaseConstructed, false, 'invalid input must fail before constructing a database client');
  console.log('publisher CLI tests passed');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
