import Link from "next/link";
import { tools } from "@/data/tools";
import { creators } from "@/data/creators";
import { agencies } from "@/data/agencies";

const contentCards = [
  {
    author: "Eric Nowoslawski",
    initials: "EN",
    initialsColor: "bg-red-600",
    source: "LinkedIn",
    title:
      "Just built the most insane Clay workflow for finding companies actively hiring for sales roles. The signal quality is unreal.",
    time: "2h ago",
    gradient: "from-red-100 to-red-50",
  },
  {
    author: "Saad Khan",
    initials: "SK",
    initialsColor: "bg-blue-600",
    source: "YouTube",
    title:
      "AI Wrote Me This Cold Email... It Made $48,732 (Here's Why It Works)",
    time: "5h ago",
    gradient: "from-blue-100 to-blue-50",
  },
  {
    author: "Nick Saraev",
    initials: "NS",
    initialsColor: "bg-emerald-600",
    source: "LinkedIn",
    title:
      "Hot take: Make.com + Clay + Claude is the best GTM stack that exists right now. Here's why...",
    time: "Yesterday",
    gradient: "from-emerald-100 to-emerald-50",
  },
  {
    author: "ColdIQ",
    initials: "CQ",
    initialsColor: "bg-purple-600",
    source: "LinkedIn",
    title:
      "We just hit $5M MRR. Here's the cold email framework that got us our first 100 clients.",
    time: "Yesterday",
    gradient: "from-purple-100 to-purple-50",
  },
  {
    author: "Eric Nowoslawski",
    initials: "EN",
    initialsColor: "bg-red-600",
    source: "YouTube",
    title:
      "How We Write Cold Email Subject Lines for 8M Emails/Month",
    time: "2d ago",
    gradient: "from-orange-100 to-orange-50",
  },
  {
    author: "Leadbird",
    initials: "LB",
    initialsColor: "bg-blue-500",
    source: "LinkedIn",
    title:
      "10M emails sent last month. Our deliverability was 98.7%. Here's our infrastructure setup.",
    time: "3d ago",
    gradient: "from-cyan-100 to-cyan-50",
  },
];

const featuredTools = tools.slice(0, 9);
const featuredCreators = creators.slice(0, 3);
const featuredAgencies = agencies.slice(0, 4);

function getAgencyInitialsBg(gradient: string): string {
  if (gradient.includes("red")) return "bg-red-700";
  if (gradient.includes("blue")) return "bg-blue-700";
  if (gradient.includes("purple")) return "bg-purple-700";
  if (gradient.includes("emerald")) return "bg-emerald-700";
  return "bg-gray-200";
}

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center py-28 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              The Home for Everything Outbound
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500 sm:text-xl">
              Discover the best cold email tools, learn from top creators, and
              find proven agencies.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/tools"
                className="rounded-full border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-900 transition hover:border-blue-600"
              >
                Discover Tools
              </Link>
              <Link
                href="/creators"
                className="rounded-full border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-900 transition hover:border-blue-600"
              >
                Discover Creators
              </Link>
              <Link
                href="/agencies"
                className="rounded-full border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-900 transition hover:border-blue-600"
              >
                Find an Agency
              </Link>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              120+ tools reviewed &bull; 35 creators &bull; 40 agencies
            </p>
          </div>
        </section>

        {/* What's Happening Section */}
        <section className="py-20">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            What&apos;s Happening in Cold Email
          </h2>
          <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4">
            {contentCards.map((card, i) => (
              <div
                key={i}
                className="min-w-[300px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <div
                  className={`h-40 bg-gradient-to-br ${card.gradient}`}
                />
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-white ${card.initialsColor}`}
                    >
                      {card.initials}
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {card.author}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        card.source === "YouTube"
                          ? "bg-red-50 text-red-600"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {card.source}
                    </span>
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm font-medium leading-snug text-gray-900">
                    {card.title}
                  </p>
                  <p className="mt-2 text-xs text-gray-400">{card.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Tools Section */}
        <section className="py-20">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Top Tools
            </h2>
            <Link
              href="/tools"
              className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
            >
              View All &rarr;
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-5 transition hover:border-gray-300"
              >
                <span className="text-2xl">{tool.logo}</span>
                <h3 className="mt-3 font-semibold text-gray-900">{tool.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                  {tool.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {tool.category.map((cat) => (
                    <span
                      key={cat}
                      className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-500"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Creators Section */}
        <section className="py-20">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Learn from the Best
            </h2>
            <Link
              href="/creators"
              className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
            >
              View All &rarr;
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCreators.map((creator) => (
              <Link
                key={creator.slug}
                href={`/creators/${creator.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:border-gray-300"
              >
                <div
                  className={`h-32 bg-gradient-to-r ${creator.bannerGradient}`}
                />
                <div className="p-5">
                  <div
                    className="-mt-11 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gray-200 text-sm font-bold text-gray-900"
                  >
                    {creator.avatar}
                  </div>
                  <h3 className="mt-3 font-semibold text-gray-900">
                    {creator.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {creator.tagline}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-blue-600 transition group-hover:text-blue-700">
                    View Profile &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Agencies Section */}
        <section className="py-20">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Proven Agencies
            </h2>
            <Link
              href="/agencies"
              className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
            >
              View All &rarr;
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {featuredAgencies.map((agency) => (
              <Link
                key={agency.slug}
                href={`/agencies/${agency.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition hover:border-gray-300"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold text-white ${getAgencyInitialsBg(agency.heroGradient)}`}
                >
                  {agency.logo}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {agency.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                  {agency.description}
                </p>
                <p className="mt-3 text-sm font-medium text-blue-600">
                  {agency.stats[0].value} {agency.stats[0].label}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-blue-600 transition group-hover:text-blue-700">
                  View Profile &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20">
          <div className="rounded-2xl bg-blue-600 px-6 py-16 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Stay in the loop.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-blue-100">
              The best cold email content, tools, and insights — weekly.
            </p>
            <div className="mx-auto mt-8 flex max-w-md">
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-l-lg border border-blue-500 bg-blue-700 px-4 py-3 text-sm text-white placeholder-blue-300 outline-none focus:border-white"
              />
              <button
                type="button"
                className="rounded-r-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
