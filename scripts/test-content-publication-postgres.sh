#!/usr/bin/env bash
set -euo pipefail

repo="$(cd "$(dirname "$0")/.." && pwd)"
db="turndown_content_authority_${$}"
container="${TURNDOWN_TEST_POSTGRES_CONTAINER:-}"
owned_container=""
mode="docker"
pg_tmp=""
pg_socket=""
pg_port=""
key="cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
app_password="local_app_authority_test"
publisher_password="local_publisher_authority_test"

if [[ -z "$container" ]]; then
  if command -v docker >/dev/null 2>&1 && docker info >/dev/null 2>&1 && docker image inspect postgres:16-alpine >/dev/null 2>&1; then
    container="turndown-content-authority-${$}"
    docker run --rm -d --name "$container" -e POSTGRES_PASSWORD=postgres postgres:16-alpine >/dev/null
    owned_container="$container"
    for _ in $(seq 1 30); do docker exec "$container" pg_isready -U postgres >/dev/null 2>&1 && break; sleep 1; done
  elif command -v initdb >/dev/null 2>&1 && command -v pg_ctl >/dev/null 2>&1 && command -v psql >/dev/null 2>&1; then
    mode="local"
    pg_tmp="$(mktemp -d /tmp/turndown-pg-regression.XXXXXX)"
    pg_socket="$pg_tmp/socket"
    pg_port="$((55432 + $$ % 1000))"
    mkdir "$pg_socket"
    if ! initdb -D "$pg_tmp/data" -A trust -U postgres >/dev/null 2>&1; then
      case "$pg_tmp" in /tmp/turndown-pg-regression.*) rm -rf "$pg_tmp" ;; esac
      echo "content_publication_postgres_regression=skipped reason=postgres-shared-memory-unavailable"
      exit 0
    fi
    pg_ctl -D "$pg_tmp/data" -o "-k $pg_socket -p $pg_port" -w start >/dev/null
  else
    echo "content_publication_postgres_regression=skipped reason=postgres-runtime-unavailable"
    exit 0
  fi
fi

cleanup() {
  if [[ "$mode" == "local" ]]; then
    dropdb -h "$pg_socket" -p "$pg_port" -U postgres --if-exists "$db" >/dev/null 2>&1 || true
    pg_ctl -D "$pg_tmp/data" -m fast -w stop >/dev/null 2>&1 || true
    case "$pg_tmp" in /tmp/turndown-pg-regression.*) rm -rf "$pg_tmp" ;; esac
  else
    docker exec "$container" dropdb -U postgres --if-exists "$db" >/dev/null 2>&1 || true
    if [[ -n "$owned_container" ]]; then docker stop "$owned_container" >/dev/null 2>&1 || true; fi
  fi
}
trap cleanup EXIT

run_sql() {
  if [[ "$mode" == "local" ]]; then psql -h "$pg_socket" -p "$pg_port" -U postgres -d "$db" -v ON_ERROR_STOP=1 "$@";
  else docker exec "$container" psql -U postgres -d "$db" -v ON_ERROR_STOP=1 "$@"; fi
}
feed_sql() {
  if [[ "$mode" == "local" ]]; then psql -h "$pg_socket" -p "$pg_port" -U postgres -d "$db" -v ON_ERROR_STOP=1;
  else docker exec -i "$container" psql -U postgres -d "$db" -v ON_ERROR_STOP=1; fi
}
provision() {
  { printf '\\set app_password %s\n\\set publisher_password %s\n\\set validation_hmac_key %s\n' "$app_password" "$publisher_password" "$key"; sed -n '1,$p' "$repo/scripts/provision-content-publisher-roles.sql"; } | feed_sql >/dev/null
}

