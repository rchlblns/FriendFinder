const friends = require("../data/friends.json");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        return res.json(friends);
    });

    app.post("/api/friends", function(req,res){
        
        const newFriend = req.body;

        newFriend.routeName = newFriend.name.replace(/\s+/g,"").toLowerCase();

        console.log(newFriend);

        friends.push(newFriend);

    });
}

