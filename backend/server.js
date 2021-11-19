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
// Update a user's username
router.put('/users/userID/updateUsername', async (req, res) => {
  var userID = req.param('userID')
  var userNameNew = req.param('userNameNew')

  con.query("UPDATE users SET userName = ? WHERE userID = ?", 
  [userNameNew,userID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a user's password
router.put('/users/userID/updatePassword', async (req, res) => {
  var userID = req.param('userID')
  var userPassNew = req.param('userPassNew')

  con.query("UPDATE users SET userPass = ? WHERE userID = ?", 
  [userPassNew,userID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a user's bio
router.put('/users/userID/updateBio', async (req, res) => {
  var userID = req.param('userID')
  var userBioNew = req.param('userBioNew')

  con.query("UPDATE users SET userBio = ? WHERE userID = ?", 
  [userBioNew,userID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a user's email address
router.put('/users/userID/updateEmail', async (req, res) => {
  var userID = req.param('userID')
  var userEmailNew = req.param('userEmailNew')

  con.query("UPDATE users SET userEmail = ? WHERE userID = ?", 
  [userEmailNew,userID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a user's photo
router.put('/users/userID/updatePhoto', async (req, res) => {
  var userID = req.param('userID')
  var userPhotoNew = req.param('userPhotoNew')

  con.query("UPDATE users SET userPhoto = ? WHERE userID = ?", 
  [userPhotoNew,userID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a user's favorite recipe
router.put('/users/userID/updateFavRecipe', async (req, res) => {
  var userID = req.param('userID')
  var favRecipeNew = req.param('favRecipeNew')

  con.query("UPDATE users SET favRecipe = ? WHERE userID = ?", 
  [favRecipeNew,userID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a user's history
router.put('/users/userID/updateHistory', async (req, res) => {
  var userID = req.param('userID')
  var historyNew = req.param('historyNew')

  con.query("UPDATE users SET history = ? WHERE userID = ?", 
  [historyNew,userID],function (err, result, fields) {
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
// Update a recipe
router.put('/recipes/recipeID/updateRecipe', async (req, res) => {
  var recipeID = req.param('recipeID')
  var recipeNew = req.param('recipeNew')

  con.query("UPDATE recipes SET recipe = ? WHERE recipeID = ?", 
  [recipeNew, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a recipe's name
router.put('/recipes/recipeID/updateRecipeName', async (req, res) => {
  var recipeID = req.param('recipeID')
  var recipeNameNew = req.param('recipeNameNew')

  con.query("UPDATE recipes SET recipeName = ? WHERE recipeID = ?", 
  [recipeNameNew, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a recipe's ingredient list
router.put('/recipes/recipeID/updateIngredientList', async (req, res) => {
  var recipeID = req.param('recipeID')
  var ingredientListNew = req.param('ingredientListNew')

  con.query("UPDATE recipes SET ingredientList = ? WHERE recipeID = ?", 
  [ingredientListNew, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a recipe's creator's name
router.put('/recipes/recipeID/updateRecipeCreator', async (req, res) => {
  var recipeID = req.param('recipeID')
  var recipeCreatorNew = req.param('recipeCreatorNew')

  con.query("UPDATE recipes SET recipeCreator = ? WHERE recipeID = ?", 
  [recipeCreatorNew, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a recipe's photo
router.put('/recipes/recipeID/updatePhotoName', async (req, res) => {
  var recipeID = req.param('recipeID')
  var recipePhotoNew = req.param('recipePhotoNew')

  con.query("UPDATE recipes SET recipePhoto = ? WHERE recipeID = ?", 
  [recipePhotoNew, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a recipe's description
router.put('/recipes/recipeID/updateRecipeDesc', async (req, res) => {
  var recipeID = req.param('recipeID')
  var recipeDescNew = req.param('recipeDescNew')

  con.query("UPDATE recipes SET recipeDesc = ? WHERE recipeID = ?", 
  [recipeDescNew, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a recipe's indcator
router.put('/recipes/recipeID/updateRecipeIndc', async (req, res) => {
  var recipeID = req.param('recipeID')
  var recipeIndcNew = req.param('recipeIndcNew')

  con.query("UPDATE recipes SET recipeIndc = ? WHERE recipeID = ?", 
  [recipeIndcNew, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a recipe's hyperlink
router.put('/recipes/recipeID/updateHyperlink', async (req, res) => {
  var recipeID = req.param('recipeID')
  var hyperlinkNew = req.param('hyperlinkNew')

  con.query("UPDATE recipes SET hyperlink = ? WHERE recipeID = ?", 
  [hyperlinkNew, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a recipe's video title
router.put('/recipes/recipeID/updateVideoTitle', async (req, res) => {
  var recipeID = req.param('recipeID')
  var videoTitleNew = req.param('videoTitleNew')

  con.query("UPDATE recipes SET videoTitle = ? WHERE recipeID = ?", 
  [videoTitleNew, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a recipe's post ID
router.put('/recipes/recipeID/updatePostID', async (req, res) => {
  var recipeID = req.param('recipeID')
  var postIDNew = req.param('postIDNew')

  con.query("UPDATE recipes SET postID = ? WHERE recipeID = ?", 
  [postIDNew, recipeID],function (err, result, fields) {
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
// Update a user's recipe
router.put('/recipes/userID/recipeID/updateRecipe', async (req, res) => {
  var userID = req.params('userID')
  var recipeID = req.param('recipeID')
  var recipeNew = req.param('postIDNew')

  con.query("UPDATE recipes SET recipe = ? WHERE userID = ? AND recipeID = ?", 
  [recipeNew, userID, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a user's recipe's name
router.put('/recipes/userID/recipeID/updateRecipeName', async (req, res) => {
  var userID = req.params('userID')
  var recipeID = req.param('recipeID')
  var recipeNameNew = req.param('recipeNameNew')

  con.query("UPDATE recipes SET recipeName = ? WHERE userID = ? AND recipeID = ?", 
  [recipeNameNew, userID, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a user's recipe's ingredient list
router.put('/recipes/userID/recipeID/updateIngredientList', async (req, res) => {
  var userID = req.params('userID')
  var recipeID = req.param('recipeID')
  var ingredientListNew = req.param('ingredientListNew')

  con.query("UPDATE recipes SET ingredientList = ? WHERE userID = ? AND recipeID = ?", 
  [ingredientListNew, userID, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a user's recipe's creator name
router.put('/recipes/userID/recipeID/updateRecipeCreator', async (req, res) => {
  var userID = req.params('userID')
  var recipeID = req.param('recipeID')
  var recipeCreatorNew = req.param('recipeCreatorNew')

  con.query("UPDATE recipes SET recipeCreator = ? WHERE userID = ? AND recipeID = ?", 
  [recipeCreatorNew, userID, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a user's recipe's photo
router.put('/recipes/userID/recipeID/updateRecipePhoto', async (req, res) => {
  var userID = req.params('userID')
  var recipeID = req.param('recipeID')
  var recipePhotoNew = req.param('recipePhotoNew')

  con.query("UPDATE recipes SET recipePhoto = ? WHERE userID = ? AND recipeID = ?", 
  [recipePhotoNew, userID, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a user's recipe's description
router.put('/recipes/userID/recipeID/updateRecipeDesc', async (req, res) => {
  var userID = req.params('userID')
  var recipeID = req.param('recipeID')
  var recipeDescNew = req.param('recipeDescNew')

  con.query("UPDATE recipes SET recipeDesc = ? WHERE userID = ? AND recipeID = ?", 
  [recipeDescNew, userID, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a user's recipe's indc
router.put('/recipes/userID/recipeID/updateRecipeIndc', async (req, res) => {
  var userID = req.params('userID')
  var recipeID = req.param('recipeID')
  var recipeIndcNew = req.param('recipeIndcNew')

  con.query("UPDATE recipes SET recipeIndc = ? WHERE userID = ? AND recipeID = ?", 
  [recipeIndcNew, userID, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a user's recipe's hyperlink
router.put('/recipes/userID/recipeID/updateHyperlink', async (req, res) => {
  var userID = req.params('userID')
  var recipeID = req.param('recipeID')
  var hyperlinkNew = req.param('hyperlinkNew')

  con.query("UPDATE recipes SET hyperlink = ? WHERE userID = ? AND recipeID = ?", 
  [hyperlinkNew, userID, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a user's recipe's video title
router.put('/recipes/userID/recipeID/updateVideoTitle', async (req, res) => {
  var userID = req.params('userID')
  var recipeID = req.param('recipeID')
  var videoTitleNew = req.param('videoTitleNew')

  con.query("UPDATE recipes SET videoTitle = ? WHERE userID = ? AND recipeID = ?", 
  [videoTitleNew, userID, recipeID],function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
// Update a user's recipe's post ID
router.put('/recipes/userID/recipeID/updatePostID', async (req, res) => {
  var userID = req.params('userID')
  var recipeID = req.param('recipeID')
  var postIDNew = req.param('postIDNew')

  con.query("UPDATE recipes SET postID = ? WHERE userID = ? AND recipeID = ?", 
  [postIDNew, userID, recipeID],function (err, result, fields) {
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