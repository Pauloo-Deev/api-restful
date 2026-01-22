import {
	createMovie,
	getAllMovies,
	getMovieById,
	updateMovie,
	deleteMovie,
} from "./controllers/movieController";
import movieValidation from "./middleware/movieValidation";
import validate from "./middleware/handleValidation";
import { Router, Request, Response } from "express";

const router = Router();

router
	.get("/", (req: Request, res: Response) => {
		res.send("Hello, World!");
	})
	.post("/createMovie", movieValidation, validate, createMovie)
	.get("/movies", getAllMovies)
	.get("/movie/:id", getMovieById)
	.patch("/movie/:id", movieValidation, validate, updateMovie)
	.delete("/movie/:id", deleteMovie);

export default router;
