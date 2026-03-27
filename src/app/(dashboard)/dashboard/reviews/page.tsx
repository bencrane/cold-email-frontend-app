"use client";

import { useState } from "react";
import { getAllToolReviews } from "@/data/tool-reviews";
import { getToolBySlug } from "@/data/tools";
import StarRating from "@/components/ui/star-rating";

type ReviewStatus = "pending" | "approved" | "rejected";

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState(getAllToolReviews);

  function updateStatus(id: string, status: ReviewStatus) {
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r)),
    );
  }

  const pending = reviews.filter((r) => r.status === "pending");
  const approved = reviews.filter((r) => r.status === "approved");
  const rejected = reviews.filter((r) => r.status === "rejected");

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-[-0.5px] text-text-primary">
          Tool Reviews
        </h1>
        <p className="mt-1 text-sm text-text-secondary">
          Manage user-submitted tool reviews across ColdEmail.com
        </p>
      </div>

      <div className="mb-6 flex gap-4">
        <div className="rounded-[var(--radius-sm)] bg-surface-muted px-3 py-1.5 text-sm">
          <span className="font-semibold text-text-primary">
            {pending.length}
          </span>{" "}
          <span className="text-text-secondary">pending</span>
        </div>
        <div className="rounded-[var(--radius-sm)] bg-surface-muted px-3 py-1.5 text-sm">
          <span className="font-semibold text-text-primary">
            {approved.length}
          </span>{" "}
          <span className="text-text-secondary">approved</span>
        </div>
        <div className="rounded-[var(--radius-sm)] bg-surface-muted px-3 py-1.5 text-sm">
          <span className="font-semibold text-text-primary">
            {rejected.length}
          </span>{" "}
          <span className="text-text-secondary">rejected</span>
        </div>
      </div>

      <div className="overflow-x-auto rounded-[var(--radius)] border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-surface">
              <th className="px-4 py-3 text-left font-semibold text-text-secondary">
                Tool
              </th>
              <th className="px-4 py-3 text-left font-semibold text-text-secondary">
                Reviewer
              </th>
              <th className="px-4 py-3 text-left font-semibold text-text-secondary">
                Rating
              </th>
              <th className="px-4 py-3 text-left font-semibold text-text-secondary">
                Title
              </th>
              <th className="px-4 py-3 text-left font-semibold text-text-secondary">
                Submitted
              </th>
              <th className="px-4 py-3 text-left font-semibold text-text-secondary">
                Status
              </th>
              <th className="px-4 py-3 text-left font-semibold text-text-secondary">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => {
              const tool = getToolBySlug(review.toolSlug);
              return (
                <tr
                  key={review.id}
                  className="border-b border-border last:border-b-0"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span>{tool?.icon}</span>
                      <span className="font-medium text-text-primary">
                        {tool?.name ?? review.toolSlug}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-text-secondary">
                    {review.reviewerName}
                  </td>
                  <td className="px-4 py-3">
                    <StarRating value={review.rating} readonly size="sm" />
                  </td>
                  <td className="max-w-[200px] truncate px-4 py-3 text-text-primary">
                    {review.title}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-text-tertiary">
                    {new Date(review.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        review.status === "approved"
                          ? "bg-success-bg text-success-text"
                          : review.status === "rejected"
                            ? "bg-destructive-bg text-destructive-text"
                            : "bg-surface-muted text-text-tertiary"
                      }`}
                    >
                      {review.status.charAt(0).toUpperCase() +
                        review.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      {review.status !== "approved" && (
                        <button
                          onClick={() => updateStatus(review.id, "approved")}
                          className="rounded-md bg-success-bg px-2.5 py-1 text-xs font-semibold text-success-text transition-colors hover:opacity-80"
                        >
                          Approve
                        </button>
                      )}
                      {review.status !== "rejected" && (
                        <button
                          onClick={() => updateStatus(review.id, "rejected")}
                          className="rounded-md bg-destructive-bg px-2.5 py-1 text-xs font-semibold text-destructive-text transition-colors hover:opacity-80"
                        >
                          Reject
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
