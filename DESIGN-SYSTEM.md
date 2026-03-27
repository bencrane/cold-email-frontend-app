# ColdEmail.com Design System

Unified design system for the ColdEmail.com frontend. Established March 2026.

**PR:** [#5 — Unified design system with semantic tokens and shared components](https://github.com/bencrane/cold-email-frontend-app/pull/5)

---

## What Was Done

### The Problem

The codebase had two completely separate design languages. Public pages (homepage, tools, agencies, playbooks, etc.) used semantic CSS variables mapped through Tailwind's `@theme` (`text-text-primary`, `bg-surface`, `border-border`). Dashboard pages used raw Tailwind utility classes (`text-gray-900`, `bg-white`, `border-gray-200`).

These mapped to *different hex values*. `text-text-primary` is `#0F1115`, while `text-gray-900` is `#111827`. Close, but not identical. A user navigating from a public agency page into the dashboard would see a subtle but noticeable color shift.

Beyond the color split, the codebase had:
- 22 unique typography treatments and 20 different font sizes
- 5+ primary button variants with no shared component
- 11 card patterns, all inline, none extracted
- 4 different form input styles copy-pasted across files
- Only 4 extracted components total (Nav, Footer, CourseSignup, DashboardSidebar)
- Framer Motion installed but never imported or used anywhere

### The Solution

Three categories of work, all in a single commit across 28 files:

**1. Expanded design tokens** (`src/app/globals.css`)

Added 15+ new semantic tokens to the existing system:
- Surface variants: `--surface-hover`, `--surface-muted`
- Text variants: `--text-primary-hover`, `--text-muted`
- Accent shades: `--accent-light`, `--accent-muted`
- Border variants: `--border-light`
- Status colors: success (`--success`, `--success-text`, `--success-bg`, `--success-muted`), warning (`--warning`, `--warning-text`), destructive (`--destructive`, `--destructive-text`, `--destructive-bg`)
- Misc: `--star`, `--star-hover`, `--radius-lg`

All mapped through `@theme inline` for Tailwind class usage.

**2. Migrated all dashboard files to semantic tokens** (9 files)

Every raw Tailwind color class in the dashboard was replaced with its semantic equivalent:
- `text-gray-900` became `text-text-primary`
- `bg-white` became `bg-surface`
- `border-gray-200` became `border-border`
- `bg-blue-600` became `bg-accent`
- `rounded-xl` became `rounded-[var(--radius)]`
- And ~50 more replacements

**3. Fixed hardcoded values in public pages** (8 files)

- `hover:bg-[#2A2D35]` replaced with `hover:bg-text-primary-hover`
- `hover:bg-[#F0F0F0]` replaced with `hover:bg-surface-hover`
- All `green-50`/`green-700` replaced with `success-bg`/`success-text`
- All `amber-600`/`amber-700` replaced with `warning`/`warning-text`
- All `yellow-400`/`yellow-500` replaced with `star`/`star-hover`
- SVG `stroke="#1A56DB"` replaced with `stroke="var(--accent)"`

**4. Created 8 shared UI components** (`src/components/ui/`)

**5. Integrated components into 10 pages**, eliminating duplicated inline patterns.

---

## Design Tokens

All tokens are defined in `src/app/globals.css` as CSS custom properties and exposed to Tailwind via `@theme inline`.

### Colors

| Token | Value | Tailwind Class | Usage |
|-------|-------|----------------|-------|
| `--bg` | `#FAFAFA` | `bg-bg` | Page background |
| `--surface` | `#FFFFFF` | `bg-surface` | Card backgrounds |
| `--surface-hover` | `#F0F0F0` | `bg-surface-hover` | Light button hover state |
| `--surface-muted` | `#F3F4F6` | `bg-surface-muted` | Subtle backgrounds, tag bgs |
| `--text-primary` | `#0F1115` | `text-text-primary` | Primary text, dark button bg |
| `--text-primary-hover` | `#2A2D35` | `bg-text-primary-hover` | Dark button hover state |
| `--text-secondary` | `#5A5E6B` | `text-text-secondary` | Secondary text |
| `--text-tertiary` | `#8E919D` | `text-text-tertiary` | Muted text, placeholders |
| `--text-muted` | `#4B5064` | `text-text-muted` | Tag text |
| `--accent` | `#1A56DB` | `text-accent`, `bg-accent` | Links, CTAs, accent buttons |
| `--accent-hover` | `#1444B0` | `bg-accent-hover` | Accent hover state |
| `--accent-light` | `#EFF6FF` | `bg-accent-light` | Active states, light accent bg |
| `--accent-muted` | `#DBEAFE` | `bg-accent-muted` | Avatar backgrounds, badges |
| `--border` | `#E8E9EC` | `border-border` | Standard borders |
| `--border-hover` | `#D0D1D6` | `border-border-hover` | Hover borders |
| `--border-light` | `#F3F4F6` | `border-border-light` | Table dividers |

### Status Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--success` / `--success-text` | `#16A34A` / `#15803D` | Success icons / verified text |
| `--success-bg` / `--success-muted` | `#F0FDF4` / `#DCFCE7` | Verified badge bg / success icon bg |
| `--warning` / `--warning-text` | `#D97706` / `#B45309` | Warning icons / "watch out" text |
| `--destructive` / `--destructive-text` | `#DC2626` / `#B91C1C` | Delete buttons / destructive hover |
| `--destructive-bg` | `#FEF2F2` | Rejected review background |
| `--star` / `--star-hover` | `#FACC15` / `#EAB308` | Filled stars / star hover |

### Spacing & Layout

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `6px` | Buttons, small inputs |
| `--radius` | `10px` | Cards, containers |
| `--radius-lg` | `16px` | Large containers |
| `--max-width` | `1140px` | Main content container |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--card-shadow` | `0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)` | Subtle card shadow |
| `--card-shadow-hover` | `0 4px 12px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.04)` | Card hover shadow |

### Fonts

| Token | Value | Usage |
|-------|-------|-------|
| `--font-body` | DM Sans | Body text, UI |
| `--font-display` | Instrument Serif | Display headings |

---

## Component Library

All components live in `src/components/ui/`.

### Button

`src/components/ui/button.tsx`

Polymorphic button that renders as `<button>` or Next.js `<Link>` based on the `href` prop.

```tsx
import Button from "@/components/ui/button";

