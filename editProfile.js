// REGISTER  ROUTES
app.use('/EditProfile', router);

//EditProfile

//GET
// /EditProfile/Users				gets all data for user with a certain userid
router.get('/Users', function (req, res) {
  var userID = req.param('userID');

con.query("SELECT * FROM users WHERE (userID) = (?)", userID, function (err, result, fields) {
if (err) throw err;
res.end(JSON.stringify(result)); // Result in JSON format
});
});

//PUT
//update username
// /EditProfile/UserName
router.put('/UserName', async (req, res) => {
  var oldUserName = req.param('oldUserName');
  var newUserName = req.param('newUserName');
  
  con.query("UPDATE users SET userName = ? WHERE userName = ? ", [newUserName, oldUserName],function (err, 
      result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});

//update userpass
// /EditProfile/UserPass
router.put('/UserPass', async (req, res) => {
  var oldUserPass = req.param('oldUserPass');
  var newUserPass = req.param('newUserPass');
  
  con.query("UPDATE users SET userPass = ? WHERE userPass = ? ", [newUserPass, oldUserPass],function (err, 
      result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});

//update userbio
// /EditProfile/UserBio
router.put('/UserBio', async (req, res) => {
  var oldUserBio = req.param('oldUserBio');
  var newUserBio = req.param('newUserBio');
  
  con.query("UPDATE users SET userBio = ? WHERE userBio = ? ", [newUserBio, oldUserBio],function (err, 
      result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});

//update useremail
// /EditProfile/UserEmail
router.put('/UserEmail', async (req, res) => {
  var oldUserEmail = req.param('oldUserEmail');
  var newUserEmail = req.param('newUserEmail');
  
  con.query("UPDATE users SET userEmail = ? WHERE userEmail = ? ", [newUserEmail, oldUserEmail],function (err, 
      result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});

//update userphoto
// /EditProfile/UserPhoto
router.put('/UserPhoto', async (req, res) => {
  var oldUserBio = req.param('oldUserPhoto');
  var newUserBio = req.param('newUserPhoto');
  
  con.query("UPDATE users SET userPhoto = ? WHERE userPhoto = ? ", [newUserPhoto, oldUserPhoto],function (err, 
      result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result)); // Result in JSON format
  });
});