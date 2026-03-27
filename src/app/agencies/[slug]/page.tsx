import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { agencies, getAgencyBySlug } from "@/data/agencies"

export function generateStaticParams() {
  return agencies.map((agency) => ({ slug: agency.slug }))
}

export async function generateMetadata(
  props: PageProps<"/agencies/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params
  const agency = getAgencyBySlug(slug)
  return {
    title: `${agency?.name} — ColdEmail.com`,
    description: agency?.description,
  }
}

export default async function AgencyProfilePage(
  props: PageProps<"/agencies/[slug]">
) {
  const { slug } = await props.params
  const agency = getAgencyBySlug(slug)

  if (!agency) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ───────────────────────── Section 1: Hero ───────────────────────── */}
      <section
        className={`bg-gradient-to-b ${agency.heroGradient} border-b border-gray-200`}
      >
        <div className="mx-auto max-w-5xl px-6 py-16">
          {/* Back link */}
          <Link
            href="/agencies"
            className="mb-8 inline-block text-sm text-gray-400 transition-colors hover:text-gray-900"
          >
            &larr; All Agencies
          </Link>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            {/* Logo circle */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gray-100 text-2xl font-bold text-gray-900">
              {agency.logo}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-4xl font-bold">{agency.name}</h1>
                {agency.certified && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Certified ColdEmail.com Partner
                  </span>
                )}
              </div>
              <p className="mt-3 max-w-3xl text-gray-600">
                {agency.description}
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-8 flex flex-wrap gap-3">
            {agency.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-gray-200 bg-white/60 px-4 py-2.5"
              >
                <div className="text-xs uppercase tracking-wider text-gray-400">
                  {stat.label}
                </div>
                <div className="font-semibold text-gray-900">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── Section 2: Meet the Team ──────────────────── */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-bold">Meet the Team</h2>
          <p className="mt-2 text-gray-500">
            The experts behind your outbound success
          </p>

          <div className="mt-8 flex flex-wrap gap-6">
            {agency.team.map((member) => (
              <div
                key={member.name}
                className="w-full rounded-xl border border-gray-200 bg-white p-6 text-center sm:w-auto sm:min-w-[180px]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-lg font-semibold text-gray-900">
                  {member.initials}
                </div>
                <p className="mt-4 font-semibold">{member.name}</p>
                <p className="mt-1 text-sm text-gray-500">{member.title}</p>
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block rounded bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-400 transition-colors hover:text-gray-900"
                >
                  in
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── Section 3: Who We Help ──────────────────── */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left */}
            <div>
              <h2 className="text-2xl font-bold">Who We Help</h2>
              <p className="mt-4 leading-relaxed text-gray-500">
                {agency.targetClient}
              </p>
            </div>

            {/* Right — testimonial */}
            <div className="rounded-xl border-l-2 border-blue-500 bg-white p-6">
              <p className="italic leading-relaxed text-gray-600">
                &ldquo;{agency.testimonial.quote}&rdquo;
              </p>
              <div className="mt-4">
                <p className="font-bold">{agency.testimonial.name}</p>
                <p className="text-sm text-gray-500">
                  {agency.testimonial.title}, {agency.testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── Section 4: How We Help ──────────────────── */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-bold">How We Help</h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {agency.services.map((service) => (
              <div
                key={service.name}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="text-2xl">{service.icon}</div>
                <h3 className="mt-3 font-semibold">{service.name}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── Section 5: Proven Results ──────────────────── */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-bold">Proven Results</h2>
          <p className="mt-2 text-gray-500">
            Real outcomes from our client partnerships.
          </p>

          <div className="mt-8 flex flex-wrap gap-6">
            {agency.caseStudies.map((cs, i) => (
              <div
                key={i}
                className="w-full rounded-xl border border-gray-200 bg-white p-6 sm:w-auto sm:flex-1 sm:min-w-[220px]"
              >
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  {cs.clientType}
                </p>
                <p className="mt-2 text-lg font-bold text-blue-600">
                  {cs.headlineMetric}
                </p>
                <ul className="mt-3 space-y-1 text-sm text-gray-500">
                  {cs.stats.map((stat, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── Section 6: Free Trainings ──────────────────── */}
      {agency.videos.length > 0 && (
        <section className="border-b border-gray-200">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-2xl font-bold">Free Trainings</h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {agency.videos.map((video, i) => (
                <a
                  key={i}
                  href={video.url}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white"
                >
                  {/* Gradient thumbnail with play icon */}
                  <div
                    className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${video.thumbnail}`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-medium text-gray-900">{video.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ──────────────────── Section 7: Free Resources ──────────────────── */}
      {agency.resources.length > 0 && (
        <section className="border-b border-gray-200">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-2xl font-bold">Free Resources</h2>

            <div className="mt-8 space-y-4">
              {agency.resources.map((resource, i) => (
                <a
                  key={i}
                  href={resource.url}
                  className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-gray-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Type badge placeholder */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-xs font-semibold uppercase text-gray-500">
                      {resource.type.slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {resource.title}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 text-lg text-gray-400 transition-colors group-hover:text-gray-900">
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ──────────────────── Section 8: CTA — Book a Call ──────────────────── */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 px-6 py-14 text-center">
            <h2 className="text-2xl font-bold">
              Ready to Scale Your Outbound?
            </h2>
            <p className="mt-3 text-gray-500">
              Book a free strategy call to see how we can help.
            </p>
            <a
              href={agency.bookingUrl}
              className="mt-6 inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
