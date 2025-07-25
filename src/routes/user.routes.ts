import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  userBasic,
  getAllUsers,
} from "../controllers/user.controllers";
import passport from "passport";
import { registerUser } from "../controllers/auth.controllers";

const router = express.Router();

//update user by id
router.get("/user/:id", getUserProfile);

///update user profile
router.put("/user/:id", updateUserProfile);

//delete user by id
router.delete("/user/:id", deleteUserProfile);

//get all users
router.get("/users", getAllUsers);

//add user
router.post("/user/new", registerUser);

//get user test
router.get("/user", userBasic);

// router.get(
//   "/user/:id",
//   passport.authenticate("jwt", { session: false }),
//   getUserProfile
// );
// router.put(
//   "/user/:id",
//   passport.authenticate("jwt", { session: false }),
//   updateUserProfile
// );

export { router as userRoutes };
