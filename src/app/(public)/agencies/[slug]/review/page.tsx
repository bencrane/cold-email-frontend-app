import { notFound } from "next/navigation";
import { agencies, getAgencyBySlug } from "@/data/agencies";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import ReviewForm from "./review-form";

export function generateStaticParams() {
  return agencies.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const agency = getAgencyBySlug(slug);
  if (!agency) return {};
  return createMetadata({
    title: `${agency.name} — Leave a Review`,
    description: `Leave a review for ${agency.name} on ColdEmail.com`,
    path: `/agencies/${agency.slug}/review`,
  });
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const agency = getAgencyBySlug(slug);
  if (!agency) notFound();

  return (
    <main className="mx-auto max-w-xl px-6 pb-20 pt-12">
      {/* Agency header */}
      <div className="mb-8 flex items-center gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl font-bold text-white"
          style={{ background: agency.color }}
        >
          {agency.logo}
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-[-0.5px] text-text-primary">
            Leave a Review
          </h1>
          <p className="text-sm text-text-secondary">
            Share your experience working with {agency.name}
          </p>
        </div>
      </div>

      <ReviewForm agencyName={agency.name} agencySlug={agency.slug} />
    </main>
  );
}
