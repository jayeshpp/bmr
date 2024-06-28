import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "Member" | "Crew" | "Admin";
  isActive: boolean;
  isEmailVerified: boolean;
}

export interface IUserProfile extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  dob: Date;
  countryCode: string;
  contactNumber: number;
  emergencyNumber1: number;
  emergencyNumber2: number;
  whatsappNumber: number;
  relationshipStatus: "Single" | "Married" | "Engaged";
  bloodGroup:
    | "A +ve"
    | "B +ve"
    | "AB +ve"
    | "O +ve"
    | "A -ve"
    | "B -ve"
    | "AB -ve"
    | "O -ve";
  readyToDonateBlood: boolean;
  nativeInKerala:
    | "Alappuzha"
    | "Ernakulam"
    | "Idukki"
    | "Kannur"
    | "Kasaragod"
    | "Kollam"
    | "Kottayam"
    | "Kozhikode"
    | "Malappuram"
    | "Palakkad"
    | "Pathanamthitta"
    | "Thiruvananthapuram"
    | "Thrissur"
    | "Wayanad";
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
  youtubeChannel?: string;
  volunteerPreference: string;
  agreeToRules: boolean;
  createdAt: Date;
  updatedAt: Date;
}
