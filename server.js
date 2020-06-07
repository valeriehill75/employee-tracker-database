//set requirements
var mysql = require("mysql");
var inquirer = require("inquirer");

//create connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employees_db"
});

connection.connect(function(err) {
    if (err) throw err;
    runsearch();
})