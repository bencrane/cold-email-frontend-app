import Link from "next/link";
import { notFound } from "next/navigation";
import { agencies, getAgencyBySlug } from "@/data/agencies";
import { getToolBySlug } from "@/data/tools";
import { getApprovedReviews } from "@/data/reviews";
import { createMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/ui/breadcrumb";
import Badge from "@/components/ui/badge";
import Avatar from "@/components/ui/avatar";
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
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Agencies", href: "/agencies" },
          { label: agency.name },
        ]}
      />

      {/* ── HERO BLOCK ── */}
      <div className="mb-12">
        <div className="flex items-start gap-5">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl font-bold text-white"
            style={{ background: agency.color }}
          >
            {agency.logo}
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="mb-1 text-3xl font-bold tracking-[-0.5px] text-text-primary">
              {agency.name}
              {agency.verified && (
                <Badge variant="verified" className="ml-3 align-middle">
                  Verified
                </Badge>
              )}
            </h1>
            <p className="mb-4 text-base text-text-secondary">
              {agency.tagline}
            </p>

            {/* Stats inline */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {agency.stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="text-lg font-bold tracking-[-0.3px] text-text-primary">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-[0.5px] text-text-tertiary">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA pinned right */}
          {agency.bookingUrl && (
            <a
              href={agency.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden shrink-0 rounded-[var(--radius-sm)] bg-text-primary px-5 py-2.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-text-primary-hover sm:block"
            >
              Book Discovery Call →
            </a>
          )}
        </div>

        {/* Mobile CTA */}
        {agency.bookingUrl && (
          <a
            href={agency.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block w-full rounded-[var(--radius-sm)] bg-text-primary py-2.5 text-center text-sm font-semibold text-white no-underline transition-colors hover:bg-text-primary-hover sm:hidden"
          >
            Book Discovery Call →
          </a>
        )}
      </div>

      {/* ── CONTENT ── */}
      <div className="mx-auto max-w-[820px] space-y-12">

        {/* 1. ABOUT — who they are */}
        <section>
          <p className="text-[15px] leading-[1.7] text-text-secondary">
            {agency.description}
          </p>
        </section>

        {/* 2. SERVICES — what they do */}
        {agency.services.length > 0 && (
          <section>
            <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
              Services
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {agency.services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[var(--radius)] border border-border bg-surface p-5"
                >
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

        {/* 3. CASE STUDIES — proof it works */}
        {agency.caseStudies.length > 0 && (
          <section>
            <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
              Case Studies
            </h2>
            <div className="space-y-4">
              {agency.caseStudies.map((cs) => (
                <div
                  key={cs.headline}
                  className="rounded-[var(--radius)] border border-border bg-surface p-6"
                >
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

        {/* 4. TECH STACK — what tools they use (horizontal, not sidebar) */}
        {stackTools.length > 0 && (
          <section>
            <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stackTools.map(
                (tool) =>
                  tool && (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="flex items-center gap-3 rounded-[var(--radius)] border border-border bg-surface p-4 no-underline transition-all hover:border-border-hover hover:shadow-[var(--card-shadow)]"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-tag-bg text-base">
                        {tool.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-text-primary">
                          {tool.name}
                        </div>
                        <div className="truncate text-xs text-text-tertiary">
                          {tool.categories[0]
                            ?.split("-")
                            .map(
                              (w) => w.charAt(0).toUpperCase() + w.slice(1),
                            )
                            .join(" ")}
                        </div>
                      </div>
                    </Link>
                  ),
              )}
            </div>
          </section>
        )}

        {/* 5. TEAM — who you'll work with */}
        {agency.team.length > 0 && (
          <section>
            <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
              Team
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {agency.team.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center rounded-[var(--radius)] border border-border bg-surface p-5 text-center"
                >
                  <Avatar
                    initials={member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                    color={agency.color}
                    size="lg"
                  />
                  <div className="mt-3 text-sm font-medium text-text-primary">
                    {member.name}
                  </div>
                  <div className="text-xs text-text-tertiary">
                    {member.role}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. TESTIMONIALS — social proof */}
        {(agency.testimonials.length > 0 || approvedReviews.length > 0) && (
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold tracking-[-0.3px]">
                Testimonials
              </h2>
              <Link
                href={`/agencies/${agency.slug}/review`}
                className="text-sm font-medium text-accent no-underline hover:underline"
              >
                Leave a Review →
              </Link>
            </div>
            <div className="space-y-4">
              {agency.testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-[var(--radius)] border border-border bg-surface p-6"
                >
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
                <div
                  key={r.id}
                  className="rounded-[var(--radius)] border border-border bg-surface p-6"
                >
                  {r.rating && (
                    <div className="mb-2 text-sm text-star-hover">
                      {"★".repeat(r.rating)}
                      {"☆".repeat(5 - r.rating)}
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

        {/* Bottom CTA */}
        {agency.bookingUrl && (
          <section className="rounded-[var(--radius)] border border-border bg-surface p-8 text-center">
            <h2 className="mb-2 text-lg font-semibold text-text-primary">
              Ready to scale your outbound?
            </h2>
            <p className="mb-4 text-sm text-text-secondary">
              Schedule a discovery call with {agency.name} to discuss your
              goals.
            </p>
            <a
              href={agency.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-[var(--radius-sm)] bg-text-primary px-6 py-2.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-text-primary-hover"
            >
              Book Discovery Call →
            </a>
          </section>
        )}
      </div>
    </main>
  );
}
