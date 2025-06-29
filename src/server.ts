import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

const PORT: number = parseInt(process.env.PORT || "8000", 10);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.get("/api/home", (_req: Request, res: Response) => {
  res.send("MAINPAGE, WORKTOGETHER");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
