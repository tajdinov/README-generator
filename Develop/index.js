// Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require("./utils/generateMarkdown.js");
// An array of questions for user input

const promptUser = () => {
return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the title of this project?"
        },
        {
            type: 'input',
            name: 'description',
            message: "Provide a description for your project"  
        },
        {
            type: 'input',
            name: 'instalation',
            message: "What are the steps required to install your project?"  
        },
        {
            type: 'input',
            name: 'usage',
            message: "What are the steps required to use your project?"  
        },
        {
            type: 'input',
            name: 'contributions',
            message: "Are there any contribution guideliness that need to be followed?"  
        },
        {
            type: 'input',
            name: 'test',
            message: "Are there any instructions in regards to testing?"  
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select the licensing required for this application.',
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
    ])};


// Function to initialize and write to file
// const init = () => {
//     questions()
//     .then((data) => fs.writeFileSync('README.md', generateMarkdown(answers)))
//     .then(() => console.log("You succesfully generated the README.md"))
//     .catch((err) => console.log(err))
// };

const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('README.md', generateMarkdown(answers)))
      .then(() => console.log('You succesfully generated the README.md'))
      .catch((err) => console.error(err));
  };
  
  init();
