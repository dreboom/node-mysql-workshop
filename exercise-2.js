//Write a program that fetches the first 5 accounts in the addressbook database
//For each account, console.log a line with the account’s ID and email, like this: #1:email@domain.com
//Use the colors NPM module with the .bold option to achieve this effect

var colors = require('colors');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.IP,
  user     : process.env.C9_USER,
  password : '',
  database : 'addressbook'
});

connection.connect();

connection.query("SELECT * FROM Account limit 5", function(err, rows, fields) {
  
  rows.forEach(function(row) {
    console.log(('#' + row.id).bold + ': ' + row.email);
  });

    connection.end();
    
});
