import React, { SelectHTMLAttributes } from "react";
import { Label } from "../Label";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  selected: string;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  selected,
  ...props
}) => {
  return (
    <div className="mb-4">
      <Label htmlFor={props.id}>{label}</Label>
      <select
        {...props}
        className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            selected={option.value === selected}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
