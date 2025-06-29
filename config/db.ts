import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
  const connectionString = process.env.MONGODB_URI;

  if (!connectionString) {
    console.error(`MONGODB_URI is not defined in enviroment variables`);
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(connectionString);
    console.log(
      `MongoDB connected. Connected to database @ ${connectionString} and ${conn.connect.name}`
    );
  } catch (error) {
    console.error("MongoDB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
