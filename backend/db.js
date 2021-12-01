const mysql = require('mysql');

// mysql connection
var pool = mysql.createPool({
	host: 'dbdb.coz7ukfx1bzs.us-east-2.rds.amazonaws.com',
	user: 'admin',
	password: 'SSXSTAqZKwh9pApYhNMh',
	port: 3306,
	database: 'r2rdb'
});

module.exports = pool;