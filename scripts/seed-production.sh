#!/usr/bin/env bash
set -euo pipefail

# Run a Turndown seed script against the production Coolify app/database.
# Usage: scripts/seed-production.sh scripts/seed-may30.ts capri destinations
#        scripts/seed-production.sh scripts/seed-jun20.ts rosewood brands
#
# This intentionally runs inside the production app container so DATABASE_URL
# is the same runtime value the site uses. It does not print secrets.

SEED_FILE="${1:-}"
EXPECTED_SLUG="${2:-}"
VERIFY_TABLE="${3:-destinations}"
PROD_HOST="${TURNDOWN_PROD_HOST:-root@195.201.36.254}"
APP_PREFIX="${TURNDOWN_APP_PREFIX:-kw844c4kk0k0skwosocsss8s-}"
DB_CONTAINER="${TURNDOWN_DB_CONTAINER:-turndown-db}"
DB_USER="${TURNDOWN_DB_USER:-turndown}"
DB_NAME="${TURNDOWN_DB_NAME:-turndown}"

if [[ -z "$SEED_FILE" || -z "$EXPECTED_SLUG" ]]; then
  echo "Usage: $0 <seed-file> <expected-slug> [destinations|brands|hotels|articles]" >&2
  exit 2
fi

case "$VERIFY_TABLE" in
  destinations|brands|hotels|articles) ;;
  *) echo "Unsupported verification table: $VERIFY_TABLE" >&2; exit 2 ;;
esac

case "$SEED_FILE" in
  scripts/seed-*.ts) ;;
  *) echo "Seed file must look like scripts/seed-*.ts" >&2; exit 2 ;;
esac

ssh -o BatchMode=yes -o ConnectTimeout=10 "$PROD_HOST" bash -s -- "$SEED_FILE" "$EXPECTED_SLUG" "$VERIFY_TABLE" "$APP_PREFIX" "$DB_CONTAINER" "$DB_USER" "$DB_NAME" <<'REMOTE'
set -euo pipefail
seed_file="$1"
expected_slug="$2"
verify_table="$3"
app_prefix="$4"
db_container="$5"
db_user="$6"
db_name="$7"

app_container="$(docker ps --format '{{.Names}}' | grep -E "^${app_prefix}" | head -n 1)"
if [[ -z "$app_container" ]]; then
  echo "Production app container not found for prefix ${app_prefix}" >&2
  exit 1
fi

if ! docker exec "$app_container" sh -lc "test -f \"$seed_file\""; then
  echo "Seed file $seed_file is not present in production app container $app_container." >&2
  echo "The latest commit may not have deployed yet; wait for Coolify deployment, then retry." >&2
  exit 1
fi

echo "Running $seed_file in production app container $app_container..."
docker exec "$app_container" sh -lc "npx tsx \"$seed_file\""

echo "Verifying slug in production database..."
row="$(docker exec "$db_container" psql -U "$db_user" -d "$db_name" -tAc "select slug || chr(9) || name || chr(9) || published from ${verify_table} where slug = '$expected_slug';")"
if [[ -z "$row" ]]; then
  echo "Verification failed: slug $expected_slug not found in production ${verify_table} table." >&2
  exit 1
fi
printf '%s\n' "$row"
REMOTE
