var mysql = require("mysql");
var inquirer = require("inquirer");
var node = require("node");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employees_db"
});