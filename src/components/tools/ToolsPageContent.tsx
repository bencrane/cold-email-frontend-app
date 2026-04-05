"use client";

import { useState } from "react";
import Link from "next/link";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";

export default function ToolsPageContent() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredTools = activeCategory
    ? tools.filter((tool) => tool.categories.includes(activeCategory))
    : tools;

  return (
    <main className="mx-auto max-w-[var(--max-width)] px-6 pb-20 pt-12">
      <div className="mb-10">
        <h1 className="mb-3 font-display text-[clamp(36px,4vw,48px)] font-normal tracking-[-1px] text-text-primary">
          Cold Email Tools
        </h1>
        <p className="max-w-[560px] text-base leading-[1.65] text-text-secondary">
          The tools that power modern outbound.
        </p>
      </div>

      {/* Categories */}
      <div className="mb-10 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
            activeCategory === null
              ? "bg-text-primary text-white"
              : "border border-border bg-surface text-text-secondary hover:border-border-hover hover:text-text-primary"
          }`}
        >
          All Tools
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
              activeCategory === cat.slug
                ? "bg-text-primary text-white"
                : "border border-border bg-surface text-text-secondary hover:border-border-hover hover:text-text-primary"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {filteredTools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="flex flex-col gap-3 rounded-[var(--radius)] border border-border bg-surface p-6 no-underline transition-all duration-200 hover:-translate-y-px hover:border-border-hover hover:shadow-[var(--card-shadow-hover)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-tag-bg text-xl">
              {tool.icon}
            </div>
            <h3 className="text-base font-semibold tracking-[-0.2px] text-text-primary">
              {tool.name}
            </h3>
            <p className="text-sm leading-[1.5] text-text-secondary">
              {tool.tagline}
            </p>
            <div className="mt-auto flex flex-wrap gap-1.5">
              {tool.categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-tag-bg px-2.5 py-[3px] text-xs font-medium text-tag-text"
                >
                  {cat
                    .split("-")
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(" ")}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
