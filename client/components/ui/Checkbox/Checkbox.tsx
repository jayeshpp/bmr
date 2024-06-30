import React, { InputHTMLAttributes } from "react";

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, ICheckbox>(
  (props, ref) => {
    const { onChange, value, label, id, ...rest } = props;
    return (
      <div className="flex gap-2">
        <input
          type="checkbox"
          className="border border-gray-200 w-5"
          ref={ref}
          onChange={onChange}
          value={value}
          id={id}
          {...rest}
        />
        {label && <label htmlFor={id}>{label}</label>}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
