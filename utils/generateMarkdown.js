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
    
## Questions?
<ul>    
    <li><a href="https://github.com/${data.GitHub}">Link to my GitHub Profile</a></li>
    <li>For additional questions, you can reach me at ${data.email}.</li>
</ul>
    `;
}
module.exports = generateMarkdown