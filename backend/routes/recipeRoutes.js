var con = require('../connection')
var express = require('express');
var router = express.Router();


router.get('/api/recipes/:recipeId', async (req, res) => {
	con.getConnection(res, (response) => {
		if (response.message == 'fail') return;
		response.conn.query(`SELECT * FROM recipes where recipeID = "${req.params.recipeId}"`,
		function (err, result, fields) {
			res.send(result);
		});
	});
});


module.exports = router;