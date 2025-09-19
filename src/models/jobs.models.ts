import mongoose, { Document, Model, Schema } from "mongoose";
import { Category, JobStatus } from "../utils/types";

//this interface decares and sets the fields that the Job model will have
//sets the the name of the key and the type of value
//IJOBS = interface of jobs
interface IJob extends Document {
  jobName: string;
  jobCost: number;
  postedBy: string;
  jobLocation: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  jobDeadline: string;
  jobCategory: Category;
  jobBids: number;
  forCustomer: string; //create the customer model to place here
  jobDescription: string;
  jobNotes?: string;
  jobStatus: JobStatus;
  jobComplete: boolean;
}

//the schema for mongoose
export const JobSchema: Schema<IJob> = new Schema<IJob>(
  {
    jobName: { type: String, required: true, trim: true, lowercase: true },
    jobCost: { type: Number, required: true },
    postedBy: {
      type: String,
      required: true,
    },
    jobLocation: {
      city: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zipcode: {
        type: String,
        required: true,
      },
    },
    jobDeadline: { type: String, required: true },
    jobCategory: {
      type: String,
      enum: ["landscape", "plumbing", "electrical", "remodel", "other"],
      required: true,
      default: "other",
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
      default: "unassigned",
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
    jobComplete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Job: Model<IJob> = mongoose.model<IJob>("Job", JobSchema);

export default Job;
