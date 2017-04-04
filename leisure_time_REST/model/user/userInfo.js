exports.getUserInfo = function(req, res) {
    db.collection('userInfo', function(err, collection) {
        collection.find().toArray(function(err, users) {
            if (err) {
                res.send("There was a problem getting the user information from the database.");
            } else {
                res.status(200).json(users);
            }
        });
    });
};

exports.insertUserInfo = function(req, res) {
    console.log(req.query);
    db.collection('userInfo', function(err, collection) {
        collection.insert(req.body, function(err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the user information to the database.");
            } else {
                res.status(201).json({ 'success': 'success' });
                // res.redirect("/feeds");
            }
        });
    });
};

exports.updateUserInfo = function(req, res) {
    var userFeedUpdate = req.body;
    console.log("data", userFeedUpdate);
    db.collection('userInfo', function(err, collection) {
        collection.update({
            "_id": req.body._id
        }, {
            $set: userFeedUpdate
        }, function(err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem updating the user information in the database.");
            } else {
                res.status(201).json({ 'success': 'success' });
                // res.redirect("/feeds");
            }
        });
    });
};

exports.deleteUserInfo = function(req, res) {
    db.collection('userInfo', function(err, collection) {
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