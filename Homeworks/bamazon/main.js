var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "janelle",
    password: "password",
    database: "playlistDB"
  });
  
//   connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId);
//     //TODO:
    
//   });

function promptUser(){
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["POST AN ITEM", "BID ON AN ITEM"],
            name: "choice"
        }
    ]).then(function(response){
        if(response.choice == "POST AN ITEM"){
            //prompt user for things to enter 
            postItem();
        } else if(response.choice == "BID ON AN ITEM"){
            //display items, allow user to select item
            console.log("bid!")
        }
    })
}

function postItem(){
    inquirer.prompt([
        {
            type: "text",
            message: "Item name: ",
            name: "name",
            validate: function(input){
                return input !== "";
            }
        },
        {
            type: "text",
            message: "Item Description",
            name: "description"
        },
        {
            type: "text",
            message: "Starting Price (USD)",
            name: "price",
            validate: function(input){
                var reg = /^\d+$/;
                return reg.test(input) || "Price should a numerical value rounded to the nearest whole dollar";
            }
        }
    ]).then(function(response){
        console.log(response.name);
        console.log(response.description);
        console.log(response.price);
        connection.connect(function(err){
            if(err) throw err;

        })
    });
}

function insertItem(name, description, price, user){
    connection.query("INSERT INTO items (`name`, description, price, `user`) "+
    "VALUES ('" + name + "', '"+description+","+price+"'"+user+"'", 
    function(err,res){
        
    });
}

promptUser();


