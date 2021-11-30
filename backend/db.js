const mysql = require('mysql');

// mysql connection
var pool = mysql.createPool({
	// host: process.env.MYSQL_CLOUD_HOST,
	// user: process.env.MYSQL_CLOUD_USER,
	// password: process.env.MYSQL_CLOUD_PASS,
	// port: process.env.MYSQL_PORT,
	// database: process.env.MYSQL_DB
	host: 'dbdb.coz7ukfx1bzs.us-east-2.rds.amazonaws.com',
	user: 'admin',
	password: 'SSXSTAqZKwh9pApYhNMh',
	port: 3306,
	database: 'r2rdb'
});

module.exports = pool;