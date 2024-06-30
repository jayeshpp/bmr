import { Div } from "@/components/Div";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Button } from "@/components/ui/Button";
import { TextBox } from "@/components/ui/TextBox";
import { IProfileProps } from "@/interfaces/user.interface";

interface IPersonalInfoFormProps {
  values: IProfileProps;
  handleChange: any;
  handleBlur: any;
  handleSteps: (value: string) => void;
  isSubmitting: boolean
}

export const PersonalInfoForm = ({
  values,
  handleChange,
  handleBlur,
  isSubmitting,
}: IPersonalInfoFormProps) => {
  return (
    <>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("personalInfo.dob"),
            onBlur: handleBlur("personalInfo.dob"),
            value: values.personalInfo.dob,
          }}
          label="Date of Birth"
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
        <Button disabled={isSubmitting} loading={isSubmitting}>Continue</Button>
      </Div>
    </>
  );
};
