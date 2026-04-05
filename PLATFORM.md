# ColdEmail.com Platform Guide

> Context document for AI agents working on this codebase. Read this before writing any code.

---

## What this is

ColdEmail.com is an independent directory and editorial platform for the cold email outbound industry. It helps buyers find tools, evaluate agencies, and learn strategies. It helps agencies get discovered, capture leads, and prove credibility.

The site is not a SaaS product. It is a content-driven marketplace with a paid agency tier. Think of it as "G2 meets Indie Hackers" for cold email.

**Live at:** https://coldemail.com

---

## Who uses it

**Buyers (free):** SDR managers, heads of growth, founders evaluating cold email tools or looking to hire an agency. They browse tools, read comparisons, check agency profiles, and download lead magnets.

**Agencies (paid):** Cold email agencies that pay $300/mo or $2,500/yr to maintain a verified profile, host lead magnets on the ColdEmail.com domain, capture leads, and access analytics. The value prop is credibility by association: linking to `coldemail.com/agencies/your-agency` from a cold email carries more weight than linking to a Carrd page or Notion doc.

---

## Strategic positioning

ColdEmail.com is **the independent resource for outbound.** That word "independent" is load-bearing. The site is not affiliated with any tool vendor. There is no affiliate bias in tool reviews or comparisons. This neutrality is the product's moat and must be protected in all copy, editorial, and design decisions.

The tagline is: **"Everything you need to land in the inbox."**

The homepage headline is: **"Find the right tools. Hire the right agency."**

These two lines define the editorial voice: practical, direct, zero fluff. The site speaks like a knowledgeable peer who has done the work, not a marketer trying to sell something.

---

## Revenue model

Agencies pay for profiles. That's it. There are two tiers:

| Plan | Price | Includes |
|------|-------|----------|
| Monthly | $300/mo | Verified profile, unlimited lead magnets, leads dashboard, analytics, booking integration |
| Annual | $2,500/yr ($208/mo) | Everything above + featured placement, editorial feature, priority support, price lock |

The "For Agencies" page (`/for-agencies`) is the pitch page. It addresses three pain points: (1) agency websites are brochures that don't convert, (2) lead magnets live on throwaway domains, (3) buyers can't find agencies via search. ColdEmail.com solves all three.

---

## Content architecture

### Tools (`/tools`, `/tools/[slug]`)
Directory of 20+ cold email tools (Instantly, SmartLead, Clay, Apollo, Lemlist, etc). Each tool has pricing tiers, pros/cons, use cases, comparisons, G2 ratings, and user reviews. Tools can be filtered by category (Cold Email, Data Enrichment, CRM, etc.) and compared head-to-head at `/tools/compare/[slugs]`.

### Agencies (`/agencies`, `/agencies/[slug]`)
Directory of verified cold email agencies. Each profile page shows: header with logo/name/stats/social links, about section, industry pills, team, services, LinkedIn posts, case studies, free resources (lead magnets), and an "Other agencies" cross-link section. Agency profiles are designed to function as standalone conversion pages that agencies can link from proposals and cold emails.

### Editorial (`/playbooks`, `/playbooks/[slug]`)
Long-form content: playbooks, spotlights, breakdowns, guides, and opinion pieces. These are editorially produced, not user-generated. Content types: `playbook | spotlight | breakdown | guide | opinion`. Each piece can reference tools and agencies for cross-linking.

### Feed (`/feed`)
Aggregated LinkedIn posts from 16+ cold email thought leaders, organized by topic (Deliverability, Clay & Enrichment, Copywriting, Infrastructure, Automation, Scaling, Tools, Agency Ops). This is a read-only feed that surfaces industry conversation.

### Course (`/course`)
Free 7-day email course. Lead capture form with email input. Functions as a top-of-funnel growth mechanism.

### Dashboard (`/dashboard/*`)
Agency admin portal for profile editing, lead magnet management, lead capture, analytics, review management, and settings. This is behind authentication (not yet wired to a real auth provider, uses demo data).

---

## Design system

