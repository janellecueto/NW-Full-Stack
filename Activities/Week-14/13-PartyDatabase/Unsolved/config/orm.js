var connection = require("./connection");
const dTable = require("console.table");

var orm = {
    selectColFromTable: function(col, table){
        //console log all party names (parties.party_name)
        //console log all client names (clients.client_name)
        var query = "SELECT ?? FROM ??";
        connection.query(query, [col, table], function(err, res){
            if(err) throw err;
            console.table(res);
        })
    },
    selectAllOfType: function(type){
        var query = "SELECT * FROM parties WHERE party_type = ?";
        connection.query(query, [type], function(err, res){
            if(err) throw err;
            console.table(res);
        })
    },
    selectClientsAndParties: function(){
        var query = "SELECT * FROM clients INNER JOIN parties ON clients.id = parties.client_id";
        connection.query(query, function(err,res){
            if(err) throw err;
            console.table(res);
        })
    },
    closeConn: function(){
        connection.end();
    }
}

module.exports = orm;