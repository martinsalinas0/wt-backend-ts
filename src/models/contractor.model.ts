import mongoose, { Document, mongo, Schema } from "mongoose";
import { IUser } from "./users.models";

type Review = {
  userId: mongoose.Types.ObjectId;
  userName: string;
  paragraph: string;
  comments: string;
  rating: number;
};

type Reviews = Review[];

export interface IContractor extends Document {
  userInfo: IUser | mongoose.Types.ObjectId;
  averageRating: number;
  reviews: Reviews;
}

const contractorSchema: Schema<IContractor> = new Schema({
  userInfo: {},
});
