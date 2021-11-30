const mysql = require('mysql');

// mysql connection
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

module.exports = pool;