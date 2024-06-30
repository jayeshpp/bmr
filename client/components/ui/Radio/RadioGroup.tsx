import React, {
  ReactNode,
  ChangeEvent,
  isValidElement,
  cloneElement,
  ReactElement,
} from "react";
import { Label } from "../Label";

interface RadioGroupProps {
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
  children: ReactNode;
  groupLabel: string;
  orientation?: "vertical" | "horizontal";
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  selectedValue,
  onChange,
  children,
  groupLabel,
  orientation = "vertical",
}) => {
  const styles = {
    vertical: "flex-col",
    horizontal: "flex-row gap-4",
  };

  return (
    <div>
      {groupLabel && <Label>{groupLabel}</Label>}
      <div className={`flex ${styles[orientation]}`}>
        {React.Children.map(children, (child) => {
          if (isValidElement(child) && typeof child.props.value === "string") {
            return cloneElement(child as ReactElement<any>, {
              name,
              checked: child.props.value === selectedValue,
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                onChange(e.target.value),
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};
