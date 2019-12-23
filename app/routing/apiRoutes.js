const friendsArray = require("../data/friend")


applicationCache.get ("/api/friends", function (req, res){
    res.json(friendsArray)
});