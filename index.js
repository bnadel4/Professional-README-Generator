const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown').default;

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What would you like to add to the description section?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What would you like to add to the installation section?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What would you like to add to the usage section?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select the license chosen for the repo.',
    choices: [
      'None',
      'Apache License 2.0',
      'GNU General Public License v3.0',
      'MIT License',
    ],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What would you like to add to the contributing section?'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'What would you like to add to the questions section?'
  },
];

inquirer.prompt(questions)
.then((answers) => {
  const readme = generateMarkdown(answers);
  fs.writeFile('README.md', readme, (err) => {
    if (err) throw err;
    console.log('Answers saved to README.md');
  });
});