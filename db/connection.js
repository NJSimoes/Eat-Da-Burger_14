var mysql = require("mysql");

var connection;

if (process.env.JAWS_URL) {

    connection = mysql.createConnection(process.env.JAWS_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgers_db',
    });
};

connection.connect();
module.exports = connection;
