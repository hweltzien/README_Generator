//Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
by ${data.name}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
    
## Description
    ${data.description}

## Installation
    ${data.installation}
    
## Usage
    ${data.usage}
    
## Credits
    ${data.credits}

## License
    ${data.license}
    
    `;
}
module.exports = generateMarkdown