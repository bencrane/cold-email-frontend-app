"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: "◻" },
  { label: "Profile Editor", href: "/dashboard/profile", icon: "✎" },
  { label: "Lead Magnets", href: "/dashboard/lead-magnets", icon: "◈" },
  { label: "Leads", href: "/dashboard/leads", icon: "◉" },
  { label: "Analytics", href: "/dashboard/analytics", icon: "▤" },
  { label: "Settings", href: "/dashboard/settings", icon: "⚙" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  }

  return (
    <aside className="fixed left-0 top-0 z-30 flex h-full w-56 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-14 items-center border-b border-gray-200 px-5">
        <Link href="/" className="text-lg font-bold tracking-tight text-gray-900">
          ColdEmail<span className="text-blue-600">.com</span>
        </Link>
      </div>
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
