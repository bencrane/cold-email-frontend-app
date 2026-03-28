"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type { LeadMagnet } from "@/lib/types";

interface Props {
  magnet: LeadMagnet;
}

export default function LeadMagnetForm({ magnet }: Props) {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [contentUrl, setContentUrl] = useState("");
  const [contentType, setContentType] = useState(magnet.contentType);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  // Capture UTM params from URL on mount
  const [utmParams, setUtmParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  useEffect(() => {
    setUtmParams({
      utm_source: searchParams.get("utm_source") ?? "",
      utm_medium: searchParams.get("utm_medium") ?? "",
      utm_campaign: searchParams.get("utm_campaign") ?? "",
      utm_term: searchParams.get("utm_term") ?? "",
      utm_content: searchParams.get("utm_content") ?? "",
    });
  }, [searchParams]);

  const inputClass =
    "w-full rounded-lg border border-border px-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/leads/capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          agency_slug: magnet.agencySlug,
          magnet_slug: magnet.slug,
          email,
          name: name || undefined,
          phone: phone || undefined,
          company: company || undefined,
          ...utmParams,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setContentUrl(data.content_url);
        setContentType(data.content_type);
        setSubmitted(true);
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-text-primary">
          {magnet.thankYouMessage}
        </h2>

        {(contentType === "pdf_upload" || contentType === "pdf_generated") && contentUrl && (
          <a
            href={contentUrl}
            className="mt-6 inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
          >
            Download PDF
          </a>
        )}

        {contentType === "video" && contentUrl && (
          <div className="mx-auto mt-8 aspect-video max-w-md overflow-hidden rounded-xl bg-tag-bg">
            <iframe
              src={contentUrl}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={magnet.title}
            />
          </div>
        )}

        {contentType === "external_link" && contentUrl && (
          <a
            href={contentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
          >
            Access Resource
          </a>
        )}
      </div>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-text-primary">
        {magnet.title}
      </h1>
      <p className="mx-auto mt-4 max-w-md text-base text-text-secondary">
        {magnet.description}
      </p>

      {magnet.contentType === "video" && magnet.contentUrl && (
        <div className="mx-auto mt-8 aspect-video max-w-md overflow-hidden rounded-xl bg-tag-bg">
          <iframe
            src={magnet.contentUrl}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={magnet.title}
          />
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-10 max-w-sm space-y-3 text-left"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="Email address *"
        />
        {magnet.formFields.name && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Full name"
          />
        )}
        {magnet.formFields.phone && (
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
            placeholder="Phone number"
          />
        )}
        {magnet.formFields.company && (
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={inputClass}
            placeholder="Company name"
          />
        )}
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-lg bg-accent py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-60"
        >
          {submitting ? "Submitting..." : magnet.buttonText}
        </button>
      </form>
    </>
  );
}
