"use client";

import { useState } from "react";
import { settings, agencyProfile } from "@/data/dashboard";
import ToggleSwitch from "@/components/ui/toggle-switch";
import { FormInput } from "@/components/ui/form-input";

export default function SettingsPage() {
  const [bookingUrl, setBookingUrl] = useState(settings.bookingUrl);
  const [showBooking, setShowBooking] = useState(settings.showBookingButton);
  const [emailNotifs, setEmailNotifs] = useState(settings.emailNotifications);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">Settings</h1>
        <p className="mt-1 text-sm text-text-tertiary">Manage your account preferences.</p>
      </div>

      <div className="space-y-6">
        {/* Booking Integration */}
        <div className="rounded-[var(--radius)] border border-border bg-surface p-5">
          <h2 className="text-base font-semibold text-text-primary">Booking Integration</h2>
          <p className="mt-1 text-sm text-text-tertiary">
            Connect your Calendly or Cal.com scheduling link.
          </p>
          <div className="mt-4 space-y-4">
            <FormInput
              label="Booking URL"
              value={bookingUrl}
              onChange={(e) => setBookingUrl(e.target.value)}
              placeholder="https://calendly.com/your-link"
            />
            <ToggleSwitch
              checked={showBooking}
              onChange={setShowBooking}
              label="Show booking button on public profile and lead magnet pages"
            />
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-[var(--radius)] border border-border bg-surface p-5">
          <h2 className="text-base font-semibold text-text-primary">Notification Preferences</h2>
          <div className="mt-4">
            <ToggleSwitch
              checked={emailNotifs}
              onChange={setEmailNotifs}
              label="Email me when a new lead is captured"
            />
          </div>
        </div>

        {/* Billing */}
        <div className="rounded-[var(--radius)] border border-border bg-surface p-5">
          <h2 className="text-base font-semibold text-text-primary">Billing</h2>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-primary">{settings.plan}</p>
                <p className="text-xs text-text-tertiary">
                  Renews on{" "}
                  {new Date(settings.renewalDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
              <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-secondary transition hover:bg-bg">
                Manage Billing
              </button>
            </div>
          </div>
        </div>

        {/* Domain Info */}
        <div className="rounded-[var(--radius)] border border-border bg-surface p-5">
          <h2 className="text-base font-semibold text-text-primary">Your URLs</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-text-tertiary">Public Profile</p>
              <p className="text-text-primary">coldemail.com{agencyProfile.publicUrl}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-text-tertiary">Resources</p>
              <p className="text-text-primary">coldemail.com{agencyProfile.resourcesUrl}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
