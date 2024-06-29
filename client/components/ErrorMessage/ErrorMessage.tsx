import React from "react";
import { ErrorMessage as FormikErrorMessage } from "formik";
import clsx from "clsx";

interface IErrorMessageProps {
  name: string;
  className?: string;
}

export const ErrorMessage: React.FC<IErrorMessageProps> = ({
  name,
  className,
}) => {
  return (
    <FormikErrorMessage name={name}>
      {(errorMessage) => (
        <div
          className={clsx(`text-sm text-red-500`, {
            className,
          })}
        >
          {errorMessage}
        </div>
      )}
    </FormikErrorMessage>
  );
};
