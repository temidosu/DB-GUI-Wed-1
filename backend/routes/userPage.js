const express = require('express');
const app = express();
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

//Connect to MySQL
var mysql = require('mysql');

//Open Connection
/*config.connect(function(err) {
	  if (err) throw err;
});*/

// create router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// REGISTER  ROUTES
app.use('/userPage', router);

router.get('/users/:userID', function (req, res) {
	var userID = req.param('userID')
	con.query("SELECT * FROM users WHERE userID = ?", userID, function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});
router.put('/users/:userID/updateUsername', async (req, res) => {
    var userID = req.param('userID')
    var userNameNew = req.param('userNameNew')

    con.query("UPDATE users SET userName = ? WHERE userID = ?", 
    [userNameNew,userID],function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});
router.put('/users/:userID/updatePassword', async (req, res) => {
    var userID = req.param('userID')
    var userPassNew = req.param('userPassNew')

    con.query("UPDATE users SET userPass = ? WHERE userID = ?", 
    [userPassNew,userID],function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});
router.put('/users/:userID/updateBio', async (req, res) => {
    var userID = req.param('userID')
    var userBioNew = req.param('userBioNew')

    con.query("UPDATE users SET userBio = ? WHERE userID = ?", 
    [userBioNew,userID],function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});
router.put('/users/:userID/updateEmail', async (req, res) => {
    var userID = req.param('userID')
    var userEmailNew = req.param('userEmailNew')

    con.query("UPDATE users SET userEmail = ? WHERE userID = ?", 
    [userEmailNew,userID],function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});
router.put('/users/:userID/updatePhoto', async (req, res) => {
    var userID = req.param('userID')
    var userPhotoNew = req.param('userPhotoNew')

    con.query("UPDATE users SET userPhoto = ? WHERE userID = ?", 
    [userPhotoNew,userID],function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});
router.put('/users/:userID/updateHistory', async (req, res) => {
    var userID = req.param('userID')
    var historyNew = req.param('historyNew')

    con.query("UPDATE users SET history = ? WHERE userID = ?", 
    [historyNew,userID],function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); // Result in JSON format
    });
});
router.delete('/users/:userID', async (req, res) => {
    var userID = req.param('userID')
    
    con.query("DELETE FROM users WHERE userID = ? ", userID,function (err, result, fields) {
        if (err) throw err;
        res.end(JSON.stringify(result)); 
    });
});

module.exports = router;