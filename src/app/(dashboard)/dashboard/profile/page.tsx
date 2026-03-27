"use client";

import { useState } from "react";
import { agencyProfile } from "@/data/dashboard";
import { getPendingReviews } from "@/data/reviews";

type SectionKey = "info" | "team" | "services" | "caseStudies" | "testimonials" | "techStack" | "videos";

export default function ProfileEditor() {
  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>({
    info: true,
    team: false,
    services: false,
    caseStudies: false,
    testimonials: false,
    techStack: false,
    videos: false,
  });
  const [showPreview, setShowPreview] = useState(false);
  const [testimonialTab, setTestimonialTab] = useState<"existing" | "pending">("existing");
  const pendingReviews = getPendingReviews(agencyProfile.slug);
  const [reviewStatuses, setReviewStatuses] = useState<Record<string, "approved" | "rejected">>({});

  function toggle(key: SectionKey) {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const sectionHeader = (key: SectionKey, label: string) => (
    <button
      type="button"
      onClick={() => toggle(key)}
      className="flex w-full items-center justify-between py-4 text-left"
    >
      <h3 className="text-base font-semibold text-gray-900">{label}</h3>
      <span className="text-gray-400">{openSections[key] ? "−" : "+"}</span>
    </button>
  );

  const inputClass =
    "w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
  const textareaClass = `${inputClass} resize-none`;
  const labelClass = "mb-1.5 block text-sm font-medium text-gray-700";

  if (showPreview) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Profile Preview</h1>
          <button onClick={() => setShowPreview(false)} className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            ← Back to Editor
          </button>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
          {/* Preview Hero */}
          <div className={`bg-gradient-to-r ${agencyProfile.bannerGradient} px-8 py-12`}>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 text-2xl font-bold text-white">
                {agencyProfile.logo}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{agencyProfile.name}</h2>
                <p className="text-white/80">{agencyProfile.tagline}</p>
              </div>
            </div>
          </div>
          <div className="p-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">About</h3>
              <p className="mt-2 text-sm text-gray-600">{agencyProfile.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Team</h3>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {agencyProfile.team.map((m) => (
                  <div key={m.name} className="flex items-center gap-3 rounded-lg border border-gray-100 p-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">{m.initials}</div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{m.name}</p>
                      <p className="text-xs text-gray-500">{m.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Services</h3>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {agencyProfile.services.map((s) => (
                  <div key={s.title} className="rounded-lg border border-gray-100 p-3">
                    <p className="text-lg">{s.icon}</p>
                    <p className="mt-1 text-sm font-medium text-gray-900">{s.title}</p>
                    <p className="mt-0.5 text-xs text-gray-500">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Profile Editor</h1>
          <p className="mt-1 text-sm text-gray-500">Edit your public agency profile page.</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowPreview(true)}
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Preview
          </button>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
            Save &amp; Publish
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white divide-y divide-gray-200">
        {/* Agency Info */}
        <div className="px-5">
          {sectionHeader("info", "Agency Info")}
          {openSections.info && (
            <div className="space-y-4 pb-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Agency Name</label>
                  <input className={inputClass} defaultValue={agencyProfile.name} />
                </div>
                <div>
                  <label className={labelClass}>Tagline</label>
                  <input className={inputClass} defaultValue={agencyProfile.tagline} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Description</label>
                <textarea className={textareaClass} rows={4} defaultValue={agencyProfile.description} />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Logo Upload</label>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      {agencyProfile.logo}
                    </div>
                    <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50">
                      Upload
                    </button>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Banner Image</label>
                  <div className={`h-12 rounded-lg bg-gradient-to-r ${agencyProfile.bannerGradient}`} />
                  <button className="mt-2 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50">
                    Upload Banner
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Team Members */}
        <div className="px-5">
          {sectionHeader("team", "Team Members")}
          {openSections.team && (
            <div className="space-y-3 pb-5">
              {agencyProfile.team.map((member, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg border border-gray-100 p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                    {member.initials}
                  </div>
                  <div className="flex-1 grid grid-cols-3 gap-3">
                    <input className={inputClass} defaultValue={member.name} placeholder="Name" />
                    <input className={inputClass} defaultValue={member.role} placeholder="Role" />
                    <input className={inputClass} defaultValue={member.linkedinUrl} placeholder="LinkedIn URL" />
                  </div>
                  <button className="text-sm text-red-500 hover:text-red-700">Remove</button>
                </div>
              ))}
              <button className="rounded-lg border border-dashed border-gray-300 px-4 py-2 text-sm font-medium text-gray-500 hover:border-blue-400 hover:text-blue-600">
                + Add Team Member
              </button>
            </div>
          )}
        </div>

        {/* Services */}
        <div className="px-5">
          {sectionHeader("services", "Services")}
          {openSections.services && (
            <div className="space-y-3 pb-5">
              {agencyProfile.services.map((service, i) => (
                <div key={i} className="rounded-lg border border-gray-100 p-3 space-y-2">
                  <div className="flex items-center gap-3">
                    <input className={`${inputClass} w-16`} defaultValue={service.icon} />
                    <input className={`${inputClass} flex-1`} defaultValue={service.title} placeholder="Service title" />
                    <button className="text-sm text-red-500 hover:text-red-700">Remove</button>
                  </div>
                  <textarea className={textareaClass} rows={2} defaultValue={service.description} placeholder="Description" />
                </div>
              ))}
              <button className="rounded-lg border border-dashed border-gray-300 px-4 py-2 text-sm font-medium text-gray-500 hover:border-blue-400 hover:text-blue-600">
                + Add Service
              </button>
            </div>
          )}
        </div>

        {/* Case Studies */}
        <div className="px-5">
          {sectionHeader("caseStudies", "Case Studies")}
          {openSections.caseStudies && (
            <div className="space-y-3 pb-5">
              {agencyProfile.caseStudies.map((cs, i) => (
                <div key={i} className="rounded-lg border border-gray-100 p-3 space-y-2">
                  <div className="flex items-center gap-3">
                    <input className={`${inputClass} flex-1`} defaultValue={cs.headlineStat} placeholder="Headline stat" />
                    <input className={`${inputClass} w-40`} defaultValue={cs.companyType} placeholder="Company type" />
                    <button className="text-sm text-red-500 hover:text-red-700">Remove</button>
                  </div>
                  {cs.metrics.map((metric, mi) => (
                    <input key={mi} className={inputClass} defaultValue={metric} placeholder="Supporting metric" />
                  ))}
                </div>
              ))}
              <button className="rounded-lg border border-dashed border-gray-300 px-4 py-2 text-sm font-medium text-gray-500 hover:border-blue-400 hover:text-blue-600">
                + Add Case Study
              </button>
            </div>
          )}
        </div>

        {/* Testimonials */}
        <div className="px-5">
          {sectionHeader("testimonials", "Testimonials")}
          {openSections.testimonials && (
            <div className="pb-5">
              {/* Tabs */}
              <div className="mb-4 flex gap-1 rounded-lg bg-gray-100 p-1">
                <button
                  type="button"
                  onClick={() => setTestimonialTab("existing")}
                  className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition ${
                    testimonialTab === "existing"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Testimonials
                </button>
                <button
                  type="button"
                  onClick={() => setTestimonialTab("pending")}
                  className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition ${
                    testimonialTab === "pending"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Pending Reviews
                  {pendingReviews.filter((r) => !reviewStatuses[r.id]).length > 0 && (
                    <span className="ml-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-100 px-1.5 text-xs font-semibold text-blue-600">
                      {pendingReviews.filter((r) => !reviewStatuses[r.id]).length}
                    </span>
                  )}
                </button>
              </div>

              {testimonialTab === "existing" ? (
                <div className="space-y-3">
                  {agencyProfile.testimonials.map((t, i) => (
                    <div key={i} className="rounded-lg border border-gray-100 p-3 space-y-2">
                      <textarea className={textareaClass} rows={3} defaultValue={t.quote} placeholder="Testimonial quote" />
                      <div className="grid grid-cols-3 gap-3">
                        <input className={inputClass} defaultValue={t.name} placeholder="Name" />
                        <input className={inputClass} defaultValue={t.title} placeholder="Title" />
                        <input className={inputClass} defaultValue={t.company} placeholder="Company" />
                      </div>
                      <button className="text-sm text-red-500 hover:text-red-700">Remove</button>
                    </div>
                  ))}
                  <button className="rounded-lg border border-dashed border-gray-300 px-4 py-2 text-sm font-medium text-gray-500 hover:border-blue-400 hover:text-blue-600">
                    + Add Testimonial
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {pendingReviews.length === 0 ? (
                    <p className="py-6 text-center text-sm text-gray-400">No pending reviews.</p>
                  ) : (
                    pendingReviews.map((review) => {
                      const action = reviewStatuses[review.id];
                      return (
                        <div
                          key={review.id}
                          className={`rounded-lg border p-4 space-y-3 ${
                            action === "approved"
                              ? "border-green-200 bg-green-50"
                              : action === "rejected"
                                ? "border-red-200 bg-red-50 opacity-60"
                                : "border-gray-100"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <p className="text-sm italic leading-relaxed text-gray-700">
                                &ldquo;{review.text}&rdquo;
                              </p>
                              <div className="mt-2 flex items-center gap-3">
                                <span className="text-sm font-medium text-gray-900">{review.name}</span>
                                <span className="text-xs text-gray-500">
                                  {review.jobTitle}, {review.company}
                                </span>
                                {review.rating && (
                                  <span className="text-xs text-yellow-500">
                                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                                  </span>
                                )}
                              </div>
                              <p className="mt-1 text-xs text-gray-400">
                                Submitted {new Date(review.submittedAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          {action ? (
                            <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              action === "approved" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                            }`}>
                              {action === "approved" ? "Approved" : "Rejected"}
                            </span>
                          ) : (
                            <div className="flex gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  console.log("Approved review:", review.id);
                                  setReviewStatuses((prev) => ({ ...prev, [review.id]: "approved" }));
                                }}
                                className="rounded-lg bg-green-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-green-700"
                              >
                                Approve
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  console.log("Rejected review:", review.id);
                                  setReviewStatuses((prev) => ({ ...prev, [review.id]: "rejected" }));
                                }}
                                className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50"
                              >
                                Reject
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="px-5">
          {sectionHeader("techStack", "Tech Stack")}
          {openSections.techStack && (
            <div className="pb-5">
              <div className="flex flex-wrap gap-2">
                {agencyProfile.techStack.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {tool}
                    <button className="ml-1 text-gray-400 hover:text-red-500">×</button>
                  </span>
                ))}
              </div>
              <input className={`${inputClass} mt-3`} placeholder="Search and add tools..." />
            </div>
          )}
        </div>

        {/* Videos */}
        <div className="px-5">
          {sectionHeader("videos", "Videos")}
          {openSections.videos && (
            <div className="space-y-2 pb-5">
              {agencyProfile.videos.map((url, i) => (
                <div key={i} className="flex items-center gap-3">
                  <input className={`${inputClass} flex-1`} defaultValue={url} placeholder="YouTube URL" />
                  <button className="text-sm text-red-500 hover:text-red-700">Remove</button>
                </div>
              ))}
              <button className="rounded-lg border border-dashed border-gray-300 px-4 py-2 text-sm font-medium text-gray-500 hover:border-blue-400 hover:text-blue-600">
                + Add Video
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
