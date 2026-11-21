import assert from 'node:assert/strict';
import config from '../next.config';
import { hasRemoteMatch } from 'next/dist/shared/lib/match-remote-pattern';

const patterns = config.images!.remotePatterns!;
const allowed = (url: string) => hasRemoteMatch([], patterns, new URL(url));
assert(allowed('https://theturndown.co/media/c3eccfc41ce30fc9ee059d68c2adbfc9514433f9dacce28802fa7fd3ef4b5949.webp'));
assert(allowed('https://theturndown.co/media/nested/photo.jpg'));
for (const url of [
  'http://theturndown.co/media/photo.webp',
  'https://www.theturndown.co/media/photo.webp',
  'https://other.example/media/photo.webp',
  'https://theturndown.co.evil.example/media/photo.webp',
  'https://theturndown.co:444/media/photo.webp',
  'https://theturndown.co/private/photo.webp',
  'https://theturndown.co/media-other/photo.webp',
  'https://theturndown.co/media/../private/photo.webp',
  'https://theturndown.co/media/photo.webp?redirect=https://other.example',
]) assert.equal(allowed(url), false, url);
assert(allowed('https://theturndown.co/images/hotels/existing.webp'));
assert(allowed('https://images.unsplash.com/existing.jpg'));
console.log('Image allowlist: intended media allowed, unrelated URLs denied, existing sources preserved');
