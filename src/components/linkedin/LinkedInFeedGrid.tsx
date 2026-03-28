"use client";

import { useState, useEffect } from "react";
import type { LinkedInPostTopic } from "@/lib/types";
import { getPostsForFeed } from "@/data/linkedin-posts";
import { getCreatorBySlug } from "@/data/linkedin-creators";
import LinkedInPostCard from "./LinkedInPostCard";

const PAGE_SIZE = 12;

export default function LinkedInFeedGrid({
  topic,
}: {
  topic: LinkedInPostTopic | null;
}) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [topic]);

  const allPosts = getPostsForFeed(topic);
  const visiblePosts = allPosts.slice(0, visibleCount);
  const hasMore = allPosts.length > visibleCount;

  if (allPosts.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-sm text-text-tertiary">
          No posts in this topic yet. Check back soon.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {visiblePosts.map((post) => {
          const creator = getCreatorBySlug(post.creatorSlug);
          if (!creator) return null;
          return (
            <LinkedInPostCard
              key={post.id}
              post={post}
              creator={creator}
              variant="full"
            />
          );
        })}
      </div>
      {hasMore && (
        <button
          onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
          className="mt-6 w-full rounded-[var(--radius-sm)] border border-border bg-surface py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-hover hover:text-text-primary"
        >
          Load more
        </button>
      )}
    </div>
  );
}
