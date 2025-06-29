import express from "express";
import { getAllJobs } from "../controllers/jobs.controllers";

const router = express.Router();

//route is "api/jobs/----"

router.get("/all", getAllJobs);
