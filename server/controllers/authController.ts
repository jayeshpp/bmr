import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Member from "../models/Member";

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;

  try {

    const existingMember = await Member.findOne({ email });
    if (existingMember) {
      res.status(400).json({ message: "Member already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newMember = new Member({ name, email, password: hashedPassword });
    await newMember.save();

    const token = jwt.sign(
      { id: newMember._id },
      process.env.JWT_SECRET as string,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(201).json({ member: newMember, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const member = await Member.findOne({ email });
    if (!member) {
      res.status(404).json({ message: "Member not found" });
      return;
    }

    const isPasswordCorrect = await bcrypt.compare(password, member.password);
    if (!isPasswordCorrect) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign(
      { id: member._id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    // Set session cookie
    req.session.member = { id: member._id, email: member.email };; // Store user data in session
    res.cookie("sessionId", req.sessionID, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds, should match session cookie maxAge
    });

    res.status(200).json({ member, token });
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
    res.status(200).json({ message: "Logged out successfully" });
  });
};
