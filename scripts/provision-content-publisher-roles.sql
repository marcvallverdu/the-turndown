\set ON_ERROR_STOP on
-- Required psql variables: app_password, publisher_password, validation_hmac_key.
-- Run as the database owner after drizzle/0001_immutable_content_publication.sql.
BEGIN;

SELECT 1/CASE WHEN :'validation_hmac_key' ~ '^[0-9a-f]{64}$' THEN 1 ELSE 0 END AS validation_key_format_ok;
INSERT INTO public.content_validation_keys(singleton,secret) VALUES(true,decode(:'validation_hmac_key','hex')) ON CONFLICT(singleton) DO NOTHING;
SELECT 1/CASE WHEN EXISTS(SELECT 1 FROM public.content_validation_keys WHERE singleton AND secret=decode(:'validation_hmac_key','hex')) THEN 1 ELSE 0 END AS validation_key_binding_ok;

ALTER ROLE turndown_content_runtime NOLOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT NOREPLICATION NOBYPASSRLS;
ALTER ROLE turndown_content_publisher NOLOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT NOREPLICATION NOBYPASSRLS;

SELECT format('CREATE ROLE turndown_app LOGIN PASSWORD %L NOSUPERUSER NOCREATEDB NOCREATEROLE INHERIT NOREPLICATION NOBYPASSRLS',:'app_password')
WHERE NOT EXISTS(SELECT 1 FROM pg_catalog.pg_roles WHERE rolname='turndown_app') \gexec
SELECT format('ALTER ROLE turndown_app LOGIN PASSWORD %L NOSUPERUSER NOCREATEDB NOCREATEROLE INHERIT NOREPLICATION NOBYPASSRLS CONNECTION LIMIT -1 VALID UNTIL %L',:'app_password','infinity') \gexec
SELECT format('CREATE ROLE turndown_content_publisher_login LOGIN PASSWORD %L NOSUPERUSER NOCREATEDB NOCREATEROLE INHERIT NOREPLICATION NOBYPASSRLS',:'publisher_password')
WHERE NOT EXISTS(SELECT 1 FROM pg_catalog.pg_roles WHERE rolname='turndown_content_publisher_login') \gexec
SELECT format('ALTER ROLE turndown_content_publisher_login LOGIN PASSWORD %L NOSUPERUSER NOCREATEDB NOCREATEROLE INHERIT NOREPLICATION NOBYPASSRLS CONNECTION LIMIT -1 VALID UNTIL %L',:'publisher_password','infinity') \gexec

-- Recover any poisoned ownership/default-ACL state before installing authority.
DO $body$
DECLARE role_name text;
BEGIN
  FOREACH role_name IN ARRAY ARRAY['turndown_content_runtime','turndown_content_publisher','turndown_app','turndown_content_publisher_login']
  LOOP
    EXECUTE format('REASSIGN OWNED BY %I TO %I',role_name,current_user);
    EXECUTE format('DROP OWNED BY %I',role_name);
  END LOOP;
END $body$;

-- Membership is authority state: remove every protected edge, then install exactly two.
DO $body$
DECLARE edge record;
BEGIN
  FOR edge IN
    SELECT parent.rolname parent_name,member.rolname member_name
    FROM pg_catalog.pg_auth_members m JOIN pg_catalog.pg_roles parent ON parent.oid=m.roleid JOIN pg_catalog.pg_roles member ON member.oid=m.member
    WHERE parent.rolname IN ('turndown_content_runtime','turndown_content_publisher','turndown_app','turndown_content_publisher_login')
       OR member.rolname IN ('turndown_content_runtime','turndown_content_publisher','turndown_app','turndown_content_publisher_login')
  LOOP EXECUTE format('REVOKE %I FROM %I CASCADE',edge.parent_name,edge.member_name); END LOOP;
END $body$;
GRANT turndown_content_runtime TO turndown_app;
GRANT turndown_content_publisher TO turndown_content_publisher_login;

