import mongoose, { Document, Model, Schema } from "mongoose";
import { Category, JobStatus } from "../utils/types";

//this interface decares and sets the fields that the Job model will have
//sets the the name of the key and the type of value
//IJOBS = interface of jobs
interface IJobs extends Document {
  jobName: string;
  jobCost: number;
  createdAt: string;
  postedBy: string;
  jobLocation: string;
  jobDeadline: string;
  jobCategory: Category;
  jobBids: number;
  forCustomer: string; //create the customer model to place here
  jobDescription: string;
  jobNotes?: string;
  jobStatus: JobStatus;
}

//the schema for mongoose
export const JobsSchema: Schema<IJobs> = new Schema<IJobs>(
  {
    jobName: { type: String, required: true, trim: true, lowercase: true },
    jobCost: { type: Number, required: true },
    postedBy: {
      type: String,
      required: true,
    },
    jobLocation: { type: String, required: true, default: "city, state" },
    jobDeadline: { type: String, required: true },
    jobCategory: {
      type: String,
      enum: ["landscape", "plumbing", "electrician", "remodel"],
      required: true,
    },
    jobBids: {
      type: Number,
      default: 0,
    },
    forCustomer: {
      type: String,
      required: true,
      trim: true,
    },
    jobDescription: {
      type: String,
      required: true,
      trim: true,
    },
    jobNotes: {
      type: String,
      trim: true,
    },
    jobStatus: {
      type: String,
      enum: [
        "unassigned",
        "assigned",
        "on-progress",
        "complete: needs invoice",
        "complete: invoice sent",
        "completed: closed job",
      ],
      required: true,
    },
  },
  { timestamps: true }
);

const Jobs: Model<IJobs> = mongoose.model<IJobs>("Jobs", JobsSchema);

export default Jobs;
