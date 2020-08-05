const mysql = require("mysql");
const util = require("util");

//create connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employees_db"
});

connection.connect(function(err) {
    if (err) throw err;

});

connection.query = util.promisify(connection.query);

module.exports = connection;