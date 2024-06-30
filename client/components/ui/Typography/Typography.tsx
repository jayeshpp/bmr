import { FC, ReactNode } from "react";

type TypographyProps = {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  color?: string;
  shade?: string;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "caption" | "bodySmall";
  children: ReactNode;
  className?: string;
};

export const Typography: FC<TypographyProps> = ({
  component = "p",
  color = "gray",
  shade = "900",
  variant = "body",
  weight = "",
  children,
  className,
}) => {
  const Component = component;

  const colorClass = `text-${color}-${shade} dark:text-gray-200 font-normal	`;
  const variantClass = {
    h1: "text-3xl font-semibold",
    h2: "text-2xl",
    h3: "text-xl",
    h4: "text-lg",
    body: "text-sm",
    bodySmall: "text-xs",
    caption: "text-xs uppercase",
  }[variant];

  const fontWeightMap = {
    100: "font-thin",
    200: "font-extralight",
    300: "font-light",
    400: "font-normal",
    500: "font-medium",
    600: "font-semibold",
    700: "font-bold",
    800: "font-extrabold",
    900: "font-black",
  }[weight];

  return (
    <Component
      className={`${colorClass} ${variantClass} ${fontWeightMap} ${className}`}
    >
      {children}
    </Component>
  );
};
