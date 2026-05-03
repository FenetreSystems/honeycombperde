import { type ReactNode } from "react";

interface HexIconProps {
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "brand" | "white" | "ghost";
  className?: string;
}

const sizeMap = {
  xs: { outer: "w-8 h-9", inner: "w-7 h-7" },
  sm: { outer: "w-11 h-[52px]", inner: "w-10 h-10" },
  md: { outer: "w-14 h-16", inner: "w-12 h-12" },
  lg: { outer: "w-16 h-[76px]", inner: "w-14 h-14" },
  xl: { outer: "w-20 h-[92px]", inner: "w-16 h-16" },
};

const variantMap = {
  primary: "bg-[#83bd81]",
  brand: "bg-[#404e5e]",
  white: "bg-white border border-[#e8f3e8]",
  ghost: "bg-[#eef7ee]",
};

export default function HexIcon({
  children,
  size = "md",
  variant = "ghost",
  className = "",
}: HexIconProps) {
  const { outer, inner } = sizeMap[size];
  const bg = variantMap[variant];

  return (
    <div
      className={`${outer} flex items-center justify-center shrink-0 ${className}`}
      style={{
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        background: variant === "primary"
          ? "#83bd81"
          : variant === "brand"
          ? "#404e5e"
          : variant === "white"
          ? "white"
          : "#eef7ee",
      }}
    >
      <div className={`${inner} flex items-center justify-center`}>
        {children}
      </div>
    </div>
  );
}

/* Inline SVG yardımcısı — hexagon clip-path'li container */
export function HexSVG({
  size = 56,
  fill = "#eef7ee",
  children,
}: {
  size?: number;
  fill?: string;
  children?: ReactNode;
}) {
  const h = size;
  const w = size * (2 / Math.sqrt(3));
  const pts = [
    [w / 2, 0],
    [w, h / 4],
    [w, (3 * h) / 4],
    [w / 2, h],
    [0, (3 * h) / 4],
    [0, h / 4],
  ]
    .map((p) => p.join(","))
    .join(" ");

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <polygon points={pts} fill={fill} />
      {children}
    </svg>
  );
}
