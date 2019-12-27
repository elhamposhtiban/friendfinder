 const friendData = require("../data/friend")


module.exports = function (app) {

    app.get ("/api/friends", function (req, res){
        res.json(friendData)
    });



app.post("/api/friends", function(req, res) {

     const bestMatch = {
        name: "",
        photo: "",
        difference: 20

        };


        let newFriend = req.body;
	    let newphoto = req.body.newphoto;
	    let newName = req.body.newName;
	    let newScores = req.body.scores;


    console.log (friendData)

    for (let i=0; i<friendData.length; i++) {
        console.log(friendData[i].name);
       let totalDiff = 0;

       for (let j=0; j<friendData[i].scores.length; j++){

        totalDiff += Math.abs(friendData[i].scores[j] - newScores[j]);
        console.log("total diffrent: " + totalDiff);

        if (totalDiff < bestMatch.difference) {
            bestMatch.name = friendData[i].name;
            bestMatch.photo = friendData[i].photo;
            bestMatch.difference = totalDiff;
            console.log("bestMatch.name: " + bestMatch.name);
            console.log("bestMatch.difference: " + bestMatch.difference);
    
        }
        
       }

       console.log("bestMatch: " + bestMatch.name);
       console.log("bestMatch.photo: " + bestMatch.photo);

    }
    
    friendData.push(newFriend);
    res.json(bestMatch);
  
  }); 
}