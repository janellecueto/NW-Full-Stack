var Student = function(name, subject, gpa){
    this.name = name;
    this.subject = subject;
    this.gpa = gpa;

    this.printInfo = function(){
        console.log("  Student name: "+this.name);
        console.log("  Favorite subject: "+this.subject);
        console.log("  Current GPA: "+this.gpa);
    }
}

module.exports = Student