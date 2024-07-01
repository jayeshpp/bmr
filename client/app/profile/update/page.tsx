"use client";

import withAuth from "@/hoc/withAuth";
import { ProfileForm } from "../ProfileForm";
import API from "@/api";
import { toast } from "react-toastify";
import { Div } from "@/components/Div";
import { IProfileResponse } from "@/interfaces/user.interface";
import { useEffect, useState } from "react";
import { PageLoading } from "@/components/PageLoading";
import { useRouter } from "next/navigation";

const initialEmptyValues = {
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

function UpdateProfile({ userId }: any) {
  const [loading, setLoading] = useState(true);
  const [initialValues, setInitialValues] = useState<any>(initialEmptyValues);

  const router = useRouter();

  const onSubmit = async (values: any) => {
    try {
      delete values.userId;
      delete values._id;
      delete values.__v;
      delete values.createdAt;
      delete values.updatedAt;
      delete values.vehicleInfo[0]._id;
      console.log(values);
      await API.user.updateProfile(userId, values);
      toast.success("Profile updated successfully");
      router.push("/profile");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    }
  };

  const fetchProfileByUserId = async (userId: string) => {
    setLoading(true);
    try {
      const response: IProfileResponse =
        await API.user.getProfileByUserId(userId);

      if (response) {
        setInitialValues(response);
      }
    } catch (error: any) {
      setInitialValues(initialEmptyValues);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileByUserId(userId);
  }, [userId]);

  if (loading) return <PageLoading />;

  return (
    <Div className="page-main">
      <ProfileForm initialValues={initialValues} onSubmit={onSubmit} />
    </Div>
  );
}

export default withAuth(UpdateProfile);
