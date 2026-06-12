# The Turndown Content & Growth Loops

The Turndown is a luxury-hotel editorial and curation site. Treat it as a loop-based growth system, not a generic article generator.

## Operating principle

Each weekly run should improve the usefulness, trust, discoverability, or retention value of the site. New content is one possible move, not the default answer.

Aim for **up to two meaningful improvements per weekly growth run**:

- Ship exactly two only when both are clearly valuable and safe.
- Ship one when the best second option would be filler.
- Never pad with a weak article, fake firsthand review, unsupported price/availability claim, or generic luxury-travel prose.

## Loop map

### 1. Weekly growth/content loop — agentic

Cadence: Saturday morning.

Purpose: choose and ship the highest-leverage The Turndown improvement from a scored candidate set.

The agent must inspect current inventory, the Obsidian publishing schedule, live route shape, and changed repo state before editing. It should score at least four candidates, then choose one or two bounded changes.

Good candidate moves:

1. Publish or refresh one high-intent hotel/destination/brand/versus piece from the active queue.
2. Refresh an existing page with sharper hotel selection logic, better internal links, or clearer editorial judgment.
3. Improve a destination or brand hub so it routes users into specific reviews and comparison pages.
4. Improve `best-luxury-hotels` pages where there are enough relevant hotels to justify the page.
5. Add internal links from essays/details/versus pages into reviews, destinations, brands, and newsletter signup.
6. Add trust/freshness language that explains how reviews/roundups are maintained without inventing firsthand claims.
7. Fix technical SEO, schema, sitemap, canonical, metadata, or indexation issues if they beat content work.
8. Improve newsletter capture or newsletter routing on high-intent editorial pages.

Avoid:

- Fake personal hotel stays or invented guest experience.
- Unsupported rates, availability, awards, openings, or renovation claims.
- Thin “best hotels” pages with too few actual hotel records.
- Generic “luxury travel tips” articles that do not connect to hotels, brands, destinations, or newsletter retention.
- Letting old Mon/Wed/Fri publishing assumptions override the current weekly quality-first loop.

Minimum validation:

- `git status --short` before edits.
- Check for duplicate slug/topic against DB/seed scripts and the active schedule.
- Validate relevant internal links resolve to existing routes.
- Run `npm run test:seo`.
- Run `npm run build` when route/templates/code changed; for seed/content-only work, run the relevant seed/dry check and inspect the produced route where possible.
- Commit and push only when the tree is safe.

### 2. Weekly newsletter loop — deterministic script

Cadence: Sunday morning.

Purpose: send a concise digest from already-published The Turndown articles via the protected live `/api/newsletter/send` endpoint.

Rules:

- Script-only (`no_agent: true`).
- Uses the live endpoint; no LLM-written customer email at send time.
- Pulls from recent unsent published articles.
- Reports send/skip/failure summary only.
- Secrets are read from environment variables and must never be printed.

### 3. Freshness utility loop — deterministic watchdog

Cadence: Monday and Thursday morning.

Purpose: catch operational decay before it becomes an SEO/product problem.

Checks include:

- live route health for home, reviews, brands, destinations, article hubs, newsletter, sitemap, robots;
- sitemap URL count and route-class counts;
- active publishing queue depth;
- repo cleanliness;
- local Postgres content counts when `DATABASE_URL` is available.

The watchdog should report actionable findings. If everything passes, a short OK summary is acceptable.

### 4. Monthly technical SEO loop — agentic

Cadence: first day of each month.

Purpose: audit and fix one bounded technical SEO issue or report prioritized findings.

Scope:

- sitemap/robots/canonicals;
- metadata title/description quality;
- JSON-LD for review/article/breadcrumb pages;
- filtered/indexable route behavior;
- thin generated route classes;
- internal-link graph between hotels, brands, destinations, comparisons, and newsletter;
- live production HTML spot checks.

### 5. Content plan refresh loop — agentic support loop

Cadence: Monday morning.

Purpose: maintain the Obsidian active publishing queue so the weekly growth loop always has strong candidates.

Rules:

- Keep at least eight future candidate rows queued.
- Append candidate topics based on search/seasonality/brand/destination gaps.
- Do not publish or seed content directly.
- Do not force the weekly loop to follow the queue if live-site checks reveal a better refresh/internal-link/trust/SEO opportunity.

## Candidate scoring ladder

Score opportunities higher when they:

1. Match clear search intent: specific hotel review, destination “best hotels”, brand profile, versus/comparison, new opening.
2. Can link to at least three existing relevant pages.
3. Improve a page that already has business value: reviews, destination hubs, brand hubs, best-hotel pages, newsletter signup.
4. Refresh stale content or metadata without requiring unsupported new facts.
5. Create reusable newsletter/social value without becoming a standalone essay detached from the site graph.

Score lower when they:

- are broad luxury-travel commentary with no internal-link or search payoff;
- require firsthand claims the site cannot support;
- depend on live prices/availability that are not sourced;
- duplicate a topic already published or queued.

## Current source of truth

- Repo: `/Users/marcvallverdu/projects/the-turndown`
- Obsidian publishing schedule: `/Users/marcvallverdu/clawd/obsidian-vault/01-Projects/the-turndown/publishing-schedule.md`
- Live site: `https://theturndown.co`
- Existing newsletter endpoint: `/api/newsletter/send`
- Validation scripts: `npm run test:seo`, `npm run build`, `npm run test:newsletter`

## Scheduled jobs

Updated by Hermes:

- `turndown-weekly-growth-loop` (`9d6942601b25`) — weekly agentic growth/content loop.
- `turndown-content-plan-refresh` (`50560197723c`) — Monday queue maintenance.
- `turndown-weekly-newsletter-loop` (`ba0b6af615f6`) — deterministic newsletter send.
- `turndown-freshness-utility-loop` (`c324d9cc04ff`) — deterministic freshness/watchdog checks.
- `turndown-monthly-technical-seo-loop` (`600e156a4ae1`) — monthly agentic technical SEO pass.
