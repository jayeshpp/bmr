import mongoose, { Schema, Model } from "mongoose";
import { IMember } from "../interfaces/member.interface";

const MemberSchema: Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["Member", "Crew", "Admin"],
      default: "Member",
    },
  },
  { timestamps: true }
);

const Member: Model<IMember> = mongoose.model<IMember>("Member", MemberSchema);

export default Member;
