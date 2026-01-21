import morgan, { StreamOptions } from "morgan";
import logger from "../../config/logger";
import config from "config";

const colorStatus = (status: number): string => {
	if (status >= 500) return "\x1b[31m";
	if (status >= 400) return "\x1b[31m";
	if (status >= 300) return "\x1b[33m";
	return "\x1b[32m";
};

const resetColor = "\x1b[0m";

morgan.token("colored-status", (_req, res) => {
	const status = res.statusCode;
	return `${colorStatus(status)}${status}${resetColor}`;
});

const stream: StreamOptions = {
	write: (message) => logger.http(message.trim()),
};

const skip = () => {
	const env = config.get<string>("env") || "development";
	return env !== "development";
};

const morganMiddleware = morgan(
	":method :url :colored-status :res[content-length] - :response-time ms",
	{ stream, skip },
);

export default morganMiddleware;
