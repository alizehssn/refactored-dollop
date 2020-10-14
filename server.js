// Import our dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');


// Create/configure our MySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "@7951h511",
    database: "employee_tracker_db"
});

//Connect to the MySQL server, and call `mainPrompt()`
//when connected

connection.connect(err => {
    if (err) {
        throw err;
    }
    runEmployeeTracker();
});
// runEmployeeTracker();


// Runs application with prompts & functions for responses
function runEmployeeTracker() {
    //User Prompt
    inquirer
        .prompt({
            name: "userSelection",
            type: "rawlist",
            message: "What would you like to do?",
            loop: false,
            choices: [
                    "View All Employees",
                    "View all Departmens",
                    "View all Roles",
                    "Search Employee By Department",
                    "Search Employee By Role",
                    "Add New a Employee",
                    "Remove Employee",
                    "Add Employee Role",
                    "Add an Employee's Department",
                    "Add Department",
                    "Add a New Role",
                    "Update Employee's Role",
                    "View Employees By Manager",
                    "View Employees By Department",
                    "Exit"
                ]
                //Runs Corresponding Function for Each Choice the User Selects
        }).then(function(answer) {
            switch (answer.userSelection) {
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "View All Departments":
                    viewDept();
                    break;
                case "View All Roles":
                    viewRoles();
                case "Search Employee By Department":
                    searchDept();
                    break;
                case "Search Employee By Role":
                    viewbyRole();
                    break;
                case "Add New a Employee":
                    addEmployee();
                    break;
                case "Remove Employee":
                    rmEmployee();
                    break;
                case "Add a new Role":
                    addRole();
                    break;
                case "Add Department":
                    addDept();
                    break;
                case "Update Employee's Role":
                    updateRole();
                    break;
                case "View Employees By Manager":
                    viewEmpByMan();
                    break;
                case "View Employees By Department":
                    viewEmpByDept();
                    break;
                case "Exit":
                default:
                    console.log("End Session");
                    connection.end();
                    break;
            }
        });
}

//Prompt Response Functions:


//View Departments
function viewDept() {
    const query = "SELECT * FROM departments";
    connnection.query(query, (err, res) => {
        if (err)
            console.log(err);
        const table = cTable.getTable(res);
        console.log(table);
        runEmployeeTracker();

    })
};

//View Roles

function viewRoles() {
    const query = "SELECT * FROM roles";
    connection.query(query, (err, res) => {
        if (err) throw err;
        const table = cTable.getTable(res);
        console.log(table)
        runEmployeeTracker

    })
}

//Add A New Role To Role Table

function addRole() {
    inquirer.prompt([{
                name: "roleTitle",
                type: "input",
                message: "What is the new role's title?",
            },
            {
                name: "roleSalary",
                type: "input",
                message: "What is the new role's salary?",
            },
            {
                name: "roleDept",
                type: "input",
                message: "What is the new role's Department ID?"
            },
        ])
        .then((data) => {
            const query = "INSERT INTO roles SET ?";
            const newRole = {
                title: data.roleTitle,
                salary: data.roleSalary,
                department_id: data.roleDept
            };
            connection.query(query, newRole, (err, res) => {
                if (err) throw err;
                console.log("New Role Added!");
                runEmployeeTracker();
            })
        })
}



//Dept Functions
//Add to Dept Table
function addDept() {
    inquirer.prompt([{
                name: "addDept",
                type: "input",
                message: "Name the new Department",
            },

        ])
        .then((data) => {
            const query = "INSERT INTO departments SET ?";
            const newDept = { name: data.addDept, };
            connection.query(query, newDept, (err, res) => {
                if (err) throw err;
                console.log("newDept")
                runEmployeeTracker();
            });

        });
}

//Employee Functions

//View all Employees
function viewAllEmployees() {
    let allEmployeesArray = [];
    const query = "SELECT employee.id, first_name, last_name, title, salary, name FROM employee JOIN roles ON (employee.role_id = roles.id) JOIN departments ON (departments.id = roles.department_id)";
    connection.query(query, (err, res) => {
        if (err) {
            throw err;
            let employeeInfoArr = [];
        }
        for (var i = 0; i < res.length; i++) {
            employeeInfoArr = [];

            employeeInfoArr.push(res[i].id);
            employeeInfoArr.push(res[i].first_name);
            employeeInfoArr.push(res[i].last_name);
            employeeInfoArr.push(res[i].title);
            employeeInfoArr.push(res[i].name);

            allEmployeesArray.push(employeeInfoArr);
        }
        console.table(allEmployeesArray)
        runEmployeeTracker();
    })

};


//Add new employee
function addEmployee() {
    inquirer.prompt([{
                name: "newFirstName",
                type: "input",
                message: "What is the new employee's First Name?"
            },
            {
                name: "newLastName",
                type: "input",
                message: "What is the new employee's last name?"
            },
            {
                name: "newRoleId",
                type: "input",
                message: "What is the new employee's Role ID?"
            },
            {
                name: "newEmpID",
                type: "input",
                message: "What is the new employee's Manager-ID"
            },

        ])
        .then((data) => {
            const query = "INSERT INTO employee SET ?";
            const newEmp = {
                first_name: data.newFirstName,
                last_name: data.newLastName,
                role_id: data.newRoleId,
                manager_id: data.newEmpID
            };
            connection.query(query, newEmp, (err, res) => {
                if (err) throw err;
                console.log("New Employee Added Successfully!");
                runEmployeeTracker();

            })
        })
}

//Update employee's role
function updateRole() {
    inquirer.prompt([{
                name: "employee",
                type: "input",
                message: "Enter the employee's id whose role you would like to update"
            },
            {
                name: "newEmpRole",
                type: "input",
                message: "Enter the new Role ID"
            },
        ])
        .then((data) => {
            const query = "UPDATE employee SET ? WHERE ? ";
            const newRole = [{
                    role_id: data.newEmpRole,
                },
                {
                    id: data.employee,
                }
            ];
            connection.query(query, newRole, (err, res) => {
                if (err) throw err;
                console.log("New Role Added!");
                runEmployeeTracker;

            })
        })
}


//Employee View By Functions

function viewEmpByMan() {
    const query = `SELECT e1.id AS EMPID, e1.first_name AS FName, e1.last_name AS LName, roles.title AS Title, department.name AS Department, roles.salary AS Salary, CONCAT(e2.first_name, " ", e2.last_name) AS Manager FROM employee AS e1
    LEFT JOIN role on e1.roles_id = roles.id
    LEFT JOIN departments ON roles.department_id = departments.id
    LEFT JOIN employee AS e2 on e2.id=e1.manager_id
    ORDER BY departments ASC;`
    connection.query(query, (err, res) => {
        if (err) throw (err);
        const table = cTable.getTable(res);
        console.log(table);
        runEmployeeTracker();
    });
}

function viewEmpByDept() {
    const query = `SELECT e1.id AS EMPID, e1.first_name AS FName, e1.last_name AS LName, roles.title AS Title, departments.name AS Department, roles.salary AS Salary, CONCAT(e2.first_name, " ", e2.last_name) AS Manager FROM employee AS e1
      LEFT JOIN roles on e1.roles_id = role.id
      LEFT JOIN departments ON roles.department_id = departments.id
      LEFT JOIN employee AS e2 on e2.id=e1.manager_id
      ORDER BY department ASC;`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        const table = cTable.getTable(res);
        runEmployeeTracker()
    })
}