### Personality
Clean, neutral, trustworthy. The design communicates editorial independence. No bright gradients, no playful illustrations, no startup energy. Think: a well-designed trade publication that happens to be digital. Cards, borders, subtle shadows, muted colors, tight typography.

### Fonts
- **Body:** DM Sans (weights 400, 500, 600, 700). Clean geometric sans-serif. Used everywhere.
- **Display:** Instrument Serif (weight 400, normal + italic). Used for hero headlines and section headers on the homepage. The italic variant is used for emphasis words (e.g., "the right *agency*").

### Color tokens
All colors are CSS custom properties in `globals.css`, bridged to Tailwind via `@theme inline`. Never use raw hex values in components. Always use the semantic token.

**Backgrounds:**
- `--bg: #FAFAFA` (page background, light warm gray)
- `--surface: #FFFFFF` (card backgrounds)
- `--surface-hover: #F0F0F0` (hover states on surfaces)
- `--surface-muted: #F3F4F6` (tag backgrounds, subtle fills)

**Text:**
- `--text-primary: #0F1115` (headings, bold text, dark buttons)
- `--text-secondary: #5A5E6B` (body copy, descriptions)
- `--text-tertiary: #8E919D` (captions, timestamps, muted labels)

**Accent:**
- `--accent: #1A56DB` (links, CTAs, interactive elements)
- `--accent-hover: #1444B0` (hover state)
- `--accent-light: #EFF6FF` (light accent backgrounds)

**Borders:**
- `--border: #E8E9EC` (standard card/section borders)
- `--border-hover: #D0D1D6` (hover state borders)

### Spacing and layout
- `--max-width: 1140px` for all content. Used as `max-w-[var(--max-width)]` with `mx-auto px-6`.
- `--radius: 10px` (default card radius), `--radius-sm: 6px`, `--radius-lg: 16px`
- `--card-shadow: 0 1px 3px rgba(0,0,0,0.04)` (resting state)
- `--card-shadow-hover: 0 4px 12px rgba(0,0,0,0.07)` (hover state)

### Card pattern
Cards are the primary content unit. Every card follows the same hover behavior:
```
rounded-[var(--radius)] border border-border bg-surface
transition-all duration-200
hover:-translate-y-px hover:border-border-hover hover:shadow-[var(--card-shadow-hover)]
```
The `-translate-y-px` (1px lift) + shadow + border change creates a subtle "pick up" effect. This pattern is used on tool cards, agency cards, resource cards, and cross-link cards. Do not deviate from it.

### Badge variants
The `Badge` component (`src/components/ui/badge.tsx`) has variants: `verified`, `live`, `draft`, `tag`, `accent`, `count`. The "Verified" badge is a key trust signal and appears on agency cards and profile headers.

### Section pattern
Every content section on a page follows this structure:
```tsx
<section className="mb-12">
  <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
    Section Title
  </h2>
  {/* content */}
</section>
```
Consistent `mb-12` spacing between sections. Consistent heading treatment.

### Navigation
Sticky nav at 60px height with backdrop blur. Logo: "Cold" in primary text + "Email.com" with ".com" in accent blue. Links: Tools, Agencies, Playbooks, Feed, Agency Admin. Right-aligned "Free Course" CTA button.

### Footer
Pinned to viewport bottom via flexbox (see layout section below). Left: logo + tagline. Right: navigation links. Minimal, 60px height, muted text colors.

---

## Technical architecture

### Stack
- **Framework:** Next.js 16.2.1 (App Router), React 19, TypeScript 5
- **Styling:** Tailwind CSS v4 via PostCSS
- **Animations:** Framer Motion 12 (installed, light usage)
- **State:** Zustand 5 (installed, light usage)
- **Content:** MDX via next-mdx-remote 6, gray-matter for frontmatter
- **Build:** React Compiler enabled, ESLint 9
- **Package manager:** pnpm

### Data model
All data is static TypeScript. No database, no CMS. Data files live in `src/data/`:

