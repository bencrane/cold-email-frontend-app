# Changelog

All notable changes to ColdEmail.com will be documented in this file.

## [0.1.0.0] - 2026-03-27

### Added
- **Homepage** with hero section, trending content feed, top tools grid, featured creators, agency showcase, and newsletter signup CTA
- **Tools directory** (`/tools`) with interactive category filtering across 8 categories and 12 tools
- **Tool profile pages** (`/tools/[slug]`) with editorial verdicts, pros/cons, use cases, comparisons, pricing plans, and sidebar with creator recommendations and related tools. Instantly has full rich content populated as the reference implementation.
- **Creators directory** (`/creators`) with grid of cold email creators
- **Creator profile pages** (`/creators/[slug]`) with hero banner, featured videos, recommended tech stack, resources, and community CTA. 3 creators: Eric Nowoslawski, Saad Khan, Nick Saraev.
- **Agencies directory** (`/agencies`) with grid of cold email agencies
- **Agency profile pages** (`/agencies/[slug]`) with team, ideal clients, services, results, training videos, resources, and booking CTA. 4 agencies: GrowthEngineX, Leadbird, ColdIQ, RevGrowth.
- **Learn hub** (`/learn`) with topic grid across 10 cold email topics and recently added videos section
- **Topic pages** (`/learn/[topicSlug]`) with video grid and related topic navigation
- **Video detail pages** (`/learn/[topicSlug]/[videoSlug]`) with player placeholder, creator info, tools mentioned, and related video sidebar. 24 seed videos across 4 creators.
- **Responsive navigation** with desktop nav bar and mobile hamburger menu
- **Light theme** with white background, blue-600 accent, Geist font family
- Static data layer with TypeScript types and helper functions for tools, creators, agencies, and learn content
- Full SSG with `generateStaticParams` — 80 static pages at build time
