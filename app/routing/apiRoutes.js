var express = require('express');
var router = express.Router();
var path = require('path');
var jsonfile = require('jsonfile');
var file = './app/data/friends.js';

router.get('/api/friends', function(req, res) {
    res.json(jsonfile.readFileSync(file));
})

router.post('/api/friends', function(req, res) {

    var friends = jsonfile.readFileSync(file);
    var index = findFriend(req.body, friends);
    friends.push(req.body);
    jsonfile.writeFileSync(file, friends);
    res.json({
        name: friends[index].name,
        photo: friends[index].photo,
    });
})

function scoreMatch(user, friends) {
 
}

module.exports = router;