require("dotenv").config();

import connectDB from "../config/ConnectDB";
import routes from "./routes";
import express from "express";
import config from "config";

const port = config.get<number>("port");
const app = express();

app.use(express.json());

app.use("/", routes);

app.listen(port, async () => {
	await connectDB();
	console.log(`Server is running on port ${port}`);
});
