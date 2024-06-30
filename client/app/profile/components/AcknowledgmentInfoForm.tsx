import { Div } from "@/components/Div";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { TextBox } from "@/components/ui/TextBox";
import { Typography } from "@/components/ui/Typography";
import { IProfileProps } from "@/interfaces/user.interface";

interface IAcknowledgmentInfoFormProps {
  values: IProfileProps;
  handleChange: any;
  handleBlur: any;
  handleSteps: (value: string) => void;
}

export const AcknowledgmentInfoForm = ({
  values,
  handleChange,
  handleBlur,
  handleSteps,
}: IAcknowledgmentInfoFormProps) => {
  return (
    <>
      <Div className="form-row">
        <Checkbox
          onChange={handleChange("ack1")}
          name="ack1"
          id="ack1"
          checked={values.ack1}
          label="I am willingly commit to complying with all rules and regulations established by BMR as a member."
        />
        <ErrorMessage name="ack1" />
      </Div>
      <Div className="form-row">
        <Checkbox
          onChange={handleChange("ack2")}
          name="ack2"
          id="ack2"
          checked={values.ack2}
          label="I acknowledge that in the event of an accident during the ride, Bangalore Malayali Riders (BMR) and its members are not liable for any consequences."
        />
        <ErrorMessage name="ack2" />
      </Div>
      <Div className="form-row">
        <Checkbox
          onChange={handleChange("ack3")}
          name="ack3"
          id="ack3"
          checked={values.ack3}
          label="I am willingly commit to complying with all rules and regulations established by BMR as a member."
        />
        <ErrorMessage name="ack3" />
      </Div>
      <Div className="form-row">
        <Typography component="h3">
          By submitting this form, I agree to follow rules and regulations on
          road with safety as priority.
        </Typography>
        <Typography>
          Any discrepancies in the details provided in the form may lead to
          cancel your membership anytime.
        </Typography>
        <Typography variant="bold">
          Your privacy is important to us, and we`ll only use this information
          for club-related purposes whenever it is required.
        </Typography>
        <Checkbox
          onChange={handleChange("agreeToRules")}
          name="agreeToRules"
          id="agreeToRules"
          checked={values.agreeToRules}
          label="Yes"
        />
        <ErrorMessage name="agreeToRules" />
      </Div>
      <Div className="flex justify-end gap-2">
        <Button type="button" onClick={() => handleSteps("back")}>
          Back
        </Button>
        <Button>Continue</Button>
      </Div>
    </>
  );
};
