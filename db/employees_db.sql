DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department
(
	id INT NOT NULL AUTO_INCREMENT,
	dept_name VARCHAR(30) UNIQUE NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE roles
(
	roles_id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(30) NOT NULL,
	salary DECIMAL (10, 4) NOT NULL,
	department_id INT NOT NULL,
	PRIMARY KEY (roles_id)
);

CREATE TABLE employee
(
    name_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (name_id)
);

INSERT INTO department (dept_name)
VALUES
    ("Production"),
    ("Purchasing"),
    ("Customer Service"),
    ("Shipping"),
    ("Sales");

INSERT INTO roles (title, salary, roles_id)
VALUES
    ("Printer", 40000, 06),
    ("Purchaser", 45000, 05),
    ("Customer Service Rep", 35000, 04),
    ("Shipper", 20000, 03),
    ("Sales Agent", 65000, 02),
    ("Manager", 75000, 01);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Pete", "Howell", 06, 01),
    ("Jennifer", "Clarkson", 04, 01),
    ("Stephanie", "Horner", 05, 01),
    ("Deana", "McEwan", 03, NULL),
    ("Dana", "Lomsheck", 02, NULL),
    ("Ben", "Hess", 01, NULL);