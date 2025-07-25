import mongoose, { Document, Model, Schema } from "mongoose";
import { Category } from "../utils/types";
//declares what fields JOBS  will have
//IJOBS = interface of jobs
interface IJobs extends Document {
  jobName: string;
  jobCost: number;
  createdAt?: Date;
  postedBy?: "contractor" | "sub-contractor";
  jobLocation: String;
  jobCompleteByDate: String;
  jobCategory: Category;
  jobBids?: Number;
}

//the schema for mongoose
export const JobsSchema: Schema<IJobs> = new Schema<IJobs>(
  {
    jobName: { type: String, required: true, trim: true, lowercase: true },
    jobCost: { type: Number, required: true },
    postedBy: {
      type: String,
      enum: ["contractor", "customer"],
    },
    jobLocation: { type: String, required: true, default: "city, state" },
    jobCompleteByDate: { type: String, required: true },
    jobCategory: {
      type: String,
      enum: ["landscape", "plumbing", "electrician"],
      required: true,
    },
    jobBids: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Jobs: Model<IJobs> = mongoose.model<IJobs>("Jobs", JobsSchema);

export default Jobs;
