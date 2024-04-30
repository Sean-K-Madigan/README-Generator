// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const licenses = ['N/A', 'MIT', 'Apache', 'BSD 3', 'BSD 2', 'ISC', 'The Unlicense', 'Zlib/libpng', 'SIL Open Font', 'Do What The F*ck You Want To Public License']

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?',
    // validate inputs to ensure no blank feilds
    validate: (value) => {if (value){return true} else {return 'Please answer to continue.'}},
  },
  {
    type: 'input',
    name: 'description',
    message: 'How would you describe your project? (goal, why, what, problem solved, what was learned)',
    validate: (value) => {if (value){return true} else {return 'Please answer to continue.'}},
  },
  // Maybe insert a table of contents here??
  {
    type: 'input',
    name: 'userAS',
    message: 'What is the User Story?  AS A ...',
    validate: (value) => {if (value){return true} else {return 'Please answer to continue.'}},
  },
  {
    type: 'input',
    name: 'userI',
    message: 'I WANT ...',
    validate: (value) => {if (value){return true} else {return 'Please answer to continue.'}},
  },
  {
    type: 'input',
    name: 'userSO',
    message: 'SO THAT I ...',
    validate: (value) => {if (value){return true} else {return 'Please answer to continue.'}},
  },
  {
    type: 'input',
    name: 'link',
    message: 'Paste deployed link: ',
    validate: (value) => {if (value){return true} else {return 'Please answer to continue.'}},
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the intstallation steps?',
    validate: (value) => {if (value){return true} else {return 'Please answer to continue.'}},
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should your project be used?',
    validate: (value) => {if (value){return true} else {return 'Please answer to continue.'}},
  },
  {
    type: 'input',
    name: 'screenshot',
    message: 'Insert application screenshot file path: ',
    validate: (value) => {if (value){return true} else {return 'Please answer to continue.'}},
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Who contributed to this project?',
    validate: (value) => {if (value){return true} else {return 'Please answer to continue.'}},
  },
  {
    type: 'list',
    name: 'license',
    message: 'What is your application license?',
    choices: licenses,
    validate: (value) => {if (value){return true} else {return 'Please answer to continue.'}},
  },
  {
    type: 'input',
    name: 'features',
    message: 'What are your applications features?',
    validate: (value) => {if (value){return true} else {return 'Please answer to continue.'}},
  },
  {
    type: 'input',
    name: 'git',
    message: 'What is your GitHub username?',
    validate: (value) => {if (value){return true} else {return 'Please answer to continue.'}},
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    validate: (value) => {if (value){return true} else {return 'Please answer to continue.'}},
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Is there anything specific other devs need to do to contribute? (If yes, write here, if no leave blank)',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can other users test the application?',
    validate: (value) => {if (value){return true} else {return 'Please answer to continue.'}},
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  inquirer.prompt(questions).then((data) => {
    fs.writeFile('./Output/README.md', generateMarkdown(data), (err) => err ? console.error(err) : console.log('Success!'))
  });
};

// TODO: Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();
