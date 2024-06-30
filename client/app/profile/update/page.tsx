"use client";

import withAuth from "@/hoc/withAuth";
import { ProfileForm } from "../ProfileForm";

const initialValues = {
  personalInfo: {
    dob: "",
    profilePic: "",
    occupation: "",
    nickName: "",
  },
  contactInfo: {
    countryCode: "+91",
    mobileNumber: "",
    whatsappNumber: "",
    homeAddress: "",
    officeAddress: "",
  },
  socialMedia: {
    instagramId: "",
    facebookId: "",
    youtubeLink: "",
  },
  vehicleInfo: [
    {
      make: "",
      model: "",
      registrationNumber: "",
    },
  ],
  longestRideExperience: "",
  ridingGroupMember: true,
  DLInfo: {
    DLNumber: "",
    DLIssuedAt: "",
    DLValidUpTo: "",
    DLFile: "",
  },
  emergencyContactInfo: {
    emergencyContactNameInFamily: "",
    emergencyContactNumberInFamily: "",
    emergencyContactRelationship: "",
    emergencyContactNameInBangalore: "",
    emergencyContactNumberInBangalore: "",
    emergencyContactNameInBMR: "",
    location: "",
  },
  medicalInfo: {
    bloodGroup: "O +ve",
    alergies: "",
    preExistingMedicalCondition: "",
    climateSensitivities: "",
    medicationRequirements: "",
  },
  insuranceInfo: {
    company: "",
    number: "",
    validity: "",
  },
  otherInfo: {
    nativeInKerala: "",
    area: "",
    volunteerPreference: "Yes",
    specialNote: "",
  },
  ack1: false,
  ack2: false,
  ack3: false,
  agreeToRules: false,
};

function updateProfile() {
  const onSubmit = (values: any) => {
    // console.log(values);
  };
  return (
    <div>
      <ProfileForm initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
}

export default withAuth(updateProfile);
