export interface IProfileProps {
  personalInfo: {
    dob: string;
    profilePic: string;
    occupation: string;
    nickName: string;
  };
  contactInfo: {
    countryCode: string;
    mobileNumber: string;
    whatsappNumber: string;
    homeAddress: string;
    officeAddress: string;
  };
  socialMedia: {
    instagramId: string;
    facebookId: string;
    youtubeLink: string;
  };
  vehicleInfo: {
    make: string;
    model: string;
    registrationNumber: string;
  }[];
  longestRideExperience: string;
  ridingGroupMember: string;
  DLInfo: {
    DLNumber: string;
    DLIssuedAt: string;
    DLValidUpTo: string;
    DLFile: string;
  };
  emergencyContactInfo: {
    emergencyContactNameInFamily: string;
    emergencyContactNumberInFamily: string;
    emergencyContactRelationship: string;
    emergencyContactNameInBangalore: string;
    emergencyContactNumberInBangalore: string;
    emergencyContactNameInBMR: string;
    location: string;
  };
  medicalInfo: {
    bloodGroup: string;
    alergies: string;
    preExistingMedicalCondition: string;
    climateSensitivities: string;
    medicationRequirements: string;
  };
  insuranceInfo: {
    company: string;
    number: string;
    validity: string;
  };
  otherInfo: {
    nativeInKerala: string;
    area: string;
    volunteerPreference: string;
    specialNote: string;
  };
  ack1: boolean;
  ack2: boolean;
  ack3: boolean;
  agreeToRules: boolean;
}

export interface IProfileResponse extends IProfileProps {
  userId: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IUserProfileResponse {
  profile: IProfileResponse;
}
