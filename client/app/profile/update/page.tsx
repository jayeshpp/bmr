"use client";

import withAuth from "@/hoc/withAuth";
import { ProfileForm } from "../ProfileForm";
import API from "@/api";
import { toast } from "react-toastify";

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
  ridingGroupMember: "no",
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
    volunteerPreference: "yes",
    specialNote: "",
  },
  ack1: false,
  ack2: false,
  ack3: false,
  agreeToRules: false,
};

function updateProfile({ userId }: any) {
  const onSubmit = async (values: any) => {
    console.log(values);
    try {
      await API.user.updateProfile(userId, values);
      toast.success("Profile updated successfully");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    }
  };
  return (
    <>
      <ProfileForm initialValues={initialValues} onSubmit={onSubmit} />
    </>
  );
}

export default withAuth(updateProfile);
