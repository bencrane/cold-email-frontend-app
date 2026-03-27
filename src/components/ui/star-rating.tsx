"use client";

import { useState } from "react";

type Size = "sm" | "md";

const sizeClasses: Record<Size, string> = {
  sm: "text-lg",
  md: "text-2xl",
};

export default function StarRating({
  value,
  onChange,
  readonly = false,
  size = "md",
}: {
  value: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  size?: Size;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = hovered !== null ? star <= hovered : star <= value;
        if (readonly) {
          return (
            <span
              key={star}
              className={`${sizeClasses[size]} ${filled ? "text-star" : "text-border"}`}
            >
              ★
            </span>
          );
        }
        return (
          <button
            key={star}
            type="button"
            onClick={() => onChange?.(value === star ? 0 : star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(null)}
            className={`p-0.5 transition-colors ${sizeClasses[size]}`}
          >
            <span className={filled ? "text-star hover:text-star-hover" : "text-border"}>
              ★
            </span>
          </button>
        );
      })}
    </div>
  );
}
