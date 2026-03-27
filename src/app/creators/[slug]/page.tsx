import Link from "next/link";
import { notFound } from "next/navigation";
import { creators, getCreatorBySlug } from "@/data/creators";
import { tools } from "@/data/tools";

export function generateStaticParams() {
  return creators.map((creator) => ({
    slug: creator.slug,
  }));
}

export async function generateMetadata(props: PageProps<"/creators/[slug]">) {
  const { slug } = await props.params;
  const creator = getCreatorBySlug(slug);
  if (!creator) {
    return { title: "Creator Not Found" };
  }
  return {
    title: `${creator.name} - ColdEmail.com`,
    description: creator.tagline,
  };
}

export default async function Page(props: PageProps<"/creators/[slug]">) {
  const { slug } = await props.params;
  const creator = getCreatorBySlug(slug);

  if (!creator) {
    notFound();
  }

  const recommendedTools = tools.filter((tool) =>
    creator.recommendedTools.includes(tool.slug)
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Section 1: Creator Hero */}
      <section>
        {/* Banner */}
        <div
          className={`h-48 w-full bg-gradient-to-r ${creator.bannerGradient}`}
        />

        <div className="mx-auto max-w-7xl px-6">
          {/* Avatar */}
          <div className="-mt-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gray-100 text-xl font-bold text-gray-900">
            {creator.avatar}
          </div>

          <h1 className="mt-4 text-3xl font-bold">{creator.name}</h1>
          <p className="mt-2 text-xl text-gray-600">{creator.tagline}</p>
          <p className="mt-4 max-w-2xl text-gray-500">{creator.bio}</p>

          {/* Social Links */}
          <div className="mt-6 flex flex-wrap gap-2">
            {creator.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-600 transition hover:bg-gray-200"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section 2: Featured Content */}
        {creator.featuredVideos.length > 0 && (
          <section className="py-16">
            <h2 className="text-2xl font-bold">Featured Content</h2>
            <p className="mt-2 text-gray-500">
              Watch these videos to get a sense of how I teach and the value
              inside the community.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {creator.featuredVideos.map((video, i) => (
                <a
                  key={i}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:ring-1 hover:ring-gray-300"
                >
                  {/* Thumbnail */}
                  <div
                    className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${video.thumbnail}`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/50 text-2xl text-white transition group-hover:bg-black/70">
                      &#9654;
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900">{video.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      {video.views} views
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Section 3: Recommended Tools (My Tech Stack) */}
        {recommendedTools.length > 0 && (
          <section className="py-16">
            <h2 className="text-2xl font-bold">My Tech Stack</h2>
            <p className="mt-2 text-gray-500">
              Explore recommended tools by category.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recommendedTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group flex items-start justify-between rounded-xl border border-gray-200 bg-white p-4 transition hover:border-gray-300"
                >
                  <div className="min-w-0 flex-1">
                    <span className="text-xl">{tool.logo}</span>
                    <h3 className="mt-2 font-medium text-gray-900">{tool.name}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                      {tool.description}
                    </p>
                  </div>
                  <span className="ml-3 mt-1 text-gray-400 transition group-hover:text-blue-600">
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Section 4: Free Resources */}
        {creator.resources.length > 0 && (
          <section className="py-16">
            <h2 className="text-2xl font-bold">Free Resources</h2>
            <p className="mt-2 text-gray-500">
              Guides, templates, and courses to level up your outbound.
            </p>

            <div className="mt-8">
              {creator.resources.map((resource, i) => (
                <a
                  key={i}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mb-3 flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 transition hover:border-gray-300"
                >
                  <div className="min-w-0 flex-1">
                    <span className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                      {resource.type}
                    </span>
                    <h3 className="mt-2 font-medium text-gray-900">
                      {resource.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {resource.description}
                    </p>
                  </div>
                  <span className="ml-4 text-lg text-gray-400 transition group-hover:text-blue-600">
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Section 5: Community CTA */}
        <section className="py-16">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 py-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Join {creator.communityName}
            </h2>
            <p className="mt-3 text-gray-500">
              Connect with other professionals.
            </p>
            <a
              href={creator.communityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Join Community
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
