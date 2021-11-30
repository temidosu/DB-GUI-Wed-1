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

//POST
// Create new user
router.post('/register', async (req, res) => {
	const newUserName = req.body.userName;
	const newUserPass = req.body.userPass;
	const newUserEmail = req.body.userEmail;

	console.log(newUserName);

	pool.query("INSERT INTO users (userName, userPass, userEmail) VALUES (?, ?, ?)", [newUserName, newUserPass, newUserEmail],
		function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result)); // Result in JSON format
		});
});


// Login
router.get('/login', (req, res) => {
	pool.query(`SELECT * FROM users where userName = "${req.body.username}"`,
		function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result));
		});
});

module.exports = router;