import express from "express";
import {
  addNewJob,
  deleteJob,
  getAllJobs,
} from "../controllers/jobs.controllers";

const router = express.Router();

//route is "api/jobs/----"

router.get("/all", getAllJobs);
router.post("/new", addNewJob);
router.delete("/delete/:id", deleteJob);

export { router as jobsRoutes };
