// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Why did you build this project? What problem does it solve?",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "How does it work? Provide instructions and examples for its use.",
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any. Include third-part assets that require attribution.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "Apache-2.0", "BSL-1.0", "MPL-2.0", "BSD-2-Clause", "BSD-3-Clause", "none"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}


// Function call to initialize app
init();
