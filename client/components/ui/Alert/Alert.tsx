import React from "react";

type AlertProps = {
  variant?: "info" | "danger" | "success" | "warning" | "dark";
  message: string;
};

const baseAlertStyle = "p-4 mb-4 text-sm rounded-lg dark:bg-gray-800";

const alertVariantStyles = {
  info: "text-blue-800 bg-blue-50 dark:text-blue-400",
  danger: "text-red-800 bg-red-50 dark:text-red-400",
  success: "text-green-800 bg-green-50 dark:text-green-400",
  warning: "text-yellow-800 bg-yellow-50 dark:text-yellow-300",
  dark: "text-gray-800 bg-gray-50 dark:text-gray-300",
};

export const Alert: React.FC<AlertProps> = ({ variant = "info", message }) => {
  const variantStyle = alertVariantStyles[variant];
  return (
    <div className={`${baseAlertStyle} ${variantStyle}`} role="alert">
      {message}
    </div>
  );
};
