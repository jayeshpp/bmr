import * as Yup from "yup";
import { Button } from "@/components/ui/Button";
import { TextBox } from "@/components/ui/TextBox";
import { Form, Formik } from "formik";
import { IProfileProps } from "@/interfaces/user.interface";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Div } from "@/components/Div";

const profileSchema = Yup.object().shape({
  dob: Yup.string().required("Date of birth is required"),
  countryCode: Yup.string().required("Country code is required"),
  contactNumber: Yup.string()
    .matches(/^\d+$/, "Contact number must only contain digits")
    .length(10, "Contact number must be exactly 10 digits")
    .required("Contact number is required"),
  emergencyNumber1: Yup.string()
    .matches(/^\d+$/, "Emergency contact number must only contain digits")
    .length(10, "Emergency contact must be exactly 10 digits")
    .required("Emergency contact is required"),
  emergencyNumber2: Yup.string()
    .matches(/^\d+$/, "Emergency contact number must only contain digits")
    .length(10, "Emergency contact must be exactly 10 digits")
    .required("Emergency contact is required"),
  whatsappNumber: Yup.number().required("WhatsApp number is required"),
  relationshipStatus: Yup.string().required("Relationship status is required"),
  bloodGroup: Yup.string().required("Blood group is required"),
  readyToDonateBlood: Yup.boolean().required(
    "Ready to donate blood is required",
  ),
  nativeInKerala: Yup.string().required("Native in Kerala is required"),
  area: Yup.string().required("Area is required"),
  doorNumber: Yup.string().required("Door number is required"),
  apartmentNameOrBuildingNumber: Yup.string().required(
    "Apartment name or building number is required",
  ),
  addressLine1: Yup.string().required("Address line 1 is required"),
  addressLine2: Yup.string().required("Address line 2 is required"),
  pinCode: Yup.number().required("PIN code is required"),
  nearestLandmark: Yup.string().required("Nearest landmark is required"),
  organization: Yup.string().required("Organization is required"),
  occupation: Yup.string().required("Occupation is required"),
  drivingLicenseNumber: Yup.string().required(
    "Driving license number is required",
  ),
  drivingLicenseValidity: Yup.date().required(
    "Driving license validity date is required",
  ),
  motorcycleMake: Yup.string().required("Motorcycle make is required"),
  motorcycleModel: Yup.string().required("Motorcycle model is required"),
  motorcycleRegistrationNumber: Yup.string().required(
    "Motorcycle registration number is required",
  ),
  rearViewMirrors: Yup.boolean().required(
    "Rear view mirrors information is required",
  ),
  ridingGears: Yup.array()
    .of(Yup.string())
    .required("At least one riding gear must be selected"),
  ridingGroupMember: Yup.boolean().required(
    "Riding group membership information is required",
  ),
  youtubeChannel: Yup.string().optional(),
  volunteerPreference: Yup.string()
    .oneOf(["Yes", "No"], "Invalid volunteer preference")
    .required("Volunteer preference is required"),
  agreeToRules: Yup.boolean().required("Agreement to rules is required"),
});

export const ProfileForm = (
  initialValues: any,
  onSubmit: (values: IProfileProps) => void,
) => {
  const handleSubmit = (values: IProfileProps) => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={profileSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleChange, values }) => (
        <Form>
          <Div className="form-row">
            <TextBox
              inputProps={{
                onChange: handleChange("dob"),
                value: values.dob,
              }}
              label="Date of Birth"
            />
            <ErrorMessage name="dob" />
          </Div>
          <Div className="form-row">
            <TextBox
              inputProps={{
                type: "contactNumber",
                onChange: handleChange("contactNumber"),
                value: values.contactNumber,
                maxLength: 10,
              }}
              label="Contact Number"
            />
            <ErrorMessage name="contactNumber" />
          </Div>
          <Div className="form-row">
            <Button type="submit" disabled={isSubmitting}>
              Add Profile
            </Button>
          </Div>
        </Form>
      )}
    </Formik>
  );
};
