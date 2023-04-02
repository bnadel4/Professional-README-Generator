const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
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
    name: 'contribution',
    message: 'What would you like add to the contribution section?'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'What would you like add to the questions section?'
  },
];

inquirer.prompt(questions)
.then((answers) => {
  console.log('answers', answers);
  const readme = generateMarkdown(answers);
  fs.writeFile('README.md', readme, (err) => {
    if (err) throw err;
    console.log('Answers saved to README.md');
  });
});



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

