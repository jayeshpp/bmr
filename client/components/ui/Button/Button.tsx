import clsx from "clsx";
import { ReactNode, ButtonHTMLAttributes } from "react";
import { Spinner } from "../Spinner";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
  variant?: string;
}

export const Button = (props: IButton) => {
  const {
    children,
    className,
    loading = false,
    variant = "contained",
    ...rest
  } = props;

  const dynamicClasses = clsx(
    "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",

    // Light-mode focus state
    "focus:border-teal-500 focus:ring-teal-500",

    // Dark-mode focus state
    "dark:focus:border-teal-400 dark:focus:ring-teal-400",

    // Selected / hover states
    "border-teal-500 bg-teal-500 text-white hover:bg-teal-600",

    // Dark-mode unselected state (selected is the same)
    "dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800",
  );

  const baseStyles = `flex items-center gap-2 rounded-full font-medium text-sm px-5 py-2.5 text-center focus:ring-2`;

  const variantMap = {
    dark: clsx(
      // Light mode
      "text-white bg-secondary-main hover:bg-secondary-dark hover:text-primary-main focus:outline-none focus:ring-blue-300",
      // Dark mode
      "dark:text-secondary-main dark:bg-primary-main dark:hover:text-secondary-dark dark:hover:bg-primary-dark dark:focus:ring-primary-light disabled:opacity-50 disabled:cursor-not-allowed",
    ),
    contained: clsx(
      "text-secondary-main bg-primary-main hover:text-secondary-dark hover:bg-primary-dark focus:ring-primary-light disabled:opacity-50 disabled:cursor-not-allowed",
    ),
    outlined: clsx(
      "py-2.5 border text-secondary-main hover:bg-gray-50 focus:outline-none focus:ring-gray-100",
      "dark:text-white dark:hover:text-white dark:hover:bg-secondary-main",
    ),
  }[variant];

  return (
    <button className={`${baseStyles} ${variantMap}`} {...rest}>
      {children} {loading ? <Spinner /> : null}
    </button>
  );
};
