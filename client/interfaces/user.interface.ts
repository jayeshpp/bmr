export interface IProfileProps {
  userId: string;
  profilePic: string;
  dob: string; // TODO: replace string Date after implementing datepicker component
  countryCode: string;
  contactNumber: number;
  emergencyNumber1: number;
  emergencyNumber2: number;
  whatsappNumber: number;
  relationshipStatus: string;
  bloodGroup: string;
  readyToDonateBlood: boolean;
  nativeInKerala: string;
  area: string;
  doorNumber: string;
  apartmentNameOrBuildingNumber: string;
  addressLine1: string;
  addressLine2: string;
  pinCode: number;
  nearestLandmark: string;
  organization: string;
  occupation: string;
  drivingLicenseNumber: string;
  drivingLicenseValidity: Date;
  motorcycleMake: string;
  motorcycleModel: string;
  motorcycleRegistrationNumber: string;
  rearViewMirrors: boolean;
  ridingGears: string[];
  ridingGroupMember: boolean;
  youtubeChannel: string;
  volunteerPreference: "Yes" | "No";
  agreeToRules: boolean;
}

export interface IProfileResponse extends IProfileProps {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IUserProfileResponse {
  profile: IProfileResponse;
}
