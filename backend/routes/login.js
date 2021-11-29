var con = require('../connection')
var express = require('express');
var router = express.Router();


router.post('/api/login', (req, res) => {
	con.getConnection(res, (response) => {
		if (response.message == 'fail') return;
		response.conn.query(`SELECT * FROM users where userName = "${req.body.username}"`,
		function (err, result, fields) {
      console.log(result[0])
			if (result[0].userPass == req.body.password) {
				res.send({status: true, account: result[0]});
			} else {
				res.send({ status: false });
			}
		});
	});
});



module.exports = router;