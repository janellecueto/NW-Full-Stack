var orm = require("./config/orm");

orm.selectColFromTable("party_name", "parties");

orm.selectAllOfType("grown_up");

orm.selectClientsAndParties(function(res){
    console.log(res);
});

orm.closeConn();