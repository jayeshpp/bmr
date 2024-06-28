import mongoose, { Schema, Model } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import { userValidationSchema } from "../validation/user.validation";

const UserSchema: Schema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
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

UserSchema.pre('save', async function (next) {
  try {
    const doc = this.toObject();
    delete doc._id;
    delete doc.createdAt;
    delete doc.updatedAt;
    await userValidationSchema.validateAsync(doc);
    next();
  } catch (err) {
    if(err instanceof Error)
      next(err);
  }
});

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default User;
