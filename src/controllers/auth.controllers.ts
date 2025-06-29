import { Request, Response } from "express";
import User from "../models/users.models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      res.status(400).json({
        message: "Name, email, password, and role are required",
        success: false,
      });
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({
        message: "Email already registered",
        success: false,
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      message: "New user registered",
      name: name,
      success: true,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false });
  }
};

const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res
        .status(400)
        .json({ message: "Email and password required", success: false });
      return;
    }

    const user = await User.findOne({ email });
    if (!user) {
      res
        .status(401)
        .json({ message: "Invalid email or password", success: false });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ message: "Invalid password", success: false });
      return;
    }
    const payload = {
      id: user._id,
      role: user.role,
      email: user.email,
      name: user.name,
    };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET || "your_JWT_secret",
      { expiresIn: "1d" } // token expires in 1 day
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      success: true,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export { registerUser, loginUser };
