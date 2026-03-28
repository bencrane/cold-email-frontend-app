import type { LinkedInPost, LinkedInCreator } from "@/lib/types";

const AVATAR_COLORS = [
  { bg: "bg-accent-light", text: "text-accent" },
  { bg: "bg-success-bg", text: "text-success-text" },
  { bg: "bg-destructive-bg", text: "text-destructive-text" },
  { bg: "bg-accent-muted", text: "text-accent" },
  { bg: "bg-surface-muted", text: "text-text-secondary" },
];

function getAvatarColor(slug: string) {
  return AVATAR_COLORS[slug.charCodeAt(0) % AVATAR_COLORS.length];
}

function relativeTime(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);

  if (diffMins < 1) return "just now";
  if (diffMins < 60)
    return `${diffMins}m ago`;
  if (diffHours < 24)
    return `${diffHours}h ago`;
  if (diffDays < 7)
    return `${diffDays}d ago`;
  if (diffWeeks < 5)
    return `${diffWeeks}w ago`;
  return `${diffMonths}mo ago`;
}

export default function LinkedInPostCard({
  post,
  creator,
  variant,
}: {
  post: LinkedInPost;
  creator: LinkedInCreator;
  variant: "compact" | "full";
}) {
  const color = getAvatarColor(creator.slug);
  const isCompact = variant === "compact";

  return (
    <a
      href={post.linkedinPostUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex flex-col rounded-[var(--radius)] border border-border bg-surface no-underline transition-all duration-200 hover:-translate-y-px hover:border-border-hover hover:shadow-[var(--card-shadow-hover)] ${
        isCompact ? "w-[300px] shrink-0 p-4" : "p-5"
      }`}
    >
      {/* LinkedIn badge */}
      <div className="absolute top-3 right-3 flex h-[18px] items-center rounded-[4px] bg-[#0A66C2] px-1.5">
        <span className="text-[10px] font-bold leading-none text-white">
          in
        </span>
      </div>

      {/* Creator info */}
      <div className="mb-3 flex items-center gap-2">
        <div
          className={`flex shrink-0 items-center justify-center rounded-full font-semibold ${color.bg} ${color.text} ${
            isCompact
              ? "h-7 w-7 text-[10px]"
              : "h-8 w-8 text-[11px]"
          }`}
        >
          {creator.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="truncate text-xs font-semibold text-text-primary">
              {creator.name}
            </span>
            <span className="shrink-0 text-xs text-text-tertiary">
              · {relativeTime(post.postedAt)}
            </span>
          </div>
        </div>
      </div>

      {/* Topic pill (full variant only) */}
      {!isCompact && (
        <div className="mb-2">
          <span className="rounded-full bg-tag-bg px-2.5 py-[3px] text-xs font-medium text-tag-text">
            {post.topic}
          </span>
        </div>
      )}

      {/* Content */}
      <p
        className={`flex-1 text-sm leading-[1.5] text-text-secondary ${
          isCompact ? "line-clamp-4" : "line-clamp-3"
        }`}
      >
        {post.content}
      </p>

      {/* Engagement */}
      <div className="mt-3 flex items-center gap-3 text-xs text-text-tertiary">
        <span className="flex items-center gap-1">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 10v12" />
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
          </svg>
          {post.likes.toLocaleString()}
        </span>
        <span className="flex items-center gap-1">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {post.comments}
        </span>
      </div>
    </a>
  );
}
