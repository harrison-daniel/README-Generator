// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// const questions = [];

const promptUser = () => {

    return inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project? (Requried)',
          validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter a title for your project!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'What is the project description?',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter a description for your project!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'installation',
          message: 'What are the installation instructions for your project?',
          validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('Please enter the installation instructions for your project!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'usage',
          message: 'What is the usage for your project?',
          validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please enter the usage for your project!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'contribution',
          message: 'What are the contribution guidelines to your project?',
          validate: contributionInput => {
            if (contributionInput) {
              return true;
            } else {
              console.log('Please enter the contribution guidelines for your project!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'test',
          message: 'What test instructions does your project have?',
          validate: testInput => {
            if (testInput) {
              return true;
            } else {
              console.log('Please enter your project test instruction!');
              return false;
            }
          }
        },
        {
          type: 'checkbox',
          name: 'license',
          message: 'Please choose all licenses that apply for this project',
          choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3', 'None']
        },
        {
          type: 'input',
          name: 'username',
          message: 'What is your Github username?',
          validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your GitHub username!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?',
          validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your email address!');
              return false;
            }
          }
        }
      ])
      .then(answers => console.log(answers));

  }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

promptUser();
