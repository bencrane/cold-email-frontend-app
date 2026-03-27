type Variant = "verified" | "live" | "draft" | "tag" | "accent" | "count";

const base = "inline-flex items-center rounded-full text-xs font-semibold";

const variants: Record<Variant, string> = {
  verified: "bg-success-bg px-2.5 py-0.5 text-success-text",
  live: "bg-success-bg px-2 py-0.5 text-success-text",
  draft: "bg-surface-muted px-2 py-0.5 text-text-tertiary",
  tag: "bg-tag-bg px-3 py-1 text-[11px] text-tag-text",
  accent: "bg-accent text-white px-3 py-1 text-[11px] uppercase tracking-[0.8px]",
  count: "bg-accent-muted h-5 min-w-5 items-center justify-center px-1.5 text-accent",
};

export default function Badge({
  variant = "tag",
  children,
  className = "",
}: {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`${base} ${variants[variant]} ${className}`.trim()}>
      {children}
    </span>
  );
}
