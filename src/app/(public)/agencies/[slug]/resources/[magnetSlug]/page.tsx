import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLeadMagnet } from "@/data/lead-magnets";
import { getAgencyBySlug } from "@/data/agencies";
import LeadMagnetForm from "@/components/lead-magnet-form";

export default async function LeadMagnetPublicPage({
  params,
}: {
  params: Promise<{ slug: string; magnetSlug: string }>;
}) {
  const { slug, magnetSlug } = await params;
  const magnet = getLeadMagnet(slug, magnetSlug);

  if (!magnet) notFound();

  const agency = getAgencyBySlug(slug);
  const agencyName = agency?.name ?? slug;

  return (
    <div className="flex min-h-[calc(100vh-60px)] flex-col bg-bg font-body">
      {/* Agency breadcrumb */}
      <div className="border-b border-border px-6 py-3">
        <Link
          href={`/agencies/${slug}`}
          className="text-sm font-medium text-accent no-underline hover:underline"
        >
          {agencyName}
        </Link>
      </div>

      {/* Content */}
      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-lg text-center">
          <Suspense>
            <LeadMagnetForm magnet={magnet} />
          </Suspense>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-4 text-center">
        <p className="text-xs text-text-tertiary">
          Hosted on{" "}
          <span className="font-medium text-text-secondary">
            ColdEmail.com
          </span>
          {" · "}
          <Link
            href={`/agencies/${slug}`}
            className="font-medium text-accent no-underline hover:underline"
          >
            {agencyName}
          </Link>
        </p>
      </footer>
    </div>
  );
}
