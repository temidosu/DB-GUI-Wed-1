const mysql = require('mysql');

// mysql connection
<<<<<<< HEAD
/*var pool = mysql.createPool({
	host: process.env.MYSQL_CLOUD_HOST,
	user: process.env.MYSQL_CLOUD_USER,
	password: process.env.MYSQL_CLOUD_PASS,
	port: process.env.MYSQL_PORT,
	database: process.env.MYSQL_DB
});*/

 var pool = mysql.createPool({
 	host: 'dbdb.coz7ukfx1bzs.us-east-2.rds.amazonaws.com',
 	user: 'admin',
 	password: 'SSXSTAqZKwh9pApYhNMh',
 	database: 'r2rdb',
	port: 3306,
  });

=======
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

>>>>>>> 52b5dae7f0c9b3c15f37dcb5cdc6b9d1b961754f
module.exports = pool;