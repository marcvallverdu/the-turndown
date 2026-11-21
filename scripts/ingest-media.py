#!/usr/bin/env python3
"""Validate a retained image, ingest over SSH, verify exact public bytes, emit ContentMedia JSON.
Requires Pillow. No downloads, transforms, article writes, DB or publication credentials.
"""
import argparse
import datetime
import hashlib
import io
import json
from pathlib import Path
import re
import subprocess
import sys
import tempfile
import warnings
from urllib.parse import urlsplit
from PIL import Image

MAX_BYTES = 20_000_000
FORMATS = {'JPEG': ('image/jpeg', 'jpg'), 'PNG': ('image/png', 'png'), 'WEBP': ('image/webp', 'webp')}


def inspect_image(path, expected_hash, source_url, retrieved_at):
    if not re.fullmatch('[a-f0-9]{64}', expected_hash):
        raise ValueError('--sha256 must be exactly 64 lowercase hex characters')
    if path.is_symlink() or not path.is_file() or not 0 < path.stat().st_size <= MAX_BYTES:
        raise ValueError('expected regular image file, 1..20,000,000 bytes')
    data = path.read_bytes()
    if len(data) > MAX_BYTES or hashlib.sha256(data).hexdigest() != expected_hash:
        raise ValueError('retained source hash mismatch')
    source = urlsplit(source_url)
    if source.scheme != 'https' or not source.hostname or source.username or source.password or len(source_url) > 2000:
        raise ValueError('expected bounded HTTPS source provenance without credentials')
    timestamp = datetime.datetime.fromisoformat(retrieved_at.replace('Z', '+00:00'))
    if not timestamp.tzinfo or timestamp > datetime.datetime.now(datetime.timezone.utc):
        raise ValueError('expected actual timezone-aware retrieval timestamp, not future')
    with warnings.catch_warnings():
        warnings.simplefilter('error', Image.DecompressionBombWarning)
        with Image.open(io.BytesIO(data)) as image:
            content_type, extension = FORMATS[image.format]
            width, height = image.size
            if not (0 < width <= 16000 and 0 < height <= 16000 and width * height <= 64000000):
                raise ValueError('image exceeds dimensions/pixel bounds')
            if getattr(image, 'n_frames', 1) != 1:
                raise ValueError('animated images are not accepted')
            image.verify()
        with Image.open(io.BytesIO(data)) as image:
            image.load()
    return data, {'url': f'https://theturndown.co/media/{expected_hash}.{extension}',
                  'checksum': f'sha256:{expected_hash}', 'provenance': source_url,
                  'contentType': content_type, 'width': width, 'height': height,
                  'byteLength': len(data), 'retrievedAt': timestamp.isoformat().replace('+00:00', 'Z')}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('file', type=Path)
    parser.add_argument('--sha256', required=True)
    parser.add_argument('--source-url', required=True)
    parser.add_argument('--retrieved-at', required=True)
    args = parser.parse_args()
    data, manifest = inspect_image(args.file.expanduser(), args.sha256, args.source_url, args.retrieved_at)
    result = subprocess.run(['ssh', '-o', 'BatchMode=yes', '-o', 'ConnectTimeout=15',
                             'root@195.201.36.254', 'python3 /data/turndown-media/ingest.py'],
                            input=json.dumps(manifest).encode() + b'\n' + data,
                            capture_output=True, timeout=90)
    if result.returncode:
        raise RuntimeError(result.stderr.decode(errors='replace').strip())
    stored = json.loads(result.stdout)
    for key in ('url', 'checksum', 'contentType', 'width', 'height', 'byteLength'):
        if stored[key] != manifest[key]:
            raise ValueError('remote manifest mismatch: ' + key)
    # Curl uses normal TLS validation, no redirect, no compression and bounded download.
    scratch = Path.home() / '.hermes/cache/scratch'
    scratch.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix='turndown-media-', dir=scratch) as directory:
        headers = Path(directory) / 'headers'
        body = Path(directory) / 'body'
        subprocess.run(['curl', '--fail', '--silent', '--show-error', '--max-time', '45',
                        '--max-filesize', str(MAX_BYTES), '--proto', '=https',
                        '-H', 'Accept-Encoding: identity', '-D', str(headers), '-o', str(body), stored['url']],
                       check=True, timeout=50)
        response = body.read_bytes()
        raw_headers = headers.read_text().lower()
    if len(response) != stored['byteLength'] or hashlib.sha256(response).hexdigest() != args.sha256:
        raise ValueError('PUBLIC BYTES MISMATCH: stored object retained, do not publish')
    if f"content-type: {stored['contentType']}" not in raw_headers or 'no-transform' not in raw_headers or 'immutable' not in raw_headers:
        raise ValueError('PUBLIC HEADERS MISMATCH: do not publish')
    print(json.dumps(stored, indent=2))


if __name__ == '__main__':
    try:
        main()
    except Exception as error:
        print(f'media ingest failed: {error}', file=sys.stderr)
        sys.exit(1)
