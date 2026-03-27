import DashboardSidebar from "@/components/dashboard-sidebar";
import { agencyProfile } from "@/data/dashboard";

export const metadata = {
  title: "Dashboard — ColdEmail.com",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col pl-56">
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-gray-200 bg-white px-8">
          <h2 className="text-sm font-semibold text-gray-900">
            {agencyProfile.name}
          </h2>
          <a
            href={agencyProfile.publicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
          >
            View Public Profile →
          </a>
        </header>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
