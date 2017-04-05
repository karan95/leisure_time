exports.checkUserInfo = function(req, res) {
    db.collection('userInfo', function(err, collection) {
        let userData = req.body;
        collection.find().toArray(function(err, users) {
            if (err) {
                res.send("There was a problem in user authentication.");
            } else {
                for (let i = 0; i < users.length; i++) {
                    if (users[i].userName == userData.userName && users[i].password == userData.password) {
                        res.status(200).json(users[i]);
                    } else {
                        res.status(300).json({ "error": "error" });
                    }
                }
            }
        });
    });
};