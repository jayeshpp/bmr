import React from "react";
import { v4 as uuidv4 } from "uuid";

interface ITextBox {
  label?: string;
  inputProps: object;
}

export const TextBox = React.forwardRef<HTMLInputElement, ITextBox>(
  (props, ref) => {
    const { label, inputProps } = props;

    const uid = uuidv4();

    return (
      <div className="flex flex-col">
        {label && <label htmlFor={uid}>{label}</label>}
        <input
          className="border border-gray-200 p-3"
          ref={ref}
          id={uid}
          {...inputProps}
        />
      </div>
    );
  },
);

TextBox.displayName = "Textbox";