// As a button
<Button variant="primary" size="md" onClick={handleClick}>
  Save Changes
</Button>

// As a link
<Button variant="secondary" href="/dashboard">
  Go to Dashboard
</Button>

// Full width
<Button variant="accent" fullWidth>Submit</Button>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "accent" \| "secondary" \| "ghost" \| "destructive"` | `"primary"` | Visual style |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Padding scale |
| `fullWidth` | `boolean` | `false` | Stretch to container width |
| `href` | `string` | — | If provided, renders as `<Link>` |
| `className` | `string` | `""` | Additional classes |

**Variant styles:**
- `primary`: Dark background (`bg-text-primary`), white text
- `accent`: Blue background (`bg-accent`), white text
- `secondary`: Outlined with border, surface background
- `ghost`: No border, subtle hover background
- `destructive`: Red text, no background

---

### Badge

`src/components/ui/badge.tsx`

Inline status/label pill.

```tsx
import Badge from "@/components/ui/badge";

<Badge variant="verified">Verified</Badge>
<Badge variant="live">Live</Badge>
<Badge variant="draft">Draft</Badge>
<Badge variant="tag">Cold Email</Badge>
<Badge variant="accent">Best Value</Badge>
<Badge variant="count">3</Badge>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"verified" \| "live" \| "draft" \| "tag" \| "accent" \| "count"` | `"tag"` | Visual style |
| `children` | `ReactNode` | — | Badge content |
| `className` | `string` | `""` | Additional classes |

---

### Avatar

`src/components/ui/avatar.tsx`

Initials-based avatar with configurable size and shape.

```tsx
import Avatar from "@/components/ui/avatar";

<Avatar initials="MC" color="#DC2626" size="sm" />
<Avatar initials="GX" color="#1D4ED8" size="xl" shape="rounded" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initials` | `string` | — | Text shown inside |
| `color` | `string` | — | Background color (hex) |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"sm"` | h-8 / h-9 / h-12 / h-14 / h-16 |
| `shape` | `"circle" \| "rounded"` | `"circle"` | rounded-full / rounded-2xl |

---

### Breadcrumb

`src/components/ui/breadcrumb.tsx`

Navigation breadcrumb trail. Last item renders as plain text (current page).

```tsx
import Breadcrumb from "@/components/ui/breadcrumb";

<Breadcrumb items={[
  { label: "Tools", href: "/tools" },
  { label: "Instantly" },
]} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `{ label: string; href?: string }[]` | — | Breadcrumb segments |

---

### StatCard

`src/components/ui/stat-card.tsx`

Dashboard metric card with label, value, and optional subtitle.

```tsx
import StatCard from "@/components/ui/stat-card";

<StatCard label="Profile Views" value="1,523" sub="Last 30 days" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Metric name |
| `value` | `string` | — | Metric value |
| `sub` | `string` | — | Contextual subtitle |

---

### FormInput / FormTextarea / FormSelect

`src/components/ui/form-input.tsx`

Unified form controls with consistent styling. All accept an optional `label` prop and extend their native HTML attributes.

```tsx
import { FormInput, FormTextarea, FormSelect } from "@/components/ui/form-input";

<FormInput label="Email" type="email" placeholder="you@company.com" />
<FormTextarea label="Description" rows={4} />
<FormSelect label="Category">
  <option value="a">Option A</option>
  <option value="b">Option B</option>
</FormSelect>
```

Shared input style: `rounded-[var(--radius-sm)] border-border bg-bg focus:border-accent focus:ring-accent`

---

### StarRating

`src/components/ui/star-rating.tsx`

Interactive or readonly star rating (1-5). Client component.

