const mysql = require('mysql');


var connection = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "warwick12",
    database: "r2rdb",
    port: "8000"
  })
  
  
function getConnection(res, callback) {
    connection.getConnection((err, conn) => {
      if (err) {
        console.error(e.code);
        res.status(500).json({message: 'Something went wrong'});
        callback({message: 'fail'});
      }
      callback({conn, message: 'succeed'});
      conn.release();
    });
  }

module.exports = {
    getConnection
};