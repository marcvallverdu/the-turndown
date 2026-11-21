import copy
import datetime
import hashlib
import importlib.util
import io
import json
from pathlib import Path
import tempfile
import unittest
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]

def load(name, file):
    spec = importlib.util.spec_from_file_location(name, file)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module

client = load('client', ROOT / 'scripts/ingest-media.py')
writer = load('writer', ROOT / 'infra/media/ingest.py')

class MediaTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name)
        self.file = self.root / 'sample.png'
        Image.new('RGB', (3, 2), color=(24, 42, 64)).save(self.file)
        self.sha = hashlib.sha256(self.file.read_bytes()).hexdigest()
        self.data, self.manifest = client.inspect_image(self.file, self.sha, 'https://example.org/official.png', '2026-01-01T00:00:00Z')

    def tearDown(self):
        self.tmp.cleanup()

    def ingest(self, manifest=None, data=None):
        return writer.ingest(io.BytesIO(json.dumps(manifest or self.manifest).encode() + b'\n' + (self.data if data is None else data)), self.root / 'storage')

    def test_ingest_and_idempotent_provenance(self):
        first = self.ingest()
        replay = dict(self.manifest, provenance='https://example.org/replay.png')
        self.assertEqual(first, self.ingest(replay))
        self.assertEqual(self.data, (self.root / 'storage/public/media' / (self.sha + '.png')).read_bytes())

    def test_source_hash_mismatch(self):
        with self.assertRaises(ValueError):
            client.inspect_image(self.file, '0' * 64, 'https://example.org/source', '2026-01-01T00:00:00Z')

    def test_reject_non_image_and_fake_mime(self):
        self.file.write_bytes(b'not an image')
        with self.assertRaises(Exception):
            client.inspect_image(self.file, hashlib.sha256(self.file.read_bytes()).hexdigest(), 'https://example.org/source', '2026-01-01T00:00:00Z')
        m = dict(self.manifest, contentType='image/jpeg', url=self.manifest['url'].replace('.png', '.jpg'))
        with self.assertRaises(ValueError):
            self.ingest(m)

    def test_bounds_and_traversal(self):
        for key, value in [('checksum', '../bad'), ('url', 'https://theturndown.co/media/../secret'), ('byteLength', 20000001), ('width', 16001), ('retrievedAt', '2999-01-01T00:00:00Z'), ('provenance', 'https://user:password@example.org/source')]:
            with self.subTest(key=key), self.assertRaises((ValueError, KeyError)):
                self.ingest(dict(self.manifest, **{key: value}))

    def test_writer_hash_and_corruption(self):
        with self.assertRaises(ValueError):
            self.ingest(data=b'changed bytes')
        self.ingest()
        target = self.root / 'storage/public/media' / (self.sha + '.png')
        target.write_bytes(b'corrupted')
        with self.assertRaises(ValueError):
            self.ingest()

    def test_quota(self):
        previous = writer.MAX_TOTAL
        writer.MAX_TOTAL = 1
        try:
            with self.assertRaises(ValueError):
                self.ingest()
        finally:
            writer.MAX_TOTAL = previous

if __name__ == '__main__':
    unittest.main()
