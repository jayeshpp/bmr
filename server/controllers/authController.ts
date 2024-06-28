import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    const payload = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      profilePic: 'https://placehold.co/400x400',
    }

    // Set session cookie
    req.session.user = payload; // Store user data in session
    res.cookie("sessionId", req.sessionID, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds, should match session cookie maxAge
    });

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      res.status(500).json({ message: "Failed to logout" });
      return;
    }
    res.clearCookie("sessionId");
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "Logged out successfully" });
  });
};

export const checkSession = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (req.session.user) {
    res.status(201).json({ valid: true, ...req.session.user });
  } else {
    res.status(201).json({ valid: false });
  }
};
