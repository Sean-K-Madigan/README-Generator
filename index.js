// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const licenses = ['MIT', 'Apache', 'BSD 3', 'BSD 2', 'ISC', 'The Unlicense', 'Zlib/libpng', 'SIL Open Font', 'BSD Zero Clause', 'Do What The F*ck You Want To Public License', 'Python Software Foundation']

// TODO: Create an array of questions for user input
const questions = [
  {
    name: 'title',
    message: 'What is the title of the project?'
  },
  {
    name: 'description',
    message: 'How would you describe your project? (goal, why, what, problem solved, what was learned)'
  },
  // Maybe insert a table of contents here??
  {
    name: 'user-story',
    message: 'What is the User Story?'
  },
  {
    name: 'live-link',
    message: 'Paste deployed link: '
  },
  {
    name: 'installation',
    message: 'What are the intstallation steps?'
  },
  {
    name: 'usage',
    message: 'How should your project be used?'
  },
  {
    name: 'screenshot',
    message: 'Insert application screenshot file path: '
  },
  {
    name: 'credits',
    message: 'Who contributed to this project?'
  },
  {
    name: 'license',
    type: 'list',
    message: 'What is your application license?',
    choices: licenses
  },
  {
    name: 'features',
    message: 'What are your applications features?'
  },
  {
    name: 'contribute',
    message: 'Is there anything specific other devs need to do to contribute? (If yes, write here, if no leave blank)'
  },
  {
    name: 'tests',
    message: 'How can other users test the application?'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
