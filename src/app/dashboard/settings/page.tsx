"use client";

import { useState } from "react";
import { settings, agencyProfile } from "@/data/dashboard";

export default function SettingsPage() {
  const [bookingUrl, setBookingUrl] = useState(settings.bookingUrl);
  const [showBooking, setShowBooking] = useState(settings.showBookingButton);
  const [emailNotifs, setEmailNotifs] = useState(settings.emailNotifications);

  const inputClass =
    "w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
  const labelClass = "mb-1.5 block text-sm font-medium text-gray-700";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your account preferences.</p>
      </div>

      <div className="space-y-6">
        {/* Booking Integration */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="text-base font-semibold text-gray-900">Booking Integration</h2>
          <p className="mt-1 text-sm text-gray-500">
            Connect your Calendly or Cal.com scheduling link.
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <label className={labelClass}>Booking URL</label>
              <input
                className={inputClass}
                value={bookingUrl}
                onChange={(e) => setBookingUrl(e.target.value)}
                placeholder="https://calendly.com/your-link"
              />
            </div>
            <label className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowBooking(!showBooking)}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                  showBooking ? "bg-blue-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                    showBooking ? "translate-x-4.5" : "translate-x-0.5"
                  }`}
                />
              </button>
              <span className="text-sm text-gray-700">
                Show booking button on public profile and lead magnet pages
              </span>
            </label>
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="text-base font-semibold text-gray-900">Notification Preferences</h2>
          <div className="mt-4">
            <label className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setEmailNotifs(!emailNotifs)}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                  emailNotifs ? "bg-blue-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                    emailNotifs ? "translate-x-4.5" : "translate-x-0.5"
                  }`}
                />
              </button>
              <span className="text-sm text-gray-700">
                Email me when a new lead is captured
              </span>
            </label>
          </div>
        </div>

        {/* Billing */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="text-base font-semibold text-gray-900">Billing</h2>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">{settings.plan}</p>
                <p className="text-xs text-gray-500">
                  Renews on{" "}
                  {new Date(settings.renewalDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
              <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
                Manage Billing
              </button>
            </div>
          </div>
        </div>

        {/* Domain Info */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="text-base font-semibold text-gray-900">Your URLs</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-gray-500">Public Profile</p>
              <p className="text-gray-900">coldemail.com{agencyProfile.publicUrl}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">Resources Subdomain</p>
              <p className="text-gray-900">{agencyProfile.resourcesUrl}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
