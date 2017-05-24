// API for getting the leisure time application Feeds

exports.getltFeeds = function(req, res) {
    if (authenticateReq(req, res)) {
        db.collection('userFeeds', function(err, collection) {
            collection.find().toArray(function(err, items) {
                if (err) {
                    res.send("There was a problem getting the information from the database.");
                } else {
                    var ltFeeds = [];
                    for (var i in items) {
                        ltFeeds.push.apply(ltFeeds, items[i].feeds);
                    }
                    res.status(200).json(ltFeeds);
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