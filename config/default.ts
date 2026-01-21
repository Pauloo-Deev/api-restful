export default {
	port: 3000,
	dbURI: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tz1l7xh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
	env: "development",
};
