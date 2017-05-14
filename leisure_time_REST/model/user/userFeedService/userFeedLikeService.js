exports.userFeedLike = function(req, res) {
    if (authenticateReq(req, res)) {
        db.collection('userFeeds', function(err, collection) {
            var userFeedLikeData = req.body;
            collection.findOne({ 'userId': req.query.uid }, function(err, items) {
                if (err) {
                    res.send("There was a problem getting the information from the database.");
                } else {
                    for (var i in items.feeds) {
                        if (items.feeds[i].feedId == userFeedLikeData.feedId) {
                            if (userFeedLikeData.liked) {

                            } else {

                            }
                            console.log(items.feeds[i]);
                        }
                    }
                }
            });
            /*
            collection.update({ 'userId': req.query.uid }, { $push: { "feeds": userFeedData } }, function(err, doc) {
                if (err) {
                    // If it failed, return error
                    res.send("There was a problem adding the information to the database.");
                } else {
                    res.status(201).json({ 'success': 'success' });
                    // res.redirect("/feeds");
                }
            });*/
            res.status(201).json({ 'success': 'success' });
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