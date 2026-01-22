import { body } from "express-validator";

const movieValidation = [
	body("title")
		.isString()
		.withMessage("Title must be a string")
		.notEmpty()
		.withMessage("Title is required"),
	body("rating")
		.isFloat({ min: 0, max: 10 })
		.withMessage("Rating must be a number between 0 and 10")
		.notEmpty()
		.withMessage("Rating is required"),
	body("description")
		.isString()
		.withMessage("Description must be a string")
		.notEmpty()
		.withMessage("Description is required"),
	body("director")
		.isString()
		.withMessage("Director must be a string")
		.notEmpty()
		.withMessage("Director is required"),
	body("stars")
		.isArray({ min: 1 })
		.withMessage("Stars must be an array with at least one star")
		.custom((arr) => arr.every((star: any) => typeof star === "string"))
		.withMessage("Each star must be a string"),
	body("poster")
		.isString()
		.withMessage("Poster must be a string")
		.notEmpty()
		.withMessage("Poster is required"),
];

export default movieValidation;
