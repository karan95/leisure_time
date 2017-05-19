// user feed service for the like and unlike.

exports.userFeedLike = function(req, res) {
    if (authenticateReq(req, res)) {
        db.collection('userFeeds', function(err, collection) {
            var userFeedLikeData = req.body;
            userFeedLikeData.userId = req.query.uid;
            collection.findOne({ 'userId': req.query.uid }, function(err, items) {
                if (err) {
                    res.send("There was a problem getting the information from the database.");
                } else {
                    var userFeedData = {}
                    for (var i in items.feeds) {
                        if (items.feeds[i].feedId == userFeedLikeData.feedId) {
                            userFeedData = items.feeds[i];
                        }
                    }
                    collection.update({ 'userId': req.query.uid }, { $pull: { "feeds": userFeedData } }, function(err, doc) {
                        if (err) {
                            // If it failed, return error
                            res.send("There was a problem updating the information into the database.");
                        } else {
                            for (var i in userFeedData.likes) {
                                if (userFeedLikeData.userId == userFeedData.likes[i].userId) {
                                    userFeedData.likes.splice(i, 1);
                                }
                            }
                            userFeedData.likes.push(userFeedLikeData);
                            collection.update({ 'userId': req.query.uid }, { $push: { "feeds": userFeedData } }, function(err, doc) {
                                if (err) {
                                    // If it failed, return error
                                    res.send("There was a problem adding the information to the database.");
                                } else {
                                    res.status(201).json({ 'success': 'success' });
                                }
                            });
                        }
                    });
                }
            });
        });
    } else {
        res.status(400).json({ 'error': 'There was problem while authenticating user.' });
    }
};

// Authenticate user using token from Cookies
function authenticateReq(req, res) {
    var userToken = new Cookies(req, res).get('access_token');
    if (authToken) {
        if (userToken == authToken) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}