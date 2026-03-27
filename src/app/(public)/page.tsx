import Link from "next/link";
import { tools } from "@/data/tools";
import { agencies } from "@/data/agencies";
import CourseSignup from "@/components/ui/course-signup";

const heroStats = [
  { value: "120+", label: "Tools reviewed" },
  { value: "40+", label: "Agencies listed" },
  { value: "15K+", label: "Monthly readers" },
];

const playbooks = [
  {
    slug: "growthengine-8m-emails",
    tag: "Agency Playbook",
    title: "How GrowthEngineX Sends 8M Cold Emails a Month",
    description:
      "Inside the infrastructure, tooling, and Clay workflows that power one of the highest-volume outbound agencies in the game.",
    readTime: "12 min read",
    featured: true,
    imgLabel: "Deep Dive",
  },
  {
    slug: "instantly-vs-smartlead-2026",
    tag: "Tool Breakdown",
    title: "Instantly vs SmartLead: The 2026 Breakdown",
    description:
      "Pricing, deliverability, infrastructure control, and which one actually fits your setup. No affiliate bias.",
    readTime: "8 min read",
    featured: false,
    imgLabel: "Comparison",
  },
];

export default function HomePage() {
  const topTools = tools.slice(0, 6);
  const featuredAgencies = agencies.slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <div className="mx-auto max-w-[var(--max-width)] px-6 pb-[72px] pt-20 text-center">
        <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[1.2px] text-accent">
          ColdEmail.com
        </span>
        <h1 className="mb-5 font-display text-[clamp(40px,5.5vw,64px)] font-normal leading-[1.08] tracking-[-1.5px] text-text-primary">
          Find the right tools.
          <br />
          Hire the <em className="text-accent">right agency.</em>
        </h1>
        <p className="mx-auto mb-9 max-w-[520px] text-[17px] leading-[1.65] text-text-secondary">
          The independent resource for evaluating cold email tools, reading
          honest reviews, and finding proven agencies that actually deliver
          pipeline.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-text-primary px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-[#2A2D35]"
          >
            Browse Tools
          </Link>
          <Link
            href="/agencies"
            className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-primary no-underline transition-all hover:border-border-hover hover:shadow-[var(--card-shadow)]"
          >
            Find an Agency
          </Link>
        </div>
        <div className="mx-auto mt-12 flex justify-center gap-10 border-t border-border pt-8">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold tracking-[-0.5px] text-text-primary">
                {stat.value}
              </div>
              <div className="mt-0.5 text-[13px] text-text-tertiary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Tools */}
      <section className="mx-auto max-w-[var(--max-width)] px-6 pb-20">
        <div className="mb-7 flex items-baseline justify-between">
          <h2 className="font-display text-[32px] font-normal tracking-[-0.5px]">
            Top Tools
          </h2>
          <Link
            href="/tools"
            className="text-sm font-medium text-accent no-underline hover:underline"
          >
            View all tools →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {topTools.map((tool) => (
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
              <div className="mt-auto flex flex-wrap gap-1.5">
                {tool.categories.slice(0, 2).map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full bg-tag-bg px-2.5 py-[3px] text-xs font-medium text-tag-text"
                  >
                    {cat
                      .split("-")
                      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                      .join(" ")}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Playbooks */}
      <section className="mx-auto max-w-[var(--max-width)] px-6 pb-20">
        <div className="mb-7 flex items-baseline justify-between">
          <h2 className="font-display text-[32px] font-normal tracking-[-0.5px]">
            Playbooks
          </h2>
          <Link
            href="/playbooks"
            className="text-sm font-medium text-accent no-underline hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {playbooks.map((pb) => (
            <Link
              key={pb.slug}
              href={`/playbooks/${pb.slug}`}
              className="overflow-hidden rounded-[var(--radius)] border border-border bg-surface no-underline transition-all duration-200 hover:-translate-y-px hover:border-border-hover hover:shadow-[var(--card-shadow-hover)]"
            >
              <div
                className={`relative flex h-[180px] items-center justify-center overflow-hidden ${
                  pb.featured
                    ? "bg-gradient-to-br from-[#0F1115] via-accent to-[#0F1115]"
                    : "bg-gradient-to-br from-[#0F1115] to-[#374151]"
                }`}
              >
                <span className="relative z-10 text-xs font-semibold uppercase tracking-[1.5px] text-white/60">
                  {pb.imgLabel}
                </span>
              </div>
              <div className="p-6">
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[1px] text-accent">
                  {pb.tag}
                </div>
                <h3 className="mb-2 text-lg font-semibold leading-[1.35] tracking-[-0.3px] text-text-primary">
                  {pb.title}
                </h3>
                <p className="text-sm leading-[1.55] text-text-secondary">
                  {pb.description}
                </p>
                <div className="mt-3 text-xs text-text-tertiary">
                  {pb.readTime}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Agencies */}
      <section className="mx-auto max-w-[var(--max-width)] px-6 pb-20">
        <div className="mb-7 flex items-baseline justify-between">
          <h2 className="font-display text-[32px] font-normal tracking-[-0.5px]">
            Proven Agencies
          </h2>
          <Link
            href="/agencies"
            className="text-sm font-medium text-accent no-underline hover:underline"
          >
            View all agencies →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featuredAgencies.map((agency) => (
            <Link
              key={agency.slug}
              href={`/agencies/${agency.slug}`}
              className="flex gap-5 rounded-[var(--radius)] border border-border bg-surface p-7 no-underline transition-all duration-200 hover:-translate-y-px hover:border-border-hover hover:shadow-[var(--card-shadow-hover)]"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[15px] font-bold text-white"
                style={{ background: agency.color }}
              >
                {agency.logo}
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-base font-semibold tracking-[-0.2px] text-text-primary">
                  {agency.name}
                  {agency.verified && (
                    <span className="ml-2 inline-block rounded-full bg-green-50 px-2 py-0.5 align-middle text-[11px] font-semibold text-green-700">
                      Verified
                    </span>
                  )}
                </h3>
                <p className="mb-3 line-clamp-2 text-sm leading-[1.5] text-text-secondary">
                  {agency.description}
                </p>
                <span className="text-[13px] font-semibold text-accent">
                  {agency.stats[0]?.value} {agency.stats[0]?.label.toLowerCase()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Course CTA */}
      <div className="mx-auto mb-20 max-w-[var(--max-width)] px-6">
        <div className="relative overflow-hidden rounded-2xl bg-text-primary p-16 text-center">
          <div className="pointer-events-none absolute -top-1/2 -right-1/5 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(26,86,219,0.15)_0%,transparent_70%)]" />
          <div className="pointer-events-none absolute -bottom-2/5 -left-1/10 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(26,86,219,0.1)_0%,transparent_70%)]" />
          <h2 className="relative z-10 mb-3 font-display text-4xl font-normal tracking-[-0.5px] text-white">
            Learn cold email in 7 days.
          </h2>
          <p className="relative z-10 mx-auto mb-8 max-w-[440px] text-base leading-[1.6] text-white/60">
            A free email course covering deliverability, list building,
            copywriting, and scaling — from the people who actually do it.
          </p>
          <CourseSignup />
          <div className="relative z-10 mt-3.5 text-xs text-white/35">
            No spam. Unsubscribe anytime. Takes 10 minutes a day.
          </div>
        </div>
      </div>
    </main>
  );
}
