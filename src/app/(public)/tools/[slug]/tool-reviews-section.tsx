"use client";

import { useState } from "react";
import Link from "next/link";
import type { Tool } from "@/lib/types";
import {
  getApprovedToolReviews,
  getToolReviewStats,
} from "@/data/tool-reviews";
import StarRating from "@/components/ui/star-rating";

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
  if (diffMins < 60) return `${diffMins} minute${diffMins === 1 ? "" : "s"} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
  if (diffWeeks < 5) return `${diffWeeks} week${diffWeeks === 1 ? "" : "s"} ago`;
  return `${diffMonths} month${diffMonths === 1 ? "" : "s"} ago`;
}

const PAGE_SIZE = 10;

export default function ToolReviewsSection({ tool }: { tool: Tool }) {
  const [showAll, setShowAll] = useState(false);

  const reviews = getApprovedToolReviews(tool.slug);
  const stats = getToolReviewStats(tool.slug);
  const visibleReviews = showAll ? reviews : reviews.slice(0, PAGE_SIZE);
  const hasMore = reviews.length > PAGE_SIZE && !showAll;

  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold tracking-[-0.3px]">
        Reviews
      </h2>

      {/* Rating summary bar */}
      <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-[var(--radius)] border border-border bg-surface p-5">
        {stats ? (
          <div className="flex items-center gap-2">
            <StarRating value={Math.round(stats.average)} readonly size="sm" />
            <span className="text-sm font-semibold text-text-primary">
              {stats.average}/5
            </span>
            <span className="text-sm text-text-secondary">
              on ColdEmail.com ({stats.count}{" "}
              {stats.count === 1 ? "review" : "reviews"})
            </span>
          </div>
        ) : (
          <div className="text-sm text-text-secondary">
            No ColdEmail.com reviews yet — be the first!
          </div>
        )}

        {tool.g2 && (
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-text-primary">
              {tool.g2.rating}/5
            </span>
            <a
              href={tool.g2.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent no-underline hover:underline"
            >
              on G2 ({tool.g2.reviewCount} reviews)
            </a>
          </div>
        )}

        <Link
          href={`/tools/${tool.slug}/review`}
          className="ml-auto rounded-[var(--radius-sm)] bg-text-primary px-4 py-2 text-sm font-semibold text-white no-underline transition-colors hover:bg-text-primary-hover"
        >
          Write a Review
        </Link>
      </div>

      {/* Review cards */}
      {visibleReviews.length > 0 && (
        <div className="space-y-4">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="rounded-[var(--radius)] border border-border bg-surface p-5"
            >
              <div className="mb-2 flex items-center gap-3">
                <StarRating value={review.rating} readonly size="sm" />
                <span className="text-xs text-text-tertiary">
                  {relativeTime(review.createdAt)}
                </span>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-text-primary">
                {review.title}
              </h3>
              <p className="mb-3 text-sm leading-[1.6] text-text-secondary">
                {review.body}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-tertiary">
                <span className="font-medium text-text-secondary">
                  {review.reviewerName}
                </span>
                {(review.reviewerTitle || review.reviewerCompany) && (
                  <span>
                    {[review.reviewerTitle, review.reviewerCompany]
                      .filter(Boolean)
                      .join(" at ")}
                  </span>
                )}
                {review.usageDuration && (
                  <>
                    <span>·</span>
                    <span>Using for {review.usageDuration.toLowerCase()}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {hasMore && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 w-full rounded-[var(--radius-sm)] border border-border bg-surface py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-hover hover:text-text-primary"
        >
          Show more reviews ({reviews.length - PAGE_SIZE} more)
        </button>
      )}
    </section>
  );
}
