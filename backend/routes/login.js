// REGISTER  ROUTES
app.use('/LogIn', router);

//LogIn

//GET
// /SignUp/users				gets username and password associated with the username entered
router.get('/users', function (req, res) {
  var userNameEntered = req.param('userName');

  con.query("SELECT userName, userPass FROM users WHERE userName = ?", userNameEntered, function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
