// function that returns a license badge based on which license is passed in
// checks if there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    // fixing the 404 error for license names with space with code Meg provide
    return `![](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`;
  } else {
    return '';
  }
}

// function that returns the license link
// checks if there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `- [License](#license)`;
  } return '';
}

// function that returns the license section of README
// checks if there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
  \n* This project is licensed under the ${license} license`;
  } return '';
}
  renderLicenseSection();


// function to generate markdown for README
function generateMarkdown(data) {
  // template literals to generate in proper README format
  // \n creates a new line
  return `# ${data.title}
  
  ## Description
  \n* This project is brought to you by ${data.username}
  \n ${data.description}
  \n ${renderLicenseBadge(data.license)}
  \n## Table of contents
  \n${renderLicenseLink(data.license)}
  \n- [Installation](#installation)
  \n- [Usage](#usage)
  \n- [Contribution](#contribution)
  \n- [Tests](#tests)
  \n- [Credits](#credits)
  \n ${renderLicenseSection(data.license)}
  \n## Installation
  \n* ${data.installation}
  \n## Usage
  \n* ${data.usage}
  \n## Contribution
  \n* ${data.contribution}
  \n## Tests
  \n* ${data.tests}
  \n## Credits
  \n ${data.credits}
`;
}

// exporting generateMarkdown for index.js file
module.exports = generateMarkdown;