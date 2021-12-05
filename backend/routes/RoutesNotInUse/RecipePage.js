const express = require('express');
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());


app.get('/', (req, res) => {
	res.send('HELLO WORLD!');
});

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//Connect to MySQL
var mysql = require('mysql');

//Connect to MySQL
var con = mysql.createConnection({
	host: "mysqldockerexample-mysql-1",
	port: "3306",
	user: "exampleuser",
	password: "password",
	database: "classicmodels"
});

//Open Connection
con.connect(function (err) {
	if (err) throw err;
});

// create router
var router = express.Router();

// middleware to use for all requests
router.use(function (req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// REGISTER  ROUTES
app.use('/recipePage', router);

//GET RECIPE BY NAME
router.get('/view/:reciName', function (req, res) {
	con.query("SELECT * FROM recipes WHERE recipeName = ?", req.param('reciName'), function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});