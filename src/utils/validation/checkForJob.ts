import { Types } from "mongoose";
import Jobs from "../../models/jobs.models";

export const checkForJobById = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new Error("Invalid job ID");
  }
  const job = await Jobs.findById(id);

  if (!job) {
    throw new Error("Job does not exist");
  }

  return job;
};
