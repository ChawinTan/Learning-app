
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'learning_app'
});

connection.connect((err) => {
  console.log('connecting to sql ....')
  if (err) console.log(err.message)
  else {
    console.log('successfully connected to mysql');
  }
});

module.exports = connection;

/**
 * TODO:
 * 
 * update readme with the following instructions to enable connection to mysql container:
 * 
 * ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
 * flush privileges;
 * 
 * If that doesn't work, try it without @'localhost' part.
 */
