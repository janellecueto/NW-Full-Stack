// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req,res){
    var query = "SELECT * FROM chirps";
    connection.query(query, function(err, data){
      if(err) throw err;
      res.send(data);
    })
  })


  // Add a chirp
  app.post("/api/new", function(req, res){
    var query = "INSERT INTO chirps (author, body, created_at) VALUES (?,?,?)";
    connection.query(query, [req.body.author, req.body.body, req.body.created_at], function(err, data){
      if(err) throw err;
      console.log("chirp saved!");
      res.end()
    })
  })

};
