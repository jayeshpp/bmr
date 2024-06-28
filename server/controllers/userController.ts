import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";
import {
  userProfileValidationSchema,
  userValidationSchema,
} from "../validation/user.validation";
import UserProfile from "../models/UserProfile";

export const register = async (req: Request, res: Response): Promise<void> => {
  const { firstName, lastName, email, password } = req.body;

  // Validate the request body
  const { error } = userValidationSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.details[0].message });
    return;
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET as string,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(201).json({ user: newUser, token });
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ message: error.message });
  }
};

export const addProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { error } = userProfileValidationSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.details[0].message });
    return;
  }

  try {
    const newProfile = new UserProfile(req.body);
    await newProfile.save();
    res.status(201).json({ profile: newProfile });
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
};

export const updateProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { error } = userProfileValidationSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.details[0].message });
    return;
  }

  try {
    const updatedProfile = await UserProfile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProfile) {
      res.status(404).json({ message: "Profile not found" });
      return;
    }
    res.status(200).json({ profile: updatedProfile });
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
};

export const deleteProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedProfile = await UserProfile.findByIdAndDelete(req.params.id);
    if (!deletedProfile) {
      res.status(404).json({ message: "Profile not found" });
      return;
    }
    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
};

export const getProfileByUserId = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;

  try {
    const profile = await UserProfile.findOne({ userId });
    if (!profile) {
      res.status(404).json({ message: "Profile not found" });
      return;
    }
    res.status(200).json({ profile });
  } catch (err) {
    if (err instanceof Error)
      res.status(500).json({ message: err.message });
  }
};