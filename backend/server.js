require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');
// const mysqlConnect = require('./db');
const routes = require('./routes');

// set up some configs for express.
const config = {
  name: 'sample-express-app',
  port: 8000,
  host: '0.0.0.0',
};

// create the express.js object
const app = express();

// create a logger object.  Using logger is preferable to simply writing to the console.
const logger = log({ console: true, file: false, label: config.name });

// specify middleware to use
app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.use(ExpressAPILogMiddleware(logger, { request: true }));

//include routes
routes(app, logger);

// connecting the express object to listen on a particular port as defined in the config object.
app.listen(config.port, config.host, (e) => {
  if (e) {
    throw new Error('Internal Server Error');
  }
  logger.info(`${config.name} running on ${config.host}:${config.port}`);
});

// Get all users
router.get('/users', function (req, res) {
  con.query("SELECT * FROM users", function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Add a new user
router.post('/users', async (req, res) => {
  var userName = req.body.userName
  var userPass = req.body.userPass
  var userBio = req.body.userBio
  var userEmail = req.body.userEmail
  var userPhoto = req.body.userPhoto
  var favRecipe = req.body.favRecipe
  var history = req.body.history
  
  con.query("INSERT INTO users (userName, userPass, userBio, userEmail, userPhoto, favRecipe, history) VALUES (?, ?, ?, ?, ?, ?, ?)", 
  [userName, userPass, userBio, userEmail, userPhoto, favRecipe, history], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Get a user with a specific ID
router.get('/users/:userID', function (req, res) {
var userID = req.param('userID')
con.query("SELECT * FROM users WHERE userID = ?", userID, function (err, result, fields) {
  if (err) throw err;
  res.end(JSON.stringify(result)); // Result in JSON format
});
});
// Delete a user from the database
router.delete('/users/:userID', async (req, res) => {
  var userID = req.body.userID
  
  con.query("DELETE FROM users WHERE userID = ? ", userID,function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); 
  });
});


// Get all recipes
router.get('/recipes', function (req, res) {
  con.query("SELECT * FROM recipes", function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Add a new recipe
router.post('/recipes', async (req, res) => {
  var recipe = req.body.recipe
  var recipeName = req.body.recipeName
  var ingredientList = req.body.ingredientList
  var recipeCreator = req.body.recipeCreator
  var recipePhoto = req.body.recipiePhoto
  var recipeDesc = req.body.recipeDesc
  var recipeIndc = req.body.recipeIndc
  var hyperlink = req.body.hyperlink
  var userID = req.body.userID
  
  con.query("INSERT INTO recipes (recipe, recipeName, ingredientList, recipeCreator, recipePhoto, recipeDesc, recipeIndc, hyperlink, userID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", 
      [recipe, recipeName, ingredientList, recipeCreator, recipePhoto, recipeDesc, recipeIndc, hyperlink, userID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Get a recipe with a specific recipeID
router.get('/recipes/recipeID', function (req, res) {
var recipeID = req.param('recipeID')
con.query("SELECT * FROM recipes WHERE recipeID = ?", recipeID, function (err, result, fields) {
  if (err) throw err;
  res.end(JSON.stringify(result)); // Result in JSON format
});
});
// Delete a recipe with a specific recipeID
router.delete('/recipes/recipeID', async (req, res) => {
  var recipeID = req.body.recipeID
  
  con.query("DELETE FROM recipes WHERE recipeID = ? ", recipeID,function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); 
  });
});
// Get a recipe from a specific user
router.get('/recipes/userID', function (req, res) {
var userID = req.param('userID')
con.query("SELECT * FROM recipes WHERE userID = ?", userID, function (err, result, fields) {
  if (err) throw err;
  res.end(JSON.stringify(result)); // Result in JSON format
});
});
/// Add a recipe under a userID
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

// New Shit
// Get a recipe from a specific user with a specific recipe ID
router.get('/recipes/userID/recipeID', function (req, res) {
	var userID = req.param('userID')
    var recipeID = req.param('recipeID')
	con.query("SELECT * FROM recipes WHERE userID = ? AND recipeID = ?", [userID, recipeID], function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});
//Delete a recipe from a specific user
router.delete('/recipes/userID/recipeID', function (req, res) {
  var userID = req.body.userID
  var recipeID = req.body.recipeID

  con.query("DELETE FROM recipes WHERE userID = ? AND recipeID = ? ", [userID, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); 
  });
});