-- Remove poisoned direct and PUBLIC ACLs in every non-system schema.
DO $body$
DECLARE s record; owner_name text;
BEGIN
  FOR s IN SELECT nspname,nspowner FROM pg_catalog.pg_namespace WHERE nspname<>'information_schema' AND nspname!~'^pg_'
  LOOP
    EXECUTE format('REVOKE ALL ON ALL TABLES IN SCHEMA %I FROM PUBLIC,turndown_app,turndown_content_publisher,turndown_content_publisher_login',s.nspname);
    EXECUTE format('REVOKE ALL ON ALL SEQUENCES IN SCHEMA %I FROM PUBLIC,turndown_app,turndown_content_publisher,turndown_content_publisher_login',s.nspname);
    EXECUTE format('REVOKE ALL ON ALL FUNCTIONS IN SCHEMA %I FROM PUBLIC,turndown_app,turndown_content_publisher,turndown_content_publisher_login',s.nspname);
    EXECUTE format('REVOKE CREATE ON SCHEMA %I FROM PUBLIC,turndown_app,turndown_content_publisher,turndown_content_publisher_login',s.nspname);
    IF s.nspname<>'public' THEN EXECUTE format('REVOKE USAGE ON SCHEMA %I FROM turndown_app,turndown_content_publisher,turndown_content_publisher_login',s.nspname); END IF;
    SELECT rolname INTO owner_name FROM pg_catalog.pg_roles WHERE oid=s.nspowner;
    EXECUTE format('ALTER DEFAULT PRIVILEGES FOR ROLE %I IN SCHEMA %I REVOKE ALL ON TABLES FROM PUBLIC,turndown_app,turndown_content_publisher,turndown_content_publisher_login',owner_name,s.nspname);
    EXECUTE format('ALTER DEFAULT PRIVILEGES FOR ROLE %I IN SCHEMA %I REVOKE ALL ON SEQUENCES FROM PUBLIC,turndown_app,turndown_content_publisher,turndown_content_publisher_login',owner_name,s.nspname);
    EXECUTE format('ALTER DEFAULT PRIVILEGES FOR ROLE %I IN SCHEMA %I REVOKE ALL ON FUNCTIONS FROM PUBLIC,turndown_app,turndown_content_publisher,turndown_content_publisher_login',owner_name,s.nspname);
  END LOOP;
END $body$;

REVOKE ALL ON DATABASE :DBNAME FROM PUBLIC,turndown_app,turndown_content_publisher,turndown_content_publisher_login;
GRANT CONNECT ON DATABASE :DBNAME TO turndown_app,turndown_content_publisher_login;
GRANT USAGE ON SCHEMA public TO turndown_app,turndown_content_publisher_login;

-- The app has active content reads through one inherited runtime group and ordinary newsletter writes only.
GRANT SELECT ON public.content_items,public.content_versions TO turndown_content_runtime;
GRANT SELECT,INSERT,UPDATE,DELETE ON public.newsletter_subscribers,public.newsletter_sends TO turndown_app;
GRANT USAGE,SELECT ON SEQUENCE public.newsletter_subscribers_id_seq,public.newsletter_sends_id_seq TO turndown_app;
REVOKE ALL ON public.hotels,public.brands,public.destinations,public.articles,public.content_publication_events,public.content_validation_keys FROM turndown_app,turndown_content_runtime;
REVOKE ALL ON public.content_validation_keys FROM PUBLIC,turndown_app,turndown_content_runtime,turndown_content_publisher,turndown_content_publisher_login;

