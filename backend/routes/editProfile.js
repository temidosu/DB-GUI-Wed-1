// REGISTER  ROUTES
app.use('/EditProfile', router);

//EditProfile

//GET
// /EditProfile/users				gets all data for user with a certain userid
router.get('/users', function (req, res) {
  var userID = req.param('userID');

con.query("SELECT * FROM users WHERE (userID) = (?)", userID, function (err, result, fields) {
if (err) throw err;
res.end(JSON.stringify(result)); // Result in JSON format
});
});

//PUT
// /EditProfile/users
router.put('/users', async (req, res) => {
  var oldUserName = req.param('oldUserName');
  var newUserName = req.param('newUserName');
  
  con.query("UPDATE users SET userName = ? WHERE userName = ? ", [newUserName, oldUserName],function (err, 
      result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});
