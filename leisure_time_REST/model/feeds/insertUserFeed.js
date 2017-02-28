exports.getFeeds = function(req, res) {
    db.collection('userFeeds', function(err, collection) {
        collection.find().toArray(function(err, items) {
            if (err) {
                res.send("There was a problem getting the information from the database.");
            } else {
                res.status(200).json(items);
            }
        });
    });
};

exports.insertFeeds = function(req, res) {
    // res.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(req.query);
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
};

exports.updateFeeds = function(req, res) {
    // res.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept");
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
    // res.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(req.query);
    // var userFeedData = req.body;
    db.collection('userFeeds', function(err, collection) {
        collection.remove({ '_id': 'abc' }, true, function(err, doc) {
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