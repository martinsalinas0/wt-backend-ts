import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controllers";
import passport from "passport";

const router = express.Router();

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);

export { router as authRoutes };
