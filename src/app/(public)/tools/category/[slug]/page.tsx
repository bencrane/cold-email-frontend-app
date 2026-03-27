import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getToolBySlug } from "@/data/tools";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return createMetadata({
    title: `${category.name} Tools`,
    description: category.description,
    path: `/tools/category/${slug}`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryTools = category.tools
    .map((s) => getToolBySlug(s))
    .filter(Boolean);

  return (
    <main className="mx-auto max-w-[var(--max-width)] px-6 pb-20 pt-12">
      <div className="mb-8 flex items-center gap-2 text-sm text-text-tertiary">
        <Link href="/tools" className="text-text-tertiary no-underline hover:text-text-secondary">Tools</Link>
        <span>/</span>
        <span className="text-text-primary">{category.name}</span>
      </div>

      <h1 className="mb-3 font-display text-[clamp(32px,4vw,44px)] font-normal tracking-[-1px] text-text-primary">
        {category.name} Tools
      </h1>
      <p className="mb-10 max-w-[560px] text-base leading-[1.65] text-text-secondary">
        {category.description}
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {categoryTools.map((tool) => tool && (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="flex flex-col gap-3 rounded-[var(--radius)] border border-border bg-surface p-6 no-underline transition-all duration-200 hover:-translate-y-px hover:border-border-hover hover:shadow-[var(--card-shadow-hover)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-tag-bg text-xl">
              {tool.icon}
            </div>
            <h3 className="text-base font-semibold tracking-[-0.2px] text-text-primary">
              {tool.name}
            </h3>
            <p className="text-sm leading-[1.5] text-text-secondary">
              {tool.tagline}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
