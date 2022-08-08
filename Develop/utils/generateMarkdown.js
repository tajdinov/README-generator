// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None Required') {
    return '';
  } else if (license === "Apache License 2.0") {
    return `![license: Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-green)`;

} else if (license === "GNU General Public License v3.0") {
    return `![license: GNU General Public License v3.0](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-red)`

} else if (license === "MIT License") {
    return `![license: MIT](https://img.shields.io/badge/license-MIT-blue)`
}

}
renderLicenseBadge()

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None Required') {
      return '';

  } else if (license === "Apache License 2.0") {
      return `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;

  } else if (license === "GNU General Public License v3.0") {
      return `[GNU General Public License v3.0](https://opensource.org/licenses/GPL-2.0)`;

  } else if (license === "MIT License") {
      return `[MIT License](https://opensource.org/licenses/MIT)`;
  }
}
renderLicenseLink()

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents 
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#License)
    
##Description
${data.description}
    
## Installation
${data.installation}
    
## Usage 
${data.usage}
        
## Contributions
${data.contributions}
    
## Tests
${data.test}
    
## Questions 
If you have any questions please contact me either (https://github.com/${data.git}) or via email at ${data.email} 
## License 
This application is covered under ${renderLicenseLink(data.license)} 

`;
}

module.exports = generateMarkdown;
