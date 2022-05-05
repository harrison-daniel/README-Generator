// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require('fs');

function renderLicenseBadge(answers) {
  const badgeSelection = answers.license[0];
  if (badgeSelection === 'MIT') {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  } else if (badgeSelection === 'Apache 2.0') {
    return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
  } else if (badgeSelection === 'GPLv3') {
    return "[![License: GPLv3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]"
  } else if (badgeSelection === 'BSD 3') {
    return "[![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]"
  } else if (badgeSelection ===  'None') {
    return ""
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  const linkSelection = answers.license[0];
  if (linkSelection === 'MIT') {
    return "[This application is covered under the MIT license. Click here for more information.](https://opensource.org/licenses/MIT)"
  } else if (linkSelection ==='Apache 2.0') {
    return "[This application is covered under the Apache 2.0 license. Click here for more information](https://opensource.org/licenses/Apache-2.0)"
  } else if (linkSelection === 'GPLv3') {
    return "[This application is covered under the GPLv3 license. Click here for more information.](https://opensource.org/licenses/GPL-3.0)"
  } else if (linkSelection === 'BSD 3') {
    return "[This application is covered under the BSD 3 license. Click here for more information](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (linkSelection === 'None') {
    return "This application is not covered under any license"
  }
}


// function to generate markdown for README
function generateMarkdown(answers) {
  
  return `

  # ${renderLicenseBadge(answers)}

  # ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)
  - [License](#license)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contribution
  ${answers.contribution}

  ## Tests
  ${answers.test}

  ## Questions
    
  For any questions, feel free to reach out to me at ${answers.email} 

  Github: github.com/${answers.username}

  ## License
  ${renderLicenseLink(answers)}

`
}


module.exports = generateMarkdown;
