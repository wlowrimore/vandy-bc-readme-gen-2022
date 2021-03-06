// Includes packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateReadme.js');
const writeFileAsync = util.promisify(fs.writeFile);


// Creates an array of questions for user input
function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },

    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project.'
    },

    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?'
    },
    
    { 
      type: 'link',
      name: 'usage',
      message: 'Please provide instructions and examples for use.  You may include screenshots.'
    },

    {
      type: 'checkbox',
      name: 'languages',
      message: 'What language(s) did you use to create this project?',
      choices: ['HTML', ' CSS', ' Bootstrap', ' JavaScript', ' jQuery', ' Node']
    },

    {
      type: 'list',
      name: 'license',
      message: 'Choose the license you are using',
      choices: ['MIT', ' Apache', ' Mozilla', ' GNU', ' Eclipse', ' none']
    },

    {
      type: 'input',
      name: 'contributing',
      message: 'How can users contribute to your project?'
    },

    {
      type: 'editor',
      name: 'tests',
      message: 'Please provide an example of how to test your application here.'
    },

    {
      type: 'input',
      name: 'questions',
      message: 'What if I have questions?'
    },

    {
      type: 'imput',
      name: 'name',
      message: 'What is your name?'
    },

    {
      type: 'link',
      name: 'ghusername',
      message: 'What is your github username?'
    },

    {
      type: 'link',
      name: 'email',
      message: 'What is your email address?'
    }
  ]);
}; 

// Function to initialize app
async function init() {
  try {
    const answers = await promptUser();
    const generateContent = generateReadme(answers);
    // write README.md
    await writeFileAsync('./dist/README.md', generateContent);
      console.log("Success!...Check your dist folder for your new README.md!");
  } catch(err) {
      console.log(err);
  }
}

// Function call to initialize app
init();













