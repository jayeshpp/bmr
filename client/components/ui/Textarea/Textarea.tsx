import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Label } from "../Label";

interface ITextarea {
  label?: string;
  textareaProps: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, ITextarea>(
  (props, ref) => {
    const { label, textareaProps } = props;

    const uid = uuidv4();

    const mergedTextareaProps: React.TextareaHTMLAttributes<HTMLTextAreaElement> =
      {
        ...textareaProps,
      };

    return (
      <div className="flex flex-col">
        {label && <Label htmlFor={uid}>{label}</Label>}
        <textarea
          className="border border-gray-200 px-3 py-2"
          ref={ref}
          id={uid}
          {...mergedTextareaProps}
        />
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
