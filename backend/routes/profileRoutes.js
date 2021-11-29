var con = require('../connection')
var express = require('express');
var router = express.Router();



router.get('/api/users/:userId', async (req, res) => {
	con.getConnection(res, (response) => {
		if (response.message == 'fail') return;
		response.conn.query(`SELECT * FROM users where userID = "${req.params.userId}"`,
		function (err, result, fields) {
			res.send(result);
		});
	});
});


router.get('/api/users', async (req, res) => {
	con.getConnection(res, (response) => {
		if (response.message == 'fail') return;
		response.conn.query("SELECT * FROM users", function (err, result, fields) {
			res.send(JSON.stringify(result));
		});
	});
});



module.exports = router;