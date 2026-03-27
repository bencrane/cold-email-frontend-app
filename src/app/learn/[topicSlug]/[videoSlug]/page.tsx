import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  topics,
  videos,
  getTopicBySlug,
  getVideoBySlug,
  getVideosByTopic,
  getVideosByCreator,
} from "@/data/learn"
import { tools } from "@/data/tools"

export function generateStaticParams() {
  const params: { topicSlug: string; videoSlug: string }[] = []
  for (const video of videos) {
    for (const topicSlug of video.topicSlugs) {
      params.push({ topicSlug, videoSlug: video.slug })
    }
  }
  return params
}

export async function generateMetadata(
  props: PageProps<"/learn/[topicSlug]/[videoSlug]">
): Promise<Metadata> {
  const { videoSlug } = await props.params
  const video = getVideoBySlug(videoSlug)
  return {
    title: video
      ? `${video.title} — Learn Cold Email — ColdEmail.com`
      : "Video Not Found",
    description: video?.description,
  }
}

export default async function Page(
  props: PageProps<"/learn/[topicSlug]/[videoSlug]">
) {
  const { topicSlug, videoSlug } = await props.params
  const video = getVideoBySlug(videoSlug)
  const topic = getTopicBySlug(topicSlug)

  if (!video) {
    notFound()
  }

  // Related videos from the same topic (excluding current)
  const topicVideos = getVideosByTopic(topicSlug)
    .filter((v) => v.slug !== videoSlug)
    .slice(0, 4)

  // More from the same creator (excluding current)
  const creatorVideos = getVideosByCreator(video.creatorSlug)
    .filter((v) => v.slug !== videoSlug)
    .slice(0, 3)

  // Tools mentioned in this video
  const mentionedTools = tools.filter((t) =>
    video.mentionedToolSlugs.includes(t.slug)
  )

  // Get topic objects for this video
  const videoTopics = video.topicSlugs
    .map((slug) => getTopicBySlug(slug))
    .filter(Boolean)

  // Creator initials for avatar
  const initials = video.creatorName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-gray-400">
          <Link href="/learn" className="text-blue-600 hover:text-blue-700">
            Learn
          </Link>
          <span>/</span>
          {topic ? (
            <Link
              href={`/learn/${topicSlug}`}
              className="text-blue-600 hover:text-blue-700"
            >
              {topic.name}
            </Link>
          ) : (
            <span>{topicSlug}</span>
          )}
          <span>/</span>
          <span className="truncate text-gray-400">{video.title}</span>
        </nav>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Main Column */}
          <div className="min-w-0 flex-1">
            {/* Video Player Placeholder */}
            <div
              className={`flex aspect-video w-full flex-col items-center justify-center rounded-xl bg-gray-100`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/10 text-3xl text-gray-400">
                &#9654;
              </div>
              <p className="mt-3 text-sm text-gray-400">Watch on YouTube</p>
            </div>

            {/* Video Info */}
            <h1 className="mt-6 text-2xl font-bold text-gray-900">
              {video.title}
            </h1>

            {/* Creator Row */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-900">
                {initials}
              </div>
              <div>
                <Link
                  href={`/creators/${video.creatorSlug}`}
                  className="font-semibold text-gray-900 hover:text-blue-600"
                >
                  {video.creatorName}
                </Link>
                <Link
                  href={`/creators/${video.creatorSlug}`}
                  className="ml-2 text-xs text-blue-600 hover:text-blue-700"
                >
                  View Profile
                </Link>
              </div>
            </div>

            {/* Meta Row */}
            <div className="mt-2 flex gap-4 text-sm text-gray-400">
              <span>{video.publishedDate}</span>
              <span>{video.views} views</span>
              <span>{video.duration}</span>
            </div>

            {/* Description */}
            <p className="mt-4 leading-relaxed text-gray-600">
              {video.description}
            </p>

            {/* Topic Tags */}
            {videoTopics.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-500">Topics:</span>
                {videoTopics.map(
                  (t) =>
                    t && (
                      <Link
                        key={t.slug}
                        href={`/learn/${t.slug}`}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
                      >
                        {t.name}
                      </Link>
                    )
                )}
              </div>
            )}

            {/* Tools Mentioned */}
            {mentionedTools.length > 0 && (
              <section className="mt-8">
                <h2 className="font-semibold text-gray-900">
                  Tools Mentioned
                </h2>
                <div className="mt-3 flex flex-wrap gap-3">
                  {mentionedTools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition hover:border-gray-300"
                    >
                      <span className="text-xl">{tool.logo}</span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                          {tool.name}
                        </p>
                        <p className="line-clamp-1 text-xs text-gray-400">
                          {tool.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full shrink-0 lg:w-80">
            {/* Related Videos */}
            {topicVideos.length > 0 && (
              <section>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Related Videos
                </h3>
                <div className="space-y-3">
                  {topicVideos.map((v) => (
                    <Link
                      key={v.slug}
                      href={`/learn/${topicSlug}/${v.slug}`}
                      className="group flex items-start gap-3"
                    >
                      <div
                        className={`flex h-20 w-32 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${v.thumbnailGradient}`}
                      >
                        <span className="text-sm text-white/80">&#9654;</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600">
                          {v.title}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          {v.creatorName}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* More from Creator */}
            {creatorVideos.length > 0 && (
              <section className={topicVideos.length > 0 ? "mt-8" : ""}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                  More from {video.creatorName}
                </h3>
                <div className="space-y-3">
                  {creatorVideos.map((v) => {
                    const firstTopic = v.topicSlugs[0] || topicSlug
                    return (
                      <Link
                        key={v.slug}
                        href={`/learn/${firstTopic}/${v.slug}`}
                        className="group flex items-start gap-3"
                      >
                        <div
                          className={`flex h-20 w-32 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${v.thumbnailGradient}`}
                        >
                          <span className="text-sm text-white/80">
                            &#9654;
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600">
                            {v.title}
                          </p>
                          <p className="mt-1 text-xs text-gray-400">
                            {v.creatorName}
                          </p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
