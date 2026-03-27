"use client";

import { useState } from "react";
import Link from "next/link";
import { agencyProfile, leadMagnets } from "@/data/dashboard";
import { use } from "react";

export default function LeadMagnetPublicPage({
  params,
}: {
  params: Promise<{ slug: string; magnetSlug: string }>;
}) {
  const { slug, magnetSlug } = use(params);
  const magnet = leadMagnets.find((lm) => lm.slug === magnetSlug);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  if (!magnet) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary">
            Page not found
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            This lead magnet doesn&apos;t exist.
          </p>
          <Link
            href={`/agencies/${slug}`}
            className="mt-4 inline-block text-sm font-medium text-accent no-underline hover:underline"
          >
            ← Back to agency profile
          </Link>
        </div>
      </div>
    );
  }

  const canonicalUrl = `https://coldemail.com/agencies/${slug}/resources/${magnetSlug}`;

  const inputClass =
    "w-full rounded-lg border border-border px-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: magnet.pageTitle,
    description: magnet.description,
    url: canonicalUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "ColdEmail.com",
      url: "https://coldemail.com",
    },
    publisher: {
      "@type": "Organization",
      name: agencyProfile.name,
      url: `https://coldemail.com/agencies/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex min-h-screen flex-col bg-bg font-body">
        {/* Header */}
        <header className="border-b border-border px-6 py-4">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-text-primary no-underline"
          >
            ColdEmail<span className="text-accent">.com</span>
          </Link>
        </header>

        {/* Content */}
        <main className="flex flex-1 items-center justify-center px-6 py-16">
          <div className="w-full max-w-lg text-center">
            {!submitted ? (
              <>
                <h1 className="text-3xl font-bold tracking-tight text-text-primary">
                  {magnet.pageTitle}
                </h1>
                <p className="mx-auto mt-4 max-w-md text-base text-text-secondary">
                  {magnet.description}
                </p>

                {magnet.contentType === "video" && magnet.videoUrl && (
                  <div className="mx-auto mt-8 aspect-video max-w-md overflow-hidden rounded-xl bg-tag-bg">
                    <iframe
                      src={magnet.videoUrl}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={magnet.pageTitle}
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
                    className="w-full rounded-lg bg-accent py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                  >
                    {magnet.buttonText}
                  </button>
                </form>
              </>
            ) : (
              <>
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
                <h1 className="text-2xl font-bold text-text-primary">
                  {magnet.thankYouMessage}
                </h1>

                {magnet.contentType === "pdf" && magnet.fileUrl && (
                  <a
                    href={magnet.fileUrl}
                    className="mt-6 inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
                  >
                    Download PDF
                  </a>
                )}

                {magnet.contentType === "video" && magnet.videoUrl && (
                  <div className="mx-auto mt-8 aspect-video max-w-md overflow-hidden rounded-xl bg-tag-bg">
                    <iframe
                      src={magnet.videoUrl}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={magnet.pageTitle}
                    />
                  </div>
                )}

                {magnet.contentType === "link" && magnet.linkUrl && (
                  <a
                    href={magnet.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
                  >
                    Access Resource →
                  </a>
                )}
              </>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border px-6 py-4 text-center">
          <p className="text-xs text-text-tertiary">
            Hosted on{" "}
            <span className="font-medium text-text-secondary">
              ColdEmail.com
            </span>
            {" · "}
            <Link
              href={`/agencies/${slug}`}
              className="font-medium text-accent no-underline hover:underline"
            >
              View {agencyProfile.name}&apos;s profile
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
