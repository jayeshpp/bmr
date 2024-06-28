import mongoose, { Schema, Model } from "mongoose";
import { IUserProfile } from "../interfaces/user.interface";

const UserProfileSchema: Schema = new mongoose.Schema(
  {
    profilePic: { type: String, required: true },
    dob: { type: Date, required: true },
    countryCode: { type: String, default: "+91" },
    contactNumber: { type: Number, unique: true, required: true },
    emergencyNumber1: { type: Number, unique: true, required: true },
    emergencyNumber2: { type: Number, unique: true, required: true },
    whatsappNumber: { type: Number, unique: true, required: true },
    relationshipStatus: {
      type: String,
      enum: ["Single", "Married", "Engaged"],
      default: "Single",
    },
    bloodGroup: {
      type: String,
      enum: [
        "A +ve",
        "B +ve",
        "AB +ve",
        "O +ve",
        "A -ve",
        "B -ve",
        "AB -ve",
        "O -ve",
      ],
      default: "O +ve",
      required: true,
    },
    readyToDonateBlood: { type: Boolean, required: true },
    nativeInKerala: {
      type: String,
      enum: [
        "Alappuzha",
        "Ernakulam",
        "Idukki",
        "Kannur",
        "Kasaragod",
        "Kollam",
        "Kottayam",
        "Kozhikode",
        "Malappuram",
        "Palakkad",
        "Pathanamthitta",
        "Thiruvananthapuram",
        "Thrissur",
        "Wayanad",
      ],
      default: "Kozhikode",
    },
    area: { type: String, required: true },
    doorNumber: { type: String, required: true },
    apartmentNameOrBuildingNumber: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: { type: String, required: true },
    pinCode: { type: Number, required: true },
    nearestLandmark: { type: String, required: true, default: "nill" },
    organization: { type: String, required: true },
    occupation: { type: String, required: true },
    drivingLicenseNumber: { type: String, required: true },
    drivingLicenseValidity: { type: Date, required: true },
    motorcycleMake: { type: String, required: true },
    motorcycleModel: { type: String, required: true },
    motorcycleRegistrationNumber: { type: String, required: true },
    rearViewMirrors: { type: Boolean, required: true },
    ridingGears: { type: [String], required: true },
    ridingGroupMember: { type: Boolean, required: true },
    youtubeChannel: { type: String, default: "" },
    volunteerPreference: { type: String, required: true },
    agreeToRules: { type: Boolean, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const UserProfile: Model<IUserProfile> = mongoose.model<IUserProfile>(
  "UserProfile",
  UserProfileSchema
);

export default UserProfile;
