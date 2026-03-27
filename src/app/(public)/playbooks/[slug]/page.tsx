import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/ui/breadcrumb";
import type { Metadata } from "next";
import type { EditorialContent, EditorialSubject, VideoSource } from "@/lib/types";
import { editorialContent, getEditorialBySlug } from "@/data/editorial";
import { getToolBySlug } from "@/data/tools";
import { getAgencyBySlug } from "@/data/agencies";

export function generateStaticParams() {
  return editorialContent.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getEditorialBySlug(slug);
  if (!item) return {};
  return createMetadata({
    title: item.title,
    description: item.description,
    path: `/playbooks/${slug}`,
  });
}

function SubjectHeader({ subject }: { subject: EditorialSubject }) {
  return (
    <div className="mb-10 rounded-[var(--radius)] border border-border bg-surface p-6">
      <div className="flex items-start gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
          {subject.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-text-primary">
            {subject.name}
          </h2>
          <p className="text-sm text-text-secondary">
            {subject.role} at {subject.company}
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            {subject.url && (
              <a
                href={subject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-accent no-underline hover:underline"
              >
                Website ↗
              </a>
            )}
            {subject.linkedinUrl && (
              <a
                href={subject.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-accent no-underline hover:underline"
              >
                LinkedIn ↗
              </a>
            )}
            {subject.youtubeUrl && (
              <a
                href={subject.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-accent no-underline hover:underline"
              >
                YouTube ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ComparisonCard({ toolSlugs }: { toolSlugs: string[] }) {
  const tools = toolSlugs
    .map((slug) => getToolBySlug(slug))
    .filter(Boolean);

  if (tools.length < 2) return null;

  return (
    <div className="mb-10 rounded-[var(--radius)] border border-border bg-surface p-6">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-[1px] text-text-tertiary">
        Quick Comparison
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {tools.map((tool) =>
          tool ? (
            <div
              key={tool.slug}
              className="rounded-[var(--radius-sm)] border border-border-light bg-bg p-4"
            >
              <div className="mb-1 flex items-center gap-2">
                <span className="text-lg">{tool.icon}</span>
                <span className="font-semibold text-text-primary">
                  {tool.name}
                </span>
              </div>
              <p className="mb-3 text-xs leading-[1.5] text-text-secondary">
                {tool.tagline}
              </p>
              {tool.pricing[0] && (
                <div className="text-xs text-text-tertiary">
                  Starting at{" "}
                  <span className="font-medium text-text-primary">
                    {tool.pricing[0].price}
                  </span>
                </div>
              )}
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
}

function VideoSourceBlock({ video }: { video: VideoSource }) {
  return (
    <div className="mt-10 rounded-[var(--radius)] border border-border bg-surface-muted p-5">
      <p className="text-xs font-medium text-text-tertiary">
        Based on{" "}
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-accent no-underline hover:underline"
        >
          {video.title}
        </a>{" "}
        by {video.creator}
      </p>
    </div>
  );
}

function RelatedTools({ toolSlugs }: { toolSlugs: string[] }) {
  const tools = toolSlugs
    .map((slug) => getToolBySlug(slug))
    .filter(Boolean);

  if (tools.length === 0) return null;

  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-[1px] text-text-tertiary">
        Tools Mentioned
      </h3>
      <div className="flex flex-col gap-2">
        {tools.map((tool) =>
          tool ? (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="flex items-center gap-3 rounded-[var(--radius-sm)] border border-border bg-surface p-3 no-underline transition-colors hover:border-border-hover"
            >
              <span className="text-base">{tool.icon}</span>
              <div>
                <span className="text-sm font-medium text-text-primary">
                  {tool.name}
                </span>
                <p className="text-xs text-text-secondary">{tool.tagline}</p>
              </div>
            </Link>
          ) : null,
        )}
      </div>
    </div>
  );
}

function RelatedAgencies({ agencySlugs }: { agencySlugs: string[] }) {
  const agencyList = agencySlugs
    .map((slug) => getAgencyBySlug(slug))
    .filter(Boolean);

  if (agencyList.length === 0) return null;

  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-[1px] text-text-tertiary">
        Agencies
      </h3>
      <div className="flex flex-col gap-2">
        {agencyList.map((agency) =>
          agency ? (
            <Link
              key={agency.slug}
              href={`/agencies/${agency.slug}`}
              className="flex items-center gap-3 rounded-[var(--radius-sm)] border border-border bg-surface p-3 no-underline transition-colors hover:border-border-hover"
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: agency.color }}
              >
                {agency.logo}
              </span>
              <div>
                <span className="text-sm font-medium text-text-primary">
                  {agency.name}
                </span>
                <p className="text-xs text-text-secondary">{agency.tagline}</p>
              </div>
            </Link>
          ) : null,
        )}
      </div>
    </div>
  );
}

export default async function PlaybookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getEditorialBySlug(slug);

  if (!item) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-[var(--max-width)] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary">
            Not found
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            This page doesn&apos;t exist yet.
          </p>
          <Link
            href="/playbooks"
            className="mt-4 inline-block text-sm font-medium text-accent no-underline"
          >
            ← Back to Playbooks
          </Link>
        </div>
      </main>
    );
  }

  const hasRelated =
    (item.tools && item.tools.length > 0) ||
    (item.agencies && item.agencies.length > 0);

  return (
    <main className="mx-auto max-w-[var(--max-width)] px-6 pb-20 pt-12">
      <div className={hasRelated ? "lg:flex lg:gap-12" : ""}>
        <article className={hasRelated ? "min-w-0 flex-1" : "mx-auto max-w-[720px]"}>
          <Breadcrumb
            className="mb-8"
            items={[{ label: "Playbooks", href: "/playbooks" }]}
          />

          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[1px] text-accent">
            {item.tag}
          </div>
          <h1 className="mb-4 font-display text-[clamp(32px,4vw,44px)] font-normal leading-[1.15] tracking-[-1px] text-text-primary">
            {item.title}
          </h1>
          <div className="mb-10 flex items-center gap-3 text-sm text-text-tertiary">
            <span>{item.readTime}</span>
            {item.publishedAt && (
              <>
                <span>·</span>
                <span>
                  {new Date(item.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </>
            )}
          </div>

          {item.type === "spotlight" && item.subject && (
            <SubjectHeader subject={item.subject} />
          )}

          {item.type === "breakdown" &&
            item.tools &&
            item.tools.length >= 2 && (
              <ComparisonCard toolSlugs={item.tools} />
            )}

          {item.type === "playbook" && item.subject && (
            <SubjectHeader subject={item.subject} />
          )}

          <div className="prose prose-gray max-w-none">
            <p className="text-[15px] leading-[1.7] text-text-secondary">
              {item.description}
            </p>
            <div className="mt-10 rounded-[var(--radius)] border border-border bg-tag-bg p-8 text-center">
              <p className="text-sm text-text-secondary">
                Full content coming soon. This page will render MDX content from{" "}
                <code>src/content/playbooks/</code>.
              </p>
            </div>
          </div>

          {item.videoSource && <VideoSourceBlock video={item.videoSource} />}
        </article>

        {hasRelated && (
          <aside className="mt-10 w-full shrink-0 lg:mt-0 lg:w-[280px]">
            <div className="sticky top-8 flex flex-col gap-8">
              {item.tools && item.tools.length > 0 && (
                <RelatedTools toolSlugs={item.tools} />
              )}
              {item.agencies && item.agencies.length > 0 && (
                <RelatedAgencies agencySlugs={item.agencies} />
              )}
            </div>
          </aside>
        )}
      </div>
    </main>
  );
}