if [[ "$mode" == "local" ]]; then createdb -h "$pg_socket" -p "$pg_port" -U postgres "$db"; else docker exec "$container" createdb -U postgres "$db"; fi
feed_sql < "$repo/lib/schema-fixture.sql" >/dev/null
feed_sql < "$repo/scripts/content-publication-postgres-fixture.sql" >/dev/null
run_sql -q -c "CREATE ROLE turndown_content_runtime LOGIN SUPERUSER; CREATE ROLE turndown_content_publisher LOGIN SUPERUSER; CREATE ROLE poison_member LOGIN; CREATE ROLE poison_downstream LOGIN; CREATE ROLE poison_parent NOLOGIN; GRANT turndown_content_publisher TO poison_member WITH ADMIN OPTION; ALTER ROLE turndown_content_publisher NOSUPERUSER; SET ROLE poison_member; GRANT turndown_content_publisher TO poison_downstream; RESET ROLE; ALTER ROLE turndown_content_publisher SUPERUSER; GRANT poison_parent TO turndown_content_publisher" >/dev/null
feed_sql < "$repo/drizzle/0001_immutable_content_publication.sql" >/dev/null
test "$(run_sql -Atq -c "SELECT count(*) FROM pg_auth_members m JOIN pg_roles p ON p.oid=m.roleid JOIN pg_roles c ON c.oid=m.member WHERE p.rolname IN ('turndown_content_runtime','turndown_content_publisher') OR c.rolname IN ('turndown_content_runtime','turndown_content_publisher')")" = "0"
provision
feed_sql < "$repo/drizzle/0001_immutable_content_publication.sql" >/dev/null

# Every legacy row is immutable-versioned; unpublished rows have no active pointer; timestamps and exact snapshots survive.
test "$(run_sql -Atq -c "SELECT count(*) FROM public.content_items")" = "5"
test "$(run_sql -Atq -c "SELECT count(*) FROM public.content_versions")" = "5"
test "$(run_sql -Atq -c "SELECT count(*) FROM public.content_items WHERE active_version_id IS NOT NULL")" = "3"
test "$(run_sql -Atq -c "SELECT (legacy_snapshot->>'updated_at')::timestamptz='2025-02-01T00:00:00Z'::timestamptz FROM public.content_versions v JOIN public.content_items i ON i.id=v.item_id WHERE i.content_type='hotel' AND i.slug='fixture-hotel'")" = "t"
test "$(run_sql -Atq -c "SELECT legacy_snapshot=(SELECT to_jsonb(h.*) FROM public.hotels h WHERE h.slug='draft-hotel') FROM public.content_versions v JOIN public.content_items i ON i.id=v.item_id WHERE i.content_type='hotel' AND i.slug='draft-hotel'")" = "t"

# Poison another schema, PUBLIC, a direct grant, and a protected role's ownership/default ACL; replay strips all of it.
run_sql -q -c "ALTER ROLE turndown_content_publisher LOGIN SUPERUSER CREATEDB CREATEROLE REPLICATION BYPASSRLS; CREATE SCHEMA poison; CREATE TABLE poison.private_table(id integer); CREATE SEQUENCE poison.private_seq; CREATE FUNCTION poison.private_fn() RETURNS integer LANGUAGE sql AS 'SELECT 1'; GRANT USAGE,CREATE ON SCHEMA poison TO turndown_content_publisher; GRANT SELECT ON poison.private_table TO turndown_content_publisher,PUBLIC; GRANT USAGE ON SEQUENCE poison.private_seq TO turndown_content_publisher,PUBLIC; GRANT EXECUTE ON FUNCTION poison.private_fn() TO turndown_content_publisher,PUBLIC; GRANT SELECT ON public.content_items TO turndown_content_publisher; CREATE TABLE poison.publisher_owned(id integer); ALTER TABLE poison.publisher_owned OWNER TO turndown_content_publisher; ALTER DEFAULT PRIVILEGES FOR ROLE turndown_content_publisher IN SCHEMA poison GRANT SELECT ON TABLES TO PUBLIC" >/dev/null
provision
test "$(run_sql -Atq -c "SELECT NOT rolcanlogin AND NOT rolsuper AND NOT rolcreatedb AND NOT rolcreaterole AND NOT rolreplication AND NOT rolbypassrls FROM pg_roles WHERE rolname='turndown_content_publisher'")" = "t"
test "$(run_sql -Atq -c "SELECT has_table_privilege('turndown_content_publisher','public.content_items','SELECT')")" = "f"
test "$(run_sql -Atq -c "SELECT has_table_privilege('turndown_content_publisher','poison.private_table','SELECT')")" = "f"
test "$(run_sql -Atq -c "SELECT has_sequence_privilege('turndown_content_publisher','poison.private_seq','USAGE')")" = "f"
test "$(run_sql -Atq -c "SELECT has_function_privilege('turndown_content_publisher','poison.private_fn()','EXECUTE')")" = "f"
test "$(run_sql -Atq -c "SELECT has_schema_privilege('turndown_content_publisher','poison','CREATE')")" = "f"
test "$(run_sql -Atq -c "SELECT pg_get_userbyid(relowner)<>'turndown_content_publisher' FROM pg_class WHERE oid='poison.publisher_owned'::regclass")" = "t"

