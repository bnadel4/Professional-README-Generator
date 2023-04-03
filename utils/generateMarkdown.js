function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else if (license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU General Public License v3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
}

function generateMarkdown(data) {
  return ` ${renderLicenseBadge(data.license)}
  # ${data.title}
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Description
    ${data.description}
## Installation 
    ${data.installation}
## Usage
    ${data.usage}
## License
    ${data.license}
## Contributing
    ${data.contributing}
## Tests
## Questions
    ${data.questions}

`;
}

export default generateMarkdown;

