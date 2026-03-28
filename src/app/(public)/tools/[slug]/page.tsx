import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getToolBySlug } from "@/data/tools";
import { agencies } from "@/data/agencies";
import { categories } from "@/data/categories";
import { createMetadata } from "@/lib/seo";
import { getToolReviewStats } from "@/data/tool-reviews";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";
import ToolReviewsSection from "./tool-reviews-section";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return createMetadata({
    title: `${tool.name} — Cold Email Tool Review`,
    description: tool.tagline,
    path: `/tools/${tool.slug}`,
  });
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const toolCategories = categories.filter((c) =>
    tool.categories.includes(c.slug)
  );
  const agenciesUsingTool = agencies.filter((a) =>
    a.techStack.includes(tool.slug)
  );
  const relatedComparisons = tool.comparisons.map((c) => ({
    ...c,
    other: getToolBySlug(c.tool),
  }));
  const reviewStats = getToolReviewStats(tool.slug);

  return (
    <main className="mx-auto max-w-[var(--max-width)] px-6 pb-20 pt-12">
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Tools", href: "/tools" },
          { label: tool.name },
        ]}
      />

      {/* ── HERO BLOCK ── */}
      <div className="mb-12">
        <div className="flex items-start gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-tag-bg text-3xl">
            {tool.icon}
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="mb-1 text-3xl font-bold tracking-[-0.5px] text-text-primary">
              {tool.name}
            </h1>
            <p className="mb-4 text-base text-text-secondary">{tool.tagline}</p>

            {/* Metadata strip: categories, facts, ratings all in one row */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {toolCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/tools/category/${cat.slug}`}
                  className="rounded-full bg-tag-bg px-3 py-1 text-xs font-medium text-tag-text no-underline hover:text-text-primary"
                >
                  {cat.name}
                </Link>
              ))}

              {/* Separator between tags and facts */}
              {(tool.founded || tool.g2 || reviewStats) && (
                <span className="text-border">|</span>
              )}

              {tool.founded && (
                <span className="text-xs text-text-tertiary">
                  Founded {tool.founded}
                </span>
              )}
              {tool.g2 && (
                <a
                  href={tool.g2.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-text-tertiary no-underline hover:text-text-secondary"
                >
                  {tool.g2.rating}/5 on G2
                </a>
              )}
              {reviewStats && (
                <span className="text-xs text-text-tertiary">
                  {reviewStats.average}/5 on ColdEmail.com
                </span>
              )}
            </div>
          </div>

          {/* CTA pinned right */}
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 rounded-[var(--radius-sm)] bg-text-primary px-5 py-2.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-text-primary-hover sm:block"
          >
            Visit {tool.name} →
          </a>
        </div>

        {/* Mobile CTA */}
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full rounded-[var(--radius-sm)] bg-text-primary py-2.5 text-center text-sm font-semibold text-white no-underline transition-colors hover:bg-text-primary-hover sm:hidden"
        >
          Visit {tool.name} →
        </a>
      </div>

      {/* ── CONTENT ── */}
      <div className="mx-auto max-w-[820px] space-y-12">

        {/* 1. OVERVIEW — what is this tool */}
        <section>
          <p className="text-[15px] leading-[1.7] text-text-secondary">
            {tool.description}
          </p>
          {tool.bestFor && (
            <p className="mt-3 text-sm text-text-tertiary">
              <span className="font-medium text-text-secondary">Best for:</span>{" "}
              {tool.bestFor}
            </p>
          )}
        </section>

        {/* 2. PROS & CONS — quick gut check */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-[var(--radius)] border border-border bg-surface p-6">
            <h2 className="mb-4 text-base font-semibold text-success-text">
              What&apos;s Good
            </h2>
            <ul className="space-y-2.5">
              {tool.prosAndCons.good.map((pro) => (
                <li
                  key={pro}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <span className="mt-0.5 text-success">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius)] border border-border bg-surface p-6">
            <h2 className="mb-4 text-base font-semibold text-warning-text">
              Watch Out For
            </h2>
            <ul className="space-y-2.5">
              {tool.prosAndCons.watchOut.map((con) => (
                <li
                  key={con}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <span className="mt-0.5 text-warning">!</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. USE CASES — what can I do with it */}
        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {tool.useCases.map((uc) => (
              <div
                key={uc.title}
                className="rounded-[var(--radius)] border border-border bg-surface p-5"
              >
                <h3 className="mb-2 text-sm font-semibold text-text-primary">
                  {uc.title}
                </h3>
                <p className="text-sm leading-[1.5] text-text-secondary">
                  {uc.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. FEATURES — what it has */}
        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
            Features
          </h2>
          <div className="flex flex-wrap gap-2">
            {tool.features.map((f) => (
              <span
                key={f}
                className="rounded-full bg-tag-bg px-3 py-1.5 text-sm text-tag-text"
              >
                {f}
              </span>
            ))}
          </div>
        </section>

        {/* 5. PRICING — now you know what you're paying for */}
        <section>
          <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
            Pricing
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {tool.pricing.map((tier, i) => (
              <div
                key={tier.plan}
                className={`rounded-[var(--radius)] border bg-surface p-5 ${
                  i === 1
                    ? "border-accent shadow-[0_0_0_1px_var(--accent)]"
                    : "border-border"
                }`}
              >
                <div className="mb-1 text-sm font-semibold text-text-primary">
                  {tier.plan}
                </div>
                <div className="mb-3 text-2xl font-bold tracking-[-0.5px] text-text-primary">
                  {tier.price}
                </div>
                <ul className="space-y-1.5">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-0.5 text-xs text-text-tertiary">
                        ·
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block w-full rounded-[var(--radius-sm)] bg-text-primary py-2.5 text-center text-sm font-semibold text-white no-underline transition-colors hover:bg-text-primary-hover"
          >
            Visit {tool.name} →
          </a>
        </section>

        {/* 6. COMPARISONS — how does it stack up */}
        {relatedComparisons.length > 0 && (
          <section>
            <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
              Comparisons
            </h2>
            <div className="space-y-3">
              {relatedComparisons.map((comp) => (
                <Link
                  key={comp.tool}
                  href={`/tools/compare/${[tool.slug, comp.tool].sort().join("-vs-")}`}
                  className="block rounded-[var(--radius)] border border-border bg-surface p-5 no-underline transition-all hover:border-border-hover hover:shadow-[var(--card-shadow)]"
                >
                  <div className="mb-1 text-sm font-semibold text-text-primary">
                    {tool.name} vs {comp.other?.name ?? comp.tool}
                  </div>
                  <p className="text-sm text-text-secondary">{comp.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 7. REVIEWS — social proof validates the decision */}
        <ToolReviewsSection tool={tool} />

        {/* 8. AGENCIES — who else uses this, discovery/interlinking */}
        {agenciesUsingTool.length > 0 && (
          <section>
            <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
              Agencies Using {tool.name}
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {agenciesUsingTool.map((agency) => (
                <Link
                  key={agency.slug}
                  href={`/agencies/${agency.slug}`}
                  className="flex items-center gap-3 rounded-[var(--radius)] border border-border bg-surface p-4 no-underline transition-all hover:border-border-hover hover:shadow-[var(--card-shadow)]"
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: agency.color }}
                  >
                    {agency.logo}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-text-primary">
                      {agency.name}
                    </div>
                    <div className="truncate text-xs text-text-tertiary">
                      {agency.tagline}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
