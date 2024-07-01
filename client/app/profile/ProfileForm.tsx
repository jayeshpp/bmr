import * as Yup from "yup";
import { Button } from "@/components/ui/Button";
import { Form, Formik } from "formik";
import { IProfileProps } from "@/interfaces/user.interface";
import { Div } from "@/components/Div";
import { TimelineStepper, TimelineStepperItem } from "@/components/ui/Stepper";
import { FC, useState } from "react";
import { PersonalInfoForm } from "./components/PersonalInfoForm";
import { ContactInfoForm } from "./components/ContactInfoForm";
import { MedicalInfoForm } from "./components/MedicalInfoForm";
import { DLInfoForm } from "./components/DLInfoForm";
import { VehicleInfoForm } from "./components/VehicleInfoForm";
import { RideExperienceInfoForm } from "./components/RideExperienceInfoForm";
import { OtherInfoForm } from "./components/OtherInfoForm";
import { SocialMediaInfoForm } from "./components/SocialMediaInfoForm";
import { InsuranceInfoForm } from "./components/InsuranceInfoForm";
import { AcknowledgmentInfoForm } from "./components/AcknowledgmentInfoForm";
import { sleep } from "@/lib/utils";
import { EmergencyContactInfoForm } from "./components/EmergencyContactInfoForm";

interface IProfileFormProps {
  initialValues: IProfileProps;
  onSubmit: (values: IProfileProps) => void;
}

interface IStepComponent {
  id: number;
  title: string;
  subTitle: string;
  component: FC<any>;
}

// Define validation schemas for each step
const personalInfoSchema = Yup.object().shape({
  personalInfo: Yup.object().shape({
    dob: Yup.string().required("Date of birth is required"),
    profilePic: Yup.string().url("Invalid URL format for profile picture"),
    occupation: Yup.string().required("Occupation is required"),
    nickName: Yup.string(),
  }),
});

const contactInfoSchema = Yup.object().shape({
  contactInfo: Yup.object().shape({
    countryCode: Yup.string().required("Country code is required"),
    mobileNumber: Yup.string()
      .matches(/^\d+$/, "Mobile number must only contain digits")
      .length(10, "Mobile number must be exactly 10 digits")
      .required("Mobile number is required"),
    whatsappNumber: Yup.string()
      .matches(/^\d+$/, "WhatsApp number must only contain digits")
      .length(10, "WhatsApp number must be exactly 10 digits")
      .required("WhatsApp number is required"),
    homeAddress: Yup.string().required("Home address is required"),
    officeAddress: Yup.string().required("Office address is required"),
  }),
});

const medicalAndInsuranceInfoSchema = Yup.object().shape({
  medicalInfo: Yup.object().shape({
    bloodGroup: Yup.string().required("Blood group is required"),
    alergies: Yup.string().required("Allergies information is required"),
    preExistingMedicalCondition: Yup.string().required(
      "Pre-existing medical condition is required",
    ),
    climateSensitivities: Yup.string().required(
      "Climate sensitivities information is required",
    ),
    medicationRequirements: Yup.string().required(
      "Medication requirements information is required",
    ),
  }),
});

const otherInfoSchema = Yup.object().shape({
  otherInfo: Yup.object().shape({
    nativeInKerala: Yup.string().required(
      "Native in Kerala information is required",
    ),
    area: Yup.string().required("Area is required"),
    volunteerPreference: Yup.string()
      .oneOf(["yes", "no", "maybe"], "Invalid volunteer preference")
      .required("Volunteer preference is required"),
    specialNote: Yup.string().optional(),
  }),
});

const emergencyContactInfoSchema = Yup.object().shape({
  emergencyContactInfo: Yup.object().shape({
    emergencyContactNameInFamily: Yup.string().required(
      "Emergency contact name in family is required",
    ),
    emergencyContactNumberInFamily: Yup.string()
      .matches(/^\d+$/, "Emergency contact number must only contain digits")
      .length(10, "Emergency contact number must be exactly 10 digits")
      .required("Emergency contact number in family is required"),
    emergencyContactRelationship: Yup.string().required(
      "Emergency contact relationship is required",
    ),
    emergencyContactNameInBangalore: Yup.string().required(
      "Emergency contact name in Bangalore is required",
    ),
    emergencyContactNumberInBangalore: Yup.string()
      .matches(/^\d+$/, "Emergency contact number must only contain digits")
      .length(10, "Emergency contact number must be exactly 10 digits")
      .required("Emergency contact number in Bangalore is required"),
    emergencyContactNameInBMR: Yup.string().required(
      "Emergency contact name in BMR is required",
    ),
    location: Yup.string().required("Location is required"),
  }),
});

const DLInfoSchema = Yup.object().shape({
  DLInfo: Yup.object().shape({
    DLNumber: Yup.string().required("Driving license number is required"),
    DLIssuedAt: Yup.date().required("Driving license issue date is required"),
    DLValidUpTo: Yup.date().required(
      "Driving license validity date is required",
    ),
    DLFile: Yup.string()
      .url("Invalid URL format for driving license file")
      .required("Driving license file is required"),
  }),
});

