import { Div } from "@/components/Div";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Button } from "@/components/ui/Button";
import { DatePicker } from "@/components/ui/DatePicker";
import { TextBox } from "@/components/ui/TextBox";
import { IProfileProps } from "@/interfaces/user.interface";

interface IInsuranceInfoFormProps {
  values: IProfileProps;
  handleChange: any;
  handleBlur: any;
  setFieldValue: any;
  handleSteps: (value: string) => void;
  isSubmitting: boolean;
}

export const InsuranceInfoForm = ({
  values,
  handleChange,
  handleBlur,
  handleSteps,
  setFieldValue,
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
        <DatePicker
          label="Insurance validity"
          onChange={(value) => {
            setFieldValue("insuranceInfo.validity", value);
          }}
          value={values.insuranceInfo.validity}
        />
        <ErrorMessage name="insuranceInfo.validity" />
      </Div>
      <Div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => handleSteps("back")}
        >
          Back
        </Button>
        <Button type="submit" disabled={isSubmitting} loading={isSubmitting}>
          Continue
        </Button>
      </Div>
    </>
  );
};
