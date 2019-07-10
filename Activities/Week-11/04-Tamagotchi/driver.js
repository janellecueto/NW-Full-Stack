function DigitalPal(){
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function(){
        if(this.hungry){
            console.log("That was yummy!");
        } else {
            console.log("No thanks, I'm full.");
        }
    }
    this.sleep = function(){
        if(this.sleepy){
            console.log("Zzzzzzzzz");
            this.increaseAge();
        } else {
            console.log("No way! I'm not tired.");
        }
    }
    this.play = function(){
        if(this.bored){
            console.log("Yay! Let's play!");
        } else {
            console.log("Not right now. Maybe later?");
        }
    }
    this.increaseAge = function(){
        this.age++;
        console.log("Happy Birthday to me! I'm "+this.age+" years old!");
    }
}

var dog = new DigitalPal();
dog.outside = false;
dog.bark = function(){
    console.log("Woof! Woof!");
}
dog.goOutside = function(){
    if(!this.outside){
        console.log("Yay! I love the outdoors!");
        this.outside = true;
    } else {
        console.log("We're already outside though...");
    }
}
dog.goInside = function(){
    if(this.outside){
        console.log("Do we have to? Fine...");
        this.outside = false;
    } else {
        console.log("I'm already inside...");
    }
}

var cat = new DigitalPal();
cat.houseCondition = 100;
cat.meow = function(){
    console.log("Meow! Meow!");
}
cat.destroyFurniture = function(){
    if(this.houseCondition >= 0){
        this.houseCondition -= 10;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        this.bored = false;
        this.sleepy = true;
    }
}
cat.buyNewFurniture = function(){
    this.houseCondition += 50;
    console.log("Are you sure about that?");
}

var active = true; 

var inquirer = require("inquirer");
console.log("Let's play with Danny the Dog!");
dog.bark();

    active = false;


function promptUser(){
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Eat",
                "Sleep",
                "Play",
                "Go Outside",
                "Go Inside",
                "Quit"
            ],
            name: "activity"
        }
    ]).then(function(response){
        switch(response.activity){
            case "Eat":
                dog.feed();
                break;
            case "Sleep":
                dog.sleep();
                break;
            case "Play":
                dog.play();
                break;
            case "Go Outside":
                dog.goOutside();
                break;
            case "Go Inside":
                dog.goInside();
                break;
            case "Quit":
                return false;
                break;
            default:
                dog.bark();
        }
        return true;
    });
}