#!/usr/bin/env python3
"""SSH-only content-addressed media writer; never an HTTP upload endpoint."""
import datetime
import fcntl
import hashlib
import json
import os
from pathlib import Path
import re
import sys
import tempfile
from urllib.parse import urlsplit

ROOT = Path('/data/turndown-media')
MAX_BYTES = 20_000_000
MAX_TOTAL = 1024 * 1024 * 1024
MAX_FILES = 10000
EXTENSIONS = {'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp'}


def ingest(stream, root=ROOT):
    header = stream.readline(8193)
    if len(header) > 8192 or not header.endswith(b'\n'):
        raise ValueError('invalid bounded header')
    m = json.loads(header)
    if set(m) != {'url', 'checksum', 'provenance', 'contentType', 'width', 'height', 'byteLength', 'retrievedAt'}:
        raise ValueError('invalid manifest keys')
    checksum = m['checksum']
    if not isinstance(checksum, str) or not re.fullmatch('sha256:[a-f0-9]{64}', checksum):
        raise ValueError('invalid checksum')
    digest = checksum[7:]
    ext = EXTENSIONS[m['contentType']]
    if m['url'] != f'https://theturndown.co/media/{digest}.{ext}':
        raise ValueError('invalid public URL')
    source = urlsplit(m['provenance'])
    if source.scheme != 'https' or not source.hostname or source.username or source.password or len(m['provenance']) > 4096:
        raise ValueError('invalid provenance')
    for k in ('width', 'height'):
        if type(m[k]) is not int or not 1 <= m[k] <= 16000:
            raise ValueError('invalid dimensions')
    if m['width'] * m['height'] > 64000000:
        raise ValueError('too many pixels')
    if type(m['byteLength']) is not int or not 0 < m['byteLength'] <= MAX_BYTES:
        raise ValueError('invalid byteLength')
    retrieved = datetime.datetime.fromisoformat(m['retrievedAt'].replace('Z', '+00:00'))
    if not retrieved.tzinfo or retrieved > datetime.datetime.now(datetime.timezone.utc):
        raise ValueError('invalid retrieval timestamp')
    data = stream.read(MAX_BYTES + 1)
    if len(data) != m['byteLength'] or hashlib.sha256(data).hexdigest() != digest:
        raise ValueError('source byte/hash mismatch')
    signatures = {'jpg': data.startswith(b'\xff\xd8\xff'), 'png': data.startswith(b'\x89PNG\r\n\x1a\n'), 'webp': data[:4] == b'RIFF' and data[8:12] == b'WEBP'}
    if not signatures[ext]:
        raise ValueError('MIME magic mismatch')
    public = root / 'public' / 'media'
    private = root / 'manifests'
    public.mkdir(parents=True, exist_ok=True)
    private.mkdir(parents=True, exist_ok=True, mode=0o700)
    target = public / f'{digest}.{ext}'
    receipt = private / f'{digest}.json'
    with (root / '.ingest.lock').open('a') as lock:
        fcntl.flock(lock, fcntl.LOCK_EX)
        files = list(public.iterdir())
        if not target.exists() and (len(files) >= MAX_FILES or sum(p.stat().st_size for p in files) + len(data) > MAX_TOTAL):
            raise ValueError('media quota reached; manual capacity review required')
        if target.exists():
            if target.is_symlink() or hashlib.sha256(target.read_bytes()).hexdigest() != digest:
                raise ValueError('existing immutable object corrupted')
            old = json.loads(receipt.read_text())
            if old['contentType'] != m['contentType'] or old['width'] != m['width'] or old['height'] != m['height']:
                raise ValueError('existing metadata conflict')
            return old  # Preserve first acquisition provenance on idempotent replay.
        for destination, payload, mode in ((receipt, json.dumps(m, indent=2).encode() + b'\n', 0o600), (target, data, 0o644)):
            fd, temporary = tempfile.mkstemp(prefix='.pending-', dir=destination.parent)
            try:
                with os.fdopen(fd, 'wb') as out:
                    out.write(payload)
                    out.flush()
                    os.fsync(out.fileno())
                    os.fchmod(out.fileno(), mode)
                os.replace(temporary, destination)
                directory = os.open(destination.parent, os.O_RDONLY)
                try:
                    os.fsync(directory)
                finally:
                    os.close(directory)
            finally:
                if os.path.exists(temporary):
                    os.unlink(temporary)
        return m


if __name__ == '__main__':
    try:
        print(json.dumps(ingest(sys.stdin.buffer)))
    except Exception as error:
        print(f'ingest rejected: {error}', file=sys.stderr)
        sys.exit(1)
