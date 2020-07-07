// Initialize Node.js package
var mysql = require("mysql");


var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
});

// Connect to MySQL server
connection.connect(function (error) {
    if (error) {
        console.error("MYSQL CONNECTION ERROR: " + error);
    }
    console.log("Connected to MySQL server.");
});

// Export connection
module.exports = connection;