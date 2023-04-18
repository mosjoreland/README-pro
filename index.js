// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'Please provide your GitHub username to add to your README:',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a short description of your project.',
    },
    {
      type: 'input',
      name: 'table of contents',
      message: 'If your README is long, write out the sections of your README to be put into a table of contents.'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions for the use of your project.'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List any collaborators for this project, and provide their github profile links.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please provide the license used to create this project.',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
      type: 'input',
      name: 'features',
      message: 'If your project has a lot of features, list them here:'
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'If you would like for contributions to be made to your project, let other developers know how they can do so.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Go the extra mile and write tests for your application:'
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) => {
//     if (err) throw err;
//     console.log('README is now being generated...');
//   }) 
// }

// function to initialize app and generate the README file
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      console.log(answers);

      fs.writeFile('README.md', generateMarkdown(answers), err => {
        if (err) console.error(err);
        
        console.log('README has been generated...');
      });
  });
  
}

init();

