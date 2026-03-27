import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({
  items,
  className = "",
}: {
  items: BreadcrumbItem[];
  className?: string;
}) {
  return (
    <nav className={`flex items-center gap-2 text-sm text-text-tertiary ${className}`.trim()}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>›</span>}
            {isLast || !item.href ? (
              <span className={isLast ? "text-text-primary" : undefined}>
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-text-tertiary no-underline hover:text-text-secondary"
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
