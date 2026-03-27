import Link from "next/link";
import { leadMagnets, agencyProfile } from "@/data/dashboard";
import Badge from "@/components/ui/badge";

export default function LeadMagnetsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">Lead Magnets</h1>
          <p className="mt-1 text-sm text-text-tertiary">Manage your gated content pages.</p>
        </div>
        <Link
          href="/dashboard/lead-magnets/new"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-hover"
        >
          Create New Lead Magnet
        </Link>
      </div>

      <div className="rounded-[var(--radius)] border border-border bg-surface">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs font-medium uppercase tracking-wider text-text-tertiary">
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">URL</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Views</th>
                <th className="px-5 py-3 text-right">Submissions</th>
                <th className="px-5 py-3 text-right">Conv. Rate</th>
                <th className="px-5 py-3">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {leadMagnets.map((lm) => {
                const rate =
                  lm.views > 0
                    ? ((lm.submissions / lm.views) * 100).toFixed(1)
                    : "0";
                return (
                  <tr key={lm.id} className="hover:bg-bg">
                    <td className="whitespace-nowrap px-5 py-3 font-medium text-text-primary">
                      {lm.name}
                    </td>
                    <td className="px-5 py-3">
                      <span className="text-xs text-text-tertiary">
                        coldemail.com{agencyProfile.resourcesUrl}/{lm.slug}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-3">
                      <Badge variant={lm.status === "live" ? "live" : "draft"}>
                        {lm.status === "live" ? "Live" : "Draft"}
                      </Badge>
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-right text-text-secondary">
                      {lm.views.toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-right text-text-secondary">
                      {lm.submissions.toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-right text-text-secondary">
                      {rate}%
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-text-tertiary">
                      {new Date(lm.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
