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


router.get('/users', function (req, res) {
  con.query("SELECT * FROM users", function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
router.post('/users', async (req, res) => {
  var userName = req.body.userName
  var userPass = req.body.userPass
  var userBio = req.body.userBio
  var userEmail = req.body.userEmail
  var favRecipe = req.body.favRecipe
  var history = req.body.history
  
  con.query("INSERT INTO users (userName, userPass, userBio, userEmail, favRecipe, history) VALUES (?, ?, ?, ?, ?, ?)", 
  [userName, userPass, userBio, userEmail, favRecipe, history], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
router.get('/users/:userID', function (req, res) {
var userID = req.param('userID')
con.query("SELECT * FROM users WHERE userID = ?", userID, function (err, result, fields) {
  if (err) throw err;
  res.end(JSON.stringify(result)); // Result in JSON format
});
});
router.delete('/users/:userID', async (req, res) => {
  var userID = req.body.userID
  
  con.query("DELETE FROM users WHERE userID = ? ", userID,function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); 
  });
});



router.get('/recipes', function (req, res) {
  con.query("SELECT * FROM recipes", function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
router.post('/recipes', async (req, res) => {
  var recipe = req.body.recipe
  var recipeName = req.body.recipeName
  var ingredientList = req.body.ingredientList
  var recipeCreator = req.body.recipeCreator
  var recipeDesc = req.body.recipeDesc
  var recipeIndc = req.body.recipeIndc
  var hyperlink = req.body.hyperlink
  var userID = req.body.userID
  
  con.query("INSERT INTO recipes (recipe, recipeName, ingredientList, recipeCreator, recipeDesc, recipeIndc, hyperlink, userID) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
      [recipe, recipeName, ingredientList, recipeCreator, recipeDesc, recipeIndc, hyperlink, userID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
router.get('/recipes/recipeID', function (req, res) {
var recipeID = req.param('recipeID')
con.query("SELECT * FROM recipes WHERE recipeID = ?", recipeID, function (err, result, fields) {
  if (err) throw err;
  res.end(JSON.stringify(result)); // Result in JSON format
});
});
router.delete('/recipes/recipeID', async (req, res) => {
  var recipeID = req.body.recipeID
  
  con.query("DELETE FROM recipes WHERE recipeID = ? ", recipeID,function (err, result, fields) {
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
  var recipeDesc = req.body.recipeDesc
  var recipeIndc = req.body.recipeIndc
  var hyperlink = req.body.hyperlink
  var userID = req.param('userID')
  
  con.query("INSERT INTO recipes (recipe, recipeName, ingredientList, recipeCreator, recipeDesc, recipeIndc, hyperlink, userID) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
      [recipe, recipeName, ingredientList, recipeCreator, recipeDesc, recipeIndc, hyperlink, userID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});