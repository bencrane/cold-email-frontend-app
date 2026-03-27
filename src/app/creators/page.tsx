import Link from "next/link";
import { creators } from "@/data/creators";

export default function CreatorsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Discover Creators
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Learn from top cold email experts and content creators.
          </p>
        </div>

        {/* Creator Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {creators.map((creator) => (
            <Link
              key={creator.slug}
              href={`/creators/${creator.slug}`}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:border-gray-300"
            >
              {/* Banner */}
              <div
                className={`h-32 bg-gradient-to-r ${creator.bannerGradient}`}
              />

              {/* Content */}
              <div className="p-5">
                {/* Initials Avatar */}
                <div className="relative -mt-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-sm font-bold text-gray-900">
                  {creator.avatar}
                </div>

                <h2 className="mt-3 text-lg font-semibold text-gray-900">
                  {creator.name}
                </h2>
                <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                  {creator.tagline}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-blue-600 transition group-hover:text-blue-700">
                  View Profile &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
