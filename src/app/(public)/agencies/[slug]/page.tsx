import Link from "next/link";
import { notFound } from "next/navigation";
import { agencies, getAgencyBySlug } from "@/data/agencies";
import { createMetadata } from "@/lib/seo";
import Badge from "@/components/ui/badge";
import Avatar from "@/components/ui/avatar";
import LinkedInPostCard from "@/components/linkedin/LinkedInPostCard";
import type { Metadata } from "next";
import { allLeadMagnets } from "@/data/lead-magnets";
import type { LinkedInPost, LinkedInCreator } from "@/lib/types";

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

// Dummy LinkedIn posts for agency profile pages
const dummyCreator: LinkedInCreator = {
  slug: "marcus-chen",
  name: "Marcus Chen",
  initials: "MC",
  headline: "Founder & CEO at GrowthEngineX",
  linkedinUrl: "https://linkedin.com/in/marcuschen",
  active: true,
};

const dummyPosts: LinkedInPost[] = [
  {
    id: "gx-post-1",
    creatorSlug: "marcus-chen",
    linkedinPostUrl: "https://linkedin.com/posts/marcuschen-1",
    content:
      "We just hit 8M cold emails sent in a single month. Here's what nobody tells you about operating at that scale: your infrastructure becomes your moat. Not your copy, not your list, not your tool stack. The infrastructure.",
    likes: 847,
    comments: 63,
    topic: "Infrastructure",
    postedAt: "2026-03-28T10:00:00Z",
    fetchedAt: "2026-04-01T00:00:00Z",
  },
  {
    id: "gx-post-2",
    creatorSlug: "marcus-chen",
    linkedinPostUrl: "https://linkedin.com/posts/marcuschen-2",
    content:
      "Clay changed our entire enrichment workflow. We used to spend 3 hours per campaign on list building. Now it's 20 minutes. The ROI on Clay alone paid for our entire tool stack this quarter.",
    likes: 512,
    comments: 41,
    topic: "Clay & Enrichment",
    postedAt: "2026-03-21T14:00:00Z",
    fetchedAt: "2026-04-01T00:00:00Z",
  },
  {
    id: "gx-post-3",
    creatorSlug: "marcus-chen",
    linkedinPostUrl: "https://linkedin.com/posts/marcuschen-3",
    content:
      "Deliverability tip that saved one of our clients from a 30% drop in inbox placement: stop sending from new domains on Mondays. Warm them Tuesday through Thursday. The spam filters are more aggressive at the start of the week.",
    likes: 1203,
    comments: 89,
    topic: "Deliverability",
    postedAt: "2026-03-14T09:00:00Z",
    fetchedAt: "2026-04-01T00:00:00Z",
  },
  {
    id: "gx-post-4",
    creatorSlug: "marcus-chen",
    linkedinPostUrl: "https://linkedin.com/posts/marcuschen-4",
    content:
      "The best cold email subject lines aren't clever. They're specific. 'Quick question about [company]'s Q2 hiring push' beats 'Unlock your growth potential' every single time. Specificity signals research. Research signals respect.",
    likes: 634,
    comments: 52,
    topic: "Copywriting",
    postedAt: "2026-03-07T11:00:00Z",
    fetchedAt: "2026-04-01T00:00:00Z",
  },
];

