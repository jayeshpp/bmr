import clsx from "clsx";
import { ReactNode, ButtonHTMLAttributes } from "react";
import { Spinner } from "../Spinner";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
}

export const Button = (props: IButton) => {
  const { children, className, loading = false, ...rest } = props;

  const dynamicClasses = clsx(
    "gap-2 relative inline-flex items-center border px-4 py-2 text-sm font-semibold transition-colors focus:z-10 focus:outline-none focus:ring-1",

    // Light-mode focus state
    "focus:border-teal-500 focus:ring-teal-500",

    // Dark-mode focus state
    "dark:focus:border-teal-400 dark:focus:ring-teal-400",

    // Selected / hover states
    "border-teal-500 bg-teal-500 text-white hover:bg-teal-600",

    // Dark-mode unselected state (selected is the same)
    "dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800",
  );

  return (
    <button className={dynamicClasses} {...rest}>
      {children} {loading ? <Spinner /> : null}
    </button>
  );
};
