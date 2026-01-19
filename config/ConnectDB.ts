import mongoose from "mongoose";
import config from "./default";

async function connectDB() {
	try {
		await mongoose.connect(config.dbURI);
		console.log("Connected to the database successfully");
	} catch (error) {
		console.error("Database connection error:", error);
		process.exit(1);
	}
}

export default connectDB;
