"use client";

import Link from "next/link";
import { useState } from "react";
import type { EditorialContent, EditorialType } from "@/lib/types";
import {
  editorialContent,
  getFeaturedEditorial,
  getAllEditorialSorted,
} from "@/data/editorial";

const TYPE_LABELS: Record<string, { label: string; type: EditorialType | null }> = {
  all: { label: "All", type: null },
  playbook: { label: "Playbooks", type: "playbook" },
  spotlight: { label: "Spotlights", type: "spotlight" },
  breakdown: { label: "Breakdowns", type: "breakdown" },
  guide: { label: "Guides", type: "guide" },
};

const COVER_GRADIENTS: Record<string, string> = {
  blue: "bg-gradient-to-br from-[#0F1115] via-accent to-[#0F1115]",
  dark: "bg-gradient-to-br from-[#0F1115] to-[#1a1a2e]",
  neutral: "bg-gradient-to-br from-[#0F1115] to-[#374151]",
};

const TYPE_DISPLAY: Record<EditorialType, string> = {
  playbook: "Deep Dive",
  spotlight: "Spotlight",
  breakdown: "Comparison",
  guide: "Guide",
  opinion: "Opinion",
};

function EditorialCard({
  item,
  featured = false,
}: {
  item: EditorialContent;
  featured?: boolean;
}) {
  const gradient = COVER_GRADIENTS[item.coverStyle] ?? COVER_GRADIENTS.dark;

  return (
    <Link
      href={`/playbooks/${item.slug}`}
      className="overflow-hidden rounded-[var(--radius)] border border-border bg-surface no-underline transition-all duration-200 hover:-translate-y-px hover:border-border-hover hover:shadow-[var(--card-shadow-hover)]"
    >
      <div
        className={`relative flex items-center justify-center overflow-hidden ${gradient} ${
          featured ? "h-[220px]" : "h-[180px]"
        }`}
      >
        <span className="relative z-10 text-xs font-semibold uppercase tracking-[1.5px] text-white/60">
          {TYPE_DISPLAY[item.type]}
        </span>
      </div>
      <div className="p-6">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[1px] text-accent">
          {item.tag}
        </div>
        <h3
          className={`mb-2 font-semibold leading-[1.35] tracking-[-0.3px] text-text-primary ${
            featured ? "text-xl" : "text-lg"
          }`}
        >
          {item.title}
        </h3>
        <p className="text-sm leading-[1.55] text-text-secondary">
          {item.description}
        </p>
        <div className="mt-3 flex items-center gap-3 text-xs text-text-tertiary">
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
      </div>
    </Link>
  );
}

export default function PlaybooksPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const featured = getFeaturedEditorial();
  const allSorted = getAllEditorialSorted();

  const filtered =
    activeFilter === "all"
      ? allSorted
      : allSorted.filter((e) => e.type === activeFilter);

  const nonFeaturedFiltered = filtered.filter((e) => !e.featured);

  return (
    <main className="mx-auto max-w-[var(--max-width)] px-6 pb-20 pt-12">
      <div className="mb-10">
        <h1 className="mb-3 font-display text-[clamp(36px,4vw,48px)] font-normal tracking-[-1px] text-text-primary">
          Playbooks
        </h1>
        <p className="max-w-[560px] text-base leading-[1.65] text-text-secondary">
          Deep dives, comparisons, and tactical guides on cold email — from the
          agencies and operators who do it at scale.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {Object.entries(TYPE_LABELS).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => setActiveFilter(key)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeFilter === key
                ? "bg-accent text-white"
                : "bg-surface-muted text-text-secondary hover:bg-surface-hover hover:text-text-primary"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {featured.length > 0 &&
        (activeFilter === "all" ||
          featured.some((f) => f.type === activeFilter)) && (
          <div className="mb-8">
            <div
              className={`grid gap-4 ${
                featured.length === 1
                  ? "grid-cols-1"
                  : "grid-cols-1 md:grid-cols-2"
              }`}
            >
              {featured
                .filter(
                  (f) => activeFilter === "all" || f.type === activeFilter,
                )
                .map((item) => (
                  <EditorialCard key={item.slug} item={item} featured />
                ))}
            </div>
          </div>
        )}

      {nonFeaturedFiltered.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {nonFeaturedFiltered.map((item) => (
            <EditorialCard key={item.slug} item={item} />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-sm text-text-tertiary">
            No content in this category yet. Check back soon.
          </p>
        </div>
      )}
    </main>
  );
}
