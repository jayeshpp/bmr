import { Div } from "@/components/Div";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Button } from "@/components/ui/Button";
import { TextBox } from "@/components/ui/TextBox";
import { Textarea } from "@/components/ui/Textarea";
import { IProfileProps } from "@/interfaces/user.interface";

interface IContactInfoFormProps {
  values: IProfileProps;
  handleChange: any;
  handleSteps: (value: string) => void;
}

export const ContactInfoForm = ({
  values,
  handleChange,
  handleSteps,
}: IContactInfoFormProps) => {
  return (
    <>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("contactInfo.mobileNumber"),
            value: values.contactInfo.mobileNumber,
            maxLength: 10,
          }}
          label="Mobile Number"
        />
        <ErrorMessage name="contactInfo.mobileNumber" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("contactInfo.whatsappNumber"),
            value: values.contactInfo.whatsappNumber,
            maxLength: 10,
          }}
          label="Whatsapp number"
        />
        <ErrorMessage name="contactInfo.whatsappNumber" />
      </Div>
      <Div className="form-row">
        <Textarea
          textareaProps={{
            onChange: handleChange("contactInfo.homeAddress"),
            value: values.contactInfo.homeAddress,
          }}
          label="Home address"
        />
        <ErrorMessage name="contactInfo.homeAddress" />
      </Div>
      <Div className="form-row">
        <Textarea
          textareaProps={{
            onChange: handleChange("contactInfo.officeAddress"),
            value: values.contactInfo.officeAddress,
          }}
          label="Office address"
        />
        <ErrorMessage name="contactInfo.officeAddress" />
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
