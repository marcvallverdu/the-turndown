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

    def test_publisher_timestamp_milliseconds_and_utc(self):
        for timestamp in ['2026-01-01T00:00:00.616Z', '2026-01-01T02:00:00.616000+02:00']:
            with self.subTest(timestamp=timestamp):
                _, manifest = client.inspect_image(self.file, self.sha, 'https://example.org/source', timestamp)
                self.assertEqual(manifest['retrievedAt'], '2026-01-01T00:00:00.616Z')
        self.assertEqual(self.manifest['retrievedAt'], '2026-01-01T00:00:00.000Z')

    def test_emitted_legacy_receipt_timestamp(self):
        from unittest.mock import patch
        import contextlib
        import subprocess
        import sys
        for timestamp in ['2026-01-01T00:00:00.616000Z', '2026-01-01T02:00:00.616000+02:00']:
            stored = dict(self.manifest, retrievedAt=timestamp)
            def run(command, **kwargs):
                if command[0] == 'ssh':
                    return subprocess.CompletedProcess(command, 0, json.dumps(stored).encode(), b'')
                Path(command[command.index('-D') + 1]).write_text('content-type: image/png\ncache-control: immutable, no-transform\n')
                Path(command[command.index('-o') + 1]).write_bytes(self.data)
                return subprocess.CompletedProcess(command, 0)
            output = io.StringIO()
            with self.subTest(timestamp=timestamp), patch.object(sys, 'argv', ['ingest', str(self.file), '--sha256', self.sha, '--source-url', self.manifest['provenance'], '--retrieved-at', '2026-01-01T00:00:00.616Z']), patch.object(client.subprocess, 'run', side_effect=run), contextlib.redirect_stdout(output):
                client.main()
            self.assertEqual(json.loads(output.getvalue())['retrievedAt'], '2026-01-01T00:00:00.616Z')
            self.assertEqual(stored['retrievedAt'], timestamp)

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
