import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
    {
        try {
            const connect = await mongoose.connect(process.env.MONGODB_URI);
            console.log(`MongoDB Connected: ${connect.connection.host}`);
        }
        catch (error) {
            console.error(`error: ${error.message}`);
            process.exit(1);
        }
    }
};
export default connectDB;
//# sourceMappingURL=db.js.map