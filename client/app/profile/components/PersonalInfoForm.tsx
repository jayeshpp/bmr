import { Div } from "@/components/Div";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Button } from "@/components/ui/Button";
import { DatePicker } from "@/components/ui/DatePicker";
import { TextBox } from "@/components/ui/TextBox";
import { IProfileProps } from "@/interfaces/user.interface";

interface IPersonalInfoFormProps {
  values: IProfileProps;
  handleChange: any;
  handleBlur: any;
  setFieldValue: any;
  handleSteps: (value: string) => void;
  isSubmitting: boolean;
}

export const PersonalInfoForm = ({
  values,
  handleChange,
  handleBlur,
  isSubmitting,
  setFieldValue,
}: IPersonalInfoFormProps) => {
  return (
    <>
      <Div className="form-row">
        <DatePicker
          label="Date of Birth"
          onChange={(value) => {
            setFieldValue("personalInfo.dob", value);
          }}
          value={values.personalInfo.dob}
        />
        <ErrorMessage name="personalInfo.dob" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("personalInfo.occupation"),
            onBlur: handleBlur("personalInfo.occupation"),
            value: values.personalInfo.occupation,
          }}
          label="Occupation"
        />
        <ErrorMessage name="personalInfo.occupation" />
      </Div>
      <Div className="flex justify-end gap-2">
        <Button disabled={isSubmitting} loading={isSubmitting}>
          Continue
        </Button>
      </Div>
    </>
  );
};
