const pool = require('../db')
var express = require('express');
var router = express.Router();

//Signup

//GET
router.get('/users', function (req, res) {
	pool.query("SELECT * FROM users", function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

// GetUser
router.get('/user/:userID', function (req, res) {
	pool.query(`SELECT * FROM users WHERE userID = "${req.params.userID}"`,
		function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result));
		});
});

//POST
// Create new user
router.post('/register', async (req, res) => {
	const newUserName = req.body.userName;
	const newUserPass = req.body.userPass;
	const newUserEmail = req.body.userEmail;

	pool.query("INSERT INTO users (userName, userPass, userEmail) VALUES (?, ?, ?)", [newUserName, newUserPass, newUserEmail],
		function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result)); // Result in JSON format
		});
});

router.post('/login', (req, res) => {
	pool.query(`SELECT * FROM users where userName = "${req.body.username}"`,
		function (err, result, fields) {
			if (result[0].userPass == req.body.password) {
				res.send({ status: true, account: result[0] });
			} else {
				res.send({ status: false });
			}
		});

});

router.get('/recipes/', async (req, res) => {
	pool.query(`SELECT * FROM recipes`,
		function (err, result, fields) {
			res.send(result);
		});
});


router.get('/recipes/:recipeId', async (req, res) => {

	pool.query(`SELECT * FROM recipes where recipeID = "${req.params.recipeId}"`,
		function (err, result, fields) {
			res.send(result);
		});

});





module.exports = router;