```tsx
import StarRating from "@/components/ui/star-rating";

// Interactive
<StarRating value={rating} onChange={setRating} />

// Readonly
<StarRating value={4} readonly size="sm" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | — | Current rating (0-5) |
| `onChange` | `(value: number) => void` | — | Rating change handler |
| `readonly` | `boolean` | `false` | Disable interaction |
| `size` | `"sm" \| "md"` | `"md"` | Star size |

---

### ToggleSwitch

`src/components/ui/toggle-switch.tsx`

Accessible toggle switch with `role="switch"` and `aria-checked`. Client component.

```tsx
import ToggleSwitch from "@/components/ui/toggle-switch";

<ToggleSwitch
  checked={enabled}
  onChange={setEnabled}
  label="Enable notifications"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | Toggle state |
| `onChange` | `(checked: boolean) => void` | — | State change handler |
| `label` | `string` | — | Optional label text |

---

## Files Changed

### New files (8)
| File | Description |
|------|-------------|
| `src/components/ui/button.tsx` | Polymorphic Button component |
| `src/components/ui/badge.tsx` | Status/label Badge component |
| `src/components/ui/avatar.tsx` | Initials Avatar component |
| `src/components/ui/breadcrumb.tsx` | Navigation Breadcrumb component |
| `src/components/ui/stat-card.tsx` | Dashboard StatCard component |
| `src/components/ui/form-input.tsx` | FormInput, FormTextarea, FormSelect |
| `src/components/ui/star-rating.tsx` | Interactive StarRating component |
| `src/components/ui/toggle-switch.tsx` | Accessible ToggleSwitch component |

### Modified files (20)
| File | Changes |
|------|---------|
| `src/app/globals.css` | Expanded from 16 to 30+ design tokens |
| `src/components/dashboard-sidebar.tsx` | Migrated to semantic tokens |
| `src/components/ui/course-signup.tsx` | Replaced hardcoded hover hex |
| `src/app/(dashboard)/dashboard/layout.tsx` | Migrated to semantic tokens |
| `src/app/(dashboard)/dashboard/page.tsx` | Tokens + StatCard integration |
| `src/app/(dashboard)/dashboard/analytics/page.tsx` | Migrated to semantic tokens |
| `src/app/(dashboard)/dashboard/lead-magnets/page.tsx` | Tokens + Badge integration |
| `src/app/(dashboard)/dashboard/lead-magnets/new/page.tsx` | Migrated to semantic tokens |
| `src/app/(dashboard)/dashboard/leads/page.tsx` | Migrated to semantic tokens |
| `src/app/(dashboard)/dashboard/profile/page.tsx` | Migrated to semantic tokens |
| `src/app/(dashboard)/dashboard/settings/page.tsx` | Tokens + ToggleSwitch + FormInput |
| `src/app/(public)/page.tsx` | Fixed hardcoded colors + Badge |
| `src/app/(public)/agencies/page.tsx` | Fixed hardcoded colors + Badge |
| `src/app/(public)/agencies/[slug]/page.tsx` | Fixed colors + Badge + Avatar + Breadcrumb |
| `src/app/(public)/agencies/[slug]/review/review-form.tsx` | StarRating + FormInput + FormTextarea |
| `src/app/(public)/for-agencies/page.tsx` | Fixed all hardcoded hex values |
| `src/app/(public)/tools/[slug]/page.tsx` | Fixed colors + Breadcrumb |
| `src/app/(public)/tools/category/[slug]/page.tsx` | Breadcrumb integration |
| `src/app/(public)/tools/compare/[slugs]/page.tsx` | Breadcrumb integration |
| `src/app/(public)/playbooks/[slug]/page.tsx` | Breadcrumb integration |

---

## Remaining Work

The following items from the original audit are not yet addressed:

### Typography Scale
22 unique type treatments still exist. Proposed consolidation to 14 named levels (`display-hero`, `display-lg`, `heading-xl`, `body-lg`, etc.) has not been implemented yet.

### Layout Standardization
10 different max-width values and inconsistent section spacing remain. Proposed consolidation to 4 container widths and standardized section padding.

### Additional Component Extractions
These patterns are still inline and could be extracted:
- **ToolCard** — duplicated across homepage, tools directory, tools/category (3 files)
- **AgencyCard** — duplicated across homepage, agencies directory (2 files)
- **PlaybookCard** — playbooks directory
- **DataTable** — duplicated across dashboard leads, lead magnets, analytics (3 files)
- **PageHeader** — duplicated across every page (~15 files)
- **SectionHeader** — homepage, for-agencies, course sections
- **EmptyState** — no empty states exist anywhere in the app (gap)

### Animation System
Framer Motion is installed but unused. Either implement scroll-triggered animations and page transitions, or remove it to save ~45KB of JS.

### Responsive Design
No mobile navigation exists. Grid breakpoints are basic. No intentional mobile layout design beyond stacking columns.

### Accessibility
No ARIA landmarks beyond the toggle switch. No skip links. No focus ring styles. No keyboard navigation patterns defined. Touch targets not audited against 44px minimum.
