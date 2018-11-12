const friends = require("../data/friends.json");

module.exports = function(app){

    //API GET request
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });

    //API POST request
    app.post("/api/friends", function(req,res){

        //variables to store new user information from POST request
        let newFriend = req.body;
        let newScores = req.body.scores;
        let scoresArray = [];
        let friendCount = 0;
        let bestMatch = 0;

        //loops through the list of friends
        for (let i=0; i<friends.length; i++){

            let scoreDiff = 0;

            //loops through each friend's scores
            for (var j = 0; j < newScores.length; j++){
                scoreDiff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(newScores));
            }    
            
            scoresArray.push(scoreDiff);
            
        }

        for (let i = 0; i < scoresArray.length; i++){
            if (scoresArray[i] <= scoresArray[bestMatch]){
                bestMatch = i;
            }
        }

        //returns a JSON object with the user's bestMatch
        res.json(bestMatch);

        //adds user data to the friends array
        friends.push(newFriend);

    });
}