# Publisher execute-only surface, protected key denial, and hostile temp shadow resistance.
test "$(run_sql -Atq -c "SELECT has_function_privilege('turndown_content_publisher','public.activate_content_version(text,text,uuid,text,text,text)','EXECUTE')")" = "t"
test "$(run_sql -Atq -c "SELECT has_function_privilege('turndown_content_publisher_login','public.activate_content_version(text,text,uuid,text,text,text)','EXECUTE')")" = "t"
test "$(run_sql -Atq -c "SELECT has_table_privilege('turndown_app','public.content_items','SELECT') AND NOT has_table_privilege('turndown_app','public.content_items','UPDATE')")" = "t"
test "$(run_sql -Atq -c "SELECT has_table_privilege('turndown_app','public.content_validation_keys','SELECT') OR has_table_privilege('turndown_content_runtime','public.content_validation_keys','SELECT') OR has_table_privilege('turndown_content_publisher','public.content_validation_keys','SELECT')")" = "f"
if run_sql -q -c "SET ROLE turndown_content_publisher; CREATE TEMP TABLE content_items(id uuid,content_type text,slug text,active_version_id uuid)" >/dev/null 2>&1; then
  echo "publisher unexpectedly retained TEMP authority" >&2; exit 1
fi
run_sql -q -c "SET ROLE turndown_content_publisher; SELECT 1 FROM public.read_active_content_payload('hotel','fixture-hotel') WHERE published AND version_id IS NOT NULL" >/dev/null

# A publisher credential without the distinct HMAC capability cannot self-attest.
payload="$(run_sql -Atq -c "SELECT payload::text FROM public.content_versions v JOIN public.content_items i ON i.id=v.item_id WHERE i.content_type='brand' AND i.slug='fixture-brand'")"
version_id="$(run_sql -Atq -c "SELECT active_version_id FROM public.content_items WHERE content_type='brand' AND slug='fixture-brand'")"
checksum="$(run_sql -Atq -c "SELECT payload_checksum FROM public.content_versions WHERE id='$version_id'")"
if run_sql -q -c "SET ROLE turndown_content_publisher; SELECT * FROM public.publish_content_version('brand','fixture-brand','$version_id','$checksum',\$payload\$$payload\$payload\$::jsonb,'{}','[]','attacker','forged','{\"checksum\":\"$checksum\",\"preflight\":{\"checksum\":\"$checksum\",\"renderer\":\"the-turndown-marked-gfm-breaks-sanitized-v1\"},\"validatorProof\":\"0000000000000000000000000000000000000000000000000000000000000000\"}')" >/dev/null 2>&1; then
  echo "forged validator proof unexpectedly succeeded" >&2; exit 1
fi

