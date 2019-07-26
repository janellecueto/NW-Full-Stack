var connection = require("./connection");
const dTable = require("console.table");

var orm = {
    selectWhere: function(table, col, val){
        var query = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(query, [table, col, val], function(err, res){
            if(err) throw err;
            console.table(res);
        })
    }
}

module.exports = orm;