var friendList = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendList);
    })
    app.post("/api/friends", function(req, res){
        
        //find best match
        //  req.body.scores is array of new friend
        var index = 0;
        var lowesti = 0;
        var lowest = 99;
        var curr = req.body;
        // for(friend in friendList){
        //     console.log("friend?: ",friend);
        //     var diff = 0;
        //     for(var i = 0; i < 10; i++){
        //         diff += Math.abs(parseInt(curr.scores[i])-parseInt(friend["scores"][i]));
        //     }
        //     if(diff < lowest){
        //         lowest = diff;
        //         lowesti = index;
        //     }
        //     index++;
        // }
        friendList.forEach(function(friend){
            // console.log(friend);
            // console.log(friend.scores);
            var diff = 0;
            for(var i = 0; i < 10; i++){
                diff += Math.abs(parseInt(curr.scores[i])-parseInt(friend["scores"][i]));
            }
            if(diff < lowest){
                lowest = diff;
                lowesti = index;
            }
            index++;
        })
        console.log("lowest diff:",lowest);
        friendList.push(curr);
        //return json of best match
        res.json(friendList[lowesti]);
    });
}