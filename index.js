// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the project description?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage for your project?'
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidelines to your project?'
    },
    {
      type: 'input',
      name: 'test',
      message: 'What test instructions does your project have?'
    },
    {
      type: '',
      name: 'license',
      message: 'Please select the license used for this project'
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username for this project?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    }
  ])
  .then(answers => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
