import { Request, Response } from "express";
import Movie from "../models/Movie";
import Logger from "../../config/logger";

export const getAllMovies = async (req: Request, res: Response) => {
	try {
		const movies = await Movie.find();
		return res.status(200).json(movies);
	} catch (error) {
		Logger.error(`Error fetching movies: ${error}`);
		return res.status(500).json({ message: "Server Error", error });
	}
};

export const getMovieById = async (req: Request, res: Response) => {
	try {
		const movie = await Movie.findById(req.params.id);
		if (!movie) {
			return res.status(404).json({ message: "Movie not found" });
		}
		return res.status(200).json(movie);
	} catch (error) {
		Logger.error(`Error fetching movie by ID: ${error}`);
		return res.status(500).json({ message: "Server Error", error });
	}
};

export const createMovie = async (req: Request, res: Response) => {
	try {
		const newMovie = new Movie(req.body);
		const savedMovie = await newMovie.save();
		return res.status(201).json(savedMovie);
	} catch (error) {
		Logger.error(`Error creating movie: ${error}`);
		return res.status(500).json({ message: "Server Error", error });
	}
};

export const updateMovie = async (req: Request, res: Response) => {
	try {
		const updatedMovie = await Movie.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true },
		);
		if (!updatedMovie) {
			return res.status(404).json({ message: "Movie not found" });
		}
		return res.status(200).json(updatedMovie);
	} catch (error) {
		Logger.error(`Error updating movie: ${error}`);
		return res.status(500).json({ message: "Server Error", error });
	}
};

export const deleteMovie = async (req: Request, res: Response) => {
	try {
		const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
		if (!deletedMovie) {
			return res.status(404).json({ message: "Movie not found" });
		}
		return res.status(200).json({ message: "Movie deleted successfully" });
	} catch (error) {
		Logger.error(`Error deleting movie: ${error}`);
		return res.status(500).json({ message: "Server Error", error });
	}
};
