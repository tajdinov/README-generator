// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");
// An array of questions for user input
const questions = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'title',
        messsage: "What is the title of this project?"
    },
    {
        type: 'input',
        name: 'description',
        messsage: "Provide a description for your project"  
    },
    {
        type: 'input',
        name: 'instalation',
        messsage: "What are the steps required to install your project?"  
    },
    {
        type: 'input',
        name: 'usage',
        messsage: "What are the steps required to use your project?"  
    },
    {
        type: 'input',
        name: 'contributions',
        messsage: "Are there any contribution guideliness that need to be followed?"  
    },
    {
        type: 'input',
        name: 'test',
        messsage: "Are there any instructions in regards to testing?"  
    },
    {
        type: 'input',
        name: 'license',
        messsage: 'Please select the licensing required for this application.',
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "None Required"
        ]
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email."
    },
    {
        type: "input",
        name: "git",
        message: "Please provide your GitHub Profile username."
    },
    ])
};

// Function to initialize and write to file
const init= () => {
    questions()
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log("You succesfully generated the README.md"))
    .catch((err) => console.log(err))
};

// Function call to initialize app
init();
