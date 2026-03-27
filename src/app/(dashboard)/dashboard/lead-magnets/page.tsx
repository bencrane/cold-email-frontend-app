import Link from "next/link";
import { leadMagnets, agencyProfile } from "@/data/dashboard";

export default function LeadMagnetsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Lead Magnets</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your gated content pages.</p>
        </div>
        <Link
          href="/dashboard/lead-magnets/new"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Create New Lead Magnet
        </Link>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-xs font-medium uppercase tracking-wider text-gray-500">
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">URL</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Views</th>
                <th className="px-5 py-3 text-right">Submissions</th>
                <th className="px-5 py-3 text-right">Conv. Rate</th>
                <th className="px-5 py-3">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {leadMagnets.map((lm) => {
                const rate =
                  lm.views > 0
                    ? ((lm.submissions / lm.views) * 100).toFixed(1)
                    : "0";
                return (
                  <tr key={lm.id} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-5 py-3 font-medium text-gray-900">
                      {lm.name}
                    </td>
                    <td className="px-5 py-3">
                      <span className="text-xs text-gray-400">
                        coldemail.com{agencyProfile.resourcesUrl}/{lm.slug}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-3">
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                          lm.status === "live"
                            ? "bg-green-50 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {lm.status === "live" ? "Live" : "Draft"}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-right text-gray-600">
                      {lm.views.toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-right text-gray-600">
                      {lm.submissions.toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-right text-gray-600">
                      {rate}%
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-gray-400">
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
