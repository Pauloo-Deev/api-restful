require("dotenv").config();

import morganMiddleware from "./middleware/morganMiddleware";
import connectDB from "../config/ConnectDB";
import logger from "../config/logger";
import routes from "./routes";
import express from "express";
import config from "config";

const port = config.get<number>("port");
const app = express();

app.use(express.json());

app.use(morganMiddleware);
app.use("/", routes);

app.listen(port, async () => {
	await connectDB();
	logger.info(`Server is running on port ${port}`);
});
