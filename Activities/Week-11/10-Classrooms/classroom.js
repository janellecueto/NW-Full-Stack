var Student = require("./student");

var Classroom = function(professor, room){
    this.students = [];
    this.numberOfStudents = 0;
    this.professor = professor;
    this.room = room;

    this.addStudent = function(name, subject, gpa){
        this.students.push(new Student(name, subject, gpa));
        this.numberOfStudents++;
    }

    this.printRoster = function(){
        console.log("Professor: "+this.professor);
        console.log("Room: "+this.room);
        console.log("Number of Students: "+this.numberOfStudents);
        this.students.forEach(function(s){
            s.printInfo();
        });
    }
}

module.exports = Classroom;