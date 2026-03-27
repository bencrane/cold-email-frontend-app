"use client";

import { useState } from "react";
import Link from "next/link";
import type { Tool } from "@/data/tools";

export default function ToolFilter({
  tools,
  categories,
}: {
  tools: Tool[];
  categories: string[];
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTools =
    selectedCategory === "All"
      ? tools
      : tools.filter((tool) => tool.category.includes(selectedCategory));

  return (
    <div>
      {/* Category Filter Bar */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tool Grid */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="group rounded-xl border border-gray-200 bg-white p-5 transition hover:border-gray-300"
          >
            <span className="text-3xl">{tool.logo}</span>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">
              {tool.name}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-gray-500">
              {tool.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {tool.category.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-500"
                >
                  {cat}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-400">{tool.pricingTier}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
