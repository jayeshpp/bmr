import { Div } from "@/components/Div";
import { DatePicker as DP, DatePickerProps } from "react-date-picker";
import "./date-picker.css";
import { Label } from "../Label";

interface IDatePicker extends DatePickerProps {
  label?: string;
}
// https://projects.wojtekmaj.pl/react-date-picker/
export const DatePicker = ({ label, ...props }: IDatePicker) => {
  return (
    <Div>
      {label && <Label>{label}</Label>}
      <DP {...props} />
    </Div>
  );
};
