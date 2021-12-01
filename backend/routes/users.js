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

	console.log(newUserName);

	pool.query("INSERT INTO users (userName, userPass, userEmail) VALUES (?, ?, ?)", [newUserName, newUserPass, newUserEmail],
		function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result)); // Result in JSON format
		});
});



//POST
// Login with username password
router.post('/login', (req, res) => {
		pool.query(`SELECT * FROM users where userName = "${req.body.username}"`,
			function (err, result, fields) {
			if (result[0].userPass == req.body.password) {
				res.send({status: true, account: result[0]});
			} else {
				res.send({ status: false });
			}
		});
	
});


//GET
//Return all recipe information
router.get('/recipes/', async (req, res) => {
		pool.query(`SELECT * FROM recipes`,
			function (err, result, fields) {
			res.send(result);
		});
});


//GET
//Return recipe from recipe id
router.get('/recipes/:recipeId', async (req, res) => {
	
		pool.query(`SELECT * FROM recipes where recipeID = "${req.params.recipeId}"`,
			function (err, result, fields) {
				res.send(result);
		});
	
});


//POST
//Insert a recipe by userID
router.post('/recipes', async (req, res) => {
	var recipe = req.body.recipe
	var recipeName = req.body.recipeName
	var ingredientList = req.body.ingredientList
	var recipeCreator = req.body.recipeCreator
	var recipePhoto = req.body.recipePhoto
	var recipeDesc = req.body.recipeDesc
	var recipeIndc = req.body.recipeIndc
	var hyperlink = req.body.hyperlink
	var videoTitle = req.body.videoTitle
	var flagPublicPrivate  = req.body.flagPublicPrivate
	var userID = req.body.userID

	pool.query("INSERT INTO recipes (recipe, recipeName, ingredientList, recipeCreator, recipePhoto, recipeDesc, recipeIndc, hyperlink, videoTitle, flagPublicPrivate, userID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
		[recipe, recipeName, ingredientList, recipeCreator, recipePhoto, recipeDesc, recipeIndc, hyperlink, videoTitle, flagPublicPrivate, userID], function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result)); // Result in JSON format
		});
});






module.exports = router;