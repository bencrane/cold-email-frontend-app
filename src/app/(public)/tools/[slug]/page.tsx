import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getToolBySlug } from "@/data/tools";
import { agencies } from "@/data/agencies";
import { categories } from "@/data/categories";
import { createMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

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

  return (
    <main className="mx-auto max-w-[var(--max-width)] px-6 pb-20 pt-12">
      {/* Breadcrumb */}
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Tools", href: "/tools" },
          { label: tool.name },
        ]}
      />

      {/* Header */}
      <div className="mb-10 flex items-start gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-tag-bg text-3xl">
          {tool.icon}
        </div>
        <div>
          <h1 className="mb-1 text-3xl font-bold tracking-[-0.5px] text-text-primary">
            {tool.name}
          </h1>
          <p className="text-base text-text-secondary">{tool.tagline}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {toolCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/tools/category/${cat.slug}`}
                className="rounded-full bg-tag-bg px-3 py-1 text-xs font-medium text-tag-text no-underline hover:text-text-primary"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Main Content */}
        <div className="space-y-10 lg:col-span-2">
          {/* Overview */}
          <section>
            <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
              Overview
            </h2>
            <p className="text-[15px] leading-[1.7] text-text-secondary">
              {tool.description}
            </p>
          </section>

          {/* Pros & Cons */}
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-[var(--radius)] border border-border bg-surface p-6">
              <h3 className="mb-4 text-base font-semibold text-success-text">
                What&apos;s Good
              </h3>
              <ul className="space-y-2.5">
                {tool.prosAndCons.good.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="mt-0.5 text-success">✓</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[var(--radius)] border border-border bg-surface p-6">
              <h3 className="mb-4 text-base font-semibold text-warning-text">
                Watch Out For
              </h3>
              <ul className="space-y-2.5">
                {tool.prosAndCons.watchOut.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="mt-0.5 text-warning">!</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
              Use Cases
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {tool.useCases.map((uc) => (
                <div key={uc.title} className="rounded-[var(--radius)] border border-border bg-surface p-5">
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

          {/* Features */}
          <section>
            <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
              Features
            </h2>
            <div className="flex flex-wrap gap-2">
              {tool.features.map((f) => (
                <span key={f} className="rounded-full bg-tag-bg px-3 py-1.5 text-sm text-tag-text">
                  {f}
                </span>
              ))}
            </div>
          </section>

          {/* Comparisons */}
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
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Pricing */}
          <div className="rounded-[var(--radius)] border border-border bg-surface p-6">
            <h3 className="mb-4 text-base font-semibold">Pricing</h3>
            <div className="space-y-3">
              {tool.pricing.map((tier) => (
                <div key={tier.plan} className="rounded-lg bg-tag-bg p-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-semibold text-text-primary">
                      {tier.plan}
                    </span>
                    <span className="text-sm font-bold text-text-primary">
                      {tier.price}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {tier.features.map((f) => (
                      <li key={f} className="text-xs text-text-secondary">
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
          </div>

          {/* Quick Facts */}
          <div className="rounded-[var(--radius)] border border-border bg-surface p-6">
            <h3 className="mb-4 text-base font-semibold">Quick Facts</h3>
            <dl className="space-y-3 text-sm">
              {tool.founded && (
                <>
                  <dt className="text-text-tertiary">Founded</dt>
                  <dd className="font-medium text-text-primary">{tool.founded}</dd>
                </>
              )}
              {tool.bestFor && (
                <>
                  <dt className="text-text-tertiary">Best For</dt>
                  <dd className="font-medium text-text-primary">{tool.bestFor}</dd>
                </>
              )}
            </dl>
          </div>

          {/* Agencies Using This Tool */}
          {agenciesUsingTool.length > 0 && (
            <div className="rounded-[var(--radius)] border border-border bg-surface p-6">
              <h3 className="mb-4 text-base font-semibold">
                Agencies Using {tool.name}
              </h3>
              <div className="space-y-3">
                {agenciesUsingTool.map((agency) => (
                  <Link
                    key={agency.slug}
                    href={`/agencies/${agency.slug}`}
                    className="flex items-center gap-3 no-underline"
                  >
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ background: agency.color }}
                    >
                      {agency.logo}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">
                        {agency.name}
                      </div>
                      <div className="text-xs text-text-tertiary">
                        {agency.tagline}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
