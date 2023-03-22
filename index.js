// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
  },
  {
    type: 'input',
    name: 'contents',
    message: 'What would you like add to table of contents?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What would you like add to the installation section?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What would you like add to the usage section?'
  },
  {
    type: 'input',
    name: 'license',
    message: 'What would you like add to the license section?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What would you like add to the contributing section?'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'What would you like add to the questions section?'
  },
];

inquirer.prompt(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
