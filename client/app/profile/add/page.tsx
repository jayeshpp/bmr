"use client";

import withAuth from "@/hoc/withAuth";
import { ProfileForm } from "../ProfileForm";

const initialValues = {
  dob: "",
  countryCode: "+91",
  contactNumber: "",
  emergencyNumber1: "",
  emergencyNumber2: "",
  whatsappNumber: "",
  relationshipStatus: "Single",
  bloodGroup: "O +ve",
  readyToDonateBlood: true,
  nativeInKerala: "",
  area: "",
  doorNumber: "",
  apartmentNameOrBuildingNumber: "",
  addressLine1: "",
  addressLine2: "",
  pinCode: "",
  nearestLandmark: "",
  organization: "",
  occupation: "",
  drivingLicenseNumber: "",
  drivingLicenseValidity: "",
  motorcycleMake: "",
  motorcycleModel: "",
  motorcycleRegistrationNumber: "",
  rearViewMirrors: true,
  ridingGears: [],
  ridingGroupMember: true,
  youtubeChannel: "",
  volunteerPreference: "Yes",
  agreeToRules: false,
};

function AddProfile() {
  const onSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div>
      <ProfileForm initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
}

export default withAuth(AddProfile);
