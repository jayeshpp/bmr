import { Div } from "@/components/Div";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Button } from "@/components/ui/Button";
import { TextBox } from "@/components/ui/TextBox";
import { IProfileProps } from "@/interfaces/user.interface";

interface IInsuranceInfoFormProps {
  values: IProfileProps;
  handleChange: any;
  handleBlur: any;
  handleSteps: (value: string) => void;
  isSubmitting: boolean;
}

export const InsuranceInfoForm = ({
  values,
  handleChange,
  handleBlur,
  handleSteps,
  isSubmitting,
}: IInsuranceInfoFormProps) => {
  return (
    <>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("insuranceInfo.company"),
            onBlur: handleBlur("insuranceInfo.company"),
            value: values.insuranceInfo.company,
          }}
          label="Insurance company"
        />
        <ErrorMessage name="insuranceInfo.company" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("insuranceInfo.number"),
            onBlur: handleBlur("insuranceInfo.number"),
            value: values.insuranceInfo.number,
          }}
          label="Insurance number"
        />
        <ErrorMessage name="insuranceInfo.number" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("insuranceInfo.validity"),
            onBlur: handleBlur("insuranceInfo.validity"),
            value: values.insuranceInfo.validity,
          }}
          label="Insurance validity"
        />
        <ErrorMessage name="insuranceInfo.validity" />
      </Div>
      <Div className="flex justify-end gap-2">
        <Button type="button" onClick={() => handleSteps("back")}>
          Back
        </Button>
        <Button type="submit" disabled={isSubmitting} loading={isSubmitting}>
          Continue
        </Button>
      </Div>
    </>
  );
};
