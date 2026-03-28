"use client";

import { useState } from "react";

type Size = "sm" | "md";

const sizeClasses: Record<Size, string> = {
  sm: "text-lg",
  md: "text-2xl",
};

type Fill = "full" | "half" | "empty";

function getStarFill(star: number, value: number): Fill {
  if (value >= star) return "full";
  if (value >= star - 0.5) return "half";
  return "empty";
}

function ReadonlyStar({
  fill,
  size,
  id,
}: {
  fill: Fill;
  size: Size;
  id: string;
}) {
  if (fill === "full") {
    return <span className={`${sizeClasses[size]} text-star`}>★</span>;
  }
  if (fill === "empty") {
    return <span className={`${sizeClasses[size]} text-border`}>★</span>;
  }
  // Half star: use an inline SVG with a gradient clip
  return (
    <span className={`${sizeClasses[size]} inline-block leading-none`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width="1em"
        height="1em"
        className="align-middle"
      >
        <defs>
          <linearGradient id={id}>
            <stop offset="50%" className="[stop-color:var(--color-star)]" />
            <stop offset="50%" className="[stop-color:var(--color-border)]" />
          </linearGradient>
        </defs>
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"
          fill={`url(#${id})`}
        />
      </svg>
    </span>
  );
}

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

  if (readonly) {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <ReadonlyStar
            key={star}
            fill={getStarFill(star, value)}
            size={size}
            id={`half-star-${star}-${value}`}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = hovered !== null ? star <= hovered : star <= value;
        return (
          <button
            key={star}
            type="button"
            onClick={() => onChange?.(value === star ? 0 : star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(null)}
            className={`p-0.5 transition-colors ${sizeClasses[size]}`}
          >
            <span
              className={
                filled ? "text-star hover:text-star-hover" : "text-border"
              }
            >
              ★
            </span>
          </button>
        );
      })}
    </div>
  );
}
