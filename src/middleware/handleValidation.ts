import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const handleValidation = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		const extractedErrors: { [key: string]: string }[] = [];
		errors.array().forEach((err: any) => {
			const field = err.path || err.param || "unknown";
			extractedErrors.push({ [field]: err.msg });
		});

		return res.status(422).json({
			errors: extractedErrors,
		});
	}
	next();
};

export default handleValidation;