# Even a correctly signed request cannot reuse an immutable checksum with altered evidence/validation bytes.
run_sql -q -c "DO \$test\$ DECLARE p jsonb; e jsonb:='{\"sources\":[{\"id\":\"x\",\"url\":\"https://example.com/x\",\"checkedAt\":\"2026-08-15T10:00:00.000Z\"}],\"claims\":[{\"claim\":\"x\",\"sourceIds\":[\"x\"]}],\"hardGates\":{\"truth\":true,\"userValue\":true,\"informationGain\":true,\"internalLinks\":true,\"editorialSameness\":true},\"revisionCount\":0}'; m jsonb:='[]'; v jsonb; proof text; BEGIN SELECT payload INTO p FROM public.content_versions WHERE id='$version_id'; v:=jsonb_build_object('valid',true,'validator','turndown-content-envelope-v1','checksum','$checksum','preflight',jsonb_build_object('checksum','$checksum','renderer','the-turndown-marked-gfm-breaks-sanitized-v1')); SELECT encode(hmac(decode(public.content_validation_challenge('brand','fixture-brand','$checksum',p,e,m,v),'hex'),secret,'sha256'),'hex') INTO proof FROM public.content_validation_keys WHERE singleton; v:=v||jsonb_build_object('validatorProof',proof); BEGIN PERFORM public.publish_content_version('brand','fixture-brand','$version_id','$checksum',p,e,m,'authority-test','altered-reuse',v); RAISE EXCEPTION 'altered reuse unexpectedly succeeded'; EXCEPTION WHEN serialization_failure THEN NULL; END; END \$test\$" >/dev/null

# Pending activations fence supersession, recovery settles once, stale and duplicate terminal outcomes are denied.
run_sql -q -c "SET ROLE turndown_content_publisher; SELECT * FROM public.activate_content_version('brand','fixture-brand','$version_id','reactivate','test','pending-1')" >/dev/null
if run_sql -q -c "SET ROLE turndown_content_publisher; SELECT * FROM public.activate_content_version('brand','fixture-brand','$version_id','reactivate','test','pending-2')" >/dev/null 2>&1; then echo "pending activation was superseded" >&2; exit 1; fi
activation_id="$(run_sql -Atq -c "SET ROLE turndown_content_publisher; SELECT activation_event_id FROM public.read_pending_content_activation('brand','fixture-brand')")"
run_sql -q -c "SET ROLE turndown_content_publisher; SELECT public.rollback_failed_content_verification('brand','fixture-brand','$activation_id','recovery')" >/dev/null
test "$(run_sql -Atq -c "SET ROLE turndown_content_publisher; SELECT count(*) FROM public.read_pending_content_activation('brand','fixture-brand')")" = "1"
run_sql -q -c "SET ROLE turndown_content_publisher; SELECT public.rollback_failed_content_verification('brand','fixture-brand','$activation_id','idempotent recovery')" >/dev/null
run_sql -q -c "SET ROLE turndown_content_publisher; SELECT public.record_content_restoration_verification('brand','fixture-brand','$activation_id','{\"publicRestorationVerified\":true}')" >/dev/null
test "$(run_sql -Atq -c "SET ROLE turndown_content_publisher; SELECT count(*) FROM public.read_pending_content_activation('brand','fixture-brand')")" = "0"

run_sql -q -c "SET ROLE turndown_content_publisher; SELECT * FROM public.activate_content_version('brand','fixture-brand','$version_id','reactivate','test','terminal-1')" >/dev/null
terminal_id="$(run_sql -Atq -c "SET ROLE turndown_content_publisher; SELECT activation_event_id FROM public.read_pending_content_activation('brand','fixture-brand')")"
run_sql -q -c "SET ROLE turndown_content_publisher; SELECT public.record_content_verification('brand','fixture-brand','$terminal_id','$version_id','$checksum','{}')" >/dev/null
if run_sql -q -c "SET ROLE turndown_content_publisher; SELECT public.record_content_verification('brand','fixture-brand','$terminal_id','$version_id','$checksum','{}')" >/dev/null 2>&1; then echo "duplicate terminal outcome succeeded" >&2; exit 1; fi
test "$(run_sql -Atq -c "SELECT count(*)=1 FROM public.content_publication_events WHERE activation_event_id='$terminal_id' AND event_type IN ('verified','verification_failed')")" = "t"
test "$(run_sql -Atq -c "SELECT bool_and(event_order IS NOT NULL) AND count(*)=count(DISTINCT event_order) FROM public.content_publication_events")" = "t"

