// const getAllJobs = async (req, res) => {
//   try {
//   } catch (error) {}
// };

import { Request, Response } from "express";
import Jobs from "../models/jobs.models";
import { isValidObjectId } from "mongoose";
import validateJob from "../utils/validation/validateJob";

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
    // Validate incoming job data
    const errors = validateJob(req.body);

    // If there are validation errors, respond with 400 and errors
    if (errors.length > 0) {
      res.status(400).json({ message: errors, success: false });
      return;
    }

    // Destructure fields after validation passes
    const {
      jobName,
      jobCost,
      postedBy,
      jobLocation,
      jobDeadline,
      jobCategory,
      jobBids,
      forCustomer,
      jobDescription,
      jobNotes,
    } = req.body;

    // Create the new job entry in the database
    const newJob = await Jobs.create({
      jobName,
      jobCost,
      postedBy,
      jobLocation,
      jobDeadline,
      jobCategory,
      jobBids,
      forCustomer,
      jobDescription,
      jobNotes,
    });

    // Respond with success and job info
    res.status(201).json({
      message: "New Job Created",
      job: newJob,
      success: true,
    });
  } catch (error: any) {
    // Handle unexpected errors
    res.status(500).json({ message: error.message, success: false });
  }
};

//delete job
export const deleteJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Job ID is required", success: false });
      return;
    }

    if (!isValidObjectId(id)) {
      res
        .status(400)
        .json({ message: "Invalid Job ID format", success: false });
      return;
    }

    const jobToDelete = await Jobs.findByIdAndDelete(id);

    if (!jobToDelete) {
      res.status(404).json({ message: "Job not found", success: false });
      return;
    }

    res.status(200).json({
      message: "Job successfully deleted",
      success: true,
      jobDeleted: jobToDelete,
    });
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

export const updateJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
  } catch (error: any) {
    res.status(500).json({ message: error.message, succeess: false });
  }
};

//
