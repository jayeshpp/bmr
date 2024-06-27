import React, { ChangeEvent, useCallback } from "react";
import { v4 as uuidv4 } from 'uuid';

interface ITextBox {
  label?: string;
  placeholder?: string;
  size?: number;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextBox = React.forwardRef<HTMLInputElement, ITextBox>(
  (props, ref) => {
    const { onChange, size, label, placeholder, value } = props;

    const debounce = (fn: (...args: any[]) => void, delay = 300) => {
      let timer: any;
      return (...args: any[]) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
      };
    };

    const handleChange = useCallback(
      debounce((event: ChangeEvent<HTMLInputElement>) => {
        onChange(event);
      }),
      []
    );

    const uid = uuidv4()

    return (
      <div className="flex flex-col">
        {label && <label htmlFor={uid}>{label}</label>}
        <input
          className="border border-gray-200 p-3"
          ref={ref}
          onChange={onChange}
          size={size}
          value={value}
          id={uid}
          placeholder={placeholder}
        />
      </div>
    );
  }
);

TextBox.displayName = "Textbox";