# A crash after restoring a failed first publication retains the failed payload for absence verification and later settlement.
draft_version="$(run_sql -Atq -c "SELECT v.id FROM public.content_versions v JOIN public.content_items i ON i.id=v.item_id WHERE i.content_type='hotel' AND i.slug='draft-hotel'")"
run_sql -q -c "SET ROLE turndown_content_publisher; SELECT * FROM public.activate_content_version('hotel','draft-hotel','$draft_version','reactivate','test','first-publication-crash')" >/dev/null
draft_activation="$(run_sql -Atq -c "SET ROLE turndown_content_publisher; SELECT activation_event_id FROM public.read_pending_content_activation('hotel','draft-hotel')")"
run_sql -q -c "SET ROLE turndown_content_publisher; SELECT public.rollback_failed_content_verification('hotel','draft-hotel','$draft_activation','simulated crash')" >/dev/null
test "$(run_sql -Atq -c "SET ROLE turndown_content_publisher; SELECT payload IS NOT NULL AND version_id='$draft_version'::uuid FROM public.read_pending_content_activation('hotel','draft-hotel')")" = "t"
test "$(run_sql -Atq -c "SELECT active_version_id IS NULL FROM public.content_items WHERE content_type='hotel' AND slug='draft-hotel'")" = "t"
run_sql -q -c "SET ROLE turndown_content_publisher; SELECT public.record_content_restoration_verification('hotel','draft-hotel','$draft_activation','{\"routeAbsent\":true}')" >/dev/null
test "$(run_sql -Atq -c "SET ROLE turndown_content_publisher; SELECT count(*) FROM public.read_pending_content_activation('hotel','draft-hotel')")" = "0"

run_sql -q -c "SET ROLE turndown_content_publisher; SELECT * FROM public.activate_content_version('brand','fixture-brand','$version_id','reactivate','test','stale-a')" >/dev/null
stale_id="$(run_sql -Atq -c "SET ROLE turndown_content_publisher; SELECT activation_event_id FROM public.read_pending_content_activation('brand','fixture-brand')")"
run_sql -q -c "SET ROLE turndown_content_publisher; SELECT public.rollback_failed_content_verification('brand','fixture-brand','$stale_id','superseded')" >/dev/null
run_sql -q -c "SET ROLE turndown_content_publisher; SELECT public.record_content_restoration_verification('brand','fixture-brand','$stale_id','{\"publicRestorationVerified\":true}')" >/dev/null
run_sql -q -c "SET ROLE turndown_content_publisher; SELECT * FROM public.activate_content_version('brand','fixture-brand','$version_id','reactivate','test','stale-b')" >/dev/null
latest_id="$(run_sql -Atq -c "SET ROLE turndown_content_publisher; SELECT activation_event_id FROM public.read_pending_content_activation('brand','fixture-brand')")"
if run_sql -q -c "SET ROLE turndown_content_publisher; SELECT public.record_content_verification('brand','fixture-brand','$stale_id','$version_id','$checksum','{}')" >/dev/null 2>&1; then echo "stale settlement unexpectedly succeeded" >&2; exit 1; fi
run_sql -q -c "SET ROLE turndown_content_publisher; SELECT public.rollback_failed_content_verification('brand','fixture-brand','$latest_id','cleanup')" >/dev/null
run_sql -q -c "SET ROLE turndown_content_publisher; SELECT public.record_content_restoration_verification('brand','fixture-brand','$latest_id','{\"publicRestorationVerified\":true}')" >/dev/null

# App is denied all content writes but retains active reads and ordinary newsletter read/write behavior.
if run_sql -q -c "SET ROLE turndown_app; UPDATE public.content_items SET slug='poisoned' WHERE false" >/dev/null 2>&1; then echo "app content write unexpectedly succeeded" >&2; exit 1; fi
run_sql -q -c "SET ROLE turndown_app; SELECT count(*) FROM public.content_items; INSERT INTO public.newsletter_subscribers(email,confirmed) VALUES('authority-test@example.com',1); UPDATE public.newsletter_subscribers SET confirmed=1 WHERE email='authority-test@example.com'; INSERT INTO public.newsletter_sends(issue_key,article_slug,recipient_count) VALUES('authority-test','fixture-article',1); SELECT count(*) FROM public.newsletter_subscribers; SELECT count(*) FROM public.newsletter_sends" >/dev/null

echo "content_publication_postgres_regression=passed"
