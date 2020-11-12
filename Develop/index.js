console.log('Hello node');
const inquirer = require('inquirer');

// const fs = require('fs'); 

// array of questions for user
const questions = [ 
    {
        type: 'input', 
        name: 'title', 
        message: 'What is your project title?',
    },
    { 
        type: 'input', 
        name: 'description', 
        message: 'Please enter the description for your project.',
    },
    {
        type: 'input', 
        name: 'installation', 
        message: 'Enter the installation instructions of your application.',
    }, 
    {
        type: 'input', 
        name: "usage", 
        message: 'Enter usage information for you application.', 
    }, 
    {
        type: 'input', 
        name: 'contribution', 
        message: 'Enter your contribution guidelines.'
    }, 
    {
        type: 'input', 
        name: 'tests', 
        message: 'Enter test instructions for your application.',
    }, 
    {
        type: 'checkbox', 
        name: 'license', 
        message: 'Select a license',
        choices: ['Apache', 'GNU', 'MIT', 'ISC',],
    }, 
    {
        type: 'input', 
        name: 'username', 
        message: 'What is your Github username?',
    }, 
    {
        type: 'input', 
        name: 'email', 
        message: "Enter your email address.",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    
}

// function to initialize program
function init() {
    return inquirer.prompt(questions);
}

// function call to initialize program
init().then(answers => console.log(answers));




// pseudo code 

// create array of questions to prompt the user

// capture the input from the user

// create the function that generates a readme file 

// add the input into the readme

