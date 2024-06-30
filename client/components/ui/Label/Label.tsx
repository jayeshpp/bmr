import React, { HTMLAttributes } from "react";

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
}

export const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  ...props
}) => {
  return (
    <label
      className="block text-sm font-medium text-gray-900 dark:text-gray-300 pb-2"
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  );
};
