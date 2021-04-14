// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

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
    }



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
