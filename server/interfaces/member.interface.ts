import { Document } from "mongoose";

export interface IMember extends Document {
  name: string;
  email: string;
  password: string;
  role: "Member" | "Crew" | "Admin";
  createdAt: Date;
  updatedAt: Date;
}
