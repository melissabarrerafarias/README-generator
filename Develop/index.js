const inquirer = require('inquirer');

const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [ 
    {
        type: 'input', 
        name: 'title', 
        message: 'What is your project title? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true; 
            }
            else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },
    { 
        type: 'input', 
        name: 'description', 
        message: 'Please enter the description for your project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }
            else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
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
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            }
            else {
                console.log('Please insert your Github username!');
                return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'email', 
        message: "Enter your email address.",
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log('Please provide you email!');
                return false;
            }
        }
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;

        console.log("README created!");
    });
}

// function to initialize program
function init() {
    return inquirer.prompt(questions)
    .then(answers => {
        const README = generateMarkdown(answers);
        writeToFile("./README.md", README);
    })
};
// function call to initialize program
init();




// pseudo code 

// create array of questions to prompt the user (check)

// capture the input from the user

// create the function that generates a readme file 

// add the input into the readme

