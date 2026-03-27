import { createMetadata } from "@/lib/seo";
import CourseSignup from "@/components/ui/course-signup";

export const metadata = createMetadata({
  title: "Free Cold Email Course",
  description:
    "Learn cold email in 7 days. A free email course covering deliverability, list building, copywriting, and scaling.",
  path: "/course",
});

const modules = [
  {
    day: "Day 1",
    title: "Deliverability Foundations",
    description:
      "DNS records, domain setup, warming protocols, and the infrastructure that makes everything else work.",
  },
  {
    day: "Day 2",
    title: "List Building That Scales",
    description:
      "How to build prospect lists using Clay, Apollo, and intent signals — without buying garbage data.",
  },
  {
    day: "Day 3",
    title: "Writing Cold Emails That Get Replies",
    description:
      "Subject lines, first lines, CTAs, and the frameworks that actually work in 2026.",
  },
  {
    day: "Day 4",
    title: "Personalization at Scale",
    description:
      "Using AI and enrichment data to make every email feel hand-written — even when you're sending thousands.",
  },
  {
    day: "Day 5",
    title: "Sending Infrastructure",
    description:
      "Instantly vs SmartLead, inbox rotation, warmup networks, and how to avoid the spam folder.",
  },
  {
    day: "Day 6",
    title: "Multi-Channel Outbound",
    description:
      "Adding LinkedIn, phone, and retargeting to your cold email sequences for maximum coverage.",
  },
  {
    day: "Day 7",
    title: "Scaling & Optimization",
    description:
      "A/B testing, analytics, reply handling, and the playbook for going from 100 to 10,000 emails per day.",
  },
];

export default function CoursePage() {
  return (
    <main>
      {/* Hero */}
      <div className="mx-auto max-w-[var(--max-width)] px-6 pb-16 pt-20 text-center">
        <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[1.2px] text-accent">
          Free Course
        </span>
        <h1 className="mb-5 font-display text-[clamp(36px,5vw,56px)] font-normal leading-[1.1] tracking-[-1.5px] text-text-primary">
          Learn cold email in 7 days.
        </h1>
        <p className="mx-auto mb-10 max-w-[520px] text-lg leading-[1.65] text-text-secondary">
          A free email course covering deliverability, list building,
          copywriting, and scaling — from the people who actually do it.
        </p>
        <div className="mx-auto max-w-[420px]">
          <CourseSignup />
        </div>
        <p className="mt-4 text-xs text-text-tertiary">
          No spam. Unsubscribe anytime. Takes 10 minutes a day.
        </p>
      </div>

      {/* Course Outline */}
      <section className="mx-auto max-w-[var(--max-width)] border-t border-border px-6 pb-20 pt-16">
        <h2 className="mb-10 text-center font-display text-[32px] font-normal tracking-[-0.5px]">
          What you&apos;ll learn
        </h2>
        <div className="mx-auto max-w-[640px] space-y-4">
          {modules.map((mod) => (
            <div
              key={mod.day}
              className="rounded-[var(--radius)] border border-border bg-surface p-6"
            >
              <div className="mb-1 text-xs font-semibold uppercase tracking-[0.8px] text-accent">
                {mod.day}
              </div>
              <h3 className="mb-2 text-base font-semibold tracking-[-0.2px] text-text-primary">
                {mod.title}
              </h3>
              <p className="text-sm leading-[1.5] text-text-secondary">
                {mod.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
