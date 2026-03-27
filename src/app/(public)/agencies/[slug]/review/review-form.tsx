"use client";

import { useState } from "react";
import StarRating from "@/components/ui/star-rating";
import { FormInput, FormTextarea } from "@/components/ui/form-input";

export default function ReviewForm({
  agencyName,
  agencySlug,
}: {
  agencyName: string;
  agencySlug: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState<number | null>(null);

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

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[var(--radius)] border border-border bg-surface p-6"
    >
      <FormInput
        label="Name *"
        id="name"
        name="name"
        required
        placeholder="Your full name"
      />

      <div className="grid grid-cols-2 gap-4">
        <FormInput
          label="Job Title *"
          id="jobTitle"
          name="jobTitle"
          required
          placeholder="e.g. VP of Sales"
        />
        <FormInput
          label="Company *"
          id="company"
          name="company"
          required
          placeholder="Your company name"
        />
      </div>

      <FormTextarea
        label="Your Review *"
        id="text"
        name="text"
        required
        rows={5}
        placeholder="Share your experience working with this agency..."
      />

      {/* Star rating */}
      <div>
        <span className="mb-1.5 block text-sm font-medium text-text-secondary">Rating (optional)</span>
        <div className="flex items-center gap-2">
          <StarRating
            value={rating ?? 0}
            onChange={(v) => setRating(v === 0 ? null : v)}
          />
          {rating && (
            <span className="text-sm text-text-tertiary">
              {rating}/5
            </span>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-[var(--radius-sm)] bg-text-primary py-2.5 text-sm font-semibold text-white transition-colors hover:bg-text-primary-hover"
      >
        Submit Review
      </button>
    </form>
  );
}
