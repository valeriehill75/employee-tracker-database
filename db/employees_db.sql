DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) UNIQUE NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE role
(
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(30) NOT NULL,
	salary DECIMAL (10, 4) NOT NULL,
	department_id INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE employee
(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES
    ("Production"),
    ("Purchasing"),
    ("Customer Service"),
    ("Shipping"),
    ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES
    ("Printer", 40000, 06),
    ("Purchaser", 45000, 05),
    ("Customer Service Rep", 35000, 04),
    ("Shipper", 20000, 03),
    ("Sales Agent", 65000, 02),
    ("Manager", 75000, 01);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Pete", "Howell", 01, 01),
    ("Jennifer", "Clarkson", 02, 01),
    ("Stephanie", "Horner", 03, 01),
    ("Deana", "McEwan", 04, NULL),
    ("Dana", "Lomsheck", 05, NULL),
    ("Ben", "Hess", 06, NULL);