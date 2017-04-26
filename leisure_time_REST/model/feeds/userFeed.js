exports.getFeeds = function(req, res) {
    if (authenticateReq(req, res)) {
        db.collection('userFeeds', function(err, collection) {
            var uid = req.query;
            collection.find().toArray(function(err, items) {
                if (err) {
                    res.send("There was a problem getting the information from the database.");
                } else {
                    res.status(200).json(items);
                }
            });
        });
    } else {
        res.status(400).json({ 'error': 'There was problem while authenticating user.' });
    }
};

exports.insertFeeds = function(req, res) {
    if (authenticateReq(req, res)) {
        db.collection('userFeeds', function(err, collection) {
            var userFeedData = req.body;
            collection.insert(userFeedData, function(err, doc) {
                if (err) {
                    // If it failed, return error
                    res.send("There was a problem adding the information to the database.");
                } else {
                    res.status(201).json({ 'success': 'success' });
                    // res.redirect("/feeds");
                }
            });
        });
    } else {
        res.status(400).json({ 'error': 'There was problem while authenticating user.' });
    }
};

exports.updateFeeds = function(req, res) {
    console.log(req.query);
    var userFeedUpdate = req.body;
    console.log("data", userFeedUpdate);
    db.collection('userFeeds', function(err, collection) {
        collection.update({
            "_id": req.body._id
        }, {
            $set: userFeedUpdate
        }, function(err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem updating the information in the database.");
            } else {
                res.status(201).json({ 'success': 'success' });
                // res.redirect("/feeds");
            }
        });
    });
};

exports.removeFeeds = function(req, res) {
    db.collection('userFeeds', function(err, collection) {
        collection.remove({ "name": req.body.name }, true, function(err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem removing the information from the database.");
            } else {
                res.status(201).json({ 'success': 'success' });
                // res.redirect("/feeds");
            }
        });
    });
};

// Authenticate user using token from Cookies
function authenticateReq(req, res) {
    var userToken = new Cookies(req, res).get('access_token');
    if (userToken == authToken) {
        return true;
    } else {
        return false;
    }
}