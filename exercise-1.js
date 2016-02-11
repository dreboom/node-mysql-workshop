//Write a program that fetches all the databases in MySQL and prints them nicely on the screen.

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.IP,
  user     : process.env.C9_USER,
  password : '',
  database : 'addressbook'
});

connection.connect();

connection.query("show Databases", function(err, result) {

console.log(result);

connection.end();

});
