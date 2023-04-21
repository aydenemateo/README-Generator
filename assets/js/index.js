const inquirer = require ('inquirer');
const fs = require('fs');
let licenseBadge;
let licenseName;
const generateReadme = ({title, description, installation, usage, contributions, tests, license, email, github}) => {
    return `# ${title}
    ${licenseBadge}

## Description

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributions)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributions}

## Tests

${tests}

## License

This project is licensed under the ${license} license.

## Questions

If you have any questions about this project, please contact me at 
[${email}](mailto:${email})
* GitHub: [github.com/${github}](https://github.com/${github}/)`
}

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Write a project description',
            name: "description",
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: "installation"
        },
        {
            type: 'input',
            message: 'Write usage information',
            name: "usage"
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: "contributions"
        },
        {
            type: 'input',
            message: 'What are the testing instructions?',
            name: "tests"
        },
        {
            type: 'list',
            message: 'Choose a license',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
            name: "license"
        },
        {
            type: 'input',
            message: 'GitHub username',
            name: "github"
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: "email"
        },
])

.then((answers) => {
    console.log(answers);

    fs.writeFile("README.md", generateReadme(answers), (error) => 
    {error
        ? console.log(error)
        : console.log('README.md file created!')
    })
});

if (licenseName === "Apache License 2.0") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    licenseName = "Apache License 2.0"
} else if (licenseName === "GNU General Public License v3.0") {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    licenseName = "GNU General Public License v3.0"
}