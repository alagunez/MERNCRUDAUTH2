import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/admin");
        console.log(">>> DB is connected");
    } catch (error) {
        console.log.apply(error);
    }
};