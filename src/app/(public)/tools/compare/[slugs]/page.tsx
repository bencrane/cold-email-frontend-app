import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getToolBySlug } from "@/data/tools";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { slugs: string }[] = [];
  for (const tool of tools) {
    for (const comp of tool.comparisons) {
      const pair = [tool.slug, comp.tool].sort().join("-vs-");
      if (!params.some((p) => p.slugs === pair)) {
        params.push({ slugs: pair });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slugs: string }>;
}): Promise<Metadata> {
  const { slugs } = await params;
  const [slugA, slugB] = slugs.split("-vs-");
  const toolA = getToolBySlug(slugA);
  const toolB = getToolBySlug(slugB);
  if (!toolA || !toolB) return {};
  return createMetadata({
    title: `${toolA.name} vs ${toolB.name}`,
    description: `Compare ${toolA.name} and ${toolB.name} — pricing, features, deliverability, and which is best for your setup.`,
    path: `/tools/compare/${slugs}`,
  });
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slugs: string }>;
}) {
  const { slugs } = await params;
  const [slugA, slugB] = slugs.split("-vs-");
  const toolA = getToolBySlug(slugA);
  const toolB = getToolBySlug(slugB);
  if (!toolA || !toolB) notFound();

  return (
    <main className="mx-auto max-w-[var(--max-width)] px-6 pb-20 pt-12">
      <div className="mb-8 flex items-center gap-2 text-sm text-text-tertiary">
        <Link href="/tools" className="text-text-tertiary no-underline hover:text-text-secondary">Tools</Link>
        <span>/</span>
        <span className="text-text-primary">Compare</span>
      </div>

      <h1 className="mb-3 font-display text-[clamp(32px,4vw,44px)] font-normal tracking-[-1px] text-text-primary">
        {toolA.name} vs {toolB.name}
      </h1>
      <p className="mb-10 max-w-[560px] text-base leading-[1.65] text-text-secondary">
        A side-by-side comparison to help you choose the right tool for your outbound stack.
      </p>

      {/* Comparison Table */}
      <div className="mb-10 overflow-hidden rounded-[var(--radius)] border border-border bg-surface">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-tag-bg">
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-text-tertiary" />
              <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                <span className="mr-2 text-xl">{toolA.icon}</span> {toolA.name}
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">
                <span className="mr-2 text-xl">{toolB.icon}</span> {toolB.name}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="px-6 py-4 font-medium text-text-tertiary">Tagline</td>
              <td className="px-6 py-4 text-text-secondary">{toolA.tagline}</td>
              <td className="px-6 py-4 text-text-secondary">{toolB.tagline}</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-6 py-4 font-medium text-text-tertiary">Best For</td>
              <td className="px-6 py-4 text-text-secondary">{toolA.bestFor ?? "—"}</td>
              <td className="px-6 py-4 text-text-secondary">{toolB.bestFor ?? "—"}</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-6 py-4 font-medium text-text-tertiary">Starting Price</td>
              <td className="px-6 py-4 font-semibold text-text-primary">{toolA.pricing[0]?.price}</td>
              <td className="px-6 py-4 font-semibold text-text-primary">{toolB.pricing[0]?.price}</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-6 py-4 font-medium text-text-tertiary">Founded</td>
              <td className="px-6 py-4 text-text-secondary">{toolA.founded ?? "—"}</td>
              <td className="px-6 py-4 text-text-secondary">{toolB.founded ?? "—"}</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-6 py-4 align-top font-medium text-text-tertiary">Pros</td>
              <td className="px-6 py-4">
                <ul className="space-y-1">
                  {toolA.prosAndCons.good.map((p) => (
                    <li key={p} className="text-sm text-text-secondary">✓ {p}</li>
                  ))}
                </ul>
              </td>
              <td className="px-6 py-4">
                <ul className="space-y-1">
                  {toolB.prosAndCons.good.map((p) => (
                    <li key={p} className="text-sm text-text-secondary">✓ {p}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 align-top font-medium text-text-tertiary">Cons</td>
              <td className="px-6 py-4">
                <ul className="space-y-1">
                  {toolA.prosAndCons.watchOut.map((c) => (
                    <li key={c} className="text-sm text-text-secondary">! {c}</li>
                  ))}
                </ul>
              </td>
              <td className="px-6 py-4">
                <ul className="space-y-1">
                  {toolB.prosAndCons.watchOut.map((c) => (
                    <li key={c} className="text-sm text-text-secondary">! {c}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <Link href={`/tools/${toolA.slug}`} className="rounded-[var(--radius-sm)] border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-primary no-underline transition-colors hover:border-border-hover">
          Read {toolA.name} Review →
        </Link>
        <Link href={`/tools/${toolB.slug}`} className="rounded-[var(--radius-sm)] border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-primary no-underline transition-colors hover:border-border-hover">
          Read {toolB.name} Review →
        </Link>
      </div>
    </main>
  );
}
