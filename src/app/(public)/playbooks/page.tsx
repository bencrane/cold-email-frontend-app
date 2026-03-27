import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Playbooks",
  description:
    "Deep dives, comparisons, and tactical guides on cold email — from the agencies and operators who do it at scale.",
  path: "/playbooks",
});

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

export default function PlaybooksPage() {
  return (
    <main className="mx-auto max-w-[var(--max-width)] px-6 pb-20 pt-12">
      <div className="mb-10">
        <h1 className="mb-3 font-display text-[clamp(36px,4vw,48px)] font-normal tracking-[-1px] text-text-primary">
          Playbooks
        </h1>
        <p className="max-w-[560px] text-base leading-[1.65] text-text-secondary">
          Deep dives, comparisons, and tactical guides on cold email — from the
          agencies and operators who do it at scale.
        </p>
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
    </main>
  );
}
