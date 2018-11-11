const friends = require("../data/friends.json");

module.exports = function(app){

    //API GET request
    app.get("/api/friends", function(req,res){
        return res.json(friends);
    });

    //API POST request
    app.post("/api/friends", function(req,res){
        
        //this object holds the information of the most compatible friend at the moment
        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: 100 
        }

        //variables to store new user information from POST request
        const newFriend = req.body;
        const newName = newFriend.name;
        const newPhoto = newFriend.photo;
        const newScores = newFriend.scores;

        //this variable holds 
        let totalDifference = 0;

        //loops through the list of friends
        for (let i=0; i<friends.length; i++){
            console.log(friends[i].name);

            totalDifference = 0;

            //loops through each friend's scores
            for (var j = 0; j < friends[i].scores[j]; j++){
                totalDifference += Math.abs(parseInt(newScores[j])) - parseInt(friends[i].scores[j]);

                //if the sum of the new totalDifference is less than the current one
                if (totalDifference <= bestMatch.friendDifference){

                    //this friend becomes the bestMatch
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                } 
            }
        }

        // newFriend.routeName = newFriend.name.replace(/\s+/g,"").toLowerCase();

        console.log(newFriend);

        //adds user data to the friends array
        friends.push(newFriend);

        //returns a JSON with the user's bestMatch
        res.json(newFriend);

    });
}

