import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = process.env.MONGO_URI;
    if (!MONGO_URI) throw new Error("MONGO_URI is not set");
    const conn = await mongoose.connect(MONGO_URI);
    console.log("MONGODB Connected:", conn.connection.host);
  } catch (error) {
    console.error("Error Connecting to DB", error);
    process.exit(1); //1 -fail, 0-success
  }
};
