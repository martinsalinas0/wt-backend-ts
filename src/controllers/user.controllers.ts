import { Response, Request } from "express";
import User from "../models/users.models";
//helper function to check for users
import { checkForUser } from "../utils/checkForUserById";

//----
//----
//----
//----
//----
//getUser by ID
const getUserProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    //util function for checking if user exist
    const user = await checkForUser(id);

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

//update user profile
const updateUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, email, role } = req.body;

    const user = await checkForUser(id);

    if (name) user.name = name;
    if (email) user.email = email;
    if (role) user.role = role;

    const updatedUser = await user.save();

    res.status(200).json({ user: updatedUser, success: true });
  } catch (error: any) {
    res.status(404).json({ message: error.message, success: false });
  }
};

//update user password
const updateUserPassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const user = checkForUser(id);
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false });
  }
};

//delete user profile
const deleteUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({
        message: "User ID is required",
        success: false,
      });
      return;
    }
    let user;
    try {
      user = await checkForUser(id);
    } catch (error) {
      res.status(404).json({
        message: "User not found, working",
        success: false,
      });
      return;
    }
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).json({
      message: "user deleted",
      success: true,
      deletedUser: deletedUser,
    });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: error.message, success: false, why: "idk" });
  }
};

//add user -(same as register?)
// const addUserProfile = async (req: Request, res: Response): Promise<void> => {

// };

//just a test route
const userBasic = async (req: Request, res: Response): Promise<void> => {
  res.send("userBasic");
};

export {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  userBasic,
  getAllUsers,
};
