type Size = "xs" | "sm" | "md" | "lg" | "xl";
type Shape = "circle" | "rounded";

const sizeClasses: Record<Size, string> = {
  xs: "h-8 w-8 text-xs",
  sm: "h-9 w-9 text-xs",
  md: "h-12 w-12 text-sm",
  lg: "h-14 w-14 text-base",
  xl: "h-16 w-16 text-lg",
};

const shapeClasses: Record<Shape, string> = {
  circle: "rounded-full",
  rounded: "rounded-2xl",
};

export default function Avatar({
  initials,
  color,
  size = "sm",
  shape = "circle",
  className = "",
}: {
  initials: string;
  color: string;
  size?: Size;
  shape?: Shape;
  className?: string;
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center font-bold text-white ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`.trim()}
      style={{ background: color }}
    >
      {initials}
    </div>
  );
}
