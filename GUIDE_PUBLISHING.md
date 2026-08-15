# Database-first content publishing

Routine hotel reviews, brand profiles, destination guides, and articles publish through the immutable PostgreSQL content authority. Once this release and migration are installed, a conforming content-only change does not require a Git commit, application build, or deployment. Template, route, schema, metadata-policy, and application behavior changes still use the normal reviewed code-release path.

## Authority boundary

- `DATABASE_URL` belongs to `turndown_app`. It inherits active content reads from `turndown_content_runtime` and retains ordinary read/write access only for `newsletter_subscribers` and `newsletter_sends`.
- `CONTENT_PUBLISHER_DATABASE_URL` belongs to `turndown_content_publisher_login`. It has no table access and may only assume the execute-only `turndown_content_publisher` capability.
- `CONTENT_VALIDATION_HMAC_KEY` is a separate 32-byte lowercase-hex validator capability. The publisher database credential cannot derive it or read `content_validation_keys`.
- Migration/role provisioning is a separate owner operation. Routine publishing must never execute DDL, alter roles, or write legacy/content tables directly.

Apply [the migration](drizzle/0001_immutable_content_publication.sql), then provision roles from an owner `psql` session:

```bash
psql "$OWNER_DATABASE_URL" \
  --set=app_password="$APP_PASSWORD" \
  --set=publisher_password="$PUBLISHER_PASSWORD" \
  --set=validation_hmac_key="$CONTENT_VALIDATION_HMAC_KEY" \
  --file scripts/provision-content-publisher-roles.sql
```

The migration is replay-safe. It creates an immutable version for every existing hotel, brand, destination, and article—including unpublished rows—while only published rows receive active pointers. Each bootstrap version retains the exact legacy `to_jsonb(row)` snapshot and original timestamps. Replaying the provisioner removes poisoned direct/PUBLIC grants, protected ownership/default ACLs, and unapproved memberships across every non-system schema before reinstalling the narrow authority graph.

## Candidate envelope

The CLI accepts strict JSON only. Unknown and missing keys fail the entire batch. The common envelope is:

```json
{
  "schemaVersion": 1,
  "contentType": "article",
  "slug": "a-new-opening",
  "payload": {
    "title": "A New Opening",
    "subtitle": "What travelers should know.",
    "category": "new-openings",
    "heroImage": null,
    "contentMd": "## First look\n\nRead [the comparison](/versus/example).",
    "hotelsMentioned": [],
    "featured": false,
    "createdAt": "2026-08-15T10:00:00.000Z",
    "updatedAt": "2026-08-15T10:00:00.000Z"
  },
  "evidence": {
    "sources": [{ "id": "official", "url": "https://example.com/source", "checkedAt": "2026-08-15T10:00:00.000Z" }],
    "claims": [{ "claim": "Material factual claim", "sourceIds": ["official"] }],
    "hardGates": {
      "truth": true,
      "userValue": true,
      "informationGain": true,
      "internalLinks": true,
      "editorialSameness": true
    },
    "revisionCount": 0
  },
  "media": [],
  "actor": "weekly-content-loop",
  "runId": "unique-run-id"
}
```

Article `category` is exactly one of `the-details`, `versus`, or `new-openings`, which fixes its route. Hotel, brand, destination, and article payload key sets are defined and bounded in [content-publication.ts](lib/content-publication.ts). Every factual claim must reference a declared HTTPS source. Every referenced `heroImage` and hotel gallery image must bind exactly one media record with immutable URL, SHA-256, provenance, content type, dimensions, byte length, and retrieval timestamp.

Before constructing a database client, the CLI parses every file, validates the complete batch, derives the canonical PostgreSQL-compatible JSON checksum and UUID, renders Markdown through the same marked GFM+breaks configuration as production, normalizes relative links against the canonical content route, checks every internal link, and verifies media. Media retrieval allows only public DNS answers, pins the vetted address for TLS, refuses redirects/non-443 ports, limits time and bytes, and verifies response type, bytes, checksum, and dimensions.

## Publish and verify

```bash
CONTENT_PUBLISHER_DATABASE_URL='postgresql://…' \
CONTENT_VALIDATION_HMAC_KEY='<64 lowercase hex>' \
npm run publish-content -- publish ./candidate.json \
  --base-url https://theturndown.co \
  --unchanged-path / \
  --unchanged-marker 'The Turndown'
```

Activation is fenced until it receives one terminal verification outcome. The command verifies the changed detail page, its appropriate type/category index, sitemap membership, exact canonical, title/description metadata, JSON-LD, X-Robots-Tag and crawler-specific indexability, changed body markers, rendered internal links, and a semantic marker on one unchanged route. Cache and sitemap reads use the same active-version join and have a 60-second bound.

Any verification failure atomically records `verification_failed`, restores the exact predecessor active pointer and legacy row, records rollback, and then verifies the restored public state. A failed first publication must be 404 and absent from its index and sitemap before the command exits non-zero. A later run first recovers any unresolved activation; stale settlement and supersession are denied.

## Historical activation

Immutable versions are never updated or deleted. Reactivate or explicitly roll back to a known version:

```bash
npm run publish-content -- reactivate article a-new-opening <version-uuid> \
  --actor operator --run-id incident-123 --base-url https://theturndown.co

npm run publish-content -- rollback article a-new-opening <version-uuid> \
  --actor operator --run-id rollback-123 --base-url https://theturndown.co
```

Both commands perform the same mandatory public verification and automatic restoration behavior as a new publication.

## Regression gates

```bash
npm run test:content-publication
npm run test:content-publisher
npm run test:content-postgres
npx tsc --noEmit
npm run build
```

The PostgreSQL test uses `TURNDOWN_TEST_POSTGRES_CONTAINER` when supplied, otherwise starts a disposable container only if a local `postgres:16-alpine` image exists. It honestly reports a skip when Docker or the image is unavailable. It executes a populated migration twice and exercises hostile temp shadowing, forged proof and altered reuse denial, pending recovery/supersession, duplicate/stale terminal settlement, poisoned another-schema/PUBLIC/default-ACL/ownership cleanup, protected-secret denial, application content-write denial, and newsletter read/write success.
