import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
  {
    try {
      const connect = await mongoose.connect(process.env.MONGODB_URI!);
      console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch (error: any) {
      console.error(`error: ${error.message}`);
      process.exit(1);
    }
  }
};

export default connectDB;
