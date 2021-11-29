// REGISTER  ROUTES
app.use('/SignUp', router);

//Signup

//GET
// /SignUp/users
router.get('/users', function (req, res) {
	con.query("SELECT * FROM users", function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

//POST`
// /SignUp/users
router.post('/users', async (req, res) => {
	var newUserName = req.param('userName');
	var newUserPass = req.param('userPass');
	var newUserEmail = req.param('userEmail');

	con.query("INSERT INTO users (userName, userPass, userEmail)  VALUES (?, ?, ?)", [newUserName, newUserPass, newUserEmail], function (err,
		result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});
