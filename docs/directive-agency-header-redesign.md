# Directive: Agency Profile Header Redesign

## File to modify
`src/app/(public)/agencies/[slug]/page.tsx` — the header section (comment `{/* ── 1. HEADER ── */}`)

## What's broken

The header section of the agency profile page has no visual balance or compositional logic. Elements are placed in proximity but have no spatial relationship to each other. There is no rhythm, no alignment system, and no intentional use of whitespace. It looks like someone listed HTML elements in a column and called it a layout.

Specific problems:
1. **Left column has no visual mass.** The about paragraph is 2 lines of text sitting in a flex-1 column next to a 16:9 video thumbnail. The video dominates. The left side is empty space.
2. **The identity row (logo + name + badge + social icons) is pinned to the top-left with no grounding.** It has no visual connection to the content below it. It floats.
3. **Industry pills are disconnected.** They sit centered underneath the two-column block with arbitrary spacing. They belong to nothing.
4. **Spacing between elements is arbitrary.** mt-2, mt-6, mt-8... there's no system. Each gap was picked ad hoc.
5. **No vertical alignment between columns.** The left column content starts at the top and ends after 2 lines. The right column video fills its space. They don't relate.

## What NOT to do

- **Do NOT stack the video below the text on desktop.** The two-column layout (text left, video right) is correct for desktop viewports. The problem is balance within that layout, not the layout itself.
- **Do NOT add the stats row back.** The stats (8M+ emails/month, 80+ clients, 2021 founded) have been intentionally removed from the header.
- **Do NOT add text labels to the social links.** They are icon-only buttons (globe for website, LinkedIn logo for LinkedIn). Keep them icon-only.
- **Do NOT use hardcoded colors or pixel values.** Use the design tokens from `globals.css` (e.g., `var(--border)`, `var(--radius)`, `var(--text-secondary)`).

## Elements and their purpose

| Element | Purpose | Visual weight needed |
|---------|---------|---------------------|
| Logo (colored square, agency initials) | Identity anchor | Medium — recognizable, not dominant |
| Agency name (h1) | Primary identity | High — largest text, first thing you read |
| Verified badge | Trust signal | Small — supporting, not competing |
| Social icon buttons (globe, LinkedIn) | Secondary action — "visit their site" | Minimal — findable, not prominent |
| Tagline | One-line positioning — "what they do" | Medium — secondary text, clear |
| About paragraph | Context — "who they serve and how" | Medium — body copy, readable |
| Industry pills | Categorization — "what verticals" | Low — scannable tags |
| Hero video thumbnail | Visual anchor + engagement hook | High — the eye-catching element |
| Video caption | Context for the video | Low — small supporting text |

## Design constraints

- Max width: `var(--max-width)` (1140px), centered with `px-6`
- Fonts: DM Sans (the only body font)
- Colors: use `text-text-primary`, `text-text-secondary`, `text-text-tertiary`, `bg-surface`, `border-border` etc.
- Card radius: `var(--radius)` (10px), `var(--radius-sm)` (6px)
- The section below the header is Team (has its own `<section className="mb-12">` with `<h2>`)
- On mobile, the video should stack below the text content (this already works via `lg:flex-row`)

## What "balanced" means

The left column (text) and right column (video) should feel like one composed block, not two unrelated things placed next to each other. The left side needs enough content AND proper vertical distribution to hold its own against a 16:9 video with a play button and a human face in it.

Strategies that might work (pick one or combine):
- **Vertically center** the left column content relative to the video height, so the text sits in the middle of the column rather than being pinned to the top with dead space below
- **Let the identity row (logo + name) span full width above the two columns**, so the two-column layout only contains about text (left) and video (right). This reduces what the left column needs to "hold"
- **Put the industry pills inside the left column** underneath the about paragraph (left-aligned, not centered), giving the left side more visual mass
- **Increase the about paragraph's presence** — slightly larger text, more line-height, or a subtle visual treatment

The pills specifically: the user wants them horizontal and visible, but they need to feel connected to the content, not floating in space. Whether they sit inside the left column or span full-width underneath, they need intentional spacing that relates them to the block above.

## Design system reference

Read these before writing any code:
- `PLATFORM.md` — full design system documentation
- `src/app/globals.css` — all CSS custom properties / design tokens
- `AGENTS.md` — Next.js version warning

## Verification

1. Run dev server: `pnpm dev --port 3004`
2. Check at `http://localhost:3004/agencies/growthengine`
3. The header should feel like ONE composed block, not separate elements
4. Left and right columns should have balanced visual weight
5. All spacing should feel intentional and rhythmic
6. Check mobile (narrow viewport) — video stacks below text
7. Check agencies WITHOUT a hero video (e.g., `/agencies/leadbird`) — layout should still work
