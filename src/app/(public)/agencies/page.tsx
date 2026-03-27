import Link from "next/link";
import { agencies } from "@/data/agencies";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Cold Email Agencies",
  description:
    "Find proven cold email agencies with verified track records. Browse profiles, case studies, and book discovery calls.",
  path: "/agencies",
});

export default function AgenciesPage() {
  return (
    <main className="mx-auto max-w-[var(--max-width)] px-6 pb-20 pt-12">
      <div className="mb-10">
        <h1 className="mb-3 font-display text-[clamp(36px,4vw,48px)] font-normal tracking-[-1px] text-text-primary">
          Cold Email Agencies
        </h1>
        <p className="max-w-[560px] text-base leading-[1.65] text-text-secondary">
          Proven agencies with verified results. Browse profiles, see case
          studies, and book discovery calls directly.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {agencies.map((agency) => (
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
              <div className="flex gap-4">
                {agency.stats.slice(0, 3).map((stat) => (
                  <div key={stat.label}>
                    <span className="text-sm font-bold text-text-primary">
                      {stat.value}
                    </span>
                    <span className="ml-1 text-xs text-text-tertiary">
                      {stat.label.toLowerCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-[var(--radius)] border border-border bg-surface p-8 text-center">
        <h2 className="mb-2 text-lg font-semibold text-text-primary">
          Are you an agency?
        </h2>
        <p className="mb-4 text-sm text-text-secondary">
          Get your agency listed on ColdEmail.com and start capturing leads.
        </p>
        <Link
          href="/for-agencies"
          className="inline-flex rounded-[var(--radius-sm)] bg-text-primary px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-[#2A2D35]"
        >
          Learn More →
        </Link>
      </div>
    </main>
  );
}
