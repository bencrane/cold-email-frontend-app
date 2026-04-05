import Link from "next/link";

const footerLinks = [
  { label: "Tools", href: "/tools" },
  { label: "Agencies", href: "/agencies" },
  { label: "Playbooks", href: "/playbooks" },
  { label: "Feed", href: "/feed" },
  { label: "List Your Agency", href: "/for-agencies" },
];

export default function Footer() {
  return (
    <footer className="mx-auto flex h-[60px] w-full max-w-[var(--max-width)] items-center justify-between border-t border-border px-6">
      <div className="text-sm font-semibold text-text-primary">
        ColdEmail.com
        <span className="ml-3 text-[13px] font-normal text-text-tertiary">
          The independent resource for outbound.
        </span>
      </div>
      <div className="flex gap-6">
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[13px] text-text-tertiary no-underline hover:text-text-secondary"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
