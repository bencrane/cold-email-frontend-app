import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

const playbooksData: Record<
  string,
  { title: string; tag: string; readTime: string; description: string }
> = {
  "growthengine-8m-emails": {
    title: "How GrowthEngineX Sends 8M Cold Emails a Month",
    tag: "Agency Playbook",
    readTime: "12 min read",
    description:
      "Inside the infrastructure, tooling, and Clay workflows that power one of the highest-volume outbound agencies in the game.",
  },
  "instantly-vs-smartlead-2026": {
    title: "Instantly vs SmartLead: The 2026 Breakdown",
    tag: "Tool Breakdown",
    readTime: "8 min read",
    description:
      "Pricing, deliverability, infrastructure control, and which one actually fits your setup. No affiliate bias.",
  },
};

export function generateStaticParams() {
  return Object.keys(playbooksData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pb = playbooksData[slug];
  if (!pb) return {};
  return createMetadata({
    title: pb.title,
    description: pb.description,
    path: `/playbooks/${slug}`,
  });
}

export default async function PlaybookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pb = playbooksData[slug];

  if (!pb) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-[var(--max-width)] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary">Playbook not found</h1>
          <p className="mt-2 text-sm text-text-secondary">
            This playbook doesn&apos;t exist yet.
          </p>
          <Link href="/playbooks" className="mt-4 inline-block text-sm font-medium text-accent no-underline">
            ← Back to Playbooks
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[720px] px-6 pb-20 pt-12">
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Playbooks", href: "/playbooks" },
        ]}
      />

      <div className="mb-2 text-[11px] font-semibold uppercase tracking-[1px] text-accent">
        {pb.tag}
      </div>
      <h1 className="mb-4 font-display text-[clamp(32px,4vw,44px)] font-normal leading-[1.15] tracking-[-1px] text-text-primary">
        {pb.title}
      </h1>
      <div className="mb-10 text-sm text-text-tertiary">{pb.readTime}</div>

      <div className="prose prose-gray max-w-none">
        <p className="text-[15px] leading-[1.7] text-text-secondary">
          {pb.description}
        </p>
        <div className="mt-10 rounded-[var(--radius)] border border-border bg-tag-bg p-8 text-center">
          <p className="text-sm text-text-secondary">
            Full playbook content coming soon. This page will render MDX content
            from <code>src/content/playbooks/</code>.
          </p>
        </div>
      </div>
    </main>
  );
}
