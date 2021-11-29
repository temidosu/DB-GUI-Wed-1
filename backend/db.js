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
  host: 'localhost',
  user: 'root',
  password: 'warwick12',
  database: 'r2rdb'
});

module.exports = pool;