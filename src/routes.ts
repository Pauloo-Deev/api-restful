import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieController";

const router = Router();

router
	.get("/", (req: Request, res: Response) => {
		res.send("Hello, World!");
	})
	.post("/createMovie", createMovie);

export default router;
