// Import our dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const { allowedNodeEnvironmentFlags } = require("process");

// Create/configure our MySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "@7951h511",
    database: "employee_tracker_db"
});

//Connect to the MySQL server, and call `mainPrompt()` when connected

connection.connect(err => {
    if (err) {
        throw err;
    }
    mainPrompt();
});

// Main Prompts for User Actions
function mainPrompt() {
    inquirer
        .prompt({
            name: "userSelection",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees By Department",
                "View All Employee's By Role",
                "Add New a Employee",
                "Add Employee Department",
                "Add Employee Role",
                "Add an Employee's Department",
                "Update Employee's Role",
                "Update Employee's Role",
                "Exit"
            ]
        }).then(mainPromptResponse);
};

function mainPromptResponse({ action }) {
    switch (action) {
        case "View All Employees":
            viewAllEmployees();
            break;
        case "View All Employees By Department":
            viewbyDept();
            break;
        case "View All Employee's By Role":
            viewbyRole();
            break;
        case "Add New a Employee":
            addEmployee();
            break;
        case "Add Employee Department":
            addDept();
            break;
        case "Add Employee Role":
            addEmployeeRole();
            break;
        case "Add an Employee's Department":
            addEmployeeDept();
            break;
        case "Update Employee's Role":
            updateRole();
            break;
        case "Exit":
        default:
            console.log("End Session");
            connection.end();
    }
}


//Prompt Response Functions:

//View Functions:
function viewAllEmployees() {
    connection.query("SELECT * FROM employee", (err, res) => {
        if (err) {
            throw err;
        }
        console.log(res);
        connection.end();
    })

};

function viewbyDept() {


}



//Add Functions:


//Update Functions