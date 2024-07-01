import { Div } from "@/components/Div";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Button } from "@/components/ui/Button";
import { TextBox } from "@/components/ui/TextBox";
import { IProfileProps } from "@/interfaces/user.interface";

interface IEmergencyContactInfoFormProps {
  values: IProfileProps;
  handleChange: any;
  handleSteps: (value: string) => void;
  isSubmitting: boolean;
}

export const EmergencyContactInfoForm = ({
  values,
  handleChange,
  handleSteps,
  isSubmitting,
}: IEmergencyContactInfoFormProps) => {
  return (
    <>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange(
              "emergencyContactInfo.emergencyContactNameInFamily",
            ),
            value: values.emergencyContactInfo.emergencyContactNameInFamily,
            maxLength: 10,
          }}
          label="Emergency contact name in Family"
        />
        <ErrorMessage name="emergencyContactInfo.emergencyContactNameInFamily" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange(
              "emergencyContactInfo.emergencyContactNumberInFamily",
            ),
            value: values.emergencyContactInfo.emergencyContactNumberInFamily,
            maxLength: 10,
          }}
          label="Emergency contact number in Family"
        />
        <ErrorMessage name="emergencyContactInfo.emergencyContactNumberInFamily" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange(
              "emergencyContactInfo.emergencyContactRelationship",
            ),
            value: values.emergencyContactInfo.emergencyContactRelationship,
          }}
          label="Relationship with the above person"
        />
        <ErrorMessage name="emergencyContactInfo.emergencyContactRelationship" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange(
              "emergencyContactInfo.emergencyContactNameInBangalore",
            ),
            value: values.emergencyContactInfo.emergencyContactNameInBangalore,
          }}
          label="Emergency Contact Person in Bangalore"
        />
        <ErrorMessage name="emergencyContactInfo.emergencyContactNameInBangalore" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange(
              "emergencyContactInfo.emergencyContactNumberInBangalore",
            ),
            maxLength: 10,
            value:
              values.emergencyContactInfo.emergencyContactNumberInBangalore,
          }}
          label="Emergency Contact Number in Bangalore"
        />
        <ErrorMessage name="emergencyContactInfo.emergencyContactNumberInBangalore" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange(
              "emergencyContactInfo.emergencyContactNameInBMR",
            ),
            value: values.emergencyContactInfo.emergencyContactNameInBMR,
          }}
          label="Friends who can be contacted in BMR"
        />
        <ErrorMessage name="emergencyContactInfo.emergencyContactNameInBMR" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("emergencyContactInfo.location"),
            value: values.emergencyContactInfo.location,
          }}
          label="Your Current Location"
        />
        <ErrorMessage name="emergencyContactInfo.location" />
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
