const pool = require('./db')
const path = require('path')
const fs = require('fs');
const { json } = require('body-parser');

const initRoutes = require('./routes/initRoutes');
const projectsRoutes = require('./routes/projectsRoutes');
const reviewsRoutes = require('./routes/reviewsRoutes');
const typeRoutes = require('./routes/typeRoutes');
const login = require('./routes/login');
const signup = require('./routes/signup');

const profileRoutes = require('./routes/profileRoutes');


module.exports = function routes(app, logger) {
	// GET /
	app.get('/', (req, res) => {
		res.status(200).send('Go to 0.0.0.0:3000.');
	});

	// app.get('/users', function (req, res) {
	// 	console.log("H");
	// 	con.query("SELECT * FROM users", function (err, result, fields) {
	// 		if (err) throw err;
	// 		res.end(JSON.stringify(result)); // Result in JSON format
	// 	});
	// });

	// app.use("/api", signup);

	app.use("/api/", projectsRoutes);
	app.use("/api/", reviewsRoutes);
	app.use("/api", login);
	//app.use("/api/",typeRoutes);
}