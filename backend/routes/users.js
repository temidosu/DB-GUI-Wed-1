const pool = require('../db')
var express = require('express');
var router = express.Router();

//Signup

//GET Users
router.get('/users', function (req, res) {
	pool.query("SELECT * FROM users", function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

<<<<<<< HEAD
// GetUser
router.get('/user/:userID', function (req, res) {
	pool.query(`SELECT * FROM users WHERE userID = "${req.params.userID}"`,
		function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result));
		});
});


=======
>>>>>>> 1b2241bd49ff033dfffd9466b5490f02cca905a6
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



<<<<<<< HEAD
//POST
// Login with username password
=======

>>>>>>> 1b2241bd49ff033dfffd9466b5490f02cca905a6
router.post('/login', (req, res) => {
		pool.query(`SELECT * FROM users where userName = "${req.body.username}"`,
			function (err, result, fields) {
			if (result[0].userPass == req.body.password) {
				res.send({status: true, account: result[0]});
			} else {
				res.send({ status: false });
			}
		});
	
<<<<<<< HEAD
=======
});

router.get('/recipes/', async (req, res) => {
		pool.query(`SELECT * FROM recipes`,
			function (err, result, fields) {
			res.send(result);
		});
>>>>>>> 1b2241bd49ff033dfffd9466b5490f02cca905a6
});


//GET
//Return all recipe information
router.get('/recipes/', async (req, res) => {
<<<<<<< HEAD
		pool.query(`SELECT * FROM recipes`,
			function (err, result, fields) {
			res.send(result);
		});
=======
	pool.query(`SELECT * FROM recipes`,
		function (err, result, fields) {
		res.send(result);
	});
>>>>>>> 1b2241bd49ff033dfffd9466b5490f02cca905a6
});


//GET
//Return recipe from recipe id
router.get('/recipes/:recipeId', async (req, res) => {
	
		pool.query(`SELECT * FROM recipes where recipeID = "${req.params.recipeId}"`,
			function (err, result, fields) {
				res.send(result);
		});
	
<<<<<<< HEAD
});


//POST
//Insert a recipe by userID
router.post('/recipes/:userID', async (req, res) => {
	var recipe = req.body.recipe
	var recipeName = req.body.recipeName
	var ingredientList = req.body.ingredientList
	var recipeCreator = req.body.recipeCreator
	var recipePhoto = req.body.recipePhoto
	var recipeDesc = req.body.recipeDesc
	var recipeIndc = req.body.recipeIndc
	var hyperlink = req.body.hyperlink
	var userID = req.param('userID')

	con.query("INSERT INTO recipes (recipe, recipeName, ingredientList, recipeCreator, recipePhoto, recipeDesc, recipeIndc, hyperlink, userID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
		[recipe, recipeName, ingredientList, recipeCreator, recipePhoto, recipeDesc, recipeIndc, hyperlink, userID], function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result)); // Result in JSON format
		});
=======
>>>>>>> 1b2241bd49ff033dfffd9466b5490f02cca905a6
});






module.exports = router;