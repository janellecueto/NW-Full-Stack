var inquirer = require("inquirer");

var Classroom = require("./classroom.js");

var classroom = new Classroom("Prof. Sprinkles", "R420");

console.log("Sign up for ", classroom.professor, "'s class in room ", classroom.room);


function promptUser(){
    inquirer.prompt([
        {
            type: "text",
            message: "Enter Student name: ",
            name: "newStudent"
        },
        {
            type: "text",
            message: "Enter favorite subject",
            name: "favSubject"
        },
        {
            type: "text",
            message: "Enter current GPA",
            name: "gpa"
        }
    ]).then(function(response){
        classroom.addStudent(response.newStudent, response.favSubject, response.gpa);
        console.log("Welcome to ", classroom.professor, "'s class, ",response.newStudent,"!" );
        classroom.printRoster();
        inquirer.prompt([
            {
                type: "confirm",
                message: "Is there another student to sign up?",
                name: "signup"
            }
        ]).then(function(response2){
            if(response2.signup){
                promptUser();
            }
        })
    });
}

promptUser();
