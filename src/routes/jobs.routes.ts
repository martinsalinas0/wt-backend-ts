import express from "express";
import {
  addNewJob,
  deleteJob,
  getAllJobs,
  getJobById,
  updateJobById,
} from "../controllers/jobs.controllers";

const router = express.Router();

//route is "api/jobs/----"

router.get("/all", getAllJobs);
router.post("/new", addNewJob);
router.delete("/delete/:id", deleteJob);
router.get("/:id", getJobById);
router.put("/:id", updateJobById);

export { router as jobsRoutes };
