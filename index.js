// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Project title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Write a short description of your project. Include what motivated you to create this project, what problem it solves and what you learned.'
    },
    {
      type: 'input',
      name: 'Table of Contents',
      message: 'If your README is long, write out the sections of your README to be put into a table of contents.'
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What are the steps required to install your project?'
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Provide instructions for the use of your project.'
    },
    {
      type: 'input',
      name: 'Credits',
      message: 'List any collaborators for this project, and provide their github profile links. Also include any third-party assets that require attribution, along with links to their primary web presence. Finally, include a link to any tutorials you may have followed, if any.'
    },
    {
      // change to list
      type: 'input',
      name: 'License',
      message: 'Please provide the license used to create this project, to let other developers know what they can or can not do with your project.'
    },
    {
      // get rid of this line and add badge when choice is selected
      type: 'input',
      name: 'Badges',
      message: 'Provide a badge of your choice to be displayed on your README. Please use the following format ![badge](https url)'
    },
    {
      type: 'input',
      name: 'Features',
      message: 'If your project has a lot of features, list them here:'
    },
    {
      type: 'input',
      name: 'How to Contribute',
      message: 'Let other developers know how they can contribute to your project if you wish.'
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Go the extra mile and write tests for your application:'
    },
    // add a prompt for user to include github username to be put in the questions section
  ])
  .then((answers) => {
    console.log(answers);
    // change this to a text file while testing so you can write your own README lol
    fs.writeFile('README.md', JSON.stringify(answers, null, 2), (err) => {
      if (err) throw new Error();

      console.log('README file created successfully...');
    })
 })
