// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your projects title?',
    },{
        type: 'input',
        name: 'description',
        message: 'What would you like for your project description?'
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
        choices: [ 'Apache2.0', 'GPL3.0', 'MIT', 'none' ]
    },{
        type: 'input',
        name: 'gitHub',
        message: 'What is your github?'
    },{
        type: 'input',
        name: 'linkedIn',
        message: 'What is your linkedIn?'
    }
];

const writeToFile = util.promisify(fs.writeFile);

const init = async () => {
    try{
        const answers = inquirer.prompt(questions);
        await writeToFile('README.md', generateMarkdown(answers))
        console.log(`Successfully generated README file`)
    } catch (err) {
        console.error(err)
    }
    console.log(`Completed`)
};

// Function call to initialize app
init();

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// create writeFile function using promises instead of a callback function

// Bonus using writeFileAsync as a promise


// init();