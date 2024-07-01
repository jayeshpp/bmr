import { Div } from "@/components/Div";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Button } from "@/components/ui/Button";
import { Radio } from "@/components/ui/Radio";
import { RadioGroup } from "@/components/ui/Radio/RadioGroup";
import { TextBox } from "@/components/ui/TextBox";
import { IProfileProps } from "@/interfaces/user.interface";

interface IOtherInfoFormProps {
  values: IProfileProps;
  handleChange: any;
  handleSteps: (value: string) => void;
  isSubmitting: boolean;
}

export const OtherInfoForm = ({
  values,
  handleChange,
  handleSteps,
  isSubmitting,
}: IOtherInfoFormProps) => {
  return (
    <>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("otherInfo.nativeInKerala"),
            value: values.otherInfo.nativeInKerala,
            maxLength: 10,
            placeholder: "eg: Kozhikode",
          }}
          label="Native in Kerala"
        />
        <ErrorMessage name="otherInfo.nativeInKerala" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("otherInfo.area"),
            value: values.otherInfo.area,
            maxLength: 10,
            placeholder: "eg: Madiwala",
          }}
          label="Where do you stay in Bangalore?"
        />
        <ErrorMessage name="otherInfo.area" />
      </Div>
      <Div className="form-row">
        <RadioGroup
          name="otherInfo.volunteerPreference"
          selectedValue={values.otherInfo.volunteerPreference}
          groupLabel="Would you like to volunteer BMRiders in your free time?"
          onChange={handleChange("otherInfo.volunteerPreference")}
          orientation="horizontal"
        >
          <Radio id="yes" name="volPre" value="yes" label="Yes" />
          <Radio id="no" name="volPre" value="no" label="No" />
          <Radio id="maybe" name="volPre" value="maybe" label="May be" />
        </RadioGroup>
        <ErrorMessage name="otherInfo.volunteerPreference" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("otherInfo.specialNote"),
            value: values.otherInfo.specialNote,
          }}
          label="Special notes to BMRiders"
        />
        <ErrorMessage name="otherInfo.specialNote" />
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
