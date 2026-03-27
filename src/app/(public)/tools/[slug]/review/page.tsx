import { notFound } from "next/navigation";
import { tools, getToolBySlug } from "@/data/tools";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import ToolReviewForm from "./review-form";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
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
    title: `Review ${tool.name}`,
    description: `Leave a review for ${tool.name} on ColdEmail.com`,
    path: `/tools/${tool.slug}/review`,
  });
}

export default async function ToolReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  return (
    <main className="mx-auto max-w-xl px-6 pb-20 pt-12">
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-tag-bg text-3xl">
          {tool.icon}
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-[-0.5px] text-text-primary">
            Review {tool.name}
          </h1>
          <p className="text-sm text-text-secondary">
            Share your experience using {tool.name}
          </p>
        </div>
      </div>

      <ToolReviewForm toolName={tool.name} toolSlug={tool.slug} />
    </main>
  );
}
