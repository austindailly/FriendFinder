var friendData = require('../data/friends.js');

module.exports = function (app) {
    // Grab data from friends.js
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });
    //  console.log(friendData);
    app.post("/api/friends", function (req, res) {
        var userScores = req.body;
        console.log(userScores);

        var bestScore = 999999999999999;
        var bestMatch = {};

        for (var i = 0; i < friendData.length; i++) {
            var friendScore = compareScores(userScores.scores, friendData[i].scores);

            if (friendScore < bestScore) {
                bestScore = friendScore;
                bestMatch = friendData[i]
            }
        }
        res.json(bestMatch)
    });
    function compareScores(userScores, scores) {
        var diff = 0
        for (var i = 0; i < userScores.length; i++) {
            diff += Math.abs(userScores[i] - scores[i]);
        }
        return diff
    }
};

