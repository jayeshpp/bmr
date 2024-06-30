import mongoose, { Schema, Model } from "mongoose";
import { IUserProfile } from "../interfaces/user.interface";

const vehicleInfoSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  registrationNumber: { type: String, required: true },
});

const UserProfileSchema: Schema = new mongoose.Schema(
  {
    personalInfo: {
      dob: { type: Date, required: true },
      profilePic: { type: String, default: '' },
      occupation: { type: String, required: true },
      nickName: { type: String, default: '' },
    },
    contactInfo: {
      countryCode: { type: String, required: true },
      mobileNumber: { type: String, required: true },
      whatsappNumber: { type: String, default: '' },
      instagramId: { type: String, default: '' },
      facebookId: { type: String, default: '' },
      homeAddress: { type: String, required: true },
      officeAddress: { type: String, default: '' },
    },
    vehicleInfo: [vehicleInfoSchema],
    longestRideExperience: { type: String, default: '' },
    ridingGroupMember: { type: Boolean, required: true },
    DLInfo: {
      DLNumber: { type: String, required: true },
      DLIssuedAt: { type: Date, required: true },
      DLValidUpTo: { type: Date, required: true },
      DLFile: { type: String, default: '' },
    },
    emergencyContactInfo: {
      emergencyContactNameInFamily: { type: String, required: true },
      emergencyContactNumberInFamily: { type: String, required: true },
      emergencyContactRelationship: { type: String, required: true },
      emergencyContactNameInBangalore: { type: String, default: '' },
      emergencyContactNumberInBangalore: { type: String, default: '' },
      emergencyContactNameInBMR: { type: String, default: '' },
      location: { type: String, default: '' },
    },
    medicalInfo: {
      bloodGroup: { type: String, required: true },
      alergies: { type: String, default: '' },
      preExistingMedicalCondition: { type: String, default: '' },
      climateSensitivities: { type: String, default: '' },
      medicationRequirements: { type: String, default: '' },
    },
    insuraceInfo: {
      company: { type: String, required: true },
      number: { type: String, required: true },
      validity: { type: Date, required: true },
    },
    otherInfo: {
      nativeInKerala: { type: String, default: '' },
      area: { type: String, default: '' },
      youtubeLink: { type: String, default: '' },
      volunteerPreference: { type: String, default: '' },
      specialNote: { type: String, default: '' },
    },
    ack1: { type: Boolean, required: true },
    ack2: { type: Boolean, required: true },
    ack3: { type: Boolean, required: true },
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
