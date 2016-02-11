//Write a program that fetches all the accounts and their addressbooks.
//Output one line for each account as in Exercise 4, 
//followed by a listing of all the address book names for that account, one per line

var mysql = require('mysql');
var util = require("util");

var connection = mysql.createConnection({
  host     : process.env.IP,
  user     : process.env.C9_USER,
  password : '',
  database : 'addressbook'
});

connection.connect();

connection.query("SELECT * FROM Account join AddressBook on Account.id=AddressBook.accountId", function(err, rows) {
 
var accounts = rows.reduce(
    function(acc, curr) {
        var idx = acc.findIndex(function(item) {
            return item.email === curr.email;
        });

        if (idx >= 0) {
            acc[idx].books.push({
                name: curr.name
                });
        }

        else {
            acc.push({
                email: curr.email,
                books: [{
                name: curr.name
                }]
            });
        }
        return acc;
    },
[]
);
console.log(util.inspect(accounts, { depth: 10, colors: true }));
  });


connection.end();
