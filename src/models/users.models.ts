import mongoose, { Document, Schema, Model } from "mongoose";
import { UserRole } from "../utils/types";

//creates a type for the user role

//declares the fields a USER will have
//IUser = interface of User
//export this to a user => admin, manager, contractor, customer
export interface IUser extends Document {
  name: {
    firstName: string;

    lastName: string;
  };
  password: string;
  emailPrimary: string;
  emailSecondary: string;
  phoneNumber: number;
  phoneNumberSecondary: number;
  role: UserRole;
  createdAt: Date;
  profilePic?: string;
}
//This interface helps TypeScript understand what properties a user document will have, so your code has proper type checking and autocomplete.

//This defines how the user data is stored in MongoDB.
//sets the MongoDB "rules" for each field i.e. User will be defined as a string by MONOGDB
const UserSchema: Schema<IUser> = new Schema({
  name: {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
  },
  password: { type: String, required: true },
  emailPrimary: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  emailSecondary: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  phoneNumberSecondary: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    enum: ["employee", "contractor", "customer", "admin"],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  profilePic: { type: String, default: "none" },
});

// creates the Mongoose model named "User" with the schema and TypeScript type IUser.
const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default User;
