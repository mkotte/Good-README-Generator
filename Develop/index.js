// Packages 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

// writeFile function using promises
const writeFileAsync = util.promisify(fs.writeFile);

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your repos title?',
    },{
        type: 'input',
        name: 'description',
        message: 'What would you like for your project description?'
    },{
        type: 'list',
        name: 'screenshot',
        message: 'Would you like to add a section for screenshots to use later on?',
        choices: [ 'Yes', 'No' ]
    },{
        type: 'input',
        name: 'installationInstructions',
        message: 'What would you like for your installation instructions?'
    },{
        type: 'input',
        name: 'usageInformation',
        message: 'What would you like for your usage information?'
    },{
        type: 'input',
        name: 'contributionGuidelines',
        message: 'What would you like for your contribution guidelines?'
    },{
        type: 'input',
        name: 'testInstructions',
        message: 'What would you like for your test instructions?'
    },{
        type: 'list',
        name: 'license',
        message: 'What would you like to use for your license?',
        choices: [ 'Apache2.0', 'GPL3.0', 'MIT', 'None' ]
    },{
        type: 'input',
        name: 'gitHub',
        message: 'What is your github username?'
    },{
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

const promptUser = () => {
    return inquirer.prompt(questions)
};


// function to initialize app + write README file
const init = () => {
    promptUser()
        .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
        .then(() => console.log('Successfully generated README.md'))
        .catch((err) => console.log(err));
};

init();


