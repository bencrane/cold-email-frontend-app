import Link from "next/link";
import {
  getAllTopics,
  getRecentVideos,
  getVideosByTopic,
} from "@/data/learn";

export default function LearnPage() {
  const topics = getAllTopics();
  const recentVideos = getRecentVideos(8);

  return (
    <div className="min-h-screen text-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Learn Cold Email
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Master cold email from the best creators in the game. Organized by
            topic, not by creator.
          </p>
        </section>

        {/* Topic Grid */}
        <section className="pb-20">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {topics.map((topic) => {
              const videoCount = getVideosByTopic(topic.slug).length;
              return (
                <Link
                  key={topic.slug}
                  href={`/learn/${topic.slug}`}
                  className="rounded-xl border border-gray-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-sm"
                >
                  <span className="text-3xl">{topic.icon}</span>
                  <h3 className="mt-3 font-semibold text-gray-900">
                    {topic.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                    {topic.description}
                  </p>
                  <p className="mt-4 text-xs text-gray-400">
                    {videoCount} {videoCount === 1 ? "video" : "videos"}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Recently Added */}
        <section className="py-20">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Recently Added
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recentVideos.map((video) => (
              <Link
                key={video.slug}
                href={`/learn/${video.topicSlugs[0]}/${video.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:border-gray-300"
              >
                <div
                  className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${video.thumbnailGradient}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white transition group-hover:bg-black/50">
                    <span className="ml-0.5 text-lg">&#9654;</span>
                  </div>
                  <span className="absolute bottom-2 right-2 rounded bg-black/60 px-1.5 py-0.5 text-xs font-medium text-white">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="line-clamp-2 font-medium text-gray-900">
                    {video.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {video.creatorName}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
                    <span>{video.views} views</span>
                    <span>&bull;</span>
                    <span>{video.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
