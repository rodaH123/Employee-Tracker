
const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');

//All Question Arrays
const startMenuQuestion =[
    {
        type: 'list',
        name: 'startMenuquestion',
        message: 'What would you like to do?',
        choices: [
            "show all Roles",
            "Add a Role",
            "Show all Departments",
            "Add a Department",
            "Show all Employees",
            "Add an Employee",
            "Update an Employee's role"
            ]
          }
        ]

        
    }
]

