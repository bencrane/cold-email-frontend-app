"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getRecentPosts } from "@/data/linkedin-posts";
import { getCreatorBySlug } from "@/data/linkedin-creators";
import LinkedInPostCard from "./LinkedInPostCard";

export default function LinkedInFeedScroll({
  limit = 12,
}: {
  limit?: number;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const posts = getRecentPosts(limit);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-[var(--max-width)] px-6 pb-20">
      <div className="mb-7 flex items-baseline justify-between">
        <h2 className="font-display text-[32px] font-normal tracking-[-0.5px]">
          What&rsquo;s happening in outbound
        </h2>
        <Link
          href="/feed"
          className="text-sm font-medium text-accent no-underline hover:underline"
        >
          View all →
        </Link>
      </div>

      <div className="group relative">
        {/* Left arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 left-0 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/90 shadow-[var(--card-shadow)] opacity-0 transition-opacity group-hover:opacity-100 md:flex"
            aria-label="Scroll left"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        )}

        {/* Right arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 right-0 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/90 shadow-[var(--card-shadow)] opacity-0 transition-opacity group-hover:opacity-100 md:flex"
            aria-label="Scroll right"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        )}

        {/* Scroll container */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth"
        >
          {posts.map((post, index) => {
            const creator = getCreatorBySlug(post.creatorSlug);
            if (!creator) return null;
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <LinkedInPostCard
                  post={post}
                  creator={creator}
                  variant="compact"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
