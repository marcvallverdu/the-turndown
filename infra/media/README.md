# Durable media operations (The Turndown)

## Scope and ownership

`/media/<64-lowercase-sha256>.(jpg|png|webp)` on `https://theturndown.co` is served by an independent, read-only `turndown-media` Nginx container. Host persistence is `/data/turndown-media/public/media`. It survives both application deployments and media-container recreation. No application image change, database credential, publication capability, public upload endpoint, proxy restart or other service edit is required for each image.

Deployment files are `infra/media/compose.yaml`, `nginx.conf`, and `ingest.py`. Production copy: `/data/turndown-media/`. Private first-acquisition manifests: `/data/turndown-media/manifests/<sha>.json` (not publicly routed). Docker restart policy is `unless-stopped`; Compose is deliberately app-owned outside Coolify's generated application deployment. It reuses an already installed, digest-pinned Nginx 1.30.7 image with an overridden entrypoint; no PHP/application entrypoint runs and no app secrets are injected. Do not prune its image while it is referenced by the container. Host durability is **not** an off-host backup: retain acquired bytes and manifests in the private editorial evidence archive too.

## Cron / publisher integration

1. Consult retained research before downloading an image again. Confirm editorial usage authority, exact property identity and visible subject. The ingest CLI does not grant licensing rights or fact-check pictures.
2. Acquire JPEG/PNG/WebP bytes into the private run evidence directory using an approved retrieval tool. Record **actual acquisition time**, exact source URL and SHA-256. Never publish a remote hotlink. Do not invent an acquisition time for old retained bytes; use their retained receipt or acquire them afresh.
3. Run the installed CLI with an interpreter having Pillow, SSH BatchMode access and curl. This CLI accepts **one existing local file**; it never downloads arbitrary URLs and never writes content/database records:

```sh
/usr/bin/python3 /Users/marcvallverdu/.hermes/scripts/turndown-ingest-media.py \
  /absolute/private/run/photo.webp \
  --sha256 '<exact 64 lowercase hex from source receipt>' \
  --source-url 'https://official.example/exact-source-image.webp' \
  --retrieved-at '2026-11-21T09:00:00Z' > /absolute/private/run/photo.media.json
```

CLI source is `scripts/ingest-media.py`; installation is a byte-identical copy, not a symlink to a disposable worktree. Python 3 + Pillow are prerequisites; run `/usr/bin/python3 -c 'from PIL import Image'` as a cron preflight. SSH authority remains the existing operator SSH identity; no bearer token or publication DB credentials are added.

4. Proceed only on exit 0 and a valid JSON object. The stdout object is the **exact ContentMedia** entry: `url`, `checksum` (`sha256:<hex>`), `provenance`, `contentType`, `width`, `height`, `byteLength`, `retrievedAt`. Copy it without adding fields to `envelope.media`; use its `url` in the article's image field. CLI checks public TLS, exact readback SHA/bytes, MIME and immutable/no-transform headers before emitting success. If verification fails, the object may be retained privately/on disk; **do not publish**, diagnose and replay the same command. Never silently substitute a remote URL.
5. Feed the independently reviewed article envelope to the existing `~/.hermes/scripts/turndown-publish-content.py`. Its validation/HMAC/database boundaries remain unchanged. Image ingestion alone is not article publication authority. This infrastructure task does not publish the Paris comparison.

## Bounds and replay

One still image per invocation; at most 20,000,000 bytes, 16,000 pixels per dimension and 64 million total pixels. JPEG, PNG and WebP only; decoded and verified locally, magic and source hash rechecked remotely. SVG, animation, malformed images, wrong hashes, future/naive timestamps and credential-bearing provenance are rejected. Aggregate storage cap: 1 GiB / 10,000 objects. A host-side lock serializes quota checks/writes. Atomic fsynced writes and private manifests precede public availability. Replaying identical bytes is idempotent and retains first acquisition provenance; existing byte corruption fails closed. No overwriting/replacing a valid public object to fix editorial content: ingest new bytes to a new hash URL.

## Deploy / verify / rollback

Before deploying, save the serving container IDs/image/mounts. Copy only this service's three infra files to `/data/turndown-media/`; mkdir public/media (0755) and manifests (0700); chmod ingest.py 0600. Validate `docker compose config --quiet` and `docker compose run --rm --no-deps --entrypoint nginx media -c /etc/nginx/turndown.conf -t` from that directory. Start with `docker compose up -d --no-build --pull never`. It attaches to the existing external `coolify` network and adds only its own host+path router (priority 100), not a host port or a shared-proxy config edit.

Verify via a retained canary: ingest, GET URL over normal public HTTPS, compare full SHA-256 and byte length to source, check MIME and `Cache-Control: public, max-age=31536000, immutable, no-transform`, recreate **only** the media container, then GET/compare again. Inspect read-only host mount, restart policy and image identity. Check arbitrary filenames, directory indexes, missing hashes, non-GET/HEAD methods and private manifest paths are not exposed. Verify normal homepage/old asset remain reachable and app/DB IDs/mounts stay unchanged.

Rollback route/service: `cd /data/turndown-media && docker compose down` (never `down -v`, never delete `/data/turndown-media`). This removes only this service/router. The application and DB remain untouched, private manifests and source bytes stay available. **Once any article references /media URLs, taking this service down breaks those images**: prefer restoring the prior infra files/image and `docker compose up -d --no-build --pull never`. Restore the same host directory if the host is replaced. Retain the public media service through any application-code rollback. No article/DB rollback is needed for an infrastructure-only canary.

Regression: `python3 -m unittest discover -s tests -p test_media_ingest.py -v`.
