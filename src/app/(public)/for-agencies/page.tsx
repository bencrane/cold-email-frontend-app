import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Agencies — ColdEmail.com",
  description:
    "Get your cold email agency in front of buyers actively evaluating tools and agencies. Verified profiles, lead magnet hosting, and analytics.",
};

const checkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3 w-3 text-accent">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const problems = [
  {
    icon: "📄",
    title: "Your website is a brochure",
    description:
      "Your site says what you do. It doesn't prove it. Prospects still don't know if you're credible until they're already on a call.",
  },
  {
    icon: "🔗",
    title: "Your lead magnets live on Notion",
    description:
      "You're sending cold emails with links to Carrd pages, Google Docs, or Notion. The domain you link from says more than you think.",
  },
  {
    icon: "🔍",
    title: "Buyers can't find you",
    description:
      'When someone searches "best cold email agency," you\'re not there. The agencies that show up are the ones that get the calls.',
  },
];

const features = [
  {
    title: "A profile that does the selling for you",
    description:
      "Your agency page on ColdEmail.com isn't a directory listing — it's a conversion page. Services, case studies, testimonials, team, tech stack, and booking. All in one place, on a domain that carries weight.",
    details: [
      "Fully editable from your dashboard",
      '"Verified on ColdEmail.com" badge for credibility',
      "Link it from proposals, LinkedIn, cold emails",
    ],
    mockup: "profile",
  },
  {
    title: "Host lead magnets on ColdEmail.com",
    description:
      "Build gated landing pages at coldemail.com/agencies/your-agency/resources. Drop the link in cold emails and LinkedIn DMs. When a prospect clicks, they see a professional page on a domain they trust — not a throwaway Carrd link.",
    details: [
      "Simple builder — headline, description, file or video, form",
      "Every lead captured goes straight to your dashboard",
      "Works with LeadShark, HeyReach, or any DM tool",
    ],
    mockup: "leadmagnet",
    reverse: true,
  },
  {
    title: "Know exactly what's working",
    description:
      "See who's viewing your profile, how your lead magnets are performing, and how many leads you're capturing — all from one dashboard. Numbers that justify the investment every month.",
    details: [
      "Profile views, lead magnet views, form conversions",
      "Export leads to CSV or connect your CRM",
      "See which lead magnets convert best",
    ],
    mockup: "analytics",
  },
];

const monthlyFeatures = [
  "Verified agency profile",
  "Unlimited lead magnets on coldemail.com",
  "Leads dashboard with export",
  "Profile + lead magnet analytics",
  "Calendly / Cal.com booking integration",
];

const annualFeatures = [
  "Everything in Monthly",
  "Featured placement in agency directory",
  "Editorial feature — your playbook on ColdEmail.com",
  "Priority support",
  "Lock in rate — price never increases",
];

function ProfileMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--card-shadow)]">
      <div className="flex h-10 items-center gap-1.5 border-b border-border bg-tag-bg px-4">
        <div className="h-2 w-2 rounded-full bg-gray-300" />
        <div className="h-2 w-2 rounded-full bg-gray-300" />
        <div className="h-2 w-2 rounded-full bg-gray-300" />
        <span className="ml-3 rounded border border-border bg-surface px-3 py-1 text-[11px] text-text-tertiary">
          coldemail.com/agencies/your-agency
        </span>
      </div>
      <div className="p-8">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
            YA
          </div>
          <div>
            <div className="text-lg font-bold tracking-[-0.3px]">
              Your Agency{" "}
              <span className="ml-2 inline-block rounded-full bg-success-bg px-2 py-0.5 text-[10px] font-semibold text-success-text">
                Verified
              </span>
            </div>
            <div className="text-[13px] text-text-secondary">
              AI-powered outbound for B2B teams
            </div>
          </div>
        </div>
        <div className="mb-5 flex gap-3">
          {[
            { label: "Emails / mo", value: "5M+" },
            { label: "Reply Rate", value: "12%" },
            { label: "Founded", value: "2023" },
          ].map((s) => (
            <div key={s.label} className="flex-1 rounded-[var(--radius-sm)] bg-tag-bg p-3">
              <div className="text-[10px] uppercase tracking-[0.8px] text-text-tertiary">
                {s.label}
              </div>
              <div className="mt-1 text-base font-bold tracking-[-0.3px]">
                {s.value}
              </div>
            </div>
          ))}
        </div>
        <div className="mb-3 text-sm font-semibold tracking-[-0.1px]">
          Services
        </div>
        <div className="grid grid-cols-2 gap-2">
          {["AI-Powered Outbound", "Clay Implementation", "ABM Infrastructure", "Signal Detection"].map((s) => (
            <div
              key={s}
              className="rounded-[var(--radius-sm)] bg-tag-bg px-3 py-2.5 text-xs font-medium text-text-secondary"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LeadMagnetMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--card-shadow)]">
      <div className="flex h-10 items-center gap-1.5 border-b border-border bg-tag-bg px-4">
        <div className="h-2 w-2 rounded-full bg-gray-300" />
        <div className="h-2 w-2 rounded-full bg-gray-300" />
        <div className="h-2 w-2 rounded-full bg-gray-300" />
        <span className="ml-3 rounded border border-border bg-surface px-3 py-1 text-[11px] text-text-tertiary">
          coldemail.com/agencies/your-agency/resources/deliverability-guide
        </span>
      </div>
      <div className="px-8 py-10 text-center">
        <div className="mb-8 text-[13px] font-semibold text-text-tertiary">
          ColdEmail.com
        </div>
        <h4 className="mb-2 font-display text-2xl font-normal tracking-[-0.3px]">
          The Deliverability Checklist
        </h4>
        <p className="mb-6 text-sm leading-[1.5] text-text-secondary">
          Everything you need to set up to make sure your cold emails actually
          land in the inbox.
        </p>
        <div className="mx-auto mb-3 max-w-[320px] rounded-[var(--radius-sm)] border border-border bg-bg px-4 py-3 text-left text-[13px] text-text-tertiary">
          you@company.com
        </div>
        <div className="mx-auto max-w-[320px] rounded-[var(--radius-sm)] bg-text-primary py-3 text-center text-sm font-semibold text-white">
          Get the Checklist
        </div>
        <div className="mt-6 text-[11px] text-text-tertiary">
          Hosted on ColdEmail.com · Your Agency
        </div>
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[var(--card-shadow)]">
      <div className="flex h-10 items-center gap-1.5 border-b border-border bg-tag-bg px-4">
        <div className="h-2 w-2 rounded-full bg-gray-300" />
        <div className="h-2 w-2 rounded-full bg-gray-300" />
        <div className="h-2 w-2 rounded-full bg-gray-300" />
        <span className="ml-3 rounded border border-border bg-surface px-3 py-1 text-[11px] text-text-tertiary">
          coldemail.com/dashboard/analytics
        </span>
      </div>
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="text-[15px] font-semibold">Performance</div>
          <div className="rounded bg-tag-bg px-2.5 py-1 text-xs text-text-tertiary">
            Last 30 days
          </div>
        </div>
        <div className="mb-6 grid grid-cols-4 gap-3">
          {[
            { value: "342", label: "Profile views", delta: "↑ 18%" },
            { value: "1,247", label: "Magnet views", delta: "↑ 32%" },
            { value: "189", label: "Leads captured", delta: "↑ 24%" },
            { value: "15.2%", label: "Conversion", delta: "↑ 3%" },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-[22px] font-bold tracking-[-0.5px]">
                {m.value}
              </div>
              <div className="mt-0.5 text-[11px] text-text-tertiary">
                {m.label}
              </div>
              <div className="text-[11px] font-semibold text-success">
                {m.delta}
              </div>
            </div>
          ))}
        </div>
        <div className="relative h-[120px] overflow-hidden rounded-[var(--radius-sm)] bg-gradient-to-b from-accent-light to-transparent">
          <svg
            className="absolute bottom-5 left-0 right-0 h-20 w-full"
            viewBox="0 0 500 80"
            preserveAspectRatio="none"
          >
            <polyline
              points="0,64 40,48 80,52 120,32 160,36 200,24 240,28 280,16 320,20 360,12 400,16 440,8 480,10 500,6"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

