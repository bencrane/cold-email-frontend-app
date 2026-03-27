import Link from "next/link";
import { dashboardStats, leads, agencyProfile } from "@/data/dashboard";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function DashboardOverview() {
  const recentLeads = leads.slice(0, 10);

  const stats = [
    { label: "Profile Views", value: dashboardStats.profileViews.toLocaleString(), sub: "Last 30 days" },
    { label: "Total Leads", value: dashboardStats.totalLeads.toString(), sub: "All time" },
    { label: "Lead Magnet Views", value: dashboardStats.leadMagnetViews.toLocaleString(), sub: "All lead magnets" },
    { label: "Conversion Rate", value: `${dashboardStats.conversionRate}%`, sub: "Form submissions / views" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Welcome back, {agencyProfile.name}
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Here&apos;s how your profile and lead magnets are performing.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-gray-200 bg-white p-5"
          >
            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="mt-0.5 text-xs text-gray-400">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Recent Leads */}
      <div className="rounded-xl border border-gray-200 bg-white">
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <h2 className="text-base font-semibold text-gray-900">Recent Leads</h2>
          <Link
            href="/dashboard/leads"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View all →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-medium uppercase tracking-wider text-gray-500">
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3">Lead Magnet</th>
                <th className="px-5 py-3">Captured</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-5 py-3 font-medium text-gray-900">
                    {lead.name}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-gray-600">
                    {lead.email}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-gray-600">
                    {lead.leadMagnetName}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-gray-400">
                    {formatDate(lead.capturedAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="mb-4 text-base font-semibold text-gray-900">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { title: "Create a Lead Magnet", desc: "Build a gated landing page to capture leads", href: "/dashboard/lead-magnets/new" },
            { title: "Edit Your Profile", desc: "Update your agency's public profile page", href: "/dashboard/profile" },
            { title: "View Analytics", desc: "See detailed performance metrics", href: "/dashboard/analytics" },
          ].map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="group rounded-xl border border-gray-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                {action.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{action.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
