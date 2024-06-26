import mongoose, { Schema, Model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const UserSchema: Schema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: false },
    role: {
      type: String,
      enum: ["Member", "Crew", "Admin"],
      default: "Member",
    },
    isOfficialMember: { type: Boolean, default: false },
    isEmailVerified: { type: Boolean, default: false },
    profileId: { type: mongoose.Schema.Types.ObjectId, ref: "UserProfile" },
  },
  { timestamps: true }
);

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default User;
