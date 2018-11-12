const friends = require("../data/friends.json");

module.exports = function(app){

    //API GET request
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });

    //API POST request
    app.post("/api/friends", function(req,res){

        console.log(req.body.scores);

        let user = req.body;

        //parses scores
        for (let i = 0; i <user.scores.length; i++){
            user.scores[i] = parseInt(user.scores[i]);
        }

        //
        let bestfriendIndex = 0;
        let minDiff = 40;

        //for loop to compare user to array of friends
        for (let i = 0; i < friends.length; i++){
            
            var totalDiff = 0;

            for (let j = 0; j < friends[i].scores.length; j++){
                let difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                //difference in score gets added to total difference
                totalDiff += difference;
            }

            //if there's a new minimum score, this sets it as the new minimum
            if (totalDiff < minDiff) {
                bestfriendIndex = i;
                minDiff = totalDiff;
            }
        }

        //adds user data to the friends array
        friends.push(newFriend);

        //returns a JSON object to browser with the user's bestMatch
        res.json(bestMatch);

    });
}

