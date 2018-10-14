// 2. Create a `connection.js` file inside `config` directory.

//    * Inside the `connection.js` file, setup the code to connect Node to MySQL.

//    * Export the connection.


var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  port: 3306,
  user: "ry9b0xq9u5335jpp",
  password: "h3rkw410kzi9zg4b",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
