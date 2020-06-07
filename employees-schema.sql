CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department
(
	id int NOT NULL AUTO_INCREMENT,
	employee_name varchar(30) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE roles
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(30) NOT NULL,
	salary DECIMAL (10, 4) NULL,
	department-id INT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE employee_name
(
    id INT NOT NULL AUTO_INCREMENT,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id INT NULL,
    manager_id INT NULL
);