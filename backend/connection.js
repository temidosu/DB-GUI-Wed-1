const mysql = require('mysql');

function getConnection(res, callback) {
	console.log("Connection");
	connection.getConnection((err, conn) => {
		if (err) {
			console.error(err.code);
			res.status(500).json({ message: 'Something went wrong' });
			callback({ message: 'fail' });
		}
		callback({ conn, message: 'succeed' });
		conn.release();
	});
}

module.exports = {
	getConnection
};