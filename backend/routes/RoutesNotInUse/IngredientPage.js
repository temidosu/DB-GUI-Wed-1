const express = require("express")
const app = express.Router()
const pool = require('../db')
const path = require('path')
const fs = require('fs');
const { json } = require('body-parser');

//Open Connection
con.connect(function(err) {
	  if (err) throw err;
});

// create router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// REGISTER  ROUTES
app.use('/showIngredient', router);


//GET ALL INGREDIENTS
router.get('/view/', function (req, res) {
	con.query("SELECT * FROM ingredients", function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//GET INGREDIENT BY NAME
router.get('/view/ingreName', function (req, res) {
	var ingreName = req.param('ingreName')
	  con.query("SELECT * FROM ingredients WHERE ingredientName = ?",ingreName, function (err, result, fields) {
		  if (err) throw err;
		  res.end(JSON.stringify(result)); // Result in JSON format
	  });
  });
  
  //GET INGREDIENT BY ID
  router.get('/view/:ingreID', function (req, res) {
	var ingreID = req.param('ingreID')
	  con.query("SELECT * FROM ingredients WHERE ingredientID = ?", ingreID, function (err, result, fields) {
		  if (err) throw err;
		  res.end(JSON.stringify(result)); // Result in JSON format
	  });
  });