export default async function AgencyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const agency = getAgencyBySlug(slug);
  if (!agency) notFound();

  const otherAgencies = agencies.filter((a) => a.slug !== agency.slug).slice(0, 3);
  const resources = allLeadMagnets.filter(
    (lm) => lm.agencySlug === agency.slug && lm.status === "live"
  );

  return (
    <main className="mx-auto max-w-[var(--max-width)] px-6 pb-20 pt-12">
      {/* ── 1. HEADER + ABOUT + INDUSTRY PILLS ── */}
      <div className="mb-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Left: agency info */}
          <div className="min-w-0 flex-1">
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

                {/* Stats row */}
                <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2">
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

                {/* Social links */}
                <div className="flex items-center gap-3">
                  {agency.websiteUrl && (
                    <a
                      href={agency.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-text-tertiary no-underline transition-colors hover:text-text-secondary"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      Website
                    </a>
                  )}
                  {agency.linkedinUrl && (
                    <a
                      href={agency.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-text-tertiary no-underline transition-colors hover:text-text-secondary"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* About */}
            <div className="mt-6">
              <p className="text-[15px] leading-[1.7] text-text-secondary">
                {agency.description}
              </p>
            </div>

            {/* Industry pills */}
            {agency.industries && agency.industries.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {agency.industries.map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full bg-tag-bg px-3 py-1 text-xs font-medium text-tag-text"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right: hero video/image */}
          {agency.heroImage && (
            <div className="w-full shrink-0 lg:w-[420px]">
              <a
                href={agency.heroVideoUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-[var(--radius)] border border-border no-underline"
              >
                <img
                  src={agency.heroImage}
                  alt={`${agency.name} video`}
                  className="block aspect-video w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                />
                {agency.heroVideoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-200 group-hover:scale-110">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--text-primary)">
                        <polygon points="6 3 20 12 6 21 6 3" />
                      </svg>
                    </div>
                  </div>
                )}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* ── 2. TEAM ── */}
      {agency.team.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
            Team
          </h2>
          <div className="flex flex-wrap gap-4">
            {agency.team.slice(0, 4).map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-3 rounded-[var(--radius)] border border-border bg-surface px-5 py-4"
              >
                <Avatar
                  initials={member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                  color={agency.color}
                  size="sm"
                />
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
        </section>
      )}

      {/* ── 3. SERVICES ── */}
      {agency.services.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
            Services
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {agency.services.slice(0, 4).map((service) => (
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

      {/* ── 4. LINKEDIN POSTS ── */}
      <section className="mb-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl font-semibold tracking-[-0.3px]">
            Recent posts
          </h2>
          <a
            href={agency.linkedinUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent no-underline hover:underline"
          >
            View on LinkedIn →
          </a>
        </div>
        <div className="scrollbar-hide flex gap-4 overflow-x-auto">
          {dummyPosts.map((post) => (
            <LinkedInPostCard
              key={post.id}
              post={post}
              creator={dummyCreator}
              variant="compact"
            />
          ))}
        </div>
      </section>

      {/* ── 5. CASE STUDIES ── */}
      {agency.caseStudies.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
            Case Studies
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agency.caseStudies.map((cs) => (
              <div
                key={cs.headline}
                className="flex flex-col rounded-[var(--radius)] border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-px hover:border-border-hover hover:shadow-[var(--card-shadow-hover)]"
              >
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.8px] text-accent">
                  {cs.label}
                </div>
                <h3 className="mb-1.5 text-sm font-bold tracking-[-0.3px] text-text-primary">
                  {cs.headline}
                </h3>
                <ul className="mt-auto space-y-1.5 pt-3">
                  {cs.metrics.map((m) => (
                    <li key={m} className="text-sm leading-snug text-text-secondary">
                      • {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 6. RESOURCES ── */}
      {resources.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
            Free Resources
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <Link
                key={r.id}
                href={`/agencies/${agency.slug}/resources/${r.slug}`}
                className="group flex flex-col rounded-[var(--radius)] border border-border bg-surface p-6 no-underline transition-all duration-200 hover:-translate-y-px hover:border-border-hover hover:shadow-[var(--card-shadow-hover)]"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-tag-bg text-tag-text">
                  {r.contentType === "video" ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  )}
                </div>
                <h3 className="mb-1.5 text-sm font-semibold leading-snug text-text-primary">
                  {r.title}
                </h3>
                <p className="mb-4 line-clamp-2 flex-1 text-sm leading-[1.5] text-text-secondary">
                  {r.description}
                </p>
                <span className="text-sm font-medium text-accent transition-colors group-hover:underline">
                  {r.contentType === "video" ? "Watch now" : "Download"} →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── 7. OTHER AGENCIES ── */}
      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl font-semibold tracking-[-0.3px]">
            Other agencies
          </h2>
          <Link
            href="/agencies"
            className="text-sm font-medium text-accent no-underline hover:underline"
          >
            View all agencies →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {otherAgencies.map((other) => (
            <Link
              key={other.slug}
              href={`/agencies/${other.slug}`}
              className="flex gap-4 rounded-[var(--radius)] border border-border bg-surface p-5 no-underline transition-all duration-200 hover:-translate-y-px hover:border-border-hover hover:shadow-[var(--card-shadow-hover)]"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ background: other.color }}
              >
                {other.logo}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-0.5 text-sm font-semibold text-text-primary">
                  {other.name}
                </h3>
                <p className="mb-2 line-clamp-1 text-xs text-text-secondary">
                  {other.tagline}
                </p>
                <span className="text-xs font-semibold text-accent">
                  {other.stats[0]?.value} {other.stats[0]?.label.toLowerCase()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
