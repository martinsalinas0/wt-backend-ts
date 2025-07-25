import express from "express";
import { addNewJob, getAllJobs } from "../controllers/jobs.controllers";

const router = express.Router();

//route is "api/jobs/----"

router.get("/all", getAllJobs);
router.post("/new", addNewJob);

export { router as jobsRoutes };
