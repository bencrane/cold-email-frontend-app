import Link from "next/link"
import { agencies } from "@/data/agencies"

export const metadata = {
  title: "Find a Cold Email Agency — ColdEmail.com",
  description:
    "Discover proven agencies that build and run outbound systems. Browse vetted cold email partners on ColdEmail.com.",
}

export default function AgenciesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Find a Cold Email Agency
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Discover proven agencies that build and run outbound systems.
          </p>
        </div>

        {/* Agency Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {agencies.map((agency) => (
            <Link
              key={agency.slug}
              href={`/agencies/${agency.slug}`}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-gray-300"
            >
              {/* Logo + Name */}
              <div className="mb-4 flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${agency.heroGradient} text-sm font-bold text-white`}
                >
                  {agency.logo}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {agency.name}
                  </h2>
                  {agency.certified && (
                    <span className="text-xs text-blue-600">
                      Certified Partner
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="mb-4 line-clamp-2 text-sm text-gray-500">
                {agency.description}
              </p>

              {/* Stats badges */}
              <div className="mb-4 flex flex-wrap gap-2">
                {agency.stats.slice(0, 2).map((stat) => (
                  <span
                    key={stat.label}
                    className="rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-600"
                  >
                    <span className="text-gray-400">{stat.label}:</span>{" "}
                    {stat.value}
                  </span>
                ))}
              </div>

              {/* View Profile Link */}
              <span className="text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-600">
                View Profile &rarr;
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400">
            Want your agency on ColdEmail.com?{" "}
            <a href="#" className="underline transition-colors hover:text-gray-600">
              Apply here.
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
