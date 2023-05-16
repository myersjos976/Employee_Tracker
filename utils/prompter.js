const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql2");

//TODO: Needs to by grabbed from the database
const roles = [];

//TODO: Needs to by grabbed from the database
const departments = [];

//TODO: Needs to by grabbed from the database
const managers = [];

//TODO: Needs to by grabbed from the database
const employees = [];

/*
    Creates a prompter object that has various database methods.
    Each method prompts the user for database information.
*/
class Prompter 
{
    constructor() {
        // Connect to database
        this.db = mysql.createConnection(
            {
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'employees_db'
            },
            console.log("")
        );
    }

    /* 
        Adds new employee to the database
        Prompts user for firstName, lastName, employeeRole, employeeManager 
    */
    addEmployee() 
    {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the employee's first name?",
                    name: "firstName",
                },
                {
                    type: "input",
                    message: "What is the employee's last name?",
                    name: "lastName",
                },
                {
                    type: "rawlist",
                    message: "What is the employee's role?",
                    choices: roles,
                    default: "None",
                    name: "employeeRole",
                },
                {
                    type: "rawlist",
                    message: "What is the employee's manager?",
                    choices: roles,
                    default: "None",
                    name: "employeeManager",
                },
            ])
            .then((response) => {
                console.log("We're here");
                //TODO: Add employee to the database from prompts.
                const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
                VALUES (?)`;
                const params = [response.firstName, response.lastName, response.employeeRole, response.employeeManager];

                this.db.query(sql, params, (err, result) => {
                if (err) {
                res.status(400).json({ error: err.message });
                return;
                }
                res.json({
                message: 'success',
                });
                });
    
            },
                (err) =>
                    err ? console.error(err) : console.log("Added employee to database")
            );
    }

    /* 
        Updates employee's role in the database
        Prompts user to select employee and to select new employeeRole 
    */
    updateEmployeeRole() 
    {
        inquirer
            .prompt([
                {
                    type: "rawlist",
                    message: "What is the employee's role?",
                    choices: employees,
                    default: "None",
                    name: "employee",
                },
                {
                    type: "rawlist",
                    message: "What is the employee's role?",
                    choices: roles,
                    default: "None",
                    name: "employeeRole",
                },

            ])
            .then((response) => {
//TODO: update employee's role in database from prompts.
    
            },
                (err) =>
                    err ? console.error(err) : console.log("Updated employee's role")
            );
    }

    /* 
        Displays all roles in database.
    */
    viewAllRoles() 
    {
//TODO: display all roles in database.

    }

    /* 
        Adds role to the database.
        Prompts user for roleTitle and salary. 
    */
    addRole() 
    {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the name of the role?",
                    name: "roleName",
                },
                {
                    type: "input",
                    message: "What is the salary of the role?",
                    name: "salary",
                },
                {
                    type: "rawlist",
                    message: "Which department does the role belong to?",
                    choices: departments,
                    default: "None",
                    name: "department",
                },
            ])
            .then((response) => {
//TODO: Add role to database from prompts.   
    
            },
                (err) =>
                    err ? console.error(err) : console.log("Added role to database")
            );
    }

    /* 
        Displays all departments in database. 
    */
    viewAllDepartments() 
    {
//TODO: display all departments in database.

    }

    /* 
        Adds department to the database.
        Prompts user for department name. 
    */
    addDepartment() 
    {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the name of the department?",
                    name: "department",
                },
            ])
            .then((response) => {
//TODO: Add department to database from prompts.   
    
            },
                (err) =>
                    err ? console.error(err) : console.log("Added department to database")
            );
    }

    /* 
        Ends the program. 
    */
    quit() 
    {
        prompt.ui.close()
    } 
}

module.exports = Prompter;


