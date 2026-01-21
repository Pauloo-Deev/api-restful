import { model, Schema } from "mongoose";

const movieSchema = new Schema(
	{
		title: { type: String, required: true },
		rating: { type: Number, required: true },
		description: { type: String, required: true },
		director: { type: String, required: true },
		stars: { type: [String], required: true },
		poster: { type: String, required: true },
	},
	{ timestamps: true },
);

const Movie = model("Movie", movieSchema);

export default Movie;
