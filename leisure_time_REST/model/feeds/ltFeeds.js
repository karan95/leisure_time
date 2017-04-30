// API for getting the leisure time application Feeds

exports.getltFeeds = function(req, res) {
    db.collection('ltAppFeeds', function(err, collection) {
        var uid = req.query;
        collection.find({
            'userId': uid.uid
        }).toArray(function(err, items) {
            if (err) {
                res.send("There was a problem getting the information from the database.");
            } else {
                var userToken = new Cookies(req, res).get('access_token');
                // Authenticate user using token from Cookies
                if (userToken == authToken) {
                    res.status(200).json(items);
                } else {
                    res.status(400).json({});
                    // res.redirect('http://localhost:4200/login');
                }
            }
        });
    });
};