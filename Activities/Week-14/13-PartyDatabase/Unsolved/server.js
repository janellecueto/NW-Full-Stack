var orm = require("./config/orm");

orm.selectColFromTable("party_name", "parties");

orm.selectAllOfType("grown_up");

orm.selectClientsAndParties();

orm.closeConn();