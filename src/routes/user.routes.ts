import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  addUserProfile,
  userBasic,
  getAllUsers,
} from "../controllers/user.controllers";
import passport from "passport";

const router = express.Router();

router.get("/user/:id", getUserProfile);
router.put("/user/:id", updateUserProfile);
router.delete("user/:id", deleteUserProfile);
router.post("user/:id", addUserProfile);
router.get("/user", userBasic);
router.get("/users", getAllUsers);

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
