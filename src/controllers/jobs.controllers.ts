// const getAllJobs = async (req, res) => {
//   try {
//   } catch (error) {}
// };

import { Request, Response } from "express";
import Jobs from "../models/jobs.models";

// export { getAllJobs };
export const getAllJobs = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allJobs = await Jobs.find();

    if (allJobs.length === 0) {
      res.status(404).json({ message: "No jobs found", success: false });
      return;
    }
    res.status(200).json({ jobs: allJobs, success: true });
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false });
  }
};

//add new job

export const addNewJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const { jobName, location, cost, completeBy, category } = req.body;
    if (!jobName || !location || !cost || !completeBy || !category) {
      res.status(400).json({ message: "all fields required", success: false });
      return;
    }

    const newJob = await Jobs.create({
      jobName,
      location,
      cost,
      completeBy,
      category,
    });

    res
      .status(201)
      .json({ message: "new job created", jobName: jobName, success: true });
  } catch (error) {}
};

//delete job
export const deleteJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    //add edge cases
    //wrong id
    //no job found
    const jobToDelete = await Jobs.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "job successfully deleted", jobDeleted: jobToDelete });
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false });
  }
};
//get job by id

export const getJobById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
  } catch (error: any) {
    const status500 = res
      .status(500)
      .json({ message: error.message, success: false });
  }
};

//update job

//
