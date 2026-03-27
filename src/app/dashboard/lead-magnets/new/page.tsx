"use client";

import { useState } from "react";
import { agencyProfile } from "@/data/dashboard";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type ContentType = "pdf" | "video" | "link";

export default function LeadMagnetBuilder() {
  const [pageTitle, setPageTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contentType, setContentType] = useState<ContentType>("pdf");
  const [videoUrl, setVideoUrl] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [formName, setFormName] = useState(false);
  const [formPhone, setFormPhone] = useState(false);
  const [formCompany, setFormCompany] = useState(false);
  const [buttonText, setButtonText] = useState("Get Access");
  const [thankYouMessage, setThankYouMessage] = useState("Thanks! Your content is ready.");
  const [customSlug, setCustomSlug] = useState("");

  const slug = customSlug || slugify(pageTitle) || "your-page";

  const inputClass =
    "w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
  const labelClass = "mb-1.5 block text-sm font-medium text-gray-700";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Create Lead Magnet</h1>
        <p className="mt-1 text-sm text-gray-500">Build a gated landing page to capture leads.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Editor */}
        <div className="space-y-5 rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="text-base font-semibold text-gray-900">Page Settings</h2>

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
              {(["pdf", "video", "link"] as ContentType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setContentType(type)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                    contentType === type
                      ? "border-blue-600 bg-blue-50 text-blue-600"
                      : "border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {type === "pdf" ? "PDF Download" : type === "video" ? "Video / Loom" : "External Link"}
                </button>
              ))}
            </div>
          </div>

          {contentType === "pdf" && (
            <div>
              <label className={labelClass}>Upload PDF</label>
              <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 px-6 py-8">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Drag and drop your PDF, or</p>
                  <button className="mt-2 rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
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
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="https://youtube.com/watch?v=... or Loom URL"
              />
            </div>
          )}

          {contentType === "link" && (
            <div>
              <label className={labelClass}>External Link</label>
              <input
                className={inputClass}
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                placeholder="https://..."
              />
            </div>
          )}

          <div>
            <label className={labelClass}>Form Fields</label>
            <p className="mb-2 text-xs text-gray-400">Email is always required.</p>
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
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{field.label}</span>
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
              <span className="text-xs text-gray-400">{agencyProfile.resourcesUrl}/</span>
              <input
                className={inputClass}
                value={customSlug}
                onChange={(e) => setCustomSlug(e.target.value)}
                placeholder={slugify(pageTitle) || "auto-generated"}
              />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
              Publish Lead Magnet
            </button>
            <button className="rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
              Save as Draft
            </button>
          </div>
        </div>

        {/* Live Preview */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold text-gray-900">Live Preview</h2>
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
            {/* Preview Header */}
            <div className="border-b border-gray-100 px-6 py-3">
              <span className="text-sm font-bold text-gray-900">
                ColdEmail<span className="text-blue-600">.com</span>
              </span>
            </div>

            {/* Preview Content */}
            <div className="flex min-h-[500px] flex-col items-center justify-center px-8 py-12">
              <div className="w-full max-w-md text-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {pageTitle || "Your Page Title"}
                </h2>
                <p className="mt-3 text-sm text-gray-600">
                  {description || "Your description will appear here."}
                </p>

                {contentType === "video" && videoUrl && (
                  <div className="mt-6 aspect-video rounded-lg bg-gray-100" />
                )}

                {/* Form */}
                <div className="mt-8 space-y-3 text-left">
                  <div>
                    <input
                      disabled
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-400"
                      placeholder="Email address *"
                    />
                  </div>
                  {formName && (
                    <input
                      disabled
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-400"
                      placeholder="Full name"
                    />
                  )}
                  {formPhone && (
                    <input
                      disabled
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-400"
                      placeholder="Phone number"
                    />
                  )}
                  {formCompany && (
                    <input
                      disabled
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-400"
                      placeholder="Company name"
                    />
                  )}
                  <button
                    disabled
                    className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white"
                  >
                    {buttonText || "Get Access"}
                  </button>
                </div>
              </div>
            </div>

            {/* Preview Footer */}
            <div className="border-t border-gray-100 px-6 py-3 text-center">
              <p className="text-xs text-gray-400">
                Hosted on{" "}
                <span className="font-medium text-gray-500">ColdEmail.com</span>
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            {agencyProfile.resourcesUrl}/{slug}
          </p>
        </div>
      </div>
    </div>
  );
}
