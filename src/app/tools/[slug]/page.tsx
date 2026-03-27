import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { tools, getToolBySlug } from "@/data/tools"
import { creators } from "@/data/creators"

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }))
}

export async function generateMetadata(
  props: PageProps<"/tools/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params
  const tool = getToolBySlug(slug)
  return {
    title: tool ? `${tool.name} Review — ColdEmail.com` : "Tool Not Found",
    description: tool?.verdict || tool?.description,
  }
}

export default async function ToolProfilePage(
  props: PageProps<"/tools/[slug]">
) {
  const { slug } = await props.params
  const tool = getToolBySlug(slug)

  if (!tool) {
    notFound()
  }

  const relatedTools = tools
    .filter(
      (t) =>
        t.slug !== tool.slug &&
        t.category.some((c) => tool.category.includes(c))
    )
    .slice(0, 3)

  const creatorsUsingTool = creators.filter((c) =>
    c.recommendedTools.includes(tool.slug)
  )

  const hasRichContent = !!(tool.verdict || tool.pros || tool.useCases)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
            {/* Left: Info */}
            <div className="flex-1">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-5xl">{tool.logo}</span>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">
                    {tool.name}
                  </h1>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {tool.category.map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full bg-blue-50 px-3 py-0.5 text-xs font-medium text-blue-600"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {tool.description}
              </p>

              <div className="mt-6 flex items-center gap-2">
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
                >
                  Try {tool.name}
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <Link
                  href="/tools"
                  className="rounded-lg border border-gray-200 px-5 py-3 text-sm text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-900"
                >
                  All Tools
                </Link>
              </div>
            </div>

            {/* Right: Quick Stats Card */}
            <div className="w-full shrink-0 rounded-2xl bg-white border border-gray-200 p-6 lg:w-80">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                At a Glance
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Pricing</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {tool.pricingTier}
                  </span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Founded</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {tool.founded}
                  </span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Best For</span>
                  <span className="text-sm text-right text-gray-700 max-w-[180px]">
                    {tool.bestFor.split(" ").slice(0, 8).join(" ")}...
                  </span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Used By</span>
                  <span className="text-sm font-semibold text-blue-600">
                    {creatorsUsingTool.length} creator
                    {creatorsUsingTool.length !== 1 && "s"} on ColdEmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        {/* Two-column layout for rich content */}
        <div className="flex flex-col gap-12 py-16 lg:flex-row lg:gap-16">
          {/* Main content column */}
          <div className="flex-1 min-w-0">
            {/* Verdict */}
            {tool.verdict && (
              <section className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  The Verdict
                </h2>
                <p className="text-base leading-relaxed text-gray-600">
                  {tool.verdict}
                </p>
              </section>
            )}

            {/* Pros and Cons */}
            {(tool.pros || tool.cons) && (
              <section className="mb-12">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {tool.pros && (
                    <div className="rounded-xl bg-blue-50 border border-blue-100 p-5">
                      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-xs">
                          ✓
                        </span>
                        What&apos;s Good
                      </h3>
                      <ul className="space-y-2.5">
                        {tool.pros.map((pro) => (
                          <li
                            key={pro}
                            className="text-sm leading-relaxed text-gray-600"
                          >
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tool.cons && (
                    <div className="rounded-xl bg-red-50 border border-red-200 p-5">
                      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-600">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-xs">
                          ✗
                        </span>
                        Watch Out For
                      </h3>
                      <ul className="space-y-2.5">
                        {tool.cons.map((con) => (
                          <li
                            key={con}
                            className="text-sm leading-relaxed text-gray-600"
                          >
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Use Cases */}
            {tool.useCases && tool.useCases.length > 0 && (
              <section className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  When to Use {tool.name}
                </h2>
                <div className="space-y-4">
                  {tool.useCases.map((uc, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-white border border-gray-200 p-5"
                    >
                      <h3 className="mb-1.5 font-semibold text-gray-900">
                        {uc.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-500">
                        {uc.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Features (always shown) */}
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Key Features
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {tool.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-lg bg-white border border-gray-200 px-4 py-3"
                  >
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* How It Compares */}
            {tool.comparison && tool.comparison.length > 0 && (
              <section className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  How {tool.name} Compares
                </h2>
                <div className="space-y-3">
                  {tool.comparison.map((comp) => (
                    <div
                      key={comp.slug}
                      className="flex items-start gap-4 rounded-xl bg-white border border-gray-200 p-5"
                    >
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-3">
                          <span className="font-semibold text-gray-900">
                            {tool.name}
                          </span>
                          <span className="text-gray-400">vs</span>
                          <Link
                            href={`/tools/${comp.slug}`}
                            className="font-semibold text-blue-600 hover:text-blue-700"
                          >
                            {comp.tool}
                          </Link>
                        </div>
                        <p className="text-sm text-gray-500">
                          {comp.difference}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Pricing Plans */}
            {tool.pricingPlans && tool.pricingPlans.length > 0 && (
              <section className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Pricing</h2>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  {tool.pricingPlans.map((plan) => (
                    <div
                      key={plan.name}
                      className="rounded-xl bg-white border border-gray-200 p-5"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {plan.name}
                      </p>
                      <p className="mt-1 text-xl font-bold text-gray-900">
                        {plan.price}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-gray-500">
                        {plan.description}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-blue-600 hover:text-blue-700"
                >
                  See full pricing on {tool.name} →
                </a>
              </section>
            )}

            {/* Fallback for tools without rich content */}
            {!hasRichContent && (
              <section className="mb-12">
                <div className="rounded-xl bg-white border border-gray-200 p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">Best For</h3>
                  <p className="text-gray-600">{tool.bestFor}</p>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full shrink-0 lg:w-72">
            {/* Creators Who Use This */}
            {creatorsUsingTool.length > 0 && (
              <div className="mb-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Recommended By
                </h3>
                <div className="space-y-3">
                  {creatorsUsingTool.map((creator) => (
                    <Link
                      key={creator.slug}
                      href={`/creators/${creator.slug}`}
                      className="group flex items-center gap-3 rounded-xl bg-white border border-gray-200 p-3 transition-colors hover:border-gray-300"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-900">
                        {creator.avatar}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-gray-900 group-hover:text-blue-600">
                          {creator.name}
                        </p>
                        <p className="truncate text-xs text-gray-400">
                          {creator.tagline}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Tools */}
            {relatedTools.length > 0 && (
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Also Consider
                </h3>
                <div className="space-y-3">
                  {relatedTools.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/tools/${related.slug}`}
                      className="group flex items-center gap-3 rounded-xl bg-white border border-gray-200 p-3 transition-colors hover:border-gray-300"
                    >
                      <span className="text-xl">{related.logo}</span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-gray-900 group-hover:text-blue-600">
                          {related.name}
                        </p>
                        <p className="truncate text-xs text-gray-400">
                          {related.pricingTier}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
