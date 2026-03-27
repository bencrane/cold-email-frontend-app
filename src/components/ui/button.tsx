import Link from "next/link";

type Variant = "primary" | "accent" | "secondary" | "ghost" | "destructive";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<React.ComponentProps<typeof Link>, keyof BaseProps | "ref"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base = "inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-[var(--radius-sm)] transition-colors duration-150 no-underline";

const variants: Record<Variant, string> = {
  primary: "bg-text-primary text-white hover:bg-text-primary-hover",
  accent: "bg-accent text-white hover:bg-accent-hover",
  secondary: "border border-border bg-surface text-text-primary hover:border-border-hover hover:shadow-[var(--card-shadow)]",
  ghost: "text-text-secondary hover:text-text-primary hover:bg-bg",
  destructive: "text-destructive hover:text-destructive-text",
};

const sizes: Record<Variant, Record<Size, string>> = {
  primary: { sm: "px-4 py-2", md: "px-6 py-3", lg: "px-8 py-3.5" },
  accent: { sm: "px-4 py-2", md: "px-6 py-3", lg: "px-8 py-3.5" },
  secondary: { sm: "px-4 py-2", md: "px-6 py-3", lg: "px-8 py-3.5" },
  ghost: { sm: "px-4 py-2", md: "px-6 py-3", lg: "px-8 py-3.5" },
  destructive: { sm: "px-4 py-2", md: "px-6 py-3", lg: "px-8 py-3.5" },
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    base,
    variants[variant],
    sizes[variant][size],
    fullWidth && "w-full",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in rest && rest.href != null) {
    const { href, ...linkProps } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}
