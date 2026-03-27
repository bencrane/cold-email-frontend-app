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
    <div className="flex min-h-screen bg-bg">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col pl-56">
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-border bg-surface px-8">
          <h2 className="text-sm font-semibold text-text-primary">
            {agencyProfile.name}
          </h2>
          <a
            href={agencyProfile.publicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            View Public Profile →
          </a>
        </header>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
