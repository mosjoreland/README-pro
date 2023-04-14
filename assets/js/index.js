const inquirer = require('inquirer');
const fs = require('fs');

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
      type: 'input',
      name: 'License',
      message: 'Please provide the license used to create this project, to let other developers know what they can or can not do with your project.'
    },
    {
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
  ])
  .then((answers) => {
    console.log(answers);

    fs.writeFile('README.md', JSON.stringify(answers, null, 2), (err) => {
      if (err) throw new Error();

      console.log('README file created successfully...');
    })
 })