-- Reinstall only the narrow execute surface; CREATE OR REPLACE can retain stale ACLs.
DO $body$
DECLARE oid_value oid; grantee_name text;
BEGIN
  FOREACH oid_value IN ARRAY ARRAY[
    'public.content_validation_challenge(text,text,text,jsonb,jsonb,jsonb,jsonb)'::regprocedure::oid,
    'public.publish_content_version(text,text,uuid,text,jsonb,jsonb,jsonb,text,text,jsonb)'::regprocedure::oid,
    'public.activate_content_version(text,text,uuid,text,text,text)'::regprocedure::oid,
    'public.read_active_content_payload(text,text)'::regprocedure::oid,
    'public.read_pending_content_activation(text,text)'::regprocedure::oid,
    'public.record_content_verification(text,text,uuid,uuid,text,jsonb)'::regprocedure::oid,
    'public.rollback_failed_content_verification(text,text,uuid,text)'::regprocedure::oid,
    'public.record_content_restoration_verification(text,text,uuid,jsonb)'::regprocedure::oid
  ] LOOP
    EXECUTE format('REVOKE ALL ON FUNCTION %s FROM PUBLIC',oid_value::regprocedure);
    FOR grantee_name IN
      SELECT DISTINCT r.rolname FROM pg_catalog.pg_proc p
      CROSS JOIN LATERAL pg_catalog.aclexplode(coalesce(p.proacl,pg_catalog.acldefault('f',p.proowner))) acl
      JOIN pg_catalog.pg_roles r ON r.oid=acl.grantee
      WHERE p.oid=oid_value AND acl.privilege_type='EXECUTE'
      AND r.rolname NOT IN ((SELECT rolname FROM pg_catalog.pg_roles WHERE oid=p.proowner),'turndown_content_publisher')
    LOOP EXECUTE format('REVOKE ALL ON FUNCTION %s FROM %I',oid_value::regprocedure,grantee_name); END LOOP;
    EXECUTE format('GRANT EXECUTE ON FUNCTION %s TO turndown_content_publisher',oid_value::regprocedure);
  END LOOP;
END $body$;

ALTER ROLE turndown_app SET statement_timeout='30s';
ALTER ROLE turndown_content_publisher_login SET statement_timeout='30s';

-- Protected principals may never own database objects or carry default ACLs.
DO $body$
DECLARE protected oid[]; actual_edges jsonb;
BEGIN
  SELECT array_agg(oid) INTO protected FROM pg_catalog.pg_roles WHERE rolname IN ('turndown_content_runtime','turndown_content_publisher','turndown_app','turndown_content_publisher_login');
  IF EXISTS(SELECT 1 FROM pg_catalog.pg_class WHERE relowner=ANY(protected))
     OR EXISTS(SELECT 1 FROM pg_catalog.pg_proc WHERE proowner=ANY(protected))
     OR EXISTS(SELECT 1 FROM pg_catalog.pg_namespace WHERE nspowner=ANY(protected))
     OR EXISTS(SELECT 1 FROM pg_catalog.pg_type WHERE typowner=ANY(protected))
     OR EXISTS(SELECT 1 FROM pg_catalog.pg_database WHERE datdba=ANY(protected))
     OR EXISTS(SELECT 1 FROM pg_catalog.pg_default_acl d LEFT JOIN LATERAL pg_catalog.aclexplode(coalesce(d.defaclacl,'{}'::aclitem[])) a ON true WHERE d.defaclrole=ANY(protected) OR a.grantee=ANY(protected))
  THEN RAISE EXCEPTION 'protected roles own objects or retain default privileges' USING ERRCODE='42501'; END IF;
  SELECT coalesce(jsonb_agg(jsonb_build_array(parent.rolname,member.rolname) ORDER BY parent.rolname,member.rolname),'[]'::jsonb) INTO actual_edges
  FROM pg_catalog.pg_auth_members m JOIN pg_catalog.pg_roles parent ON parent.oid=m.roleid JOIN pg_catalog.pg_roles member ON member.oid=m.member
  WHERE parent.rolname IN ('turndown_content_runtime','turndown_content_publisher','turndown_app','turndown_content_publisher_login')
     OR member.rolname IN ('turndown_content_runtime','turndown_content_publisher','turndown_app','turndown_content_publisher_login');
  IF actual_edges<>'[["turndown_content_publisher","turndown_content_publisher_login"],["turndown_content_runtime","turndown_app"]]'::jsonb THEN RAISE EXCEPTION 'protected membership graph is not exact: %',actual_edges USING ERRCODE='42501'; END IF;
END $body$;

COMMIT;
