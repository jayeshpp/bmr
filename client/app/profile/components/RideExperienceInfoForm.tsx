import { Div } from "@/components/Div";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Button } from "@/components/ui/Button";
import { Radio } from "@/components/ui/Radio";
import { RadioGroup } from "@/components/ui/Radio/RadioGroup";
import { Textarea } from "@/components/ui/Textarea";
import { IProfileProps } from "@/interfaces/user.interface";

interface IRideExperienceInfoFormProps {
  values: IProfileProps;
  handleChange: any;
  handleSteps: (value: string) => void;
  isSubmitting: boolean;
}

export const RideExperienceInfoForm = ({
  values,
  handleChange,
  handleSteps,
  isSubmitting,
}: IRideExperienceInfoFormProps) => {
  return (
    <>
      <Div className="form-row">
        <Textarea
          textareaProps={{
            onChange: handleChange("longestRideExperience"),
            value: values.longestRideExperience,
          }}
          label="Longest Ride experience (if any)"
        />
        <ErrorMessage name="longestRideExperience" />
      </Div>
      <Div className="form-row">
        <RadioGroup
          name="ridingGroupMember"
          selectedValue={values.ridingGroupMember}
          groupLabel="Part of any other riding groups?"
          onChange={handleChange("ridingGroupMember")}
          orientation="horizontal"
        >
          <Radio id="yes" name="rideExp" value="yes" label="Yes" />
          <Radio id="no" name="redeExp" value="no" label="No" />
        </RadioGroup>
        <ErrorMessage name="ridingGroupMember" />
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
