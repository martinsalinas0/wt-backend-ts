import { Response, Request } from "express";
import User from "../models/users.models";

//----
//----
//----
//----
//----
//getUser by ID
const getUserProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select("-password");

    if (!user) {
      res.status(404).json({ message: "User does not exist", success: false });
      return;
    }

    res.status(200).json({ user });
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false });
  }
};

//get all users
const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const allUsers = await User.find().select("-password");
    const userCount = await User.countDocuments();

    if (allUsers.length === 0) {
      res.status(404).json({ message: "No users found", success: false });
      return;
    }

    res
      .status(200)
      .json({ users: allUsers, userCount: userCount, success: true });
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false });
  }
};

const updateUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password, role } = req.params;
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false });
  }
};
const deleteUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.send("deleteUser");
};
const addUserProfile = async (req: Request, res: Response): Promise<void> => {
  res.send("addUser");
};
const userBasic = async (req: Request, res: Response): Promise<void> => {
  res.send("userBasic");
};

export {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  addUserProfile,
  userBasic,
  getAllUsers,
};
