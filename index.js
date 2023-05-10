// Required packages
const inquirer = require("inquirer");
const Prompter = require("./utils/prompter");

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
            const prompter = new Prompter();

            // Add Employee
            if (response.pickedOption === options[0]) {
               prompter.addEmployee();
            }

            // Update Employee Role
            else if (response.pickedOption === options[1]) {
                prompter.updateEmployeeRole();
            }

            // View All Roles
            else if (response.pickedOption === options[2]) {
                prompter.viewAllRoles();
            }

            // Add Role
            else if (response.pickedOption === options[3]) {
                prompter.addRole();
            }

            // View All Departments
            else if (response.pickedOption === options[4]) {
                prompter.viewAllDepartments();
            }

            // Add Department
            else if (response.pickedOption === options[5]) {
                prompter.addDepartment();
            }

            // Quit
            else {
                prompter.quit();
            }

        },
            (err) =>
                err ? console.error(err) : console.log('')
        );
}

// Function call to initialize app
init();