const vehicleInfoSchema = Yup.object().shape({
  vehicleInfo: Yup.array()
    .of(
      Yup.object().shape({
        make: Yup.string().required("Vehicle make is required"),
        model: Yup.string().required("Vehicle model is required"),
        registrationNumber: Yup.string().required(
          "Vehicle registration number is required",
        ),
      }),
    )
    .min(1, "At least one vehicle information is required"),
});

const rideExperienceShema = Yup.object().shape({
  longestRideExperience: Yup.string().required(
    "Longest ride experience is required",
  ),
  ridingGroupMember: Yup.string().required(
    "Riding group membership information is required",
  ),
});

const socialMediaSchema = Yup.object().shape({
  socialMedia: Yup.object().shape({
    instagramId: Yup.string().required("Instagram ID is required"),
    facebookId: Yup.string().required("Facebook ID is required"),
    youtubeLink: Yup.string(),
  }),
});

const insuranceSchema = Yup.object().shape({
  insuranceInfo: Yup.object().shape({
    company: Yup.string().required("Insurance company is required"),
    number: Yup.string().required("Insurance number is required"),
    validity: Yup.date().required("Insurance validity date is required"),
  }),
});

const ackSchema = Yup.object().shape({
  ack1: Yup.boolean().oneOf([true], "You must acknowledge to it to continue"),
  ack2: Yup.boolean().oneOf([true], "You must acknowledge to it to continue"),
  ack3: Yup.boolean().oneOf([true], "You must acknowledge to it to continue"),
  agreeToRules: Yup.boolean().oneOf([true], "Agreement to rules is required"),
});

const stepComponents: IStepComponent[] = [
  {
    id: 1,
    title: "Personal Information",
    subTitle: "",
    component: PersonalInfoForm,
  },
  {
    id: 2,
    title: "Contact Information",
    subTitle: "",
    component: ContactInfoForm,
  },
  {
    id: 3,
    title: "Emergency Contact Information",
    subTitle: "",
    component: EmergencyContactInfoForm,
  },
  {
    id: 4,
    title: "Social Media Information",
    subTitle: "",
    component: SocialMediaInfoForm,
  },
  {
    id: 5,
    title: "Vehicle Information",
    subTitle: "",
    component: VehicleInfoForm,
  },
  {
    id: 6,
    title: "DL Information",
    subTitle: "",
    component: DLInfoForm,
  },
  {
    id: 7,
    title: "Insurance Information",
    subTitle: "",
    component: InsuranceInfoForm,
  },
  {
    id: 8,
    title: "Medical Information",
    subTitle: "",
    component: MedicalInfoForm,
  },
  {
    id: 9,
    title: "Ride Experience",
    subTitle: "",
    component: RideExperienceInfoForm,
  },
  {
    id: 10,
    title: "Other Information",
    subTitle: "",
    component: OtherInfoForm,
  },
  {
    id: 11,
    title: "Acknowledgement",
    subTitle: "",
    component: AcknowledgmentInfoForm,
  },
];

export const ProfileForm = ({ initialValues, onSubmit }: IProfileFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  console.log(initialValues);

  const validationSchema = () => {
    switch (currentStep) {
      case 1:
        return personalInfoSchema;
      case 2:
        return contactInfoSchema;
      case 3:
        return emergencyContactInfoSchema;
      case 4:
        return socialMediaSchema;
      case 5:
        return vehicleInfoSchema;
      case 6:
        return DLInfoSchema;
      case 7:
        return insuranceSchema;
      case 8:
        return medicalAndInsuranceInfoSchema;
      case 9:
        return rideExperienceShema;
      case 10:
        return otherInfoSchema;
      case 11:
        return ackSchema;
      default:
        return personalInfoSchema;
    }
  };

  const handleSaveAndContinue = () => {
    setCurrentStep((cs) => cs + 1);
  };

  const handleSteps = async (value: string) => {
    setCurrentStep((cs) => (value === "back" ? cs - 1 : cs + 1));
  };

  return (
    <div className="px-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { validateForm }) => {
          await sleep(300);
          await validateForm().then(() => {
            if (currentStep > stepComponents.length) {
              onSubmit(values);
            }
            setCurrentStep((cs) => cs + 1);
          });
        }}
      >
        {({
          isSubmitting,
          handleChange,
          handleBlur,
          setFieldValue,
          values,
        }) => {
          return (
            <Form>
              <TimelineStepper>
                {stepComponents.map(
                  ({ title, subTitle, component: Component, id }) => (
                    <TimelineStepperItem
                      key={title}
                      title={title}
                      details={subTitle}
                      completed={currentStep > id}
                    >
                      {currentStep === id && (
                        <Component
                          values={values}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          handleSteps={handleSteps}
                          setFieldValue={setFieldValue}
                          isSubmitting={isSubmitting}
                        />
                      )}
                    </TimelineStepperItem>
                  ),
                )}
              </TimelineStepper>
              <Div className="form-row flex gap-2 justify-end">
                <Button
                  type="submit"
                  disabled={
                    isSubmitting || currentStep <= stepComponents.length
                  }
                  onClick={handleSaveAndContinue}
                >
                  Save Profile
                </Button>
              </Div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
