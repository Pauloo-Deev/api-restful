import mongoose from "mongoose";
import config from "./default";
import logger from "./logger";

async function connectDB() {
	try {
		await mongoose.connect(config.dbURI);
		logger.info("Connected to the database successfully");
	} catch (error) {
		logger.error(`Database connection error: ${error}`);
		process.exit(1);
	}
}

export default connectDB;
