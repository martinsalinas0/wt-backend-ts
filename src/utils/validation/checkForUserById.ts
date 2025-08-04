import { Types } from "mongoose";
import User from "../models/users.models";

export const checkForUser = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new Error("Invalid user ID");
  }

  const user = await User.findById(id).select("-password");

  if (!user) {
    throw new Error("User does not exist");
  }

  return user;
};
