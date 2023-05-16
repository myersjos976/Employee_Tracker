// Required packages
const inquirer = require("inquirer");
const Prompter = require("./utils/prompter");
const mysql = require("mysql2");

// Array of options for user to pick from.
const options = [
    "Add Employee",
    "Update Employee Role",
    "View All Roles",
    "Add Role",
    "View All Departments",
    "Add Department",
    "Quit"
];

/*
 Intializes Employee Manager
 Uses Prompter to carry out db functions.
*/
function init() 
{
    console.log("Welcome to the Employee Manager!");
    
    inquirer
        .prompt(
            {
                type: "rawlist",
                message: "What would you like to do?",
                choices: options,
                default: "None",
                name: "pickedOption",
            }
        )
        .then((response) => {
            let userResponse = response.pickedOption;
            console.log(userResponse);
            const prompter = new Prompter();
            
            // Add Employee
            console.log(options[0]);
            if (userResponse === options[0]) {
                prompter.addEmployee();
            }
    
            // Update Employee Role
            else if (userResponse === options[1]) {
                prompter.updateEmployeeRole();
            }
    
            // View All Roles
            else if (userResponse === options[2]) {
                prompter.viewAllRoles();
            }
    
            // Add Role
            else if (userResponse === options[3]) {
                prompter.addRole();
            }
    
            // View All Departments
            else if (userResponse === options[4]) {
                prompter.viewAllDepartments();
            }
    
            // Add Department
            else if (userResponse === options[5]) {
                prompter.addDepartment();
            }
    
            // Quit
            // else {
            //     prompter.quit();
            // }
        },
            (err) =>
                err ? console.error(err) : console.log('')
        );


}

// Function call to initialize app
init();


