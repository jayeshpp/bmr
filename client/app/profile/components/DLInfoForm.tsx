import { Div } from "@/components/Div";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Button } from "@/components/ui/Button";
import { TextBox } from "@/components/ui/TextBox";
import { IProfileProps } from "@/interfaces/user.interface";

interface IDLInfoFormProps {
  values: IProfileProps;
  handleChange: any;
  handleSteps: (value: string) => void;
  isSubmitting: boolean;
}

export const DLInfoForm = ({
  values,
  handleChange,
  handleSteps,
  isSubmitting,
}: IDLInfoFormProps) => {
  return (
    <>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("DLInfo.DLNumber"),
            value: values.DLInfo.DLNumber,
          }}
          label="DL number"
        />
        <ErrorMessage name="DLInfo.DLNumber" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("DLInfo.DLIssuedAt"),
            value: values.DLInfo.DLIssuedAt,
          }}
          label="DL issud at"
        />
        <ErrorMessage name="DLInfo.DLIssuedAt" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("DLInfo.DLValidUpTo"),
            value: values.DLInfo.DLValidUpTo,
          }}
          label="DL valid upto"
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
