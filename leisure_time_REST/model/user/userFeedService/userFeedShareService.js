// user feed service for the sharing.

exports.userFeedShare = function(req, res) {
    if (authenticateReq(req, res)) {
        db.collection('userFeeds', function(err, collection) {
            var userFeedData = req.body;
            userFeedData.userId = req.query.uid;
            collection.update({ 'userId': req.query.uid }, { $push: { "feeds": userFeedData } }, function(err, doc) {
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