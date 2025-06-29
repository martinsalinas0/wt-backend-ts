import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import passport from "./config/passport";

dotenv.config();

const app = express();
app.use(passport.initialize());

const PORT: number = parseInt(process.env.PORT || "8000", 10);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/home", (_req: Request, res: Response) => {
  res.send("MAINPAGE, WORKTOGETHER");
});

import { authRoutes } from "../src/routes/auth.routes";
import { userRoutes } from "./routes/user.routes";

app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);

const serverConnect = async (): Promise<void> => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to DB:", error);
    process.exit(1);
  }
};

serverConnect();

export default app;
