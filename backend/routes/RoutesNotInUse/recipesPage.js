const express = require("express")
const app = express.Router()
var router = express.Router();

const pool = require('../db')
const path = require('path')
const fs = require('fs');
const { json } = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());


router.get('/recipes', function (req, res) {
	con.query("SELECT * FROM recipes", function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

router.post('/recipes', async (req, res) => {
	const recipe = req.body.recipe;
	const recipeName = req.body.recipeName;
	const ingredientList = req.body.ingredientList;
	const recipeCreator = req.body.recipeCreator;
	const recipePhoto = req.body.recipiePhoto;
	const recipeDesc = req.body.recipeDesc;
	const recipeIndc = req.body.recipeIndc;
	const hyperlink = req.body.hyperlink;
	const userID = req.body.userID;

	con.query("INSERT INTO recipes (recipe, recipeName, ingredientList, recipeCreator, recipePhoto, recipeDesc, recipeIndc, hyperlink, userID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
		[recipe, recipeName, ingredientList, recipeCreator, recipePhoto, recipeDesc, recipeIndc, hyperlink, userID],
		function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result)); // Result in JSON format
		});
});

router.get('/recipes/:recipeID', function (req, res) {
	var recipeID = req.param('recipeID')
	con.query("SELECT * FROM recipes WHERE recipeID = ?", recipeID, function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

// Update Recipe
router.put('/recipes/:recipeID/updateRecipe', async (req, res) => {
	var recipeID = req.param('recipeID')
	var recipeNew = req.param('recipeNew')

	con.query("UPDATE recipes SET recipe = ? WHERE recipeID = ?",
		[recipeNew, recipeID], function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result)); // Result in JSON format
		});
});

router.put('/recipes/:recipeID/updateRecipeName', async (req, res) => {
	var recipeID = req.param('recipeID')
	var recipeNameNew = req.param('recipeNameNew')

	con.query("UPDATE recipes SET recipeName = ? WHERE recipeID = ?",
		[recipeNameNew, recipeID], function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result)); // Result in JSON format
		});
});
router.put('/recipes/:recipeID/updateIngredientList', async (req, res) => {
	var recipeID = req.param('recipeID')
	var ingredientListNew = req.param('ingredientListNew')

	con.query("UPDATE recipes SET ingredientList = ? WHERE recipeID = ?",
		[ingredientListNew, recipeID], function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result)); // Result in JSON format
		});
});
router.put('/recipes/:recipeID/updateRecipeCreator', async (req, res) => {
	var recipeID = req.param('recipeID')
	var recipeCreatorNew = req.param('recipeCreatorNew')

	con.query("UPDATE recipes SET recipeCreator = ? WHERE recipeID = ?",
		[recipeCreatorNew, recipeID], function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result)); // Result in JSON format
		});
});
router.put('/recipes/:recipeID/updatePhotoName', async (req, res) => {
	var recipeID = req.param('recipeID')
	var recipePhotoNew = req.param('recipePhotoNew')

	con.query("UPDATE recipes SET recipePhoto = ? WHERE recipeID = ?",
		[recipePhotoNew, recipeID], function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result)); // Result in JSON format
		});
});
router.put('/recipes/:recipeID/updateRecipeDesc', async (req, res) => {
	var recipeID = req.param('recipeID')
	var recipeDescNew = req.param('recipeDescNew')

	con.query("UPDATE recipes SET recipeDesc = ? WHERE recipeID = ?",
		[recipeDescNew, recipeID], function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result)); // Result in JSON format
		});
});
router.put('/recipes/:recipeID/updateRecipeIndc', async (req, res) => {
	var recipeID = req.param('recipeID')
	var recipeIndcNew = req.param('recipeIndcNew')

	con.query("UPDATE recipes SET recipeIndc = ? WHERE recipeID = ?",
		[recipeIndcNew, recipeID], function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result)); // Result in JSON format
		});
});
router.put('/recipes/:recipeID/updateHyperlink', async (req, res) => {
	var recipeID = req.param('recipeID')
	var hyperlinkNew = req.param('hyperlinkNew')

	con.query("UPDATE recipes SET hyperlink = ? WHERE recipeID = ?",
		[hyperlinkNew, recipeID], function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result)); // Result in JSON format
		});
});
router.put('/recipes/:recipeID/updateVideoTitle', async (req, res) => {
	var recipeID = req.param('recipeID')
	var videoTitleNew = req.param('videoTitleNew')

	con.query("UPDATE recipes SET videoTitle = ? WHERE recipeID = ?",
		[videoTitleNew, recipeID], function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result)); // Result in JSON format
		});
});
router.put('/recipes/recipeID/updatePostID', async (req, res) => {
	var recipeID = req.param('recipeID')
	var postIDNew = req.param('postIDNew')

	con.query("UPDATE recipes SET postID = ? WHERE recipeID = ?",
		[postIDNew, recipeID], function (err, result, fields) {
			if (err) throw err;
			res.end(JSON.stringify(result)); // Result in JSON format
		});
});
router.delete('/recipes/:recipeID', async (req, res) => {
	var recipeID = req.param('recipeID')

	con.query("DELETE FROM recipes WHERE recipeID = ? ", recipeID, function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result));
	});
});
router.get('/recipes/userID', function (req, res) {
	var userID = req.param('userID')
	con.query("SELECT * FROM recipes WHERE userID = ?", userID, function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});
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
});
router.get('/recipes/:userID/:recipeID', function (req, res) {
	var userID = req.param('userID')
	var recipeID = req.param('recipeID')
	con.query("SELECT * FROM recipes WHERE userID = ? AND recipeID = ?", [userID, recipeID], function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});
router.delete('/recipes/:userID/:recipeID', function (req, res) {
	var userID = req.param('userID')
	var recipeID = req.param('recipeID')

	con.query("DELETE FROM recipes WHERE userID = ? AND recipeID = ? ", [userID, recipeID], function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result));
	});
});

module.exports = router;