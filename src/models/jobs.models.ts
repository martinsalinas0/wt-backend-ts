import mongoose, { Document, Model, Schema } from "mongoose";
import { Category } from "../utils/types";
//declares what fields JOBS  will have
//IJOBS = interface of jobs
interface IJobs extends Document {
  jobName: string;
  cost: number;
  createdAt?: Date;
  postedBy: "contractor" | "subcon";
  location: String;
  completeBy: String;
  category: Category;
}

//the schema for mongoose
const JobsSchema: Schema<IJobs> = new Schema<IJobs>(
  {
    jobName: { type: String, required: true, trim: true, lowercase: true },
    cost: { type: Number, required: true },
    postedBy: { type: String, enum: ["contractor", "subcon"], required: true },
    location: { type: String, required: true },
    completeBy: { type: String, required: true },
    category: {
      type: String,
      enum: ["landscape", "plumbing", "electrician"],
      required: true,
    },
  },
  { timestamps: true }
);

const Jobs: Model<IJobs> = mongoose.model<IJobs>("Jobs", JobsSchema);

export default Jobs;
