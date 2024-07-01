import { Div } from "@/components/Div";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Button } from "@/components/ui/Button";
import { DatePicker } from "@/components/ui/DatePicker";
import { TextBox } from "@/components/ui/TextBox";
import { IProfileProps } from "@/interfaces/user.interface";

interface IDLInfoFormProps {
  values: IProfileProps;
  handleChange: any;
  setFieldValue: any;
  handleSteps: (value: string) => void;
  isSubmitting: boolean;
}

export const DLInfoForm = ({
  values,
  handleChange,
  handleSteps,
  isSubmitting,
  setFieldValue,
}: IDLInfoFormProps) => {
  return (
    <>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("DLInfo.DLNumber"),
            value: values.DLInfo.DLNumber,
          }}
          label="Number"
        />
        <ErrorMessage name="DLInfo.DLNumber" />
      </Div>
      <Div className="form-row">
        <DatePicker
          label="Issued At"
          onChange={(value) => {
            setFieldValue("DLInfo.DLIssuedAt", value);
          }}
          value={values.DLInfo.DLIssuedAt}
        />
        <ErrorMessage name="DLInfo.DLIssuedAt" />
      </Div>
      <Div className="form-row">
        <DatePicker
          label="Valid Up To"
          onChange={(value) => {
            setFieldValue("DLInfo.DLValidUpTo", value);
          }}
          value={values.DLInfo.DLValidUpTo}
        />
        <ErrorMessage name="DLInfo.DLValidUpTo" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("DLInfo.DLFile"),
            value: values.DLInfo.DLFile,
          }}
          label="Upload DL"
        />
        <ErrorMessage name="DLInfo.DLFile" />
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
