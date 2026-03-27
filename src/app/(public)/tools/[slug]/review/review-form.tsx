"use client";

import { useState } from "react";
import StarRating from "@/components/ui/star-rating";
import {
  FormInput,
  FormTextarea,
  FormSelect,
} from "@/components/ui/form-input";

export default function ToolReviewForm({
  toolName,
  toolSlug,
}: {
  toolName: string;
  toolSlug: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      toolSlug,
      reviewerName: (form.elements.namedItem("reviewerName") as HTMLInputElement).value,
      reviewerEmail: (form.elements.namedItem("reviewerEmail") as HTMLInputElement).value,
      reviewerTitle: (form.elements.namedItem("reviewerTitle") as HTMLInputElement).value || undefined,
      reviewerCompany: (form.elements.namedItem("reviewerCompany") as HTMLInputElement).value || undefined,
      rating,
      title: (form.elements.namedItem("title") as HTMLInputElement).value,
      body: (form.elements.namedItem("body") as HTMLTextAreaElement).value,
      useCase: (form.elements.namedItem("useCase") as HTMLInputElement).value || undefined,
      usageDuration: (form.elements.namedItem("usageDuration") as HTMLSelectElement).value || undefined,
    };
    console.log("Tool review submitted:", data);
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
          It will appear on {toolName}&apos;s page after verification.
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
        id="reviewerName"
        name="reviewerName"
        required
        placeholder="Your full name"
      />

      <FormInput
        label="Email *"
        id="reviewerEmail"
        name="reviewerEmail"
        type="email"
        required
        placeholder="your@email.com"
      />

      <div className="grid grid-cols-2 gap-4">
        <FormInput
          label="Job Title"
          id="reviewerTitle"
          name="reviewerTitle"
          placeholder="e.g. Head of Outbound"
        />
        <FormInput
          label="Company"
          id="reviewerCompany"
          name="reviewerCompany"
          placeholder="Your company name"
        />
      </div>

      <div>
        <span className="mb-1.5 block text-sm font-medium text-text-secondary">
          Rating *
        </span>
        <div className="flex items-center gap-2">
          <StarRating value={rating} onChange={(v) => setRating(v)} />
          {rating > 0 && (
            <span className="text-sm text-text-tertiary">{rating}/5</span>
          )}
        </div>
      </div>

      <FormInput
        label="Review Title *"
        id="title"
        name="title"
        required
        placeholder="Summarize your experience in one line"
      />

      <FormTextarea
        label="Review *"
        id="body"
        name="body"
        required
        rows={5}
        minLength={50}
        placeholder="Share your experience with this tool (minimum 50 characters)..."
      />

      <FormInput
        label="What do you use this tool for?"
        id="useCase"
        name="useCase"
        placeholder="e.g. Agency outbound for SaaS clients"
      />

      <FormSelect
        label="How long have you been using this tool?"
        id="usageDuration"
        name="usageDuration"
      >
        <option value="">Select...</option>
        <option value="Less than 6 months">Less than 6 months</option>
        <option value="6-12 months">6-12 months</option>
        <option value="1-2 years">1-2 years</option>
        <option value="2+ years">2+ years</option>
      </FormSelect>

      <button
        type="submit"
        disabled={rating === 0}
        className="w-full rounded-[var(--radius-sm)] bg-text-primary py-2.5 text-sm font-semibold text-white transition-colors hover:bg-text-primary-hover disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit Review
      </button>
    </form>
  );
}
