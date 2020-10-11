// Import our dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");

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

// Prompt 

function mainPrompt() {
    inquirer
        .prompt({
            name: "userSelection",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Add Department",
                "Add Roles",
                "Add Employees",
                "View Departments",
                "View Roles",
                "View Employees",
                "Update Employees",
                "Exit"
            ]
        }).then(mainPromptResponse);
};

function mainPromptResponse({ action }) {
    switch (action) {

    }
}