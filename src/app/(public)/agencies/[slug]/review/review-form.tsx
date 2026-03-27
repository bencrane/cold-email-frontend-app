"use client";

import { useState } from "react";

export default function ReviewForm({
  agencyName,
  agencySlug,
}: {
  agencyName: string;
  agencySlug: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      agencySlug,
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      jobTitle: (form.elements.namedItem("jobTitle") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      text: (form.elements.namedItem("text") as HTMLTextAreaElement).value,
      rating,
    };
    console.log("Review submitted:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[var(--radius)] border border-border bg-surface px-6 py-12 text-center">
        <div className="mb-3 text-3xl">&#10003;</div>
        <h2 className="mb-2 text-lg font-semibold text-text-primary">
          Thanks for your review
        </h2>
        <p className="text-sm text-text-secondary">
          It will appear on {agencyName}&apos;s profile after approval.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";
  const labelClass = "mb-1.5 block text-sm font-medium text-text-secondary";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[var(--radius)] border border-border bg-surface p-6"
    >
      <div>
        <label htmlFor="name" className={labelClass}>
          Name *
        </label>
        <input
          id="name"
          name="name"
          required
          className={inputClass}
          placeholder="Your full name"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="jobTitle" className={labelClass}>
            Job Title *
          </label>
          <input
            id="jobTitle"
            name="jobTitle"
            required
            className={inputClass}
            placeholder="e.g. VP of Sales"
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company *
          </label>
          <input
            id="company"
            name="company"
            required
            className={inputClass}
            placeholder="Your company name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="text" className={labelClass}>
          Your Review *
        </label>
        <textarea
          id="text"
          name="text"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Share your experience working with this agency..."
        />
      </div>

      {/* Star rating */}
      <div>
        <span className={labelClass}>Rating (optional)</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(rating === star ? null : star)}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(null)}
              className="p-0.5 text-2xl transition-colors"
            >
              <span
                className={
                  (hoveredStar !== null ? star <= hoveredStar : star <= (rating ?? 0))
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              >
                ★
              </span>
            </button>
          ))}
          {rating && (
            <span className="ml-2 self-center text-sm text-text-tertiary">
              {rating}/5
            </span>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-[var(--radius-sm)] bg-text-primary py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2A2D35]"
      >
        Submit Review
      </button>
    </form>
  );
}
