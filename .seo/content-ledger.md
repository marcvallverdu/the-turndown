# Content ledger

## 2026-06-27 weekly growth loop

### Candidates scored
| Candidate | Type | Score | Notes |
| --- | --- | ---: | --- |
| Aman Kyoto vs Four Seasons Kyoto | Versus page | 91 | Active queue item, high decision intent, both reviews already exist, strong internal-link fit. |
| Add hotel cards/newsletter CTA to versus template | Internal-link/conversion improvement | 84 | Improves all comparison pages and keeps readers moving into reviews/newsletter. |
| Il San Pietro di Positano review | Hotel review | 76 | Strong queued review, but less timely than current Jun 27 active row and needs more source verification. |
| Bangkok destination guide | Destination guide | 72 | Clear search demand and existing Bangkok review inventory, but scheduled later and needs enough local coverage. |
| Best luxury hotels hub freshness copy | Trust/technical content | 68 | Useful, but lower leverage than adding links to the comparison template this week. |

### Shipped
- `/versus/aman-kyoto-vs-four-seasons-kyoto` — decision-stage comparison seeded via `scripts/seed-jun27.ts`.
- Versus article template now renders mentioned-hotel review cards and a newsletter CTA.

### Next best candidate
Il San Pietro di Positano review, unless a live SEO check shows Bangkok or Kyoto destination refresh has stronger demand/internal-link value.

## 2026-07-04 weekly growth loop

### Candidates scored
| Candidate | Type | Score | Notes |
| --- | --- | ---: | --- |
| Il San Pietro di Positano | Hotel review | 88 | Active queue item, not live in sitemap, strong Amalfi/Positano intent, links naturally to Amalfi Coast and existing Belmond Caruso/Grand Hotel Tremezzo comparison context. |
| Bangkok destination guide | Destination guide | 80 | Clear search intent and Capella/Mandarin Oriental Bangkok inventory, but scheduled later and benefits from one more Bangkok/MO brand pass first. |
| Mandarin Oriental brand profile | Brand profile | 78 | Strong brand-demand target and existing Bangkok review, but scheduled Jul 11 and should be built with broader brand context. |
| Best luxury hotels hub decision copy | Template refresh | 72 | Useful for many hubs, but route/template change would need broader visual/build QA and is lower leverage than publishing the queued missing review. |
| Newsletter routing on review pages | Conversion/internal-link improvement | 69 | Sensible future sitewide improvement, but not urgent enough to bundle with a new hotel review this week. |

### Shipped
- `/reviews/il-san-pietro-di-positano` — queued Amalfi Coast hotel review seeded via `scripts/seed-jul4.ts` after deployment.

### Next best candidate
Mandarin Oriental brand profile, with internal links to `/reviews/mandarin-oriental-bangkok`, `/destinations/bangkok` if shipped, and relevant riverside Bangkok comparison context.


## 2026-07-11 weekly growth loop

### Candidates scored
| Candidate | Type | Score | Notes |
| --- | --- | ---: | --- |
| Mandarin Oriental brand profile | Brand profile | 90 | Active queue item, brand-demand intent, two reviewed Mandarin Oriental properties already live, and direct links into Bangkok/Lake Como review inventory. |
| Brand page signature-property link | Internal-link/trust improvement | 84 | Small route/template improvement that turns raw `best_property` slugs into reader-facing review links across all brand pages. |
| Four Seasons Hotel George V, Paris | Hotel review | 78 | Strong queued review, but scheduled next and less connected to this week's existing brand/linking gap. |
| Bangkok destination guide | Destination guide | 76 | Clear search intent and Capella/Mandarin Oriental inventory, but `/best-luxury-hotels/bangkok` is not yet sitemap-backed and the destination needs more local coverage. |
| Best luxury hotels hub decision copy | Template refresh | 70 | Useful, but lower leverage than publishing a missing brand page and improving brand-page link routing. |

### Shipped
- `/brands/mandarin-oriental` — queued brand profile seeded via `scripts/seed-jul11.ts` once deployed/seeding runs.
- Brand detail pages now link the signature property field to the matching review page when the reviewed hotel exists.

### Next best candidate
Four Seasons Hotel George V, Paris review, unless the next live SEO check shows the Bangkok destination guide has enough reviewed inventory to justify destination + best-hotel hub expansion.

## 2026-07-18 weekly growth loop

### Candidates scored
| Candidate | Type | Score | Notes |
| --- | --- | ---: | --- |
| Four Seasons Hotel George V, Paris | Hotel review | 91 | Active queue item, clear hotel-review intent, strong Four Seasons/Paris internal-link fit, and official sources support rooms, spa, location, and 2026 Michelin dining claims. |
| Bangkok destination guide | Destination guide | 82 | High destination intent and existing Bangkok inventory, but stronger after one more Bangkok hotel or a best-hotel hub pass; not forced as a second item. |
| Maybourne brand profile | Brand profile | 79 | Queue item with The Connaught/The Berkeley inventory, but scheduled later and lower immediate search fit than George V this week. |
| Best luxury hotels hub decision copy | Template refresh | 74 | Useful future route-class improvement, but needs broader build/visual QA and is less urgent than the active missing review. |
| Review-page newsletter routing | Conversion/internal-link improvement | 70 | Sensible sitewide improvement, but not bundled because the review publication already has clear value and local production DB access is currently unavailable. |

### Shipped
- `/reviews/four-seasons-george-v-paris` — queued Paris Palace hotel review committed as `scripts/seed-jul18.ts`; production seeding is expected after deployment because local Postgres is not available in this cron environment.

### Next best candidate
Bangkok destination guide, with a careful inventory check for `/reviews/capella-bangkok`, `/reviews/mandarin-oriental-bangkok`, and any existing Four Seasons/Peninsula/Rosewood Bangkok coverage before deciding whether to publish the destination page alone or pair it with a best-luxury-hotels hub refresh.
