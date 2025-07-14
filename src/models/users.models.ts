import mongoose, { Document, Schema, Model } from "mongoose";

//declares the fields a USER will have
//IUser = interface of User
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "contractor" | "sub-cee";
  createdAt: Date;
  profilePic?: string;
  rating: Number;
}
//This interface helps TypeScript understand what properties a user document will have, so your code has proper type checking and autocomplete.

//This defines how the user data is stored in MongoDB.
//sets the MongoDB "rules" for each field i.e. User will be defined as a string by MONOGDB
const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { type: String, required: true },

  role: { type: String, enum: ["contractor", "sub-cee"], required: true },
  createdAt: { type: Date, default: Date.now },
  profilePic: { type: String, default: "none" },
  rating: { type: Number, default: null },
});

// creates the Mongoose model named "User" with the schema and TypeScript type IUser.
const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default User;
