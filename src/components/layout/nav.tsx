"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Tools", href: "/tools" },
  { label: "Agencies", href: "/agencies" },
  { label: "Playbooks", href: "/playbooks" },
  { label: "Feed", href: "/feed" },
  { label: "Agency Admin", href: "/dashboard" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-100 border-b border-border bg-bg/92 backdrop-blur-[12px]">
      <div className="mx-auto flex h-[60px] max-w-[var(--max-width)] items-center justify-between px-6">
        <Link
          href="/"
          className="text-[17px] font-bold tracking-[-0.3px] text-text-primary no-underline"
        >
          <span className="text-text-primary">Cold</span>
          <span className="text-accent">Email.com</span>
        </Link>
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium no-underline transition-colors duration-150 ${
                pathname.startsWith(link.href)
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/course"
            className="rounded-[var(--radius-sm)] bg-accent px-[18px] py-2 text-[13px] font-semibold tracking-[0.1px] text-white no-underline transition-colors duration-150 hover:bg-accent-hover"
          >
            Free Course
          </Link>
        </div>
      </div>
    </nav>
  );
}