const mockupComponents: Record<string, React.FC> = {
  profile: ProfileMockup,
  leadmagnet: LeadMagnetMockup,
  analytics: AnalyticsMockup,
};

export default function ForAgenciesPage() {
  return (
    <main>
      {/* Hero */}
      <div className="mx-auto max-w-[var(--max-width)] px-6 pt-20">
        <div className="max-w-[720px]">
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[1.2px] text-accent">
            For Agencies
          </span>
          <h1 className="mb-6 font-display text-[clamp(36px,5vw,56px)] font-normal leading-[1.1] tracking-[-1.5px] text-text-primary">
            Your outbound deserves a
            <br />
            <em className="text-accent">better home.</em>
          </h1>
          <p className="mb-10 max-w-[600px] text-lg leading-[1.7] text-text-secondary">
            ColdEmail.com is where people go to evaluate cold email tools and
            find agencies to run their outbound. Get your agency in front of the
            buyers who are actively looking — and give your own outreach a
            credibility upgrade.
          </p>
          <div className="mb-20 flex flex-wrap gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-text-primary px-7 py-3.5 text-[15px] font-semibold text-white no-underline transition-colors hover:bg-text-primary-hover"
            >
              See Plans
            </a>
            <Link
              href="/agencies"
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-border bg-surface px-7 py-3.5 text-[15px] font-semibold text-text-primary no-underline transition-all hover:border-border-hover hover:shadow-[var(--card-shadow)]"
            >
              View Agency Directory
            </Link>
          </div>
        </div>
      </div>

      {/* Problems */}
      <div className="mx-auto max-w-[var(--max-width)] border-t border-border px-6 pb-20 pt-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-[var(--radius)] border border-border bg-surface p-8"
            >
              <div className="mb-4 text-[28px]">{p.icon}</div>
              <h3 className="mb-2 text-base font-semibold tracking-[-0.2px]">
                {p.title}
              </h3>
              <p className="text-sm leading-[1.6] text-text-secondary">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What You Get */}
      <section className="mx-auto max-w-[var(--max-width)] px-6 pb-20">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[1.2px] text-accent">
          What you get
        </div>
        <div className="mb-4 font-display text-4xl font-normal tracking-[-0.5px]">
          Everything an agency needs to convert.
        </div>
        <div className="mb-12 max-w-[560px] text-base leading-[1.65] text-text-secondary">
          A verified profile, lead magnet hosting on a premium domain, analytics,
          and a direct line to the people actively evaluating cold email agencies.
        </div>

        {features.map((feature, i) => {
          const Mockup = mockupComponents[feature.mockup];
          return (
            <div
              key={feature.title}
              className={`mb-[72px] grid grid-cols-1 items-center gap-16 border-b border-border pb-[72px] last:mb-0 last:border-0 last:pb-0 md:grid-cols-2 ${
                feature.reverse ? "" : ""
              }`}
            >
              <div className={feature.reverse ? "md:order-2" : ""}>
                <h3 className="mb-4 font-display text-[28px] font-normal leading-[1.2] tracking-[-0.3px]">
                  {feature.title}
                </h3>
                <p className="mb-5 text-[15px] leading-[1.7] text-text-secondary">
                  {feature.description}
                </p>
                {feature.details.map((detail) => (
                  <div key={detail} className="mb-3 flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-light">
                      {checkIcon}
                    </div>
                    <span className="text-sm leading-[1.5] text-text-secondary">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
              <div className={feature.reverse ? "md:order-1" : ""}>
                {Mockup && <Mockup />}
              </div>
            </div>
          );
        })}
      </section>

      {/* Pricing */}
      <div id="pricing" className="mx-auto max-w-[var(--max-width)] px-6 pb-20">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-display text-4xl font-normal tracking-[-0.5px]">
            Simple, transparent pricing.
          </h2>
          <p className="text-base text-text-secondary">
            No setup fees. No long-term contracts. Cancel anytime.
          </p>
        </div>
        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-5 md:grid-cols-2">
          {/* Monthly */}
          <div className="relative rounded-xl border border-border bg-surface p-9">
            <div className="mb-1 text-lg font-semibold">Monthly</div>
            <div className="mb-5 text-sm leading-[1.5] text-text-secondary">
              Full access, pay as you go.
            </div>
            <div className="mb-1 text-[42px] font-bold tracking-[-1.5px]">
              $300
              <span className="text-base font-medium tracking-normal text-text-tertiary">
                /mo
              </span>
            </div>
            <div className="mb-7 text-[13px] text-text-tertiary">&nbsp;</div>
            <ul className="mb-8 space-y-0">
              {monthlyFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 border-b border-tag-bg py-2 text-sm leading-[1.45] text-text-secondary last:border-0"
                >
                  <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-accent-light">
                    {checkIcon}
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full cursor-pointer rounded-[var(--radius-sm)] border border-border bg-surface py-3.5 text-center text-sm font-semibold text-text-primary transition-colors hover:border-border-hover">
              Get Started
            </button>
          </div>

          {/* Annual */}
          <div className="relative rounded-xl border-2 border-accent bg-surface p-9 shadow-[0_0_0_1px_var(--accent)]">
            <div className="absolute -top-3 left-9 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.8px] text-white">
              Best Value
            </div>
            <div className="mb-1 text-lg font-semibold">Annual</div>
            <div className="mb-5 text-sm leading-[1.5] text-text-secondary">
              Save $1,100 — two months free.
            </div>
            <div className="mb-1 text-[42px] font-bold tracking-[-1.5px]">
              $2,500
              <span className="text-base font-medium tracking-normal text-text-tertiary">
                /yr
              </span>
            </div>
            <div className="mb-7 text-[13px] text-text-tertiary">
              That&apos;s $208/mo. Billed annually.
            </div>
            <ul className="mb-8 space-y-0">
              {annualFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 border-b border-tag-bg py-2 text-sm leading-[1.45] text-text-secondary last:border-0"
                >
                  <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-accent-light">
                    {checkIcon}
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full cursor-pointer rounded-[var(--radius-sm)] border-none bg-text-primary py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-text-primary-hover">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="mx-auto max-w-[var(--max-width)] px-6 pb-20">
        <div className="border-t border-border pt-16 text-center">
          <div className="mx-auto mb-6 max-w-[640px] font-display text-2xl font-normal italic leading-[1.5] tracking-[-0.3px] text-text-primary">
            &ldquo;We added our ColdEmail.com profile link to every outbound
            sequence. The conversion rate on our lead magnets went up 40% just
            from the domain authority alone.&rdquo;
          </div>
          <div className="text-sm font-semibold text-text-primary">
            Agency Founder
          </div>
          <div className="mt-0.5 text-[13px] text-text-tertiary">
            Cold Email Agency, 50+ Clients
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mx-auto max-w-[var(--max-width)] px-6 pb-20">
        <div className="relative overflow-hidden rounded-2xl bg-text-primary p-16 text-center">
          <div className="pointer-events-none absolute -top-1/2 -right-1/5 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(26,86,219,0.15)_0%,transparent_70%)]" />
          <h2 className="relative z-10 mb-3 font-display text-4xl font-normal tracking-[-0.5px] text-white">
            Your agency belongs here.
          </h2>
          <p className="relative z-10 mx-auto mb-8 max-w-[480px] text-base leading-[1.6] text-white/60">
            Join the agencies already using ColdEmail.com to close more deals,
            host better lead magnets, and build credibility with every outbound
            touch.
          </p>
          <a
            href="#pricing"
            className="relative z-10 inline-flex rounded-[var(--radius-sm)] bg-white px-8 py-3.5 text-sm font-semibold text-text-primary no-underline transition-colors hover:bg-surface-hover"
          >
            Apply Now
          </a>
        </div>
      </div>
    </main>
  );
}
