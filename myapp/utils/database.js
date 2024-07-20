import mongoose from "mongoose";

export const connectDb = async () => {
  try {
   await mongoose.connect(
      "mongodb://127.0.0.1/nextApiRoute"
    );
    console.log(`Database Connected !!`);
  } catch (error) {
    console.log("Error from databse.js ", error);
  }
};
