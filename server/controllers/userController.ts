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

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    // Create empty profile
    /* const newProfile = new UserProfile({ userId: newUser._id });
    await newProfile.save(); */

    // Generate JWT token
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
  const { userId } = req.body;
  const profileData = req.body;

  const { error } = userProfileValidationSchema.validate(profileData);
  if (error) {
    res.status(400).json({ message: error.details[0].message });
    return;
  }

  const existingProfile = await UserProfile.findOne({ userId });
  if (existingProfile) {
    res.status(400).json({ message: "Profile already exists" });
    return;
  }

  try {
    const newUserProfile = new UserProfile({ userId, ...profileData });
    await newUserProfile.save();
    res.status(201).json({ profile: newUserProfile });
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
};

export const updateProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  const profileData = { ...req.body, userId };

  const { error } = userProfileValidationSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.details[0].message });
    return;
  }

  try {
    const updatedProfile = await UserProfile.findOneAndUpdate(
      { userId },
      profileData,
      { new: true, runValidators: true }
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
  const { userId } = req.params;

  try {
    // Delete the user
    const userDeletionResult = await User.findByIdAndDelete(userId);
    if (!userDeletionResult) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Delete the user's profile
    const userProfileDeletionResult = await UserProfile.findOneAndDelete({
      userId,
    });
    if (!userProfileDeletionResult) {
      res.status(404).json({ message: "User profile not found" });
      return;
    }

    res.status(200).json({ message: "User and profile deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export const getProfileByUserId = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;

  try {
    const profile = await UserProfile.findOne({ userId });
    if (!profile) {
      res.status(404).json({ message: "Profile not found" });
      return;
    }
    res.status(200).json({ profile });
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
};
