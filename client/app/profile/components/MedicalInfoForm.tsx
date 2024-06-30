import { Div } from "@/components/Div";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { TextBox } from "@/components/ui/TextBox";
import { BLOOD_GROUP } from "@/constants/common";
import { IProfileProps } from "@/interfaces/user.interface";

interface IMedicalInfoFormProps {
  values: IProfileProps;
  handleChange: any;
  handleSteps: (value: string) => void;
  isSubmitting: boolean;
}

export const MedicalInfoForm = ({
  values,
  handleChange,
  handleSteps,
  isSubmitting,
}: IMedicalInfoFormProps) => {
  return (
    <>
      <Div className="form-row">
        <Select
          id="bloodGroup"
          label="Select your blood group"
          options={BLOOD_GROUP}
          onChange={handleChange("medicalInfo.bloodGroup")}
          selected={values.medicalInfo.bloodGroup}
        />
        <ErrorMessage name="medicalInfo.bloodGroup" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("medicalInfo.alergies"),
            value: values.medicalInfo.alergies,
          }}
          label="Alergies"
        />
        <ErrorMessage name="medicalInfo.alergies" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("medicalInfo.preExistingMedicalCondition"),
            value: values.medicalInfo.preExistingMedicalCondition,
          }}
          label="Pre existing medical condition"
        />
        <ErrorMessage name="medicalInfo.preExistingMedicalCondition" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("medicalInfo.climateSensitivities"),
            value: values.medicalInfo.climateSensitivities,
          }}
          label="Climate Sensitivities"
        />
        <ErrorMessage name="medicalInfo.climateSensitivities" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("medicalInfo.medicationRequirements"),
            value: values.medicalInfo.medicationRequirements,
          }}
          label="Medication Requirements"
        />
        <ErrorMessage name="medicalInfo.medicationRequirements" />
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
