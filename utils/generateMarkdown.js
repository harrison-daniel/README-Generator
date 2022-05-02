// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require('fs');

function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === 'Apache 2.0') {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === 'GPLv3') {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === 'BSD 3') {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license ===  'None') {
    return ""
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return "https://opensource.org/licenses/MIT"
  } else if (license ==='Apache 2.0') {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license === 'GPLv3') {
    return "https://opensource.org/licenses/GPL-3.0"
  } else if (license === 'BSD 3') {
    return "https://opensource.org/licenses/BSD-3-Clause"
  } else if (license === 'None') {
    return ""
  }
}


// function to generate markdown for README
function generateMarkdown(answers) {
  
  return `
  # ${renderLicenseBadge(answers.license)}

  # ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)
  - [License] (#license)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contribution
  ${answers.contribution}

  ## Tests
  ${answers.test}

  ## Questions
  Github: github.com/${answers.username}  
  For any questions, feel free to reach out to me at ${answers.email}

  ## License
  ${renderLicenseLink(answers.license)}

`;
}

module.exports = generateMarkdown;
