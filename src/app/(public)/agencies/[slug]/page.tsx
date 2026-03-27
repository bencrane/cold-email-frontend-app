import Link from "next/link";
import { notFound } from "next/navigation";
import { agencies, getAgencyBySlug } from "@/data/agencies";
import { getToolBySlug } from "@/data/tools";
import { getApprovedReviews } from "@/data/reviews";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";

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
    title: `${agency.name} — Cold Email Agency`,
    description: agency.tagline,
    path: `/agencies/${agency.slug}`,
  });
}

export default async function AgencyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const agency = getAgencyBySlug(slug);
  if (!agency) notFound();

  const stackTools = agency.techStack
    .map((s) => getToolBySlug(s))
    .filter(Boolean);

  const approvedReviews = getApprovedReviews(slug);

  return (
    <main className="mx-auto max-w-[var(--max-width)] px-6 pb-20 pt-12">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm text-text-tertiary">
        <Link href="/agencies" className="text-text-tertiary no-underline hover:text-text-secondary">
          Agencies
        </Link>
        <span>/</span>
        <span className="text-text-primary">{agency.name}</span>
      </div>

      {/* Header */}
      <div className="mb-10 flex items-start gap-5">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl font-bold text-white"
          style={{ background: agency.color }}
        >
          {agency.logo}
        </div>
        <div>
          <h1 className="mb-1 text-3xl font-bold tracking-[-0.5px] text-text-primary">
            {agency.name}
            {agency.verified && (
              <span className="ml-3 inline-block rounded-full bg-green-50 px-2.5 py-0.5 align-middle text-xs font-semibold text-green-700">
                Verified
              </span>
            )}
          </h1>
          <p className="text-base text-text-secondary">{agency.tagline}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-10 flex flex-wrap gap-3">
        {agency.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[var(--radius-sm)] bg-tag-bg px-5 py-3"
          >
            <div className="text-[10px] uppercase tracking-[0.8px] text-text-tertiary">
              {stat.label}
            </div>
            <div className="mt-1 text-lg font-bold tracking-[-0.3px] text-text-primary">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Main Content */}
        <div className="space-y-10 lg:col-span-2">
          {/* About */}
          <section>
            <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">About</h2>
            <p className="text-[15px] leading-[1.7] text-text-secondary">
              {agency.description}
            </p>
          </section>

          {/* Services */}
          {agency.services.length > 0 && (
            <section>
              <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">Services</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {agency.services.map((service) => (
                  <div key={service.title} className="rounded-[var(--radius)] border border-border bg-surface p-5">
                    <div className="mb-2 text-lg">{service.icon}</div>
                    <h3 className="mb-1 text-sm font-semibold text-text-primary">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-[1.5] text-text-secondary">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Case Studies */}
          {agency.caseStudies.length > 0 && (
            <section>
              <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">Case Studies</h2>
              <div className="space-y-4">
                {agency.caseStudies.map((cs) => (
                  <div key={cs.headline} className="rounded-[var(--radius)] border border-border bg-surface p-6">
                    <div className="mb-1 text-xs font-semibold uppercase tracking-[0.8px] text-accent">
                      {cs.label}
                    </div>
                    <h3 className="mb-3 text-lg font-bold tracking-[-0.3px] text-text-primary">
                      {cs.headline}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {cs.metrics.map((m) => (
                        <span key={m} className="text-sm text-text-secondary">
                          • {m}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Testimonials */}
          {(agency.testimonials.length > 0 || approvedReviews.length > 0) && (
            <section>
              <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">Testimonials</h2>
              <div className="space-y-4">
                {agency.testimonials.map((t) => (
                  <div key={t.name} className="rounded-[var(--radius)] border border-border bg-surface p-6">
                    <p className="mb-4 font-display text-lg italic leading-[1.5] text-text-primary">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div>
                      <div className="text-sm font-semibold text-text-primary">
                        {t.name}
                      </div>
                      <div className="text-xs text-text-tertiary">
                        {t.title}, {t.company}
                      </div>
                    </div>
                  </div>
                ))}
                {approvedReviews.map((r) => (
                  <div key={r.id} className="rounded-[var(--radius)] border border-border bg-surface p-6">
                    {r.rating && (
                      <div className="mb-2 text-sm text-yellow-500">
                        {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                      </div>
                    )}
                    <p className="mb-4 font-display text-lg italic leading-[1.5] text-text-primary">
                      &ldquo;{r.text}&rdquo;
                    </p>
                    <div>
                      <div className="text-sm font-semibold text-text-primary">
                        {r.name}
                      </div>
                      <div className="text-xs text-text-tertiary">
                        {r.jobTitle}, {r.company}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Booking */}
          {agency.bookingUrl && (
            <div className="rounded-[var(--radius)] border border-border bg-surface p-6">
              <h3 className="mb-3 text-base font-semibold">Book a Call</h3>
              <p className="mb-4 text-sm text-text-secondary">
                Schedule a discovery call to discuss your outbound needs.
              </p>
              <a
                href={agency.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-[var(--radius-sm)] bg-text-primary py-2.5 text-center text-sm font-semibold text-white no-underline transition-colors hover:bg-[#2A2D35]"
              >
                Book Discovery Call →
              </a>
            </div>
          )}

          {/* Tech Stack */}
          {stackTools.length > 0 && (
            <div className="rounded-[var(--radius)] border border-border bg-surface p-6">
              <h3 className="mb-4 text-base font-semibold">Tech Stack</h3>
              <div className="space-y-3">
                {stackTools.map((tool) => tool && (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="flex items-center gap-3 no-underline"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-tag-bg text-base">
                      {tool.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">
                        {tool.name}
                      </div>
                      <div className="text-xs text-text-tertiary">
                        {tool.categories[0]
                          ?.split("-")
                          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                          .join(" ")}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Team */}
          {agency.team.length > 0 && (
            <div className="rounded-[var(--radius)] border border-border bg-surface p-6">
              <h3 className="mb-4 text-base font-semibold">Team</h3>
              <div className="space-y-3">
                {agency.team.map((member) => (
                  <div key={member.name} className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ background: agency.color }}
                    >
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">
                        {member.name}
                      </div>
                      <div className="text-xs text-text-tertiary">
                        {member.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
