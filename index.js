// team info connections
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// node modules
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// create page
const gatherInfo = path.resolve(__dirname, "output");
const sendInfo = path.join(gatherInfo, "team.html");

const render = require("./lib/Render.js");



const myTeam = [];

const confirmName = async (name) => {
    if (name === '') {
        return 'Incorrect answer';
    };
    return true;
};

const confirmNumber = async (name) => {
    if (name === '') {
        return 'Incorrect answer';
    };
    return true;
};

function validateEmail(name)

// regex to validate email format
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(name)) {
        return (true)
    }
    return ("You have entered an invalid email address!")
}



function teamMember() {

    // Save to a manager object.
    inquirer.prompt([
        {
            type: "input",
            message: "What is your manager's name?",
            name: "name",
            validate: confirmName
        },
        {
            type: "input",
            message: "What is your manager's id?",
            name: "id",
            validate: confirmNumber
        },
        {
            type: "input",
            message: "What is your manager's email?",
            name: "email",
            validate: validateEmail
        },
        {
            type: "input",
            message: "What is your manager's office number?",
            name: "officeNumber",
            validate: confirmNumber
        }
    ])

        .then(function (answers) {
            let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            myTeam.push(manager)
            chooseMemberNext()
        })
        .catch(function (err) {
            console.log(err);
        });

    // choose between engineer or intern

    async function chooseMemberNext() {
        try {

            let teamChoice = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'team',
                    message: 'Which type of team member would you like to add',
                    choices: ['Engineer', 'Intern', 'Finished']
                }
            ]);

            // loop through questions to return the member object
            if (teamChoice.team === 'Engineer') {

                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your engineer's first and last name?",
                        name: "name",
                        validate: confirmName
                    },
                    {
                        type: "input",
                        message: "What is your engineer's id?",
                        name: "id",
                        validate: confirmNumber
                    },
                    {
                        type: "input",
                        message: "What is your engineer's email?",
                        name: "email",
                        validate: validateEmail
                    },
                    {
                        type: "input",
                        message: "What is your engineer's GitHub username?",
                        name: "github",
                        validate: confirmName
                    }
                ])

                    .then(function (answers) {
                        let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                        myTeam.push(engineer);
                        chooseMemberNext();
                    })
                    .catch(function (err) {
                        console.log(err);
                    });

            } else if (teamChoice.team === 'Intern') {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your intern's name?",
                        name: "name",
                        validate: confirmName
                    },
                    {
                        type: "input",
                        message: "What is your intern's id?",
                        name: "id",
                        validate: confirmNumber
                    },
                    {
                        type: "input",
                        message: "What is your intern's email?",
                        name: "email",
                        validate: validateEmail
                    },
                    {
                        type: "input",
                        message: "What is your intern's school?",
                        name: "school",
                        validate: confirmName
                    }
                ])
                    .then(function (answers) {
                        let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        myTeam.push(intern);
                        chooseMemberNext();
                    })
                    .catch(function (err) {
                        console.log(err);
                    });

            } else { generateFile() }


        } catch (err) {
            console.log(err);
        }
    }


}

teamMember();


function generateFile() {
    fs.writeFileSync(sendInfo, render(myTeam), "utf-8")
}

