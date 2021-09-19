const inquirer = require('inquirer');
const { type } = require('os');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html' , pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the ouput!');
// });

inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
])
.then(answers => console.log(answers));