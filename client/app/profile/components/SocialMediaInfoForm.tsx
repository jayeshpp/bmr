import { Div } from "@/components/Div";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Button } from "@/components/ui/Button";
import { TextBox } from "@/components/ui/TextBox";
import { IProfileProps } from "@/interfaces/user.interface";

interface ISocialMediaInfoFormProps {
  values: IProfileProps;
  handleChange: any;
  handleBlur: any;
  handleSteps: (value: string) => void;
  isSubmitting: boolean;
}

export const SocialMediaInfoForm = ({
  values,
  handleChange,
  handleBlur,
  handleSteps,
  isSubmitting,
}: ISocialMediaInfoFormProps) => {
  return (
    <>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("socialMedia.instagramId"),
            onBlur: handleBlur("socialMedia.instagramId"),
            value: values.socialMedia.instagramId,
          }}
          label="Instagram ID"
        />
        <ErrorMessage name="socialMedia.instagramId" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("socialMedia.facebookId"),
            onBlur: handleBlur("socialMedia.facebookId"),
            value: values.socialMedia.facebookId,
          }}
          label="Facebook ID"
        />
        <ErrorMessage name="socialMedia.facebookId" />
      </Div>
      <Div className="form-row">
        <TextBox
          inputProps={{
            onChange: handleChange("socialMedia.youtubeLink"),
            onBlur: handleBlur("socialMedia.youtubeLink"),
            value: values.socialMedia.youtubeLink,
          }}
          label="Youtube Link"
        />
        <ErrorMessage name="socialMedia.youtubeLink" />
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
