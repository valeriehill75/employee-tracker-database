DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department
(
	id INT NOT NULL AUTO_INCREMENT,
	dept_name VARCHAR(30) NOT NULL,
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