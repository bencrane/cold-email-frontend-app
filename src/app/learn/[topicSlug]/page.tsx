import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  topics,
  getTopicBySlug,
  getVideosByTopic,
} from "@/data/learn"

export function generateStaticParams() {
  return topics.map((topic) => ({ topicSlug: topic.slug }))
}

export async function generateMetadata(
  props: PageProps<"/learn/[topicSlug]">
): Promise<Metadata> {
  const { topicSlug } = await props.params
  const topic = getTopicBySlug(topicSlug)
  return {
    title: topic
      ? `${topic.name} — Learn Cold Email — ColdEmail.com`
      : "Topic Not Found",
    description: topic?.description,
  }
}

export default async function Page(props: PageProps<"/learn/[topicSlug]">) {
  const { topicSlug } = await props.params
  const topic = getTopicBySlug(topicSlug)

  if (!topic) {
    notFound()
  }

  const videos = getVideosByTopic(topicSlug)
  const otherTopics = topics.filter((t) => t.slug !== topicSlug)

  return (
    <div className="min-h-screen bg-white">
      {/* Back link */}
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <Link
          href="/learn"
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          &larr; Back to Learn
        </Link>
      </div>

      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-start gap-4">
          <span className="text-4xl">{topic.icon}</span>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold text-gray-900">
                {topic.name}
              </h1>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600">
                {videos.length} video{videos.length !== 1 && "s"}
              </span>
            </div>
            <p className="mt-2 max-w-2xl text-gray-500">{topic.description}</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        {/* Related Topics */}
        {otherTopics.length > 0 && (
          <section className="pb-10">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {otherTopics.map((t) => (
                <Link
                  key={t.slug}
                  href={`/learn/${t.slug}`}
                  className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  {t.icon} {t.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Video Grid */}
        <section className="pb-16">
          {videos.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <Link
                  key={video.slug}
                  href={`/learn/${topicSlug}/${video.slug}`}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:border-gray-300"
                >
                  {/* Thumbnail */}
                  <div
                    className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${video.thumbnailGradient}`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-xl text-white transition group-hover:bg-black/60">
                      &#9654;
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="mt-1 text-sm text-blue-600 hover:text-blue-700">
                      {video.creatorName}
                    </p>
                    <div className="mt-2 flex gap-3 text-xs text-gray-400">
                      <span>{video.views} views</span>
                      <span>{video.duration}</span>
                      <span>{video.publishedDate}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              No videos found for this topic yet.
            </p>
          )}
        </section>
      </div>
    </div>
  )
}
