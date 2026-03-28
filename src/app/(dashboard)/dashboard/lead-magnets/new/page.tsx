"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { agencyProfile } from "@/data/dashboard";
import type { LeadMagnet } from "@/lib/types";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type ContentType = LeadMagnet["contentType"];

const contentTypeOptions: { value: ContentType; label: string }[] = [
  { value: "pdf_upload", label: "PDF Download" },
  { value: "video", label: "Video / Loom" },
  { value: "external_link", label: "External Link" },
];

export default function LeadMagnetBuilder() {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contentType, setContentType] = useState<ContentType>("pdf_upload");
  const [contentUrl, setContentUrl] = useState("");
  const [formName, setFormName] = useState(false);
  const [formPhone, setFormPhone] = useState(false);
  const [formCompany, setFormCompany] = useState(false);
  const [buttonText, setButtonText] = useState("Get Access");
  const [thankYouMessage, setThankYouMessage] = useState("Thanks! Your content is ready.");
  const [customSlug, setCustomSlug] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const slug = customSlug || slugify(pageTitle) || "your-page";

  const inputClass =
    "w-full rounded-lg border border-border px-3 py-2 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";
  const labelClass = "mb-1.5 block text-sm font-medium text-text-secondary";

  async function handleSave(status: "live" | "draft") {
    if (!pageTitle || submitting) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/lead-magnets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: pageTitle,
          description,
          contentType,
          contentUrl,
          formFields: { name: formName, phone: formPhone, company: formCompany },
          buttonText,
          thankYouMessage,
          slug,
          status,
        }),
      });

      if (res.ok) {
        router.push("/dashboard/lead-magnets");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">Create Lead Magnet</h1>
        <p className="mt-1 text-sm text-text-tertiary">Build a gated landing page to capture leads.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Editor */}
        <div className="space-y-5 rounded-[var(--radius)] border border-border bg-surface p-5">
          <h2 className="text-base font-semibold text-text-primary">Page Settings</h2>

          <div>
            <label className={labelClass}>Page Title</label>
            <input
              className={inputClass}
              value={pageTitle}
              onChange={(e) => setPageTitle(e.target.value)}
              placeholder="e.g., The Ultimate Cold Email Playbook"
            />
          </div>

          <div>
            <label className={labelClass}>Description</label>
            <textarea
              className={`${inputClass} resize-none`}
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="1-2 sentences about what they'll get"
            />
          </div>

          <div>
            <label className={labelClass}>Content Type</label>
            <div className="flex gap-2">
              {contentTypeOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setContentType(opt.value)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                    contentType === opt.value
                      ? "border-accent bg-accent-light text-accent"
                      : "border-border text-text-secondary hover:bg-bg"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {contentType === "pdf_upload" && (
            <div>
              <label className={labelClass}>Upload PDF</label>
              <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-border px-6 py-8">
                <div className="text-center">
                  <p className="text-sm text-text-tertiary">Drag and drop your PDF, or</p>
                  <button
                    type="button"
                    className="mt-2 rounded-lg bg-accent px-4 py-1.5 text-sm font-medium text-white hover:bg-accent-hover"
                  >
                    Browse Files
                  </button>
                </div>
              </div>
            </div>
          )}

          {contentType === "video" && (
            <div>
              <label className={labelClass}>Video URL</label>
              <input
                className={inputClass}
                value={contentUrl}
                onChange={(e) => setContentUrl(e.target.value)}
                placeholder="https://youtube.com/watch?v=... or Loom URL"
              />
            </div>
          )}

          {contentType === "external_link" && (
            <div>
              <label className={labelClass}>External Link</label>
              <input
                className={inputClass}
                value={contentUrl}
                onChange={(e) => setContentUrl(e.target.value)}
                placeholder="https://notion.so/..., Google Doc, Loom, etc."
              />
            </div>
          )}

          <div>
            <label className={labelClass}>Form Fields</label>
            <p className="mb-2 text-xs text-text-tertiary">Email is always required.</p>
            <div className="space-y-2">
              {[
                { label: "Name", checked: formName, onChange: setFormName },
                { label: "Phone", checked: formPhone, onChange: setFormPhone },
                { label: "Company Name", checked: formCompany, onChange: setFormCompany },
              ].map((field) => (
                <label key={field.label} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={field.checked}
                    onChange={(e) => field.onChange(e.target.checked)}
                    className="h-4 w-4 rounded border-border-hover text-accent focus:ring-accent"
                  />
                  <span className="text-sm text-text-secondary">{field.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>Button Text</label>
            <input
              className={inputClass}
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
            />
          </div>

          <div>
            <label className={labelClass}>Thank You Message</label>
            <textarea
              className={`${inputClass} resize-none`}
              rows={2}
              value={thankYouMessage}
              onChange={(e) => setThankYouMessage(e.target.value)}
            />
          </div>

          <div>
            <label className={labelClass}>Custom Slug</label>
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-tertiary">coldemail.com{agencyProfile.resourcesUrl}/</span>
              <input
                className={inputClass}
                value={customSlug}
                onChange={(e) => setCustomSlug(e.target.value)}
                placeholder={slugify(pageTitle) || "auto-generated"}
              />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              disabled={!pageTitle || submitting}
              onClick={() => handleSave("live")}
              className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover disabled:opacity-60"
            >
              {submitting ? "Saving..." : "Publish Lead Magnet"}
            </button>
            <button
              type="button"
              disabled={!pageTitle || submitting}
              onClick={() => handleSave("draft")}
              className="rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-text-secondary transition hover:bg-bg disabled:opacity-60"
            >
              Save as Draft
            </button>
          </div>
        </div>

        {/* Live Preview */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-text-primary">Live Preview</h2>
          <div className="rounded-[var(--radius)] border border-border bg-surface overflow-hidden">
            {/* Preview Header */}
            <div className="border-b border-border-light px-6 py-3">
              <span className="text-sm font-bold text-text-primary">
                ColdEmail<span className="text-accent">.com</span>
              </span>
            </div>

            {/* Preview Content */}
            <div className="flex min-h-[500px] flex-col items-center justify-center px-8 py-12">
              <div className="w-full max-w-md text-center">
                <h2 className="text-2xl font-bold text-text-primary">
                  {pageTitle || "Your Page Title"}
                </h2>
                <p className="mt-3 text-sm text-text-secondary">
                  {description || "Your description will appear here."}
                </p>

                {contentType === "video" && contentUrl && (
                  <div className="mt-6 aspect-video rounded-lg bg-surface-muted" />
                )}

                {/* Form */}
                <div className="mt-8 space-y-3 text-left">
                  <div>
                    <input
                      disabled
                      className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-text-tertiary"
                      placeholder="Email address *"
                    />
                  </div>
                  {formName && (
                    <input
                      disabled
                      className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-text-tertiary"
                      placeholder="Full name"
                    />
                  )}
                  {formPhone && (
                    <input
                      disabled
                      className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-text-tertiary"
                      placeholder="Phone number"
                    />
                  )}
                  {formCompany && (
                    <input
                      disabled
                      className="w-full rounded-lg border border-border bg-bg px-3 py-2 text-sm text-text-tertiary"
                      placeholder="Company name"
                    />
                  )}
                  <button
                    disabled
                    className="w-full rounded-lg bg-accent py-2.5 text-sm font-semibold text-white"
                  >
                    {buttonText || "Get Access"}
                  </button>
                </div>
              </div>
            </div>

            {/* Preview Footer */}
            <div className="border-t border-border-light px-6 py-3 text-center">
              <p className="text-xs text-text-tertiary">
                Hosted on{" "}
                <span className="font-medium text-text-tertiary">ColdEmail.com</span>
              </p>
            </div>
          </div>
          <p className="text-xs text-text-tertiary">
            coldemail.com{agencyProfile.resourcesUrl}/{slug}
          </p>
        </div>
      </div>
    </div>
  );
}
