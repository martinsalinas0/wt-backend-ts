import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";

dotenv.config();

const app = express();
const PORT: number = parseInt(process.env.PORT || "8000", 10);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/home", (_req: Request, res: Response) => {
  res.send("MAINPAGE, WORKTOGETHER");
});

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
