import React from "react";
import { v4 as uuidv4 } from "uuid";

interface ITextBox {
  label?: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}

export const TextBox = React.forwardRef<HTMLInputElement, ITextBox>(
  (props, ref) => {
    const { label, inputProps } = props;

    const uid = uuidv4();

    const mergedInputProps: React.InputHTMLAttributes<HTMLInputElement> = {
      type: "text",
      ...inputProps,
    };

    return (
      <div className="flex flex-col">
        {label && <label className="text-sm pb-1" htmlFor={uid}>{label}</label>}
        <input
          className="border border-gray-200 px-3 py-2"
          ref={ref}
          id={uid}
          {...mergedInputProps}
        />
      </div>
    );
  },
);

TextBox.displayName = "Textbox";
