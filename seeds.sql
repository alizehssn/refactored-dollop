INSERT INTO departments
(name) VALUES
("Management"),
("Sales"),
("Human Resources"),
("Finance"),
("Technology"),
("Analysts"),
("Maintenance"),
("Research&devlopment"),
("Legal"),
("Marketing");


INSERT INTO roles(title, salary, department_id)
VALUES
("CFO", 150000.00, 1),
("CEO", 160000.00, 1),
("Sales Director", 100000.00, 2),
("CTO", 120000.00, 5),
("Accountant", 80000, 4),
("Human Resources Director", 90000.00, 3),
("Human Resources Consultant", 75000.00, 3),
("Research & Devlopment Analyst", 75000.00, 7),
("Developer", 60000.00, 5),
("Consultant", 70000.00, 6),
("Janitor", 20000.00, 7),
("Social Media Specialist", 30000.00,5),
("Copywriter", 30000.00, 10),
("Designer", 30000.00, 10),
("Web Developer", 45000.00, 8),
("Research Analyst", 50000.00, 8),
("Lawyer", 120000.00, 9),
("Salesperson", 40000.00, 2);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
("Harry", "Potter", 2, NULL),
("Mickey", "Mouse", 4, 1),
("John", "Snow", 5, 2),
("Arya", "Stark", 1, NULL),
("Severus", "Snape", 2, 2),
("Donald", "Duck", 4, 1),
("Edward", "Cullen", 9, NULL),
("Elizabeth", "Bennett", 10, 3),
("Jo", "March", 10, NULL),
("Hannibal", "Lecter", 7, NULL),
("Paddington", "Bear", 5, 5),
("Peppa", "Pig", 1, NULL),
("Anakin", "Skywalker", 10, 2),
("James", "Bond", 3, 3),
("Homer", "Simpson", 6, 4),
("Michael", "Meyers", 16, 5),
("Jason", "Voorhees", 17, 5),
("Freddy", "Krueger", 12, 5),
("Jack", "Torrence", 13, 5),
("Norman", "Bates", 11, NULL),
("Carrie", "White", 5, 2);