| File | What it holds |
|------|---------------|
| `tools.ts` | Tool definitions (slug, pricing, features, G2 ratings, comparisons) |
| `agencies.ts` | Agency profiles (stats, team, services, case studies) |
| `editorial.ts` | Playbooks, guides, breakdowns (type, cover style, subject) |
| `categories.ts` | Tool category groupings |
| `linkedin-creators.ts` | 16 thought leader profiles |
| `linkedin-posts.ts` | 50+ LinkedIn posts by topic |
| `tool-reviews.ts` | User-submitted tool reviews |
| `lead-magnets.ts` | Lead magnet index (re-exports from dashboard.ts) |
| `dashboard.ts` | Demo agency dashboard data (lead magnets with views/submissions, leads, profile views) |

All types are defined in `src/lib/types.ts`. Key interfaces: `Tool`, `Agency`, `EditorialContent`, `LinkedInPost`, `LinkedInCreator`, `LeadMagnet`, `ToolReview`, `ToolCategory`.

### Route structure
```
(public)/                        # Public pages with Nav + Footer layout
  page.tsx                       # Homepage
  tools/page.tsx                 # Tool directory (client-side filtering)
  tools/[slug]/page.tsx          # Tool detail
  tools/[slug]/review/page.tsx   # Submit tool review
  tools/category/[slug]/page.tsx # Tools by category
  tools/compare/[slugs]/page.tsx # Head-to-head comparison
  agencies/page.tsx              # Agency directory
  agencies/[slug]/page.tsx       # Agency profile
  agencies/[slug]/review/        # Agency review
  agencies/[slug]/resources/[magnetSlug]/ # Lead magnet landing page
  playbooks/page.tsx             # Editorial listing
  playbooks/[slug]/page.tsx      # Editorial detail
  feed/page.tsx                  # LinkedIn feed
  for-agencies/page.tsx          # Agency pitch/pricing page
  course/page.tsx                # Free course signup

(dashboard)/                     # Agency admin (separate layout, sidebar)
  dashboard/page.tsx             # Overview
  dashboard/profile/             # Profile editor
  dashboard/lead-magnets/        # Lead magnet management
  dashboard/leads/               # Captured leads
  dashboard/analytics/           # Performance metrics
  dashboard/reviews/             # Review management
  dashboard/settings/            # Account settings

api/                             # API routes
  leads/capture/                 # Lead form submission handler
  lead-magnets/                  # Lead magnet endpoints
```

### Layout architecture
This was the source of real bugs. Understand it well.

**Root layout** (`src/app/layout.tsx`): Sets `min-h-screen` on body, applies fonts, sets up flex column.

**Public layout** (`src/app/(public)/layout.tsx`): Wraps content in a flex container:
```tsx
<div className="flex flex-1 flex-col">
  <Nav />
  <div className="flex-1">{children}</div>
  <Footer />
</div>
```

The `flex-1` on the children wrapper is what pushes the footer to the bottom on short-content pages. Without it, the footer floats up when content doesn't fill the viewport (e.g., tools page with filters applied showing only 3 results).

**Critical CSS:** `scrollbar-gutter: stable` on `html` prevents layout shift when navigating between pages with/without scrollbars.

See `.context/postmortem-tools-page-layout.md` for the full post-mortem on these bugs.

### SEO
`src/lib/seo.ts` exports `createMetadata()` which generates title (with "ColdEmail.com" suffix), description, OpenGraph, and Twitter card metadata. Every page uses it.

---

## Design decisions made to date

These are choices that were made deliberately during design review sessions. Respect them unless the user explicitly asks to revisit.

### Agency profile page structure
The agency profile page was rebuilt from scratch. The section order is intentional:

1. **Header** (logo, name, verified badge, tagline, stats, social links)
2. **About** (description paragraph)
3. **Industry pills** (tag-style pills showing verticals served)
4. **Team** (avatar cards with name and role, max 4)
5. **Services** (2-column grid of icon + title + description cards)
6. **Recent posts** (horizontal-scrolling LinkedIn post cards)
7. **Case Studies** (stacked cards with label, headline, bullet metrics)
8. **Free Resources** (lead magnet cards with content type icon, title, description, CTA)
9. **Other agencies** (3-column cross-link grid)

