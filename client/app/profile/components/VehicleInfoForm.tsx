import { Div } from "@/components/Div";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Button } from "@/components/ui/Button";
import { TextBox } from "@/components/ui/TextBox";
import { IProfileProps } from "@/interfaces/user.interface";

interface IVehicleInfoFormProps {
  values: IProfileProps;
  handleChange: any;
  handleSteps: (value: string) => void;
}

export const VehicleInfoForm = ({
  values,
  handleChange,
  handleSteps,
}: IVehicleInfoFormProps) => {
  return (
    <>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("vehicleInfo[0].make"),
            value: values.vehicleInfo[0].make,
          }}
          label="Make"
        />
        <ErrorMessage name="vehicleInfo[0].make" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("vehicleInfo[0].model"),
            value: values.vehicleInfo[0].model,
          }}
          label="Model"
        />
        <ErrorMessage name="vehicleInfo[0].model" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("vehicleInfo[0].registrationNumber"),
            value: values.vehicleInfo[0].registrationNumber,
          }}
          label="Registration Number"
        />
        <ErrorMessage name="vehicleInfo[0].registrationNumber" />
      </Div>
      <Div className="flex justify-end gap-2">
        <Button type="button" onClick={() => handleSteps("back")}>
          Back
        </Button>
        <Button type="submit">Continue</Button>
      </Div>
    </>
  );
};
