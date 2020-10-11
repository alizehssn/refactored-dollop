DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE departments(
    id INT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee_role(
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,4) NOT NULL,
    dempartment_id INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee(
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY(id)
);

select * from departments;
SELECT * FROM  employee_role;
SELECT * FROM employee;