**Removed from earlier design:** Breadcrumb navigation (nav already provides wayfinding), booking CTA (too salesy for an independent platform), tech stack pills (low value), testimonials section (moved to case studies metrics approach).

### Width consistency
All pages use `max-w-[var(--max-width)]` (1140px). An earlier version of the agency profile used a narrow `max-w-[820px]` centered column. This was changed to match the rest of the site. Do not introduce narrow content widths.

### Stat consistency on agency cards
Every agency shows exactly three stats in the same order: emails/month, clients served, founded year. This consistency matters for scanning the directory page.

### No breadcrumbs on agency profiles
We tried breadcrumbs ("Agencies > GrowthEngineX"), then a back-link ("Agencies"), then removed them entirely. The nav already provides wayfinding. Adding breadcrumbs created visual redundancy with the agency name appearing twice on screen.

### LinkedIn posts are reused, not custom
The agency profile page reuses the existing `LinkedInPostCard` component in `compact` variant. This is intentional. The posts are currently dummy data (hardcoded in the page file) and will eventually be wired to real per-agency LinkedIn data.

### Resources section uses existing lead magnet data
The "Free Resources" section on agency profiles pulls from `allLeadMagnets` in `src/data/lead-magnets.ts`, filtered by `agencySlug` and `status === "live"`. Cards link to the existing lead magnet landing pages at `/agencies/[slug]/resources/[magnetSlug]`. Content type determines the icon (document for PDFs, play triangle for video) and CTA text ("Download" vs "Watch now").

### Footer tagline
Changed from "The independent resource for outbound." to "Everything you need to land in the inbox." The old tagline was a positioning statement. The new one is a value proposition.

---

## Patterns to follow

### When adding a new page
1. Use `max-w-[var(--max-width)] px-6 pb-20 pt-12` on the main element
2. Use `createMetadata()` for SEO
3. Use the section pattern (`mb-12`, `text-xl font-semibold tracking-[-0.3px]` headings)
4. Test with minimal content to verify footer stays at bottom

### When adding a new card
1. Use the standard card hover pattern (border, shadow, translate-y-px)
2. Use `rounded-[var(--radius)]` not a hardcoded px value
3. Use semantic color tokens, never raw hex
4. Use `no-underline` on Link cards to prevent blue underlines

### When adding a new data entity
1. Define the TypeScript interface in `src/lib/types.ts`
2. Create the data file in `src/data/`
3. Export a `getXBySlug()` lookup function
4. Use `generateStaticParams()` for static generation of detail pages

### When editing copy
1. Keep it direct. No marketing fluff, no superlatives, no hype.
2. The voice is a knowledgeable peer, not a salesperson.
3. Specificity beats cleverness. "42-point checklist" beats "comprehensive guide."

---

## Known limitations and future work

- **No auth:** Dashboard is demo-only. No real authentication provider wired up.
- **No database:** All data is static TypeScript. A real backend (Supabase?) will be needed for user-generated content, reviews, and lead capture at scale.
- **Dummy LinkedIn posts:** Agency profile LinkedIn posts are hardcoded. Will need a real data pipeline.
- **Single agency with resources:** Only GrowthEngineX has lead magnets. Other agencies show no Resources section (by design, the section conditionally renders).
- **No dark mode:** Design tokens exist only for light mode.
- **Limited editorial:** Only 2 playbooks exist. The editorial pipeline is not yet built out.

---

## Files to read first

If you're orienting to this codebase, read these in order:

1. `AGENTS.md` (Next.js version warning)
2. `src/lib/types.ts` (full data model)
3. `src/app/globals.css` (design tokens)
4. `src/app/(public)/layout.tsx` (layout architecture)
5. `src/app/(public)/page.tsx` (homepage, shows overall product scope)
6. `src/app/(public)/agencies/[slug]/page.tsx` (most recently rebuilt page, shows current patterns)
7. `.context/postmortem-tools-page-layout.md` (layout bugs and lessons)